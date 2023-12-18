import express from "express";
import * as dotenv from "dotenv";
import path from "path";
import { Deta } from "deta";
import { ITask, IBoard } from "../interfaces/interfaces";
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// deta setup
const projectKey: string = process.env.DETA_PROJECT_KEY;
const deta = Deta(projectKey);
const boardSets = deta.Base("board");

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const boardDataSet: IBoard = req.body as IBoard;
    if (typeof boardDataSet.title !== "string" || typeof boardDataSet.owner !== "string") {
      throw new Error("Invalid 'title' or 'owner' in the request.");
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
      tasks: tasks
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

export default router;
