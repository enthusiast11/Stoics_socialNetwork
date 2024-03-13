import {validationResult } from "express-validator";
import {Request, Response, NextFunction } from "express";
import { User } from "../models/models";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
export const joinController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {name, cname, email, password} = req.body
    const error = validationResult(req)
    if (!error.isEmpty()) {
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
      try {
          await User.create({
              id: Date.now(),
              name: name,
              cname: cname,
              email: email,
              password: hashPassword,
          });

          const claim = {
            name: req.body.name as string,
            email: req.body.email as string
          };

          const accessToken = jwt.sign(claim, 'secret', {
            expiresIn: "2d"
          });
          res.status(200).json(req.body);
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
    res.status(500).json({
      error: e,
    }); 
  };
}