import { body } from "express-validator";

export const editValidator = [
    body('name').notEmpty(),
    body('location').notEmpty()
]