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

   constructor(private userService: UserService) {
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.currentUser.online = true;
    this.userService.update(this.currentUser).subscribe();
   }

   ngOnInit() {
       
   }

}