"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ChatRouter = (0, express_1.Router)();
ChatRouter.get("/chat", (req, res) => {
    res.send("Chat");
});
exports.default = ChatRouter;
