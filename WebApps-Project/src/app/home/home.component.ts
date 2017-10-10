import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { NgxPermissionsService } from 'ngx-permissions';

import { User } from '../_models/user';
import { Bedrijf } from '../_models/bedrijf';
import { Locatie } from '../_models/locatie';
import { UserService } from '../_services/user.service';
import { BedrijfService } from '../_services/bedrijf.service';

import {slideInOutAnimation} from '../_animations/slide-in-out.animation';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',

    animations:[slideInOutAnimation],
    
        host: { '[@slideInOutAnimation]':''}
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    timerSubscription;
    //bedrijf: Bedrijf = new Bedrijf("", "", new Locatie("", "", 10, "", ""));;

    constructor(private permissionsService: NgxPermissionsService, private userService: UserService, private bedrijfService: BedrijfService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.currentUser.online = true;
        this.userService.update(this.currentUser).subscribe();
    }

    ngOnInit() {
        this.loadAllUsers();
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.currentUser.online = true;
        this.userService.update(this.currentUser).subscribe();
    }

    deleteUser(_id: string) {
        console.log(_id);
        this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
        this.loadAllUsers();
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
        this.subscribeToData();
    }

    private subscribeToData() {
        this.timerSubscription = Observable.timer(2000).first().subscribe(() => this.loadAllUsers());
    }
}