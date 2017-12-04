import { Component, OnInit } from '@angular/core';


import { AuthenticationService } from '../_services/authentication.service';

import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

import { Bedrijf } from '../_models/bedrijf';
import { Locatie } from '../_models/locatie';

import { AlertService } from '../_services/alert.service';
import { BedrijfService } from '../_services/bedrijf.service';


import { PushNotificationsService } from 'angular2-notifications';
import { SocketService } from '../_services/socket.service';


@Component({
    selector: 'app-header',
    moduleId: module.id,
    templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {
    aantalNotificaties: number;
    notificaties: any[] = [];
    currentUser: User;
    users: User[] = [];
    bedrijf: Bedrijf = new Bedrijf("", "", undefined);
    constructor(private userService: UserService,
        private bedrijfService: BedrijfService,
        private alertService: AlertService,
        private authenticationService: AuthenticationService,
        private pushNotification: PushNotificationsService,
        private socketService: SocketService)
    {
        this.pushNotification.requestPermission();
    }

    ngOnInit() {
        this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        this.notificaties = JSON.parse(sessionStorage.getItem('notificaties'));
        if(this.notificaties===null) this.notificaties = [];
        this.aantalNotificaties = JSON.parse(sessionStorage.getItem('aantalNotificaties'));
        if (this.currentUser) {
            this.loadAllUsers();
            
        }


        this.socketService.on('message-received', (msg: any) => {
            if(this.currentUser === undefined || this.currentUser === null){
                this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
            }
            if (msg.naar === this.currentUser._id) {
                let options = { //set options
                    body: msg.message,
                    icon: "assets/user.png",
                    vibrate: [200, 100, 200]
                }
                let naam = this.users.find(u => u._id === msg.van).firstName + this.users.find(u => u._id === msg.van).lastName;
                this.pushNotification.create('New message from ' + naam, options).subscribe();
                if(this.aantalNotificaties===undefined) this.aantalNotificaties=0;
                this.aantalNotificaties++;
                this.notificaties.push({message:msg.message, from: naam})
                localStorage.setItem('notificaties', JSON.stringify(this.notificaties));
                localStorage.setItem('aantalNotificaties', JSON.stringify(this.aantalNotificaties));
            }
        });
    }
    private laadBedrijf() {
        /* this.bedrijfService.create(new Bedrijf("HoGent","Een omschrijving van deze bedrijf",new Locatie("","",9470,"",""))).subscribe(
            data => {
                this.alertService.success('Registration successful', true);
            },
            error => {
                this.alertService.error(error);
            }); */
        this.bedrijfService.getById("59d0096c0182fb29d177774f").subscribe((bedrijf) => { this.bedrijf = bedrijf });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; 
            this.currentUser.online = true;
            this.userService.update(this.currentUser).subscribe();
            this.laadBedrijf();
        });
    }

    logout() {
        this.authenticationService.logout();
    }

    readNotifications(){
        this.aantalNotificaties=null; 
        localStorage.setItem('aantalNotificaties', JSON.stringify(this.aantalNotificaties));
    }

}