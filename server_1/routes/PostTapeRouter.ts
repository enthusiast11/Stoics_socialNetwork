import { Router, Request, Response } from "express";

const PostTapeRouter  = Router()
PostTapeRouter.get("/posttape", (req: Request, res: Response) => {
    res.send("Post Tape")
})
export default PostTapeRouter