"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PostTapeRouter = (0, express_1.Router)();
PostTapeRouter.get("/posttape", (req, res) => {
    res.send("Post Tape");
});
exports.default = PostTapeRouter;
