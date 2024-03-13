import { Router, Request, Response } from "express";

const LoginRouter = Router();
LoginRouter.get("/login", (req: Request, res: Response) => {
    res.send("Login");
});

export default LoginRouter;