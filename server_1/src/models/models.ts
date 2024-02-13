import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../db";

const User = sequelize.define("user", {
    id: DataTypes.NUMBER
})
const Posts = sequelize.define("post", {
    id: DataTypes.NUMBER
})
User.hasMany(Posts)
Posts.belongsTo(User)

const Models = [User, Posts]
export default Models

