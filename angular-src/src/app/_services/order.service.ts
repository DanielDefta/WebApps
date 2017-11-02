import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import {Bestelling} from '../_models/bestelling';
 
@Injectable()
export class OrderService {

    private orderSource= new BehaviorSubject(null);
    order = this.orderSource.asObservable();

    constructor() {
        if(localStorage.getItem("shoppingBag"))
            this.setOrder(JSON.parse(localStorage.getItem("shoppingBag")));
    }

    setOrder(order: Bestelling){
        this.orderSource.next(order);
    }

}