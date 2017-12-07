import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { NgxPermissionsService } from 'ngx-permissions';
import { AlertService } from '../../_services/alert.service';

import { slideInOutAnimation } from '../../_animations/slide-in-out.animation';
import { OrderService } from '../../_services/order.service';
import { Bestelling } from '../../_models/bestelling';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';

@Component({
    moduleId: module.id,
    templateUrl: 'leveringafdeling.component.html',

    animations: [slideInOutAnimation],

    host: { '[@slideInOutAnimation]': '' }
})

export class LeveringAfdelingComponent implements OnInit {

    orders: Bestelling[] = [];
    alleOrders: Bestelling[] = [];

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
                    if (o.chauffeurId=== null || o.chauffeurId === "") {
                        this.orders.push(o);
                    }
                });
                this.userService.getAll().subscribe(
                    data => {
                        data.forEach(u => {
                            if (u.roles.indexOf("CHAUFFEUR") != -1) {
                                this.chauffeurs.push(u);
                            }
                        });
                        this.vulOrdersOfDrivers();
                    }
                );
            }
        );
    }

    vulOrdersOfDrivers() {
        this.chauffeurs.forEach(c => {
            if (c.teLeverenOrdersIds != undefined) {
                c.teLeverenOrdersIds.forEach(o => {
                    if (c.teLeverenOrders === undefined) c.teLeverenOrders = [];
                    c.teLeverenOrders.push(this.alleOrders.find(x => x._id === o));
                })
            }
        })
    }

    onItemDrop(user: User, e: any) {
        // Get the dropped data here
        var index = this.orders.indexOf(e.dragData);
        if (index != -1) {
            this.orders.splice(index, 1);
        }
        e.dragData.chauffeurId = user._id;
        if (user.teLeverenOrders === undefined) user.teLeverenOrders = [];
        if (user.teLeverenOrdersIds === undefined || user.teLeverenOrdersIds === null) user.teLeverenOrdersIds = [];
        user.teLeverenOrders.push(e.dragData);
        user.teLeverenOrdersIds.push(e.dragData._id);

        this.orderService.update(e.dragData).subscribe();
        this.userService.update(user).subscribe();
    }
}