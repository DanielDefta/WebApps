import { Component, OnInit } from '@angular/core';

import { AlertService } from '../_services/alert.service';

import { trigger, state, animate, transition, style } from '@angular/animations';
import { Observable } from 'rxjs/Observable';

@Component({
   moduleId: module.id,
   selector: 'alert',
   templateUrl: 'alert.component.html',

   animations: [trigger(
    'openClose',
    [
      state('collapsed, void', style({top:'-400%'})),
      state('expanded', style({top:'50px'})),
      transition(
          'collapsed <=> expanded', [animate('0.5s ease-in-out'), animate('0.5s ease-in-out')])
    ])],
})

export class AlertComponent {
    stateExpression: string;
    message: any;

    timerSubscription;

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.alertService.getMessage().subscribe(message => { this.message = message; this.expand()});
    }

    expand() { 
        this.stateExpression = 'expanded'; 
        this.subscribeToData();
    }
    collapse() { 
        this.stateExpression = 'collapsed';
        this.timerSubscription.unsubscribe();
    }


    private subscribeToData() {
        this.timerSubscription = Observable.timer(4000).first().subscribe(() => this.collapse());
    }
}