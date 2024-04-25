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
Object.defineProperty(exports, "__esModule", { value: true });
exports.editProfileController = void 0;
const express_validator_1 = require("express-validator");
const models_1 = require("../models/models");
const editProfileController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userid } = req.params;
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { name, location, quote, about } = req.body;
        const user = yield models_1.User.findOne({ where: { id: userid } });
        console.log(req.file.originalname, req.file.filename);
        yield models_1.User.update({
            name: name,
            location: location,
            quote: quote,
            about: about,
            avatar: req.file.filename
        }, {
            where: { id: userid }
        });
        console.log(user === null || user === void 0 ? void 0 : user.dataValues);
        res.status(200).json({ message: 'Данные успешно обновлены' });
    }
    catch (e) {
        console.log(e);
        res.status(500).send('Что-то пошло не так');
    }
});
exports.editProfileController = editProfileController;
