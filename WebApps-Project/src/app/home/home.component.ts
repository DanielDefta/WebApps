import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
   moduleId: module.id,
   templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
   currentUser: User;
   users: User[] = [];
    timerSubscription;

   constructor(private userService: UserService) {
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

   private subscribeToData(){
       this.timerSubscription = Observable.timer(2000).first().subscribe(()=> this.loadAllUsers());
   }
}