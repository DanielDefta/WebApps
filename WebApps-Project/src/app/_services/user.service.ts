import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
 
import { User } from '../_models/user';
 
@Injectable()
export class UserService {
    constructor(private http: Http) { }
 
    getAll() {
        return this.http.get('/users').map((response: Response) => response.json());
    }
 
    getById(_id: string) {
        return this.http.get('/users/' + _id).map((response: Response) => response.json());
    }

    getByUsername(user: User) {
        return this.http.post('/users/passwordrecover', user).map((response: Response) => response.json());
    }

    sendSecurityAnswers(user: User){
        return this.http.post('/users/checkanswers',user).map((response:Response) => response.json());
    }

    resetPassword(_id: string, passsword:string){
        return this.http.post('/users/resetpassword', { id: _id, password: passsword});
    }
 
    create(user: User) {
        return this.http.post('/users/register', user);
    }
 
    update(user: User) {
        return this.http.put('/users/' + user._id, user);
    }
 
    delete(_id: string) {
        return this.http.delete('/users/' + _id);
    }
}