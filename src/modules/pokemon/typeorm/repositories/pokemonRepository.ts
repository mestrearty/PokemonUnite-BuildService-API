import { EntityRepository, Repository } from "typeorm";
import PokemonEntitie from "../entities/pokemonEntitie";

@EntityRepository(PokemonEntitie)
export class PokemonRepository extends Repository<PokemonEntitie> {
    public async findByName(name: string): Promise<PokemonEntitie | undefined> {
        const product = this.findOne({
            where: {
                name
            }
        });

        return product;
    }
}