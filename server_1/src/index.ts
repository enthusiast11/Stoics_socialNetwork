import express, { Express, Request, Response } from "express";
import { configDotenv } from "dotenv";
import sequelize from "./db";
import routes from "../routes";
import { Post, User, Meet, Message, Bookmark, Subcription, Comment, } from "./models/models";

configDotenv()

const app: Express = express();
const port = process.env.APP_PORT || 3001;
app.use(express.json())
app.use("/", routes)
const  start = async () =>{
  try {
    await User.create({
      id: Date.now(),
      name: "Ïvan",
      cname: "N",
    })
    await sequelize.authenticate()
    //await sequelize.sync()
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  }
  catch(e) {
    console.log(e)
  }

}

start()