"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GetWriterRouter = (0, express_1.Router)();
GetWriterRouter.get("/getwriter", (req, res) => {
    res.send("GetWriter");
});
exports.default = GetWriterRouter;
