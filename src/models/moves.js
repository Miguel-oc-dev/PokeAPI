import Sequelize from 'sequelize';
import db from "../config/db.js";

export const Moves = db.define("moves", 
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        type: {
            type: Sequelize.STRING,
        },
        power: {
            type: Sequelize.INTEGER,
        },
        accuracy: {
            type: Sequelize.INTEGER,
        },
    },
    {
        timestamps: false,
        tableName: 'moves',
    }
);


export default Moves;