import { Router, Request, Response } from "express";
import LoginRouter from "./LoginRouter";
import PostTapeRouter from "./PostTapeRouter";
import JoinRouter from "./JoinRouter";
import GetWriterRouter from "./GetWriterRouter";
import GetOrganizerRouter from "./GetOrganizerRouter";
import StartPageRouter from "./StartPageRouter";
import ChatRouter from "./ChatRouter";

const routes = Router()

routes.use(PostTapeRouter)
routes.use(LoginRouter)
routes.use(JoinRouter)
routes.use(GetWriterRouter)
routes.use(GetOrganizerRouter)
routes.use(StartPageRouter)
routes.use(ChatRouter)
export default routes