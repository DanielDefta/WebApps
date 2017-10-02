import { Component } from '@angular/core';
import { Router } from '@angular/router';
 
import {User} from '../_models/user';
import {Locatie} from '../_models/locatie';
import { AlertService } from '../_services/alert.service';
import { UserService } from '../_services/user.service';
 
@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})
 
export class RegisterComponent {
    model:User = new User("","","","","","","","","",new Locatie("","",undefined,"",""));
    loading = false;
 
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { 
        }
 
    register() {
        this.loading = true;
        console.log(this.model);
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}