import {validationResult } from "express-validator";
import {Request, Response, NextFunction } from "express";
import { User } from "../models/models";

export const editProfileController = async (req: Request, res: Response) => {
    try {
      const { userid } = req.params;
      const errors = validationResult(req);
      
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { name, location, quote, about } = req.body;
      
      
      const user = await User.findOne({where: {id: userid}})
      console.log(req.file!.originalname, req.file!.filename);
      
      await User.update({
        name: name,
        location: location,
        quote: quote,
        about: about,
        avatar: req.file!.filename 
      }, {
        where: { id: userid }
      });
      console.log(user?.dataValues);
      
  
      res.status(200).json({ message: 'Данные успешно обновлены' });
    } catch (e) {
      console.log(e);
      res.status(500).send('Что-то пошло не так');
    }
  }