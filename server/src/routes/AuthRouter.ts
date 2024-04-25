import { Router, Request, Response } from "express";
import { authValidator } from "../utils/express-validator/authValidator";
import { authController } from "../controllers/authController";

const AuthRouter = Router();
AuthRouter.post("/auth", authValidator, authController);

export default AuthRouter;