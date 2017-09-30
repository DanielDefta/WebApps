import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 
import { AlertService } from '../_services/alert.service';
 
@Component({
    moduleId: module.id,
    templateUrl: 'welcome.component.html'
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