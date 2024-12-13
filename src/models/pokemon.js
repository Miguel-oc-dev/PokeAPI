import Sequelize from 'sequelize';
import db from "../config/db.js";

export const Pokemons = db.define("pokemons", 
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
        type_1: {
            type: Sequelize.STRING,
        },
        type_2: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.TEXT,
        },
        weight: {
            type: Sequelize.DOUBLE,
        },
        height: {
            type: Sequelize.INTEGER,
        },
    },
    {
        timestamps: false,
        tableName: 'pokemons',
    }
);

export default Pokemons;