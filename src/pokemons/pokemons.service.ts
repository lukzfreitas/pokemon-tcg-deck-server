import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pokemon, PokemonDocument } from './pokemon.schema';

@Injectable()
export class PokemonsService {

    constructor(@InjectModel(Pokemon.name) private pokemonModel: Model<PokemonDocument>) { }

    findAll(): Promise<Pokemon[]> {
        return this.pokemonModel.find().exec();
    }

    async create(pokemon: Pokemon): Promise<Pokemon> {
        return new this.pokemonModel(pokemon).save();
    }
}
