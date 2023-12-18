import express from "express";
import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
import path from "path";
import { Deta } from "deta";
import argon2 from "argon2";
import { ILoginForm, IRegisterForm } from "../interfaces/interfaces";
import { send } from "process";
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// deta setup
const projectKey: string = process.env.DETA_PROJECT_KEY;
const deta = Deta(projectKey);
const auth = deta.Base("users");

const jwtSecret: string = process.env.JWT_SECRET;

const router = express.Router();


const sendMail = (to: any, subject: any, message: any) =>{
  const transporter = nodemailer.createTransport({
      service : process.env.EMAIL_SERVICE,
      auth : {
          user : process.env.EMAIL_USERNAME,
          pass : process.env.EMAIL_PASSWORD
      }
  })

  const options = {
      from : process.env.EMAIL_SENDER, 
      to, 
      subject, 
      html: message,
  }

  transporter.sendMail(options, (error, info) =>{
      if(error) console.log(error)
      else console.log(info)
  })
}

router.post("/register", async (req, res) => {
  try {
    const authFormData: IRegisterForm = req.body as IRegisterForm;

    if (!(await auth.get(authFormData.username))) {
      const passwordHash = await argon2.hash(authFormData.password);
      const auhtFormDataJson = {
        key: authFormData.username,
        password: passwordHash
      };
      const newUser = await auth.insert(auhtFormDataJson);

      const verificationCode = Math.floor(100000 + Math.random() * 900000);

      const html = `<p>Hi ${authFormData.username} <br> ${verificationCode}</p>`;

      sendMail(authFormData.email, "ok", html);

      res.status(201).json({
        username: newUser.key,
        success: true
      });
    } else {
      throw new Error("This username is invalid!");
    }
  } catch (err) {;
    res.status(503).json({ error: err.message });
  }  
});

export default router;