import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Bestelling } from '../_models/bestelling';
import { Product} from '../_models/product';
import { OrderService} from '../_services/order.service';

@Component({
    selector: 'app-shoppingbag',
   moduleId: module.id,
   templateUrl: 'shoppingbag.component.html'
})

export class ShoppingbagComponent implements OnInit{

    order: Bestelling;

    constructor(
        private orderService: OrderService
    ){

    }

    ngOnInit(){
        this.orderService.order.subscribe(order => this.order=order);
    }

    removeProduct(i:number){
        let prijs = this.order.producten[i].prijs;
        this.order.producten[i]=null;

        let producten: Product[] = [];
        this.order.producten.forEach(p=>{
            if(p!=null)
                producten.push(p);
        })
        this.order.producten=producten;
        this.order.totaal-=prijs;
        if(this.order.producten.length>0){
            localStorage.setItem("shoppingBag", JSON.stringify(this.order));
            this.orderService.setOrder(this.order);
        }
        else{
            localStorage.removeItem("shoppingBag");
            this.orderService.setOrder(null);
        }
    }
}