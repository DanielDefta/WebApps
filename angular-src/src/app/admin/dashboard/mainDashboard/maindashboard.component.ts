import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { User } from '../../../_models/user';
import { UserService } from '../../../_services/user.service';

import { slideInOutAnimation } from '../../../_animations/slide-in-out.animation';

@Component({
  selector: 'app-maindashboard',
  templateUrl: './maindashboard.component.html'


})
export class MaindashboardComponent implements OnInit {
  currentUser: User;

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.currentUser.online = true;
    this.userService.update(this.currentUser).subscribe();
  }

  ngOnInit() {

  }

}
