import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';
import 'rxjs/add/operator/map'

import { UserService} from "./user.service";
 
@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private router: Router, private userService:UserService) { }
 
    //hier aanpassen voor de rechten? user.token
    login(username: string, password: string) {
        return this.http.post('/users/authenticate', { username: username, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
 
                return user;
            });
    }
 
    logout() {
        // remove user from local storage to log user out
        let user = JSON.parse(localStorage.getItem('currentUser'));
        user.online = false;
        this.userService.update(user).subscribe();
        localStorage.clear();
    }
}