import { as } from "pg-promise"
import { Sequelize } from "sequelize"

const db = new Sequelize(
    "Stoics",
    "postgres",
    "root",
    // process.env.DATABASE,
    // process.env.USER,
    // process.env.PASSWORD,
    {
        dialect: "postgres",
        host:"localhost",
        port: 5432,
    }
    
)
export default db