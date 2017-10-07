import { Component, OnInit } from '@angular/core';
import {User} from '../_models/user';
import {UserService} from '../_services/user.service';
import { AlertService } from '../_services/alert.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
selector: 'app-passwordrecover',
   moduleId: module.id,
   templateUrl: 'passwordrecover.component.html'
})

export class PasswordrecoverComponent implements OnInit {
    model: User = new User("","","","","","","","","",undefined);
    emailIngediend:boolean;
    securityAnswersIngediend:boolean;
    loading:boolean;
    constructor(private userService: UserService,private alertService: AlertService, private route: ActivatedRoute,
        private router: Router,){
    }

    ngOnInit(){
    }

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