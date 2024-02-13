"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const db_1 = __importDefault(require("./db"));
(0, dotenv_1.configDotenv)();
const app = (0, express_1.default)();
const port = process.env.APP_PORT || 3001;
app.get("/", (req, res) => {
    res.send("Работает");
});
app.get("/startpage", (req, res) => {
    res.send("Стартовая страница");
});
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.default.authenticate();
    yield db_1.default.sync();
    console.log("Всё работает");
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
start();
