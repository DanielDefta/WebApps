import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
 
import { Product } from '../_models/product';
 
@Injectable()
export class ProductService {
    isDev:boolean;

    constructor(private http: Http) { 
        this.isDev=false; //bij deployen
        //this.isDev=true; //bij development
    }
 
    getAll() {
        return this.http.get(this.prepEndpoint('/product')).map((response: Response) => response.json());
    }
 
    getById(_id: string) {
        return this.http.get(this.prepEndpoint('/product/' + _id)).map((response: Response) => response.json());
    }
 
    create(bedrijf: Product) {
        return this.http.post(this.prepEndpoint('/product/register'), bedrijf);
    }
 
    update(bedrijf: Product) {
        return this.http.put(this.prepEndpoint('/product/' + bedrijf._id), bedrijf);
    }
 
    delete(_id: string) {
        return this.http.delete(this.prepEndpoint('/product/' + _id));
    }

    prepEndpoint(ep){
        if(this.isDev){
            return 'http://localhost:4000'+ep;
        } else {
          return 'https://projectwebappsdaniel.herokuapp.com'+ep;
        }
    }
}