
import { Component, OnInit } from '@angular/core';


import { slideRightLeftAnimation } from '../../../_animations/slide-right-left.animation';
import { UserService } from '../../../_services/user.service';
import { AlertService } from '../../../_services/alert.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../_services/authentication.service';
import { OrderService } from '../../../_services/order.service';

@Component({
    moduleId: module.id,
    selector: 'app-loginregister',
    templateUrl: 'loginregister.component.html',

    animations: [slideRightLeftAnimation],

    host: { '[@slideRightLeftAnimation]': '' }
})

export class LoginRegisterComponent implements OnInit {
    model: any = {};
    rmodel: any = {};
    showPassword: boolean = false;
    rShowPassword: boolean = false;
    rloading = false;
    lloading = false;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService,
        private orderService: OrderService
    ) {

    }

    ngOnInit() {

    }

    register() {
        this.rloading = true;
        console.log(this.rmodel);
        this.rmodel.roles = ['CUSTOMER']
        this.userService.create(this.rmodel)
            .subscribe(
            data => {
                this.alertService.success('Registration successful. Now you can log in and complete your personal information and finish your order', true);
                this.rloading = false;
                this.model = this.rmodel;
            },
            error => {
                console.log(error);
                this.alertService.error(error._body);
                this.rloading = false;
            });
    }

    login() {
        this.lloading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.authenticationService.storeUserData(data.token, data);
                    this.lloading = false;
                    this.orderService.setLoggedIn();
                },
                error => {
                    this.alertService.error(error._body);
                    this.lloading = false;
                });
    }

    //methode om het wachtwoord te tonen/verbergen
    toggleShowPassword(){
        this.showPassword = !this.showPassword;
    }
    rToggleShowPassword(){
        this.rShowPassword = !this.rShowPassword;
    }
}
