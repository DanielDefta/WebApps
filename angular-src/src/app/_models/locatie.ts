export class Locatie {
    _id:number;
    straat:string;
    nummer: string;
    postcode: number;
    stad: string;
    land: string;

    constructor(straat:string,nummer: string,postcode: number,stad: string,land: string){
        this.straat = straat;
        this.nummer = nummer;
        this.postcode = postcode;
        this.stad = stad;
        this.land = land;
    }
}