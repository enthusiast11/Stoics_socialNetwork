import multer from "multer";
import path from "path";

export const upload = multer({
    storage: multer.diskStorage({
      destination: (req, file, callback) => {
        callback(null, 'uploads/');
      },
      filename: (req, file, callback) => {
        const extension = path.extname(file.originalname);
        const filename = `image${new Date().toISOString().replace(/:/g, '-').replace(/\\/g, '/')}${extension}`;
        callback(null, filename);
      }
    })
  });