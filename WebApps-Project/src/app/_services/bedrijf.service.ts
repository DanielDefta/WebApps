import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
 
import { Bedrijf } from '../_models/bedrijf';
 
@Injectable()
export class BedrijfService {
    constructor(private http: Http) { }
 
    getAll() {
        return this.http.get('/bedrijf').map((response: Response) => response.json());
    }
 
    getById(_id: string) {
        return this.http.get('/bedrijf/' + _id).map((response: Response) => response.json());
    }
 
    create(bedrijf: Bedrijf) {
        return this.http.post('/bedrijf/register', bedrijf);
    }
 
    update(bedrijf: Bedrijf) {
        return this.http.put('/bedrijf/' + bedrijf._id, bedrijf);
    }
 
    delete(_id: string) {
        return this.http.delete('/bedrijf/' + _id);
    }
}