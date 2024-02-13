import express, { Express, Request, Response } from "express";
import { configDotenv } from "dotenv";
import sequelize from "./db";
import Models from "./models/models";
import routes from "../routes";

configDotenv()

const app: Express = express();
const port = process.env.APP_PORT || 3001;

app.use("/", routes)
const  start = async () =>{
  await sequelize.authenticate()
  await sequelize.sync()
  console.log("Всё работает")
}
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
start()