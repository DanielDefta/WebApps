import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';

import { slideInOutAnimation } from '../../_animations/slide-in-out.animation';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
 /*  animations: [slideInOutAnimation],

  host: { '[@slideInOutAnimation]': '' } */


})
export class DashboardComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  showMainDashboard: boolean = true ;
  showOtherDashboard: boolean = false;

  constructor(private userService: UserService) {
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
  private loadAllUsers() {
    this.userService.getAll().subscribe(users => { this.users = users; });
}

  //hieronder methoden om van "pagina" te veranderen
  showDashboardMain(show: boolean){
      this.showMainDashboard = !this.showMainDashboard;
      this.showOtherDashboard = !this.showMainDashboard;
  }
  showDashboardOther(show: boolean){
    this.showOtherDashboard = !this.showOtherDashboard;
    this.showMainDashboard = !this.showOtherDashboard;
}

}
