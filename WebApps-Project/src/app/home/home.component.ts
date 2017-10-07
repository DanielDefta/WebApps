import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { User } from '../_models/user';
import { Bedrijf } from '../_models/bedrijf';
import { Locatie } from '../_models/locatie';
import { UserService } from '../_services/user.service';
import { BedrijfService } from '../_services/bedrijf.service';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    timerSubscription;
    //bedrijf: Bedrijf = new Bedrijf("", "", new Locatie("", "", 10, "", ""));;

    constructor(private userService: UserService, private bedrijfService: BedrijfService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
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