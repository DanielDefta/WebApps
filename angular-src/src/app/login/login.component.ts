
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
        // login resetten
 
        // return url nemen
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        
        //als er geen retourn url is dan /home als standaard zetten
        if(this.returnUrl == "/") this.returnUrl = '/home';
    }
 
    //inloggen en indien gelukt verder gaan naar de return url
    
    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.authenticationService.storeUserData(data.token, data);
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error._body);
                    this.loading = false;
                });
    }

    //methode om het wachtwoord te tonen/verbergen
    toggleShowPassword(){
        this.showPassword = !this.showPassword;
        console.log(this.showPassword);
    }
}