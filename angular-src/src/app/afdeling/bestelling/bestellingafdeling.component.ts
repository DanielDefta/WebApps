import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { NgxPermissionsService } from 'ngx-permissions';
import { AlertService } from '../../_services/alert.service';

import { slideInOutAnimation } from '../../_animations/slide-in-out.animation';
import { Bestelling } from '../../_models/bestelling';
import { OrderService } from '../../_services/order.service';

@Component({
    moduleId: module.id,
    templateUrl: 'bestellingafdeling.component.html',

    animations: [slideInOutAnimation],

    host: { '[@slideInOutAnimation]': '' }
})

export class BestellingAfdelingComponent implements OnInit {
    orders: Bestelling[] = [];
    newOrders: Bestelling[] = [];

    constructor(
        private permissionsService: NgxPermissionsService,
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService,
        private orderService: OrderService
    ) { }

    ngOnInit() {
        this.orderService.getAll().subscribe(
            data => {
                data.forEach(o => {
                    this.orders.push(o);
                    if (o.status === "NEW") {
                        this.newOrders.push(o);
                    }
                });
            }
        )
    }

    verwerkBestelling(order: Bestelling) {
        order.status = "VERWERKT"
        order.statusDescription = "Uw order is verwerkt en wordt nu verpakt";
        this.orderService.update(order).subscribe(
            data=>{
                this.alertService.success("U hebt order met id "+ order._id + "succesfull verwerkt. Deze is doorgestuurd naar de verpakking afdeling")
            }
        );
    }
}