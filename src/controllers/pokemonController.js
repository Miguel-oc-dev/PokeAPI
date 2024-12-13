import { Pokemons } from '../models/pokemon.js';
import { Moves } from '../models/moves.js';

// Obtener la lista de todos los pokemones
export const getAllPokemon = async (req, res) => {
    try {
        const pokemons = await Pokemons.findAll({
            attributes: ['id', 'name'],
        });
        res.json(pokemons);
    } catch (error) {
        res.status(500).json({ error: 'Error, lista no encontrada' });
    }
};

// Obtener Pokemon por Id
export const getPokemonById = async (req, res) => {
    try {
        const pokemon = await Pokemons.findByPk(req.params.id, {
            include:{ 
                model: Moves,
                through: { attributes: [] }
            }
        });

        if (!pokemon) {
            return res.status(404).json({ error: 'Pokémon no encontrado' });
        }

        res.json(pokemon);
    } catch (error) {
        res.status(500).json({ error: 'Error, Pokemon no encontrado...' });
    }
};

// Crear un nuevo pokemon
export const createPokemon = async (req, res) => {
    try {
        const { name, type_1, type_2, description, weight, height } = req.body;

        if(!name || !type_1 || !weight || !height){
            return res.status(400).json({ error: 'Faltan datos requeridos' });
        }
        const newPokemon = await Pokemons.create({
            name,
            type_1,
            type_2,
            description,
            weight,
            height,
        });

        res.status(200).json({ message: `Pokemon creado`, id:newPokemon.id});
    } catch (error) {
        res.status(500).json({error: `Error al crear un nuevo Pokemon`});
    }
};

// Modificar registros de un pokemon
export const updatePokemon = async (req, res) => {
    try {
        const pokemonId = req.params.id;
        const { name, type_1, type_2, description, weight, height } = req.body;
        
        const pokemon = await Pokemons.findByPk(pokemonId);


        if(!pokemon){
            return res.status(400).json({ error: 'Pokemon no encontrado' });
        }

        if(name) pokemon.name = name;
        if(type_1) pokemon.type_1 = type_1;
        if(type_2) pokemon.type_2 = type_2;
        if(description) pokemon.description = description;
        if(weight) pokemon.weight = weight;
        if(height) pokemon.height = height;

        await pokemon.save();

        res.status(200).json({message: `Pokemon actualizado`, id: pokemon.id});
    } catch (error) {
        res.status(500).json({error: `Error al actualizar el Pokemon`});
    }
};

// Eliminar registros
export const deletePokemon = async (req, res) => {
    try {
        const pokemonId = req.params.id;
        const pokemon = await Pokemons.findByPk(pokemonId);

        if(!pokemon){
            return res.status(400).json({ error: 'Pokemon no encontrado' });
        }

        await pokemon.destroy(); 

        res.status(200).json({message: `Pokemon eliminado`, id: pokemon.id});
    } catch (error) {
        res.status(500).json({error: `Error al eliminar el Pokemon`});
    }
};

/* 

Plantilla para la creacion de las peticiones
{
    "name": "",
    "type_1": "",
    "type_2": "",
    "description": "",
    "weight": "",
    "height": ""
}

*/