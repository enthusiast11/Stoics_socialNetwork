"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LoginRouter = (0, express_1.Router)();
LoginRouter.get("/login", (req, res) => {
    res.send("Login");
});
exports.default = LoginRouter;
