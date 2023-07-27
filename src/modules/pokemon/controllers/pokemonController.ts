import { Request, Response } from "express";
import ListProductService from "../services/ListPokemonService";
import CreatePokemonService from "../services/CreatePokemonService";

export default class PokemonController {

    public async index(request: Request, response: Response): Promise<Response> {
        const listProducts = new ListProductService();

        const products = await listProducts.execute();
        return response.json(products);
    }


    public async create(request: Request, response: Response): Promise<Response> {
        const { name, stage_0_name, stage_1_name, stage_1_lvlup, stage_2_name, stage_2_lvlup, range, role, difficulty, attacker_type } = request.body;
        const createPokemon = new CreatePokemonService();
        const product = await createPokemon.execute({ name, stage_0_name, stage_1_name, stage_1_lvlup, stage_2_name, stage_2_lvlup, range, role, difficulty, attacker_type });
        return response.json(product);
    }


}