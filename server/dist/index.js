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
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const errorHandler_1 = require("./middlewares/errorHandler");
(0, dotenv_1.configDotenv)();
const app = (0, express_1.default)();
const port = process.env.APP_PORT;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.default);
app.use('/profile/userid', express_1.default.static('uploads'));
app.use((req, res, next) => {
    res.setHeader('Content-type', 'application/json');
    next();
});
app.use(errorHandler_1.errorHandler);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.default.authenticate();
        //await sequelize.sync();
        app.listen(port, () => {
            console.log(`[server]: Server is running at http://localhost:${port}`);
        });
    }
    catch (e) {
        console.log(e);
    }
});
start();
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Что-то пошло не так!');
});
