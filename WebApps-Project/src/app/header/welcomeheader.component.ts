import { Component, OnInit } from '@angular/core';

import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
    selector: 'app-welcomeheader',
   moduleId: module.id,
   templateUrl: 'welcomeheader.component.html'
})

export class WelcomeheaderComponent{
   /* currentUser: User;
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
}