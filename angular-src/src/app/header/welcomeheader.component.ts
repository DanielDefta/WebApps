import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Bestelling} from '../_models/bestelling';
import { OrderService} from '../_services/order.service';

@Component({
    selector: 'app-welcomeheader',
   moduleId: module.id,
   templateUrl: 'welcomeheader.component.html'
})

export class WelcomeheaderComponent implements OnInit{
    order : Bestelling;
    timerSubscription;
    

    constructor(
        private orderService: OrderService
    ){

    }

    ngOnInit(){
        this.orderService.order.subscribe(order => this.order = order);
    }

    

    
}