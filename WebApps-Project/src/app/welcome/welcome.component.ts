import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 
import { AlertService } from '../_services/alert.service';

import {slideInOutAnimation} from '../_animations/slide-in-out.animation';
 
@Component({
    moduleId: module.id,
    templateUrl: 'welcome.component.html',

    animations:[slideInOutAnimation],

    host: { '[@slideInOutAnimation]':''}
    
})
 
export class WelcomeComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
 
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService) { }
 
    ngOnInit() {
    }
}