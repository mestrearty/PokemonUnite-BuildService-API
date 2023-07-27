import { getCustomRepository } from "typeorm";
import { PokemonRepository } from "../typeorm/repositories/pokemonRepository";
import AppError from "@shared/errors/AppError";
import PokemonEntitie from "../typeorm/entities/pokemonEntitie";


class ListPokemonService {
    public async execute(): Promise<PokemonEntitie[]> {
        const pokemonRepository = getCustomRepository(PokemonRepository);
        const pokemon = await pokemonRepository.find();//getting all pokemon instances from db

        return pokemon;
    }
}

export default ListPokemonService;