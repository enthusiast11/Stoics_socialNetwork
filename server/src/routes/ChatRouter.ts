import { Router, Request, Response } from "express";

const ChatRouter = Router();
ChatRouter.get("/chat", (req: Request, res: Response) => {
    res.send("Chat");
});

export default ChatRouter;