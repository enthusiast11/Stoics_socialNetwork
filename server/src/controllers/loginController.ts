import {validationResult } from "express-validator";
import {Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

import { User } from "../models/models";
import loginValidator from "../utils/express-validator/loginValidator";

export const loginController = async (req: Request, res: Response, next: NextFunction) => {
  try {;
    const {name, email, password} = req.body;

    const user = await User.findOne({where: {email: email}});
    if (!user) {
      return res.status(404).send('пользователь не найден');
    };

    const error = validationResult(req)
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    };

    const claim = {
      name: name as string,
      email: email as string,
    };

    const loginPassword = await bcrypt.compare(password, user.dataValues.password);
    if (!loginPassword) {
      res.status(500).json({
        message:'Пользователь не найден',
      });
    };

    const accessToken = jwt.sign(claim, 'secret', {
      expiresIn: '2d',
    });

    res.status(200).json({
      message:'Успешно',
    });
  } catch(e) {
    res.status(500).json({
      error: e,
    });
  };
};