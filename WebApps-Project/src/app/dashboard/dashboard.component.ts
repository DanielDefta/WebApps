import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

import {slideInOutAnimation} from '../_animations/slide-in-out.animation';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  animations:[slideInOutAnimation],
  
      host: { '[@slideInOutAnimation]':''}


})
export class DashboardComponent implements OnInit {
  currentUser: User;
  users : User[] = [];
  timerSubscription;

  constructor(private userService:UserService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
    this.loadAllUsers();
  
  }

  private loadAllUsers(){
    this.userService.getAll().subscribe(users => {this.users = users});
    this.subscribeToData();
  }

  private subscribeToData(){
    this.timerSubscription = Observable.timer(2000).first().subscribe(() => this.loadAllUsers());
  }

}
