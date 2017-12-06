
import { Component, OnInit } from '@angular/core';

import { Bestelling } from '../../_models/bestelling';
import { Product } from '../../_models/product';
import { OrderService } from '../../_services/order.service';

import { slideRightLeftAnimation } from '../../_animations/slide-right-left.animation';
import { UserService } from '../../_services/user.service';
import { AlertService } from '../../_services/alert.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
    moduleId: module.id,
    templateUrl: 'placeorder.component.html',

    animations: [slideRightLeftAnimation],

    host: { '[@slideRightLeftAnimation]': '' }
})

export class PlaceOrderComponent implements OnInit {
    loggedIn = false;
    order: Bestelling;

    constructor(
        private router: Router,
        private authService: AuthenticationService,
        private orderService: OrderService,
        private userService: UserService,
        private alertService: AlertService
    ) {
        this.orderService.loggedIn.subscribe(l => this.loggedIn = l);
    }

    ngOnInit() {
        this.loggedIn = !this.authService.loggedIn();
        this.orderService.order.subscribe(order => {
            this.order = order;
        });
    }

    removeProduct(i: number) {
        let prijs = this.order.producten[i].prijs;
        this.order.producten[i] = null;

        let producten: Product[] = [];
        this.order.producten.forEach(p => {
            if (p != null)
                producten.push(p);
        })
        this.order.producten = producten;
        this.order.totaal -= prijs;
        this.order.totaal = parseFloat(this.order.totaal.toFixed(2));
        if (this.order.producten.length > 0) {
            localStorage.setItem("shoppingBag", JSON.stringify(this.order));
            this.orderService.setOrder(this.order);
        }
        else {
            localStorage.removeItem("shoppingBag");
            this.orderService.setOrder(null);
        }
    }
}
