import {Locatie} from './locatie';

export class Bedrijf {
    _id: string;
    naam: string;
    omschrijving: string;
    locatie : Locatie;

    constructor(naam:string,omschrijving:string,locatie:Locatie){
         this.naam = naam;
         this.omschrijving = omschrijving;
         this.locatie = locatie;
    }
}