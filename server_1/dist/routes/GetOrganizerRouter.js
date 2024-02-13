"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GetOrganizerRouter = (0, express_1.Router)();
GetOrganizerRouter.get("/getorganizer", (req, res) => {
    res.send("GetOrganizer");
});
exports.default = GetOrganizerRouter;
