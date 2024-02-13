"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize("Stoics", "postgres", "root", 
// process.env.DATABASE,
// process.env.USER,
// process.env.PASSWORD,
{
    dialect: "postgres",
    host: "localhost",
    port: 5432,
});
exports.default = db;
