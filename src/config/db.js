import { Sequelize } from "sequelize";

const db = new Sequelize('pokedex_4', 'PostulanteURC4', 'Puert0anclA.=', {
    host: '172.20.1.11',      
    port: 3306,
    dialect: 'mysql',        
    pool: {                   
        max: 5,
        min: 0,
        acquire: 30000,       
        idle: 10000           
    },
    logging: false           
});

export default db;