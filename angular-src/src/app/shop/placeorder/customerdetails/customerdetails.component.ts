
import { Component, OnInit } from '@angular/core';


import { slideInOutAnimation } from '../../../_animations/slide-in-out.animation';
import { UserService } from '../../../_services/user.service';
import { AlertService } from '../../../_services/alert.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../_services/authentication.service';
import { OrderService } from '../../../_services/order.service';
import { User } from '../../../_models/user';
import { Locatie } from '../../../_models/locatie';
import { Bestelling } from '../../../_models/bestelling';

@Component({
    moduleId: module.id,
    selector: 'app-customerdetails',
    templateUrl: 'customerdetails.component.html',

    animations: [slideInOutAnimation],

    host: { '[@slideInOutAnimation]': '' }
})

export class CustomerDetailsComponent implements OnInit {
    model: User;
    loading = false;

    order: Bestelling;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private orderService: OrderService
    ) {

    }

    ngOnInit() {
        this.model = JSON.parse(sessionStorage.getItem("currentUser"));
        if(this.model.locatie == undefined) this.model.locatie = new Locatie("","",undefined,"","");

        this.orderService.order.subscribe(o=> this.order = o);
    }

    placeOrder(){
        this.order.locatie = this.model.locatie;
        this.order.customerId = this.model._id;
        this.order.status = "NEW";
        this.order.statusDescription = "Uw bestelling is geregistreerd en zal binnenkort verwerkt worden";
        this.orderService.create(this.order).subscribe(
            data => {
                if(this.model.ordersIds==undefined) this.model.ordersIds = [];
                this.model.ordersIds.push(data._id);
                sessionStorage.setItem("currentUser", JSON.stringify(this.model));
                console.log(this.model);
                this.userService.update(this.model).subscribe(
                    data =>{
                        this.alertService.success(this.order.statusDescription,true);
                        localStorage.removeItem("shoppingBag");
                        this.orderService.setOrder(null);
                        this.router.navigate(["/"]);
                    }
                )
            }
        )
    }
}
