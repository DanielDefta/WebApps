import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import {Conversatie} from '../_models/conversatie';
 
@Injectable()
export class ConversationService {
    constructor(private http: Http) { }
 
    create(conversatie: Conversatie){
        return this.http.post('/conversation/create',conversatie);
    }

    getById(_id: string) {
        return this.http.get('/conversation/' + _id).map((response: Response) => response.json());
    }
    getByUsers(model:any) {
        return this.http.post('/conversation/getbyusers',model).map((response: Response) => response.json());
    }

    update(conversatie: Conversatie){
        return this.http.put('/conversation/' + conversatie._id, conversatie);
    }
}