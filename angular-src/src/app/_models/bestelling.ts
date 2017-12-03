import {Product} from './product';
import { Locatie } from './locatie';

export class Bestelling {
    _id: string;
    omschrijving: string;
    producten : Product[];
    chauffeurId: string;
    totaal: number = 0;
    locatie: Locatie;

    constructor(omschrijving:string,producten:Product[]){
         this.omschrijving = omschrijving;
         this.producten = producten;
    }
}