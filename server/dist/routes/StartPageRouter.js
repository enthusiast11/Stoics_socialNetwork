"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const StartPageRouter = (0, express_1.Router)();
StartPageRouter.get("/startpage", (req, res) => {
    res.send("StartPage");
});
exports.default = StartPageRouter;
