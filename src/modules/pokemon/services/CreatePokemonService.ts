import { getCustomRepository } from "typeorm";
import { PokemonRepository } from "../typeorm/repositories/pokemonRepository";
import AppError from "@shared/errors/AppError";
import PokemonEntitie from "../typeorm/entities/pokemonEntitie";

interface IRequest {
    name: string;
    stage_0_name: string;
    stage_1_name: string;
    stage_1_lvlup: number;
    stage_2_name: string;
    stage_2_lvlup: number;
    range: string;
    role: string;
    difficulty: string;
    attackerType: string;
}

class CreatePokemonService {
    public async execute({ name, stage_0_name, stage_1_name, stage_1_lvlup, stage_2_name, stage_2_lvlup, range, role, difficulty, attackerType }: IRequest): Promise<PokemonEntitie> {
        const pokemonRepository = getCustomRepository(PokemonRepository);
        let pokemon = await pokemonRepository.findByName(name);

        if (pokemon) throw new AppError('Pokemon already exists');

        pokemon = pokemonRepository.create({
            name, stage_0_name, stage_1_name, stage_1_lvlup, stage_2_name, stage_2_lvlup, range, role, difficulty, attackerType
        }); //Preparing object to save on DB

        await pokemonRepository.save(pokemon);

        return pokemon;
    }
}

export default CreatePokemonService;