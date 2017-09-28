import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result:any;

  constructor(private _http: Http) { }

  getUsers() {
    return this._http.get("/api/users")
      .map(result => this.result = result.json().data);
  }

  addUser(email:string,name:string){
    var data = {name:name, email:email};
    return this._http.post("/api/adduser",data)
      .map(result => this.result = result.json().data);
  }

}