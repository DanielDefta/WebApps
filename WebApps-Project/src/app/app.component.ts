/* import { Component } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  users: Array<any>;

  constructor(private _dataService: DataService) {
    this._dataService.getUsers()
      .subscribe(res => this.users = res);
  }

  public addUser(name: string, email: string) {
    this._dataService.addUser(email, name)
      .subscribe(res => this.users = res);
  }
} */
import { Component } from '@angular/core';

@Component({
   moduleId: module.id,
   selector: 'app',
   templateUrl: 'app.component.html'
})

export class AppComponent { }
