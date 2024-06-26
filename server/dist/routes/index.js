"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LoginRouter_1 = __importDefault(require("./LoginRouter"));
const PostTapeRouter_1 = __importDefault(require("./PostTapeRouter"));
const WriterRouter_1 = __importDefault(require("./WriterRouter"));
const GetOrganizerRouter_1 = __importDefault(require("./GetOrganizerRouter"));
const StartPageRouter_1 = __importDefault(require("./StartPageRouter"));
const ChatRouter_1 = __importDefault(require("./ChatRouter"));
const EditRouter_1 = __importDefault(require("./EditRouter"));
const UserRouter_1 = __importDefault(require("./UserRouter"));
const AuthRouter_1 = __importDefault(require("./AuthRouter"));
const routes = (0, express_1.Router)();
routes.use(PostTapeRouter_1.default);
routes.use(LoginRouter_1.default);
routes.use(WriterRouter_1.default);
routes.use(GetOrganizerRouter_1.default);
routes.use(StartPageRouter_1.default);
routes.use(ChatRouter_1.default);
routes.use(EditRouter_1.default);
routes.use(UserRouter_1.default);
routes.use(AuthRouter_1.default);
exports.default = routes;
