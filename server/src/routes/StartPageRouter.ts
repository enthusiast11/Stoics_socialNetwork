import { Router, Request, Response } from "express";

const StartPageRouter = Router();
StartPageRouter.get("/startpage", (req: Request, res: Response) => {
    res.send("StartPage");
});

export default StartPageRouter;