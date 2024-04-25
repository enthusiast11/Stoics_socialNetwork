"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authValidator_1 = require("../utils/express-validator/authValidator");
const authController_1 = require("../controllers/authController");
const AuthRouter = (0, express_1.Router)();
AuthRouter.post("/auth", authValidator_1.authValidator, authController_1.authController);
exports.default = AuthRouter;
