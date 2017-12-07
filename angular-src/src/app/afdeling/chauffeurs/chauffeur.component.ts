import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { NgxPermissionsService } from 'ngx-permissions';
import { AlertService } from '../../_services/alert.service';

import { slideInOutAnimation } from '../../_animations/slide-in-out.animation';
import { OrderService } from '../../_services/order.service';
import { Bestelling } from '../../_models/bestelling';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { SocketService } from '../../_services/socket.service';
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    templateUrl: 'chauffeur.component.html',

    animations: [slideInOutAnimation],

    host: { '[@slideInOutAnimation]': '' }
})

export class ChauffeurAfdelingComponent implements OnInit {

    currentUser: User;
    lat: number;
    lng: number;
    watchId: number;


    timerSubscription;

    constructor(
        private permissionsService: NgxPermissionsService,
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService,
        private orderService: OrderService,
        private socketService: SocketService,
        private userService: UserService,
        private zone: NgZone
    ) { 
        this.lat = 0;
        this.lng = 0;
    }

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
        this.startWatchingLocation();
    }
    ngOnDestroy(){
        this.stopWatchingLocation();
    }


    pickUp(order: Bestelling){
        order.status = "ORDER PICKED UP";
        order.statusDescription = "Uw bestelling is onderweg"
        this.orderService.update(order).subscribe(
            data=>{
                this.alertService.success("U hebt order met id "+ order._id + "als onderweg gezet. De klant kan vanaf nu uw locatie live volgen");
            }
        );
    }

    deliver(order:Bestelling){
        order.status = "ORDER DELIVERED";
        order.statusDescription = "Uw bestelling is geleverd"
        order.chauffeurId = "";
        this.orderService.update(order).subscribe(
            data=>{
                this.alertService.success("U hebt order met id "+ order._id + "succesvol geleverd.");
                let index = this.currentUser.teLeverenOrdersIds.indexOf(order._id);
                if(index != -1){
                    this.currentUser.teLeverenOrdersIds.splice(index,1);
                    this.currentUser.teLeverenOrders.splice(index,1);
                }
            }
        );
    }

    private getDeviceLocation():Promise<any>{
        return new Promise((resolve, reject)=> {
            navigator.geolocation.getCurrentPosition(location => {
                resolve(location);
            }, error => {
                console.log(error);
            });
        });
    }

    public updateLocation(){
        this.getDeviceLocation().then(result => {
            this.lat = result.latitude;
            this.lng = result.longitude;
            this.currentUser.teLeverenOrders.forEach(o=>{
                if(o.status==="ORDER PICKED UP"){
                    let sendingInfo = {
                        orderId: o._id,
                        lat: this.lat,
                        lng: this.lng
                    };
                    this.socketService.emit("send-location", sendingInfo);
                }
            })
        })
    }

    public startWatchingLocation() {
        this.watchId = navigator.geolocation.watchPosition(location => {
            if(location) {
                this.zone.run(()=> {
                    this.lat = location.coords.latitude;
                    this.lng = location.coords.longitude;
                    this.currentUser.teLeverenOrders.forEach(o=>{
                        console.log(o);
                        if(o.status==="ORDER PICKED UP"){
                            let sendingInfo = {
                                orderId: o._id,
                                lat: this.lat,
                                lng: this.lng
                            };
                            this.socketService.emit("send-location", sendingInfo);
                        }
                    })
                    //socket.io
                });
            }
        }, error => {

        }, {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 27000
        });
    }

    public stopWatchingLocation() {
        if(this.watchId){
            navigator.geolocation.clearWatch(this.watchId);
            this.watchId = null;
        }
    }
}