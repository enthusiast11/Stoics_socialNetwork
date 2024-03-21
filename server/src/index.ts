import express, { Express, Request, Response, NextFunction } from "express";
import { configDotenv } from "dotenv";
import sequelize from "./db";
import routes from "./routes";
import cors from 'cors';

import { errorHandler } from "./middlewares/errorHandler";
import { authValidator } from "./utils/express-validator/authValidator";
import { authController } from "./controllers/authController";
import { loginController } from "./controllers/loginController";
import { log } from "console";


configDotenv();
const app: Express = express();
const port = process.env.APP_PORT;

app.use(cors());
app.use(express.json());
app.use("/", routes);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Content-type', 'application/json' );
  next();
});

app.use('/auth',(req, res, next) => {
  next();
});

const  start = async () =>{
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
      
    });
  } catch (e) {
    console.log(e);
  }
}
start();
const userId = 2323
app.use(errorHandler);

app.post('/login', loginController);
app.post('/auth', authValidator, authController);
//app.post(`/${userId}/profile/edit`)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Что-то пошло не так!');
});

