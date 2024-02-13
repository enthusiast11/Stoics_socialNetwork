import { Router, Request, Response } from "express";

const JoinRouter  = Router()
JoinRouter.get("/join", (req: Request, res: Response) => {
    res.send("join")
})
export default JoinRouter