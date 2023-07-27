import PokemonController from "@modules/pokemon/controllers/pokemonController";
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from "express";


const pokemonRouter = Router();
const pokemonController = new PokemonController();

pokemonRouter.get('/', pokemonController.index);

pokemonRouter.post('/', celebrate({
    [Segments.BODY]: {
        name: Joi.string().required(),
        stage_0_name: Joi.string().required(),
        stage_1_name: Joi.string().required(),
        stage_1_lvlup: Joi.number().required(),
        stage_2_name: Joi.string().required(),
        stage_2_lvlup: Joi.number().required(),
        range: Joi.string().required(),
        role: Joi.string().required(),
        difficulty: Joi.string().required()
    }
}), pokemonController.create);

export default pokemonRouter;