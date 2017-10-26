import { Component, OnInit } from '@angular/core';
import {User} from '../_models/user';
import {UserService} from '../_services/user.service';
import { AlertService } from '../_services/alert.service';
import { Router, ActivatedRoute } from '@angular/router';

import {slideInOutAnimation} from '../_animations/slide-in-out.animation';

@Component({
selector: 'app-passwordrecover',
   moduleId: module.id,
   templateUrl: 'passwordrecover.component.html',
   
   animations:[slideInOutAnimation],

   host: { '[@slideInOutAnimation]':''}
})

export class PasswordrecoverComponent implements OnInit {
    //nodig anders is user undefined..
    model: User = new User("","","","","","","","","",undefined);

    //booleans nodig om de juiste stappen te tonen
    emailIngediend:boolean;
    securityAnswersIngediend:boolean;
    loading:boolean;
    
    constructor(private userService: UserService,private alertService: AlertService, private route: ActivatedRoute,
        private router: Router,){
    }

    ngOnInit(){
    }

    //email sturen om te kijken of er een user bestaat met deze email
    //indien ja een aantal gegevens terug sturen zoals de beveiliginsvragen
    //verder gaan naar de volgonde stap -> beveiliginsvragen tonen
    sendEmail(){
        this.loading = true;
        this.userService.getByUsername(this.model).subscribe(
            data => {
                this.model = data;
                this.loading = false;
                this.emailIngediend = true;
            },
            error => {
                this.alertService.error(error);
                this.emailIngediend = false;
                this.loading = false;
            });
    }

    //aantwoorden op de beveiliginsvragen sturen
    //indien juist verder gaan naar de volgonde stap -> wachtwoord resetten
    sendSecurityAnswers(){
        this.loading = true;
        this.userService.sendSecurityAnswers(this.model).subscribe(
            data => {
                this.model = data;
                this.loading = false;
                this.securityAnswersIngediend = true;
            },
            error => {
                this.alertService.error(error);
                this.securityAnswersIngediend = false;
                this.loading = false;
            });
    }

    //wachtwoord resetten
    resetPassword(){
        this.loading = true;
        this.userService.resetPassword(this.model._id, this.model.password).subscribe(
            data => {
                this.router.navigate(['/login']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
}
}