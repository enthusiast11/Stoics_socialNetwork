"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../db"));
const User = db_1.default.define("user", {
    id: sequelize_1.DataTypes.NUMBER
});
const Posts = db_1.default.define("post", {
    id: sequelize_1.DataTypes.NUMBER
});
User.hasMany(Posts);
Posts.belongsTo(User);
const Models = [User, Posts];
exports.default = Models;
