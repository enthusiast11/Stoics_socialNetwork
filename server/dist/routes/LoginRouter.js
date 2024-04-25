"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginValidator_1 = __importDefault(require("../utils/express-validator/loginValidator"));
const LoginRouter = (0, express_1.Router)();
LoginRouter.post("/login", loginValidator_1.default, loginValidator_1.default);
exports.default = LoginRouter;
