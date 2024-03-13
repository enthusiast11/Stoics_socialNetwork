import { Router, Request, Response } from "express";

const JoinRouter = Router();
JoinRouter.get("/auth", (req: Request, res: Response) => {
    res.send("auth");
});

export default JoinRouter;