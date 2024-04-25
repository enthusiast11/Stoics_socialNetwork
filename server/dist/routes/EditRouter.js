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
const express_1 = require("express");
const editProfileController_1 = require("../controllers/editProfileController");
const multer_1 = require("../utils/multer");
const editValidator_1 = require("../utils/express-validator/editValidator");
const models_1 = require("../models/models");
const EditRouter = (0, express_1.Router)();
EditRouter.patch("/:userid/edit", multer_1.upload.single('image'), editValidator_1.editValidator, editProfileController_1.editProfileController, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield models_1.User.update({
        avatar: req.file.filename
    }, {
        where: { id: req.params.id }
    });
}));
exports.default = EditRouter;
