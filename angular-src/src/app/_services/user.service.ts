import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
 
import { User } from '../_models/user';
 
@Injectable()
export class UserService {
    isDev:boolean;

    constructor(private http: Http) { 
        this.isDev=false; //bij development
        //this.isDev=true; //bij deployen
    }
 
    getAll() {
        return this.http.get(this.prepEndpoint('/users')).map((response: Response) => response.json());
    }
 
    getById(_id: string) {
        return this.http.get(this.prepEndpoint('/users/' + _id)).map((response: Response) => response.json());
    }

    getByUsername(user: User) {
        return this.http.post(this.prepEndpoint('/users/passwordrecover'), user).map((response: Response) => response.json());
    }

    sendSecurityAnswers(user: User){
        return this.http.post(this.prepEndpoint('/users/checkanswers'),user).map((response:Response) => response.json());
    }

    resetPassword(_id: string, passsword:string){
        return this.http.post(this.prepEndpoint('/users/resetpassword'), { id: _id, password: passsword});
    }
 
    create(user: User) {
        return this.http.post(this.prepEndpoint('/users/register'), user);
    }
 
    update(user: User) {
        return this.http.put(this.prepEndpoint('/users/' + user._id), user);
    }
 
    delete(_id: string) {
        return this.http.delete(this.prepEndpoint('/users/' + _id));
    }

    prepEndpoint(ep){
        if(this.isDev){
          return ep;
        } else {
          return 'http://localhost:8080/'+ep;
        }
      }
}