import express from "express";
import * as dotenv from "dotenv";
import path from "path";
import { Deta } from "deta";
import argon2 from "argon2";
import { ILoginForm, IRegisterForm } from "../interfaces/interfaces";
import jwt from "jsonwebtoken";
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// deta setup
const projectKey: string = process.env.DETA_PROJECT_KEY;
const deta = Deta(projectKey);
const auth = deta.Base("users");

const jwtSecret: string = process.env.JWT_SECRET;

const router = express.Router();


router.post("/register", async (req, res) => {
  try {
    const registrationFormData: IRegisterForm = req.body as IRegisterForm;

    if (registrationFormData.username == null || registrationFormData.password == null || registrationFormData.username == "" || registrationFormData.password == "") {
      throw new Error("Invalid Request");
    }
    if (!(await auth.get(registrationFormData.username))) {
      const passwordHash = await argon2.hash(registrationFormData.password);
      const auhtFormDataJson = {
        key: registrationFormData.username,
        password: passwordHash
      };
      const newUser = await auth.insert(auhtFormDataJson);

      res.status(201).json({
        username: newUser.key,
        success: true
      });
    } else {
      throw new Error("Failed to register user!");
    }
  } catch (err) {
    res.status(503).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const loginFormData: ILoginForm = req.body as ILoginForm;

    if (loginFormData.username == null || loginFormData.password == null || loginFormData.username == "" || loginFormData.password == "") {
      throw new Error("Invalid Request");
    }

    const user = await auth.get(loginFormData.username);
    if (user === null) {
      throw new Error("Wrong credentials! Please try again.");
    }

    const password = user.password as string;

    if (await argon2.verify(password, loginFormData.password)) {
      const token = jwt.sign({ username: user.key }, jwtSecret, { expiresIn: "21600s" });
      res.status(200).json({ token, success: true });
    } else {
      res.status(401).json({
        error: "Wrong credentials! Please try again.",
        success: false
      });
    }
  } catch (err) {
    res.status(503).json({ error: err.message });
  }
});



export default router;