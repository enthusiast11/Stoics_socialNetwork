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
exports.getUserController = void 0;
const models_1 = require("../models/models");
const getUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userid } = req.params;
        const user = yield models_1.User.findOne({ where: { id: userid } });
        const subs = yield models_1.User.findAll({
            include: {
                model: models_1.User,
                as: 'Subscriptions',
                where: {
                    id: userid
                }
            }
        });
        if (!user) {
            res.status(404).json({
                error: 'Пользователь не найден'
            });
        }
        res.status(200).json({
            user: user,
            subs: subs
        });
    }
    catch (e) {
        console.log(e);
    }
});
exports.getUserController = getUserController;
