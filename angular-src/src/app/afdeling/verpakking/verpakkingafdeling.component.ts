import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 

import { NgxPermissionsService } from 'ngx-permissions';
import { AlertService } from '../../_services/alert.service';

import {slideInOutAnimation} from '../../_animations/slide-in-out.animation';
import { OrderService } from '../../_services/order.service';
import { Bestelling } from '../../_models/bestelling';
 
@Component({
    moduleId: module.id,
    templateUrl: 'verpakkingafdeling.component.html',

    animations:[slideInOutAnimation],

    host: { '[@slideInOutAnimation]':''}
})
 
export class VerpakkingAfdelingComponent implements OnInit {
    orders: Bestelling[]= [];
 
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
                        if (o.status === "VERWERKT") {
                            this.orders.push(o);
                        }
                    });
                }
            )
        }
    
        verwerkBestelling(order: Bestelling) {
            order.status = "KLAAR VOOR VERZENDING"
            order.statusDescription = "Uw order is verpakt en zal binnenkort verzonden worden";
            this.orderService.update(order).subscribe(
                data=>{
                    var index = this.orders.indexOf(order);
                    if (index != -1) {
                        this.orders.splice(index, 1);
                    }
                    this.alertService.success("U hebt order met id "+ order._id + "succesfull verpakt. Deze is doorgestuurd naar de levering afdeling")
                }
            );
        }
}