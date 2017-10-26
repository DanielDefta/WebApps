import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
 
import { Bedrijf } from '../_models/bedrijf';
 
@Injectable()
export class BedrijfService {
    isDev:boolean;

    constructor(private http: Http) { 
        this.isDev=false; //bij deployen
        //this.isDev=true; //bij development
    }
 
    getAll() {
        return this.http.get(this.prepEndpoint('/bedrijf')).map((response: Response) => response.json());
    }
 
    getById(_id: string) {
        return this.http.get(this.prepEndpoint('/bedrijf/' + _id)).map((response: Response) => response.json());
    }
 
    create(bedrijf: Bedrijf) {
        return this.http.post(this.prepEndpoint('/bedrijf/register'), bedrijf);
    }
 
    update(bedrijf: Bedrijf) {
        return this.http.put(this.prepEndpoint('/bedrijf/' + bedrijf._id), bedrijf);
    }
 
    delete(_id: string) {
        return this.http.delete(this.prepEndpoint('/bedrijf/' + _id));
    }

    prepEndpoint(ep){
        if(this.isDev){
            return 'http://localhost:4000'+ep;
        } else {
          return 'https://projectwebappsdaniel.herokuapp.com'+ep;
        }
      }
}