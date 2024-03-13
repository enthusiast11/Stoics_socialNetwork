import { body } from "express-validator";

export const authValidator = [
    body('name').notEmpty(), 
    body('cname').notEmpty(), 
    body('email').isEmail(), 
    body('password').isLength({min: 5}),
    
    body('repassword').custom((value, {req} ) => {
      if(value !== req.body.password) {
        throw  new Error("Passwords not compare");
      };

      return true;
    }),
]