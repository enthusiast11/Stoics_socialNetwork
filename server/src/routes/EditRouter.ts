import { Router, Request, Response } from "express";
import { editProfileController } from "../controllers/editProfileController";
import { upload } from "../utils/multer";
import { editValidator } from "../utils/express-validator/editValidator";
import { User } from "../models/models";

const EditRouter = Router();
EditRouter.patch("/:userid/edit", upload.single('image'), editValidator, editProfileController, async ( req: Request, res: Response) => {
    await User.update({
        avatar: req.file!.filename 
      }, {
        where: { id: req.params.id }
      });
} ) ;

export default EditRouter;