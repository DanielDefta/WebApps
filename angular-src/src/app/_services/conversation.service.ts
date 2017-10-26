import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import {Conversatie} from '../_models/conversatie';
 
@Injectable()
export class ConversationService {
    isDev:boolean;

    constructor(private http: Http) { 
        this.isDev=false; //bij deployen
        //this.isDev=true; //bij development
    }
 
    create(conversatie: Conversatie){
        return this.http.post(this.prepEndpoint('/conversation/create'),conversatie);
    }

    getById(_id: string) {
        return this.http.get(this.prepEndpoint('/conversation/' + _id)).map((response: Response) => response.json());
    }
    getByUsers(model:any) {
        return this.http.post(this.prepEndpoint('/conversation/getbyusers'),model).map((response: Response) => response.json());
    }

    update(conversatie: Conversatie){
        return this.http.put(this.prepEndpoint('/conversation/' + conversatie._id), conversatie);
    }

    prepEndpoint(ep){
        if(this.isDev){
            return 'http://localhost:4000'+ep;
        } else {
          return 'http://localhost:8080'+ep;
        }
      }
}