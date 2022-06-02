export class Set {
    private id: string;
    private name: string;
    private series: string;
    private printedTotal: number;
    private total: number;
    private legalities: any;
    private ptcgoCode: string;
    private releaseDate: string;
    private updatedAt: string;
    private images: any;

    constructor(
        id: string,
        name: string,
        series: string,
        printedTotal: number,
        total: number,
        legalities: any,
        ptcgoCode: string,
        releaseDate: string,
        updatedAt: string,
        images: any
    ) { }
}