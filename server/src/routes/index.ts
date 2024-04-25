import { Router, Request, Response } from "express";

import LoginRouter from "./LoginRouter";
import PostTapeRouter from "./PostTapeRouter";
import GetWriterRouter from "./WriterRouter";
import GetOrganizerRouter from "./GetOrganizerRouter";
import StartPageRouter from "./StartPageRouter";
import ChatRouter from "./ChatRouter";
import EditRouter from "./EditRouter";
import UserRouter from "./UserRouter";
import AuthRouter from "./AuthRouter";
const routes = Router();

routes.use(PostTapeRouter);
routes.use(LoginRouter);
routes.use(GetWriterRouter);
routes.use(GetOrganizerRouter);
routes.use(StartPageRouter);
routes.use(ChatRouter);
routes.use(EditRouter)
routes.use(UserRouter)
routes.use(AuthRouter)

export default routes;