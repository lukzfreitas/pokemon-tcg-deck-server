import { Body, Controller, Get, Post } from '@nestjs/common';
import { Pokemon } from './pokemon.model';
import { PokemonsService } from './pokemons.service';

@Controller('pokemons')
export class PokemonsController {
    constructor(private pokemonService: PokemonsService) {}

    @Get()    
    findAll(): Promise<Pokemon[]> {
        return this.pokemonService.findAll();
    }

    @Post()
    create(@Body() pokemon): void {
        this.pokemonService.create(pokemon);
    }
}
