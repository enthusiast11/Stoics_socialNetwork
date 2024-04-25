import {Request, Response, NextFunction } from "express";

import { User } from "../models/models";

export const getUserController = async (req: Request, res: Response,) => {
    try {
      const { userid } = req.params
      const user = await User.findOne({where: {id: userid}})
      
      const subs = await User.findAll({
        include: {
          model: User,
          as: 'Subscriptions',
          where: {
            id: userid
          }
        }
      })
      if(!user) {
        res.status(404).json({
          error: 'Пользователь не найден'
        })
      }
      
      res.status(200).json({
        user: user,
        subs: subs
      })
    } catch (e) {
      console.log(e);
      
    }
      
  }