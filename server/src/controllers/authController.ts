import {validationResult } from "express-validator";
import {Request, Response, NextFunction } from "express";
import { Token, User } from "../models/models";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export const authController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body);
    const {name, email, password} = req.body
    
    const error = validationResult(req)
     if (!error.isEmpty()) {
      console.log(error.array());
      
       return res.status(400).json({ errors: error.array() });
     }
    
    const getCrypto = async (saltRound: number, password: string ) => {
      const salt = await bcrypt.genSalt(saltRound);
      const hash = await bcrypt.hash(password, salt);
      return hash;
    };

    const hashPassword = await  getCrypto(10, password)
    const findUser = await User.findOne({where:{email: req.body.email}})

    if (!findUser) {
      const id = Date.now()
      try {
          await User.create({
              id: id,
              name: name,
              email: email,
              password: hashPassword,
          });

          const payload = {
            id: id,
            email: req.body.email
          };
          
          const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET_KEY!, {
            expiresIn: "2d"
          });
          const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET_KEY!, {
            expiresIn: "30d"
          });
          res.cookie('refreshToken', refreshToken,{httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000})
          req.body.id = id
          const responseHeaders = {
            ...req.headers,
            'Authorization': `Bearer ${accessToken}`
          };
          await Token.create({id, refreshToken})
          res.status(200).set(responseHeaders).json(req.body);
      } catch (error) {
          res.status(500).json({
            message:'Ошибка при создании пользователя',
          });
      };
    } else {
      res.status(409).json({
        message:'Пользователь с таким email уже существует',
      });
    };
  } catch (e) {
    console.log(e);
    
    res.status(500).json({
      error: e,
    }); 
  };
}