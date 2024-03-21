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
exports.authController = void 0;
const express_validator_1 = require("express-validator");
const models_1 = require("../models/models");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, cname, email, password } = req.body;
        const error = (0, express_validator_1.validationResult)(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() });
        }
        const getCrypto = (saltRound, password) => __awaiter(void 0, void 0, void 0, function* () {
            const salt = yield bcrypt_1.default.genSalt(saltRound);
            const hash = yield bcrypt_1.default.hash(password, salt);
            return hash;
        });
        const hashPassword = yield getCrypto(10, password);
        const findUser = yield models_1.User.findOne({ where: { email: req.body.email } });
        if (!findUser) {
            const id = Date.now();
            try {
                yield models_1.User.create({
                    id: id,
                    name: name,
                    cname: cname,
                    email: email,
                    password: hashPassword,
                });
                const claim = {
                    name: req.body.name,
                    email: req.body.email
                };
                const accessToken = jsonwebtoken_1.default.sign(claim, 'secret', {
                    expiresIn: "2d"
                });
                req.body.id = id;
                res.status(200).json(req.body);
            }
            catch (error) {
                res.status(500).json({
                    message: 'Ошибка при создании пользователя',
                });
            }
            ;
        }
        else {
            res.status(409).json({
                message: 'Пользователь с таким email уже существует',
            });
        }
        ;
    }
    catch (e) {
        res.status(500).json({
            error: e,
        });
    }
    ;
});
exports.authController = authController;
