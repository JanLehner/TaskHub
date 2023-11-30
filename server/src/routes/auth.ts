import express from "express";
import * as dotenv from "dotenv";
import path from "path";
import { Deta } from "deta";
import argon2 from "argon2";
import { ILoginForm } from "../interfaces/interfaces";
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// deta setup
const projectKey: string = process.env.DETA_PROJECT_KEY;
const deta = Deta(projectKey);
const auth = deta.Base("users");

const jwtSecret: string = process.env.JWT_SECRET;

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const authFormData: ILoginForm = req.body as ILoginForm;

    if (!(await auth.get(authFormData.username))) {
      const passwordHash = await argon2.hash(authFormData.password);
      const auhtFormDataJson = {
        key: authFormData.username,
        password: passwordHash
      };
      const newUser = await auth.insert(auhtFormDataJson);

      res.status(201).json({
        username: newUser.key,
        success: true
      });
    } else {
      throw new Error("This username is invalid!");
    }
  } catch (err) {
    res.status(503).json({ error: err.message });
  }
});

export default router;