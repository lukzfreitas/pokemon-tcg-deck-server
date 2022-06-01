import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type PokemonDocument = Pokemon & Document

@Schema()
export class Pokemon {    

    @Prop()
    id: string;

    @Prop()
    name: string;
    
    @Prop()
    supertypes: String[];
    
    @Prop()
    subtypes: String[];
    
    @Prop()
    level: String;
    
    @Prop()
    hp: String;
    
    @Prop()
    types: String[];
    
    @Prop()
    evolvesFrom: String[];
    
    @Prop()
    evolvesTo: String;
    
    @Prop()
    abilities: any[];
    
    @Prop()
    rules: String[];
    
    @Prop()
    attacks: any[];
    
    @Prop()
    weakness: any[];
    
    @Prop()
    resistances: any[];
    
    @Prop()
    retreatCost: String[];
    
    @Prop()
    convertedRetreatCost: number;
    
    @Prop()
    set: any;
    
    @Prop()
    number: string;
    
    @Prop()
    artist: string;
    
    @Prop()
    rarity: string;
    
    @Prop()
    nationalPokedexNumbers: number;
    
    @Prop()
    legalities: any;
    
    @Prop()
    images: any;
    
    @Prop()
    tcgplayer: any;
    
    @Prop()
    cardmarket: any;
}

export const BookSchema = SchemaFactory.createForClass(Pokemon);