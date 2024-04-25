import { Router, Request, Response } from "express";
import loginValidator from "../utils/express-validator/loginValidator";

const LoginRouter = Router();
LoginRouter.post("/login", loginValidator, loginValidator);

export default LoginRouter;