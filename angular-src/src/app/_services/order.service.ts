import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Bestelling } from '../_models/bestelling';
import { AuthenticationService } from './authentication.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class OrderService {

    isDev: boolean;

    private orderSource = new BehaviorSubject(null);
    private loggedInSource = new BehaviorSubject(null);
    order = this.orderSource.asObservable();
    loggedIn = this.loggedInSource.asObservable();

    constructor(private authService: AuthenticationService, private http: Http) {
        this.isDev=false; //bij deployen
        //this.isDev = true; //bij development

        if (localStorage.getItem("shoppingBag"))
            this.setOrder(JSON.parse(localStorage.getItem("shoppingBag")));
    }

    setOrder(order: Bestelling) {
        this.orderSource.next(order);
    }

    setLoggedIn() {
        this.loggedInSource.next(!this.authService.loggedIn());
    }


    getAll() {
        return this.http.get(this.prepEndpoint('/order')).map((response: Response) => response.json());
    }

    getById(_id: string) {
        return this.http.get(this.prepEndpoint('/order/' + _id)).map((response: Response) => response.json());
    }

    create(order: Bestelling) {
        return this.http.post(this.prepEndpoint('/order/register'), order).map((response: Response) => response.json());
    }

    update(order: Bestelling) {
        return this.http.put(this.prepEndpoint('/order/' + order._id), order);
    }

    delete(_id: string) {
        return this.http.delete(this.prepEndpoint('/order/' + _id));
    }

    prepEndpoint(ep) {
        if (this.isDev) {
            return 'http://localhost:4000' + ep;
        } else {
            return 'https://projectwebappsdaniel.herokuapp.com' + ep;
        }
    }
}