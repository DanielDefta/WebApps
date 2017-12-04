import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 

import { NgxPermissionsService } from 'ngx-permissions';
import { AlertService } from '../../_services/alert.service';

import {slideInOutAnimation} from '../../_animations/slide-in-out.animation';
import { OrderService } from '../../_services/order.service';
import { Bestelling } from '../../_models/bestelling';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
 
@Component({
    moduleId: module.id,
    templateUrl: 'leveringafdeling.component.html',

    animations:[slideInOutAnimation],

    host: { '[@slideInOutAnimation]':''}
})
 
export class LeveringAfdelingComponent implements OnInit {

    orders: Bestelling[] = [];
    alleOrders:Bestelling[] = [];

    chauffeurs: User[] = [];
 
    constructor(
        private permissionsService: NgxPermissionsService,
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService,
        private orderService: OrderService,
        private userService: UserService
    ) { }
 
        ngOnInit() {
            this.orderService.getAll().subscribe(
                data => {
                    data.forEach(o => {
                        this.alleOrders.push(o);
                        if (o.status === "KLAAR VOOR VERZENDING") {
                            this.orders.push(o);
                        }
                    });
                }
            )
            this.userService.getAll().subscribe(
                data => {
                    data.forEach(u => {
                        if(u.roles.indexOf("CHAUFFEUR")!=-1){
                            this.chauffeurs.push(u);
                        }
                        
                    });
                }
            )
            
        }

        onItemDrop(user: User, e: any) {
            // Get the dropped data here
            var index = this.orders.indexOf(e.dragData);
            if( index != -1){
                this.orders.splice(index,1);
            }
            if(user.teLeverenOrders===undefined) user.teLeverenOrders = [];
            user.teLeverenOrders.push(e.dragData);
        }
}