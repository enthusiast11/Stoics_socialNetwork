"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const JoinRouter = (0, express_1.Router)();
JoinRouter.get("/join", (req, res) => {
    res.send("join");
});
exports.default = JoinRouter;
