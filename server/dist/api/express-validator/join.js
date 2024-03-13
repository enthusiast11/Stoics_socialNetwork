"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.join = void 0;
const express_validator_1 = require("express-validator");
exports.join = [
    (0, express_validator_1.body)('name').notEmpty(),
    (0, express_validator_1.body)('cname').notEmpty(),
    (0, express_validator_1.body)('email').isEmail(),
    (0, express_validator_1.body)('password').isLength({ min: 5 }),
    (0, express_validator_1.body)('repassword').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error("Passwords not compare");
        }
        return true;
    }),
];
