import { Component, OnInit } from '@angular/core';

import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
    selector: 'app-header',
   moduleId: module.id,
   templateUrl: 'header.component.html'
})

export class HeaderComponent{
   currentUser: User;
   /*
   users: User[] = [];

   constructor(private userService: UserService) {
       this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }
   ngOnInit() {
    this.loadAllUsers();
   }

   private loadAllUsers() {
    this.userService.getAll().subscribe(users => { this.users = users; });
}*/
constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
}
}