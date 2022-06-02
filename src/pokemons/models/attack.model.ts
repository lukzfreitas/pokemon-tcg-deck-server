export class Attack {

    private cost: string[];

    private convertedEnergyCost: number;

    private damage: string;

    private text: string;

    constructor(
        cost: string[],
        convertedEnergyCost: number,
        damage: string,
        text: string
    ) {
        this.cost = cost;
        this.convertedEnergyCost = convertedEnergyCost;
        this.damage = damage;
        this.text = text;
    }
}