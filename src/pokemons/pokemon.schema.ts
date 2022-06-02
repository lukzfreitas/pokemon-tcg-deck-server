import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Abilitie } from "./models/abilitie.model";
import { Attack } from "./models/attack.model";
import { CardMarket } from "./models/card-market.model";
import { Image } from "./models/image.model";
import { Legalities } from "./models/legalities.model";
import { Set } from "./models/set.model";
import { TCGPlayer } from "./models/tcg-player.model";
import { TypeValue } from "./models/type-value.model";

export type PokemonDocument = Pokemon & Document

@Schema()
export class Pokemon {    

    @Prop(String)
    id: String;

    @Prop(String)
    name: String;
    
    @Prop([String])
    supertypes: String[];
    
    @Prop([String])
    subtypes: String[];
    
    @Prop(String)
    level: String;
    
    @Prop(String)
    hp: String;
    
    @Prop([String])
    types: String[];
    
    @Prop(String)
    evolvesFrom: String[];
    
    @Prop([String])
    evolvesTo: String;
    
    @Prop([Abilitie])
    abilities: Abilitie[];
    
    @Prop([String])
    rules: String[];
    
    @Prop([Attack])
    attacks: Attack[];
    
    @Prop([TypeValue])
    weaknesses: TypeValue[];
    
    @Prop()
    resistances: any[];
    
    @Prop([String])
    retreatCost: String[];
    
    @Prop()
    convertedRetreatCost: number;
    
    @Prop(Set)
    set: Set;
    
    @Prop(String)
    number: String;
    
    @Prop(String)
    artist: String;
    
    @Prop(String)
    rarity: String;
    
    @Prop([Number])
    nationalPokedexNumbers: Number[];
    
    @Prop(Legalities)
    legalities: Legalities;
    
    @Prop(Image)
    images: Image;
    
    @Prop(TCGPlayer)
    tcgplayer: TCGPlayer;
    
    @Prop(CardMarket)
    cardmarket: CardMarket;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);