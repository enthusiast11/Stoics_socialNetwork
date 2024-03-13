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
exports.loginController = void 0;
const models_1 = require("../models/models");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, cname, email } = req.body;
        const user = yield models_1.User.findOne({ where: { email: email } });
        if (!user) {
            return res.status(404).send("пользователь не найден");
        }
        const claim = {
            name: name,
            email: email
        };
        const loginPassword = yield bcrypt_1.default.compare(req.body.password, user.dataValues.password);
        if (!loginPassword) {
            return res.status(404).send("пользователь не найден");
        }
        const accessToken = yield jsonwebtoken_1.default.sign(claim, "secret", {
            expiresIn: "2d"
        });
        res.status(200).send("Успешно");
    }
    catch (e) {
        res.status(500).send(e);
    }
});
exports.loginController = loginController;
