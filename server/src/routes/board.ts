import express from "express";
import * as dotenv from "dotenv";
import path from "path";
import { Deta } from "deta";
import argon2 from "argon2";
import { ITask, IBoard, IAddPublicBoard, IGetPublicBoards } from "../interfaces/interfaces";
import checkAuth from "../middleware/checkuserBody";
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// deta setup
const projectKey: string = process.env.DETA_PROJECT_KEY;
const deta = Deta(projectKey);
const boardSets = deta.Base("board");
const publicBoards = deta.Base("publicBoards");

const router = express.Router();

router.post("/create", checkAuth, async (req, res) => {
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

    const tasks: ITask[] = [];

    const boardDataSetJSON = {
      key: key,
      title: boardDataSet.title,
      owner: boardDataSet.owner,
      tasks: tasks,
      public: boardDataSet.public,
      password: passwordHash
    };

    if (await boardSets.get(key)) {
      throw new Error("This board name exists already. Please try to edit this!");
    }
    const newtaskDataSet = await boardSets.insert(JSON.parse(JSON.stringify(boardDataSetJSON)));

    res.status(201).json({
      title: boardDataSet.title,
      owner: boardDataSet.owner,
      tasks: tasks,
      public: boardDataSet.public,
      success: true,
    });
  } catch (err) {
    res.status(503).json({ error: err.message });
  }
});

router.post("/addPublicBoard", async (req, res) => {
  try {
    const addPublicBoardData: IAddPublicBoard = req.body as IAddPublicBoard;

    if (!(await boardSets.get(addPublicBoardData.title))) {
      throw new Error("This board does not exist");
    }

    if ((await publicBoards.get(addPublicBoardData.owner + addPublicBoardData.title)) !== null) {
      throw new Error("You already added this board to your public boards.");
    }

    const addPublicBoardDataJSON = {
      key: addPublicBoardData.owner + addPublicBoardData.title,
      owner: addPublicBoardData.owner,
      title: addPublicBoardData.title
    };

    await publicBoards.insert(JSON.parse(JSON.stringify(addPublicBoardDataJSON)));

    res.status(201).json({
      title: addPublicBoardData.title,
      owner: addPublicBoardData.owner,
      success: true
    });
  } catch (err) {
    res.status(503).json({ error: err.message });
  }
});

router.get("/getAll", async (req, res) => {
  try {
    const parameters: IGetPublicBoards = req.body as IGetPublicBoards;
    const username = parameters.username;
    const fetchedBoards = await boardSets.fetch({ owner: username });
    const fetchedPublicBoards: any = await publicBoards.fetch({ owner: username });

    for (let fetchedPublicBoard of fetchedPublicBoards.items) {
      if (parameters.passwords != null) {
        for (let password of parameters.passwords) {
          const board = await boardSets.get(
            fetchedPublicBoard.key.replace(fetchedPublicBoard.owner, "")
          );
          if (password.title === board.key) {
            if (await argon2.verify(board.password as string, password.password)) {
              delete board.password;
              fetchedBoards.items.push(board);
            }
          }
        }
      }
    }
    for (let i = 0; i < fetchedBoards.count; i++) {
      if (fetchedBoards.items[i].public) {
        delete fetchedBoards.items[i].password;
      }
    }
    if (fetchedBoards == null || publicBoards == null) {
      res.status(409).json({
        error: "No boards yet."
      });
      return false;
    } else {
      res.status(201).json({ fetchedBoards });
    }
  } catch (err) {
    res.status(503).json({ error: err.message });
  }
});

router.get("/get/:board/:password", async (req, res) => {
  try {
    const board = req.params.board;
    const password = req.params.password;
    const fetchedBoard = await boardSets.get(board);
    
    if ( fetchedBoard == null) {
      throw new Error("This board does not exist.");
    }
    if (fetchedBoard.public) {
      console.log(fetchedBoard.password);
      if (await argon2.verify(fetchedBoard.password as string, password)) {
        delete fetchedBoard.password;
        res.status(201).json({ fetchedBoard });
      } else {
        throw new Error("Wrong credentials.");
      }
    } 
  } catch (err) {
    res.status(503).json({ error: err.message });
  }
});

export default router;
