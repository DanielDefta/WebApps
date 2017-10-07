import { Component, OnInit } from '@angular/core';

import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

import {Bedrijf} from '../_models/bedrijf';
import {Locatie} from '../_models/locatie';

import { AlertService } from '../_services/alert.service';
import { BedrijfService } from '../_services/bedrijf.service';

@Component({
    selector: 'app-header',
    moduleId: module.id,
    templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {
    currentUser: User;
    bedrijf: Bedrijf = new Bedrijf("","",undefined);
    constructor(private userService: UserService,private bedrijfService: BedrijfService,private alertService: AlertService) {
    }

    ngOnInit(){
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if(this.currentUser)
            this.laadBedrijf();
    }
    private laadBedrijf() {
     /* this.bedrijfService.create(new Bedrijf("HoGent","Een omschrijving van deze bedrijf",new Locatie("","",9470,"",""))).subscribe(
         data => {
             this.alertService.success('Registration successful', true);
         },
         error => {
             this.alertService.error(error);
         }); */
     this.bedrijfService.getById("59d0096c0182fb29d177774f").subscribe((bedrijf) => { this.bedrijf = bedrijf });
 }

    
}