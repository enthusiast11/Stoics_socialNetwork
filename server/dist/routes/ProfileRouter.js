"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProfileRouter = (0, express_1.Router)();
ProfileRouter.get("/profile?id=userid", (req, res) => {
    res.send("auth");
});
exports.default = ProfileRouter;
