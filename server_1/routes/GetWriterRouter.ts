import { Router, Request, Response } from "express";

const GetWriterRouter  = Router()
GetWriterRouter.get("/getwriter", (req: Request, res: Response) => {
    res.send("GetWriter")
})
export default GetWriterRouter