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

router.post("/create/:board", async (req, res) => {
  try {
    const taskDataSet: ITask = req.body as ITask;
    const key = taskDataSet.title.trim() + taskDataSet.owner.trim();
    const boardTitle = req.params.board;
    if (!taskDataSet.title || !taskDataSet.owner ) {
      throw new Error("Both 'title' and 'owner' are required fields.");
    }

    const taskDataSetJSON = {
      title: taskDataSet.title,
      description: taskDataSet.description,
      dueDate: taskDataSet.dueDate,
      owner: taskDataSet.owner
    };

    const existing =  await boardSets.get(boardTitle);
    const currentTasks = existing.tasks;
    (currentTasks as any[]).push(taskDataSetJSON);

    await boardSets.delete(boardTitle);
    const newtaskDataSet = await boardSets.insert(existing);
    res.status(201).json({
      title: taskDataSet.title,
      description: taskDataSet.description,
      dueDate: taskDataSet.dueDate,
      owner: taskDataSet.owner,
      success: true
    });
  } catch (err) {
    res.status(503).json({ error: err.message });
  }
});


export default router;
