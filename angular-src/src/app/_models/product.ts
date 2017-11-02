export class Product {
    _id: string;
    artikelNr: string;
    naam: string;
    omschrijving: string;
    imgUrl: string;
    prijs : number;

    constructor(artikelNr:string,naam:string, omschrijving:string, imgUrl:string, prijs:number){
        this.artikelNr = artikelNr;
         this.naam = naam;
         this.omschrijving = omschrijving;
         this.imgUrl = imgUrl;
         this.prijs = prijs;
    }
}