"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authValidator = void 0;
const express_validator_1 = require("express-validator");
exports.authValidator = [
    (0, express_validator_1.body)('name').notEmpty(),
    (0, express_validator_1.body)('email').isEmail(),
    (0, express_validator_1.body)('password').isLength({ min: 1 }),
    (0, express_validator_1.body)('repassword').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error("Passwords not compare");
        }
        ;
        return true;
    }),
];
