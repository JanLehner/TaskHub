import express from "express";
import * as dotenv from "dotenv";
import path from "path";
import { Deta } from "deta";
import argon2 from "argon2";
import { ITask, IBoard } from "../interfaces/interfaces";
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// deta setup
const projectKey: string = process.env.DETA_PROJECT_KEY;
const deta = Deta(projectKey);
const boardSets = deta.Base("board");

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    let passwordHash = "";
    const boardDataSet: IBoard = req.body as IBoard;
    if (typeof boardDataSet.title !== "string" || typeof boardDataSet.owner !== "string") {
      throw new Error("Invalid 'title' or 'owner' in the request.");
    }
    
    if (boardDataSet.public) {
      passwordHash = await argon2.hash(boardDataSet.password);
    }

    const key = boardDataSet.title.trim() + boardDataSet.owner.trim();

    if (await boardSets.get(boardDataSet.title)) {
      throw new Error("This board name exists already. Please try to edit this!");
    } else if (await boardSets.get(key)) {
      throw new Error("This task name exists already. Please try to edit this!");
    }

    const tasks: ITask[] = [];

    const boardDataSetJSON = {
      key: key,
      title: boardDataSet.title,
      owner: boardDataSet.owner,
      tasks: tasks,
      public: boardDataSet.public,
      password: passwordHash
    };

    const newtaskDataSet = await boardSets.insert(JSON.parse(JSON.stringify(boardDataSetJSON)));

    res.status(201).json({
      title: boardDataSet.title,
      owner: boardDataSet.owner
    });
  } catch (err) {
    res.status(503).json({ error: err.message });
  }
});


router.get("/getPublic", async (req, res) => {
  try {
    const fetchedBoards = await boardSets.fetch({ public: true });
    if (fetchedBoards == null) {
      res.status(409).json({
        error: "This task does not exist."
      });
      return false;
    } else {
      res.status(201).json({ fetchedBoards });
    }
  } catch (err) {
    res.status(503).json({ error: err.message });
  }
});

export default router;
