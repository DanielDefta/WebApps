import {Product} from './product';

export class Bestelling {
    _id: string;
    omschrijving: string;
    producten : Product[];
    chauffeurId: string;
    totaal: number = 0;

    constructor(omschrijving:string,producten:Product[]){
         this.omschrijving = omschrijving;
         this.producten = producten;
    }
}