
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 

import { NgxPermissionsService } from 'ngx-permissions';
import { AlertService } from '../_services/alert.service';
import {AuthenticationService} from '../_services/authentication.service';

import {slideInOutAnimation} from '../_animations/slide-in-out.animation';
 
@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',

    animations:[slideInOutAnimation],

    host: { '[@slideInOutAnimation]':''}
})
 
export class LoginComponent implements OnInit {
    model: any = {};
    showPassword:boolean=false;
    loading = false;
    returnUrl: string;
 
    constructor(
        private permissionsService: NgxPermissionsService,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }
 
    ngOnInit() {
        // reset login status
 
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        
        if(this.returnUrl == "/") this.returnUrl = '/home';
    }
 
    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    toggleShowPassword(){
        this.showPassword = !this.showPassword;
        console.log(this.showPassword);
    }
}