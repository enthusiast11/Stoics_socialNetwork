"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editValidator = void 0;
const express_validator_1 = require("express-validator");
exports.editValidator = [
    (0, express_validator_1.body)('name').notEmpty(),
    (0, express_validator_1.body)('location').notEmpty()
];
