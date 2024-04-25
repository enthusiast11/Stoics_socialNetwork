import {validationResult } from "express-validator";
import {Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

import { User } from "../models/models";

export const loginController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const error = validationResult(req)
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    };

    const { email, password} = req.body;

    const user = await User.findOne({where: {email: email}});
    if (!user) {
      return res.status(404).send('пользователь не найден');
    };

    

    const payload = {
      id: user.dataValues.id,
      email: email,
    };

    const loginPassword = await bcrypt.compare(password, user.dataValues.password);
    if (!loginPassword) {
      res.status(500).json({
        message:'Пользователь не найден',
      });
    };

    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET_KEY!, {
      expiresIn: "2d"
    });
    console.log(accessToken);
    
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET_KEY!, {
      expiresIn: "30d"
    });
    res.cookie('refreshToken', refreshToken,{httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000})
    const responseHeaders = {
      ...req.headers, 
      'Authorization': `Bearer ${accessToken}`
    };
    
    
    res.status(200).set(responseHeaders).json(responseHeaders);
    
  } catch(e) {
    res.status(500).json({
      error: e,
    });
  };
};