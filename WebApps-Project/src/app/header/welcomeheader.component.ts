import { Component } from '@angular/core';


import { AlertService } from '../_services/alert.service';
import { BedrijfService } from '../_services/bedrijf.service';


import { User } from '../_models/user';
import {Bedrijf} from '../_models/bedrijf';
import {Locatie} from '../_models/locatie';
@Component({
    selector: 'app-welcomeheader',
   moduleId: module.id,
   templateUrl: 'welcomeheader.component.html'
})

export class WelcomeheaderComponent{
    /* bedrijf:Bedrijf;

   constructor(private bedrijfService: BedrijfService,private alertService: AlertService) {
       this.laadBedrijf();
   }

   private laadBedrijf() {
        console.log("1");
      this.bedrijfService.create(new Bedrijf("HoGent","Een omschrijving van deze bedrijf",new Locatie("","",9470,"",""))).subscribe(
         data => {
             this.alertService.success('Registration successful', true);
         },
         error => {
             this.alertService.error(error);
         }); 
     this.bedrijfService.getById("59d0096c0182fb29d177774f").subscribe(bedrijf => { this.bedrijf = bedrijf });
     console.log(this.bedrijf);
 } */
}