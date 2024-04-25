import express, { Express, Request, Response, NextFunction } from "express";
import { configDotenv } from "dotenv";
import sequelize from "./db";
import routes from "./routes";
import cors from 'cors';

import { errorHandler } from "./middlewares/errorHandler";
configDotenv();
const app: Express = express();
const port = process.env.APP_PORT;

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/profile/userid', express.static('uploads'));

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Content-type', 'application/json' );
  next();
});
app.use(errorHandler);

const  start = async () =>{
  try {
    await sequelize.authenticate();
    //await sequelize.sync();
    app.listen(port, () => {
      
      console.log(`[server]: Server is running at http://localhost:${port}`);
      
    });
  } catch (e) {
    console.log(e);
  }
}
start();
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Что-то пошло не так!');
});

