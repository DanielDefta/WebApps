import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { User } from '../_models/user';
import { UserService } from '../_services/user.service';


import {slideInOutAnimation} from '../_animations/slide-in-out.animation';

@Component({
    moduleId: module.id,
    templateUrl: 'mijnprofiel.component.html',

    animations:[slideInOutAnimation],
   
    host: { '[@slideInOutAnimation]':''}
})

export class MijnprofielComponent implements OnInit {
   currentUser: User;
   users: User[] = [];
    timerSubscription;

   constructor(private userService: UserService) {
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.currentUser.online = true;
    this.userService.update(this.currentUser).subscribe();
   }

   ngOnInit() {
       //moet weg
       this.loadAllUsers();
   }

   //moet weg
   deleteUser(_id: string) {
       console.log(_id);
       this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
       this.loadAllUsers();
   }

   //moet weg
   private loadAllUsers() {
       this.userService.getAll().subscribe(users => { this.users = users; });
       this.subscribeToData();
   }

   //moet weg
   private subscribeToData(){
       this.timerSubscription = Observable.timer(2000).first().subscribe(()=> this.loadAllUsers());
   }
}