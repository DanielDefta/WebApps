import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { NgxPermissionsService } from 'ngx-permissions';

import { User } from '../_models/user';
import { Bedrijf } from '../_models/bedrijf';
import { Locatie } from '../_models/locatie';
import { UserService } from '../_services/user.service';
import { BedrijfService } from '../_services/bedrijf.service';

import { slideInOutAnimation } from '../_animations/slide-in-out.animation';
import { OrderService } from '../_services/order.service';
import { SocketService } from '../_services/socket.service';
import { Bestelling } from '../_models/bestelling';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',

    animations:[slideInOutAnimation],
    
        host: { '[@slideInOutAnimation]':''}
})

export class HomeComponent implements OnInit {
    currentUser: User;

    lat: number = 50.8944237;
    lng: number = 4.0711835999999995;

    constructor(private userService: UserService,
        private orderService: OrderService,
        private socketService: SocketService) {
        this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        if (this.currentUser.ordersIds != undefined) {
            this.currentUser.ordersIds.forEach(oId => {
                if (this.currentUser.orders === undefined) this.currentUser.orders = [];
                this.orderService.getById(oId).subscribe(
                    data => {
                        this.currentUser.orders.push(data);
                    }
                );
            });
            console.log(this.currentUser);
            this.socketService.on('receive-location', (data: any) => {
                console.log("fkdjnfdskjbfndsbfjkdsbds");
                let ord: Bestelling = this.currentUser.orders.find(o=>o._id === data.orderId);
                if(ord != undefined && ord != null){
                    ord.lat = data.lat;
                    ord.lng = data.lng;
                }
            });
        }    
    }

}