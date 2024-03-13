import { Router, Request, Response } from "express";

const GetOrganizerRouter = Router();;
GetOrganizerRouter.get("/getorganizer", (req: Request, res: Response) => {
    res.send("GetOrganizer");
});

export default GetOrganizerRouter;