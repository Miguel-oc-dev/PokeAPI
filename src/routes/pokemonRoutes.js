import express from 'express';
import {
    getAllPokemon,
    getPokemonById,
    createPokemon,
    updatePokemon,
    deletePokemon
} from '../controllers/pokemonController.js';

const router = express.Router();

router.get('/', getAllPokemon);
router.get('/:id', getPokemonById);
router.post('/create', createPokemon);
router.put('/:id', updatePokemon);
router.delete('/:id', deletePokemon);
// Rutas para actualizar y eliminar

export default router;
