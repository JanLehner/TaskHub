import express from "express";
import * as dotenv from "dotenv";
import path from "path";
import { Deta } from "deta";
import argon2 from "argon2";
import { IRegisterForm } from "../interfaces/interfaces";
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



export default router;