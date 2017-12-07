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
    templateUrl: 'chauffeur.component.html',

    animations: [slideInOutAnimation],

    host: { '[@slideInOutAnimation]': '' }
})

export class ChauffeurAfdelingComponent implements OnInit {

    currentUser: User;

    constructor(
        private permissionsService: NgxPermissionsService,
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService,
        private orderService: OrderService,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));    
        if (this.currentUser.teLeverenOrdersIds != undefined) {
            this.currentUser.teLeverenOrdersIds.forEach(oId => {
                if (this.currentUser.teLeverenOrders === undefined) this.currentUser.teLeverenOrders = [];
                this.orderService.getById(oId).subscribe(
                    data => {
                        this.currentUser.teLeverenOrders.push(data);
                    }
                )
            })
        }    
        
    }
}