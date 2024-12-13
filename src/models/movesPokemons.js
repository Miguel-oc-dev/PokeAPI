import Sequelize from 'sequelize';
import db from "../config/db.js";

export const MovesPokemons = db.define("moves_pokemons", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    pokemon_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'pokemons',
            key: 'id',
        },
        onDelete: 'CASCADE', 
        onUpdate: 'CASCADE'
    },
    move_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'moves',
            key: 'id',
        },
        onDelete: 'CASCADE', 
        onUpdate: 'CASCADE'    
    },
        timestamps: false,
        tableName: 'moves_pokemons',
});

export default MovesPokemons;