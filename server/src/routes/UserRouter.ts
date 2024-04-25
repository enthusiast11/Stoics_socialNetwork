import { Router, Request, Response } from "express";
import { getUserController } from "../controllers/userController";

const UserRouter = Router();
UserRouter.get("/:userid", getUserController);

export default UserRouter;