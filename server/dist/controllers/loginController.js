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
const express_validator_1 = require("express-validator");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const models_1 = require("../models/models");
const loginController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        ;
        const { name, email, password } = req.body;
        const user = yield models_1.User.findOne({ where: { email: email } });
        if (!user) {
            return res.status(404).send('пользователь не найден');
        }
        ;
        const error = (0, express_validator_1.validationResult)(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() });
        }
        ;
        const claim = {
            name: name,
            email: email,
        };
        const loginPassword = yield bcrypt_1.default.compare(password, user.dataValues.password);
        if (!loginPassword) {
            res.status(500).json({
                message: 'Пользователь не найден',
            });
        }
        ;
        const accessToken = jsonwebtoken_1.default.sign(claim, 'secret', {
            expiresIn: '2d',
        });
        res.status(200).json({
            message: 'Успешно',
        });
    }
    catch (e) {
        res.status(500).json({
            error: e,
        });
    }
    ;
});
exports.loginController = loginController;
