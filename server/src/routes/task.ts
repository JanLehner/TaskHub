import express from "express";
import * as dotenv from "dotenv";
import path from "path";
import { Deta } from "deta";
import { ITask, IBoard } from "../interfaces/interfaces";
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// deta setup
const projectKey: string = process.env.DETA_PROJECT_KEY;
const deta = Deta(projectKey);
const taskSets = deta.Base("tasks");
const boardSets = deta.Base("board");

const router = express.Router();

router.post("/create/:board", async (req, res) => {
  try {
    const taskDataSet: ITask = req.body as ITask;
    const key = taskDataSet.title.trim() + taskDataSet.owner.trim();
    const boardTitle = req.params.board;
    if (!taskDataSet.title || !taskDataSet.owner) {
      throw new Error("Both 'title' and 'owner' are required fields.");
    }

    const existingTask = await taskSets.get(key);
    const existingBoard = await taskSets.get(boardTitle);

    if (existingTask) {
      throw new Error("This task name exists already. Please try to edit this!");
    } else if (existingBoard) {
      throw new Error("The board of the to-be-created task does not exist.");
    }

    const taskDataSetJSON = {
      key: key,
      title: taskDataSet.title,
      definition: taskDataSet.definition
    };

    const newTaskDataSet = await taskSets.insert(taskDataSetJSON);

    const taskBoardArray = await boardSets.get(req.params.board);
    var updatedArray = [];
    updatedArray = Array.isArray(taskBoardArray) ? [taskDataSet, ...taskBoardArray] : [];
    const boardKey = await boardSets.get(key);
    const stringifiedKey = JSON.stringify(boardKey);
    boardSets.update(JSON.parse(JSON.stringify(updatedArray)), stringifiedKey);

    res.status(201).json({
      title: taskDataSet.title,
      definition: taskDataSet.definition
    });
  } catch (err) {
    res.status(503).json({ error: err.message });
  }
});

router.get("/get/:board/:id", async (req, res) => {
  try {
    const { id, board } = req.params;

    if (!id || !board) {
      throw new Error("Both 'id' and 'board' parameters are required.");
    }

    const fetchedtaskSets = await taskSets.fetch({ id, board });
    if (fetchedtaskSets == null) {
      res.status(409).json({
        error: "This task does not exist."
      });
      return false;
    } else {
      res.status(201).json({ fetchedtaskSets });
    }
  } catch (err) {
    res.status(503).json({ error: err.message });
  }
});

router.get("/getTaskAll/:board", async (req, res) => {
  try {
    const fetchedtaskSets = await taskSets.get(req.params.board);
    if (fetchedtaskSets == null) {
      res.status(409).json({
        error: "This task does not exist."
      });
      return false;
    } else {
      res.status(201).json({ fetchedtaskSets });
    }
  } catch (err) {
    res.status(503).json({ error: err.message });
  }
});

router.delete("/deleteTask/:board/:id", async (req, res) => {
  try {
    const { id, board } = req.params;
    if (!id || !board) {
      throw new Error("Both 'id' and 'board' parameters are required.");
    }
    const fetchedtaskSets = await taskSets.fetch({ id, board });
    if (fetchedtaskSets != null) {
      await taskSets.delete(id);
      res.status(200).json({ message: "Deleted task", id: req.params.id, sucess: true });
    } else {
      res.status(409).json({
        error: "This task does not exist."
      });
      return false;
    }
  } catch (err) {
    res.status(503).json({ error: err.message });
  }
});

router.post("/updateTask/:board/:id", async (req, res) => {
  try {
    const taskSetsData: ITask = req.body as ITask;
    const { id, board } = req.params;
    if (!(await taskSets.fetch({ id, board }))) {
      throw new Error("This task does not exist.");
    }

    const taskSetsDataJson = {
      title: taskSetsData.title,
      definition: taskSetsData.definition
    };

    await taskSets.insert(taskSetsDataJson);

    res.status(201).json({
      title: taskSetsData.title,
      definition: taskSetsData.definition
    });
  } catch (err) {
    res.status(503).json({ error: err.message });
  }
});

export default router;
