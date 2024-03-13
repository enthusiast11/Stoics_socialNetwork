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
const routes_1 = __importDefault(require("../routes"));
const models_1 = require("./models/models");
const express_validator_1 = require("express-validator");
(0, dotenv_1.configDotenv)();
const app = (0, express_1.default)();
const port = process.env.APP_PORT || 3001;
app.use(express_1.default.json());
app.use("/", routes_1.default);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.default.authenticate();
        yield db_1.default.sync();
        app.listen(port, () => {
            console.log(`[server]: Server is running at http://localhost:${port}`);
        });
    }
    catch (e) {
        console.log(e);
    }
});
start();
app.post("/join", (0, express_validator_1.body)('name').notEmpty(), (0, express_validator_1.body)('cname').notEmpty(), (0, express_validator_1.body)('email').isEmail(), (0, express_validator_1.body)('password').isLength({ min: 5 }), (0, express_validator_1.body)('repassword').custom((value, { req }) => {
    if (value !== req.body.password) {
        throw new Error("Пароли не сопадают");
    }
    return true;
}), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const error = (0, express_validator_1.validationResult)(req);
        if (error.isEmpty()) {
            res.status(200).send("Работает");
        }
        yield models_1.User.create({
            id: Date.now(),
            name: req.body.name,
            cname: req.body.cname,
            email: req.body.email,
            password: req.body.password,
            employed: true,
        });
    }
    catch (e) {
        //res.status(401).send("Ошибка, проверьте введённые данные")
        console.log(e);
    }
}));
