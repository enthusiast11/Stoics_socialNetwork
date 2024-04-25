"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
exports.upload = (0, multer_1.default)({
    storage: multer_1.default.diskStorage({
        destination: (req, file, callback) => {
            callback(null, 'uploads/');
        },
        filename: (req, file, callback) => {
            const extension = path_1.default.extname(file.originalname);
            const filename = `image${new Date().toISOString().replace(/:/g, '-').replace(/\\/g, '/')}${extension}`;
            callback(null, filename);
        }
    })
});
