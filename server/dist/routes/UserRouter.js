"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const UserRouter = (0, express_1.Router)();
UserRouter.get("/:userid", userController_1.getUserController);
exports.default = UserRouter;
