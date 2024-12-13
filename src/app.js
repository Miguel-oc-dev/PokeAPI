import express from 'express';
import db from './config/db.js';
import pokemonRoutes from './routes/pokemonRoutes.js';

import { Pokemons } from './models/pokemon.js';
import { Moves } from './models/moves.js';
import { MovesPokemons } from './models/movesPokemons.js';

const app = express();

// Establecer la relación muchos a muchos
Pokemons.belongsToMany(Moves, { through: MovesPokemons, foreignKey: 'pokemon_id' });
Moves.belongsToMany(Pokemons, { through: MovesPokemons, foreignKey: 'move_id' });

// Middleware
app.use(express.json());

// Rutas
app.use('/api/pokemons', pokemonRoutes);

// Conexión a la base de datos
try {
    await db.authenticate();
    console.log('Conexion exitosa');
    await db.sync(); // Sincroniza modelos con la base de datos
} catch (error) {
    console.error('Error en la conexion con la base de datos...', error);
}

// Inicializar servidor
const PORT = 8080;
app.listen(PORT, () => console.log(`----- Servidor inicializado en el puerto ${PORT} -----`));
