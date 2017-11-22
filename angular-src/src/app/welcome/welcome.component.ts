import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 
import { Product} from '../_models/product';
import { Bestelling} from '../_models/bestelling';

import { AlertService } from '../_services/alert.service';
import { ProductService} from '../_services/product.service';
import { OrderService} from '../_services/order.service';

import {slideInOutAnimation} from '../_animations/slide-in-out.animation';
import {NgxPermissionsService} from 'ngx-permissions';
 
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

    producten : Product[];
 
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService,
        private productService: ProductService,
        private permissionsService: NgxPermissionsService,
        private orderService: OrderService) { }
 
    ngOnInit() {
        let artikelNrs = [
            "903.411.08",
            "303.411.06",
            "390.064.16",
            "303.529.15",
            "091.927.78"
        ];
        let naams = [
            "Chair EKEDALEN",
            "Chair EKEDALEN",
            "Corner desk right BEKANT",
            "Collage frame VÄXBO",
            "TV storage combination/glass doors BESTÅ"
        ];
        let omschrijvingen = [
            "Oak/ramna light grey",
            "Brown/ramna light grey",
            "Black-brown/white",
            "Collage frame for 8 photos. Holds 8 pictures so you can create your own personal collage.",
            "Black-brown/valviken grey-turquoise clear glass.\nThe drawers and doors have integrated push-openers, so you don’t need handles or knobs and can open them with just a light push."
        ];
        let prijzen = [
            45.00,
            45.00,
            190.00,
            4.95,
            545.00
        ];
        let imgUrls = [
            "http://www.ikea.com/gb/en/images/products/ekedalen-chair-oak-ramna-light-grey__0516608_pe640444_s3.jpg",
            "http://www.ikea.com/gb/en/images/products/ekedalen-chair-brown-ramna-light-grey__0516596_pe640434_s3.jpg",
            "http://www.ikea.com/gb/en/images/products/bekant-corner-desk-right-black-brown-white__0250498_pe388851_s3.jpg",
            "http://www.ikea.com/gb/en/images/products/växbo-collage-frame-for-8-photos-black__0473831_pe614779_s3.jpg",
            "http://www.ikea.com/gb/en/images/products/bestå-tv-storage-combination-glass-doors-black-brown-valviken-grey-turquoise-clear-glass__0413106_pe571696_s3.jpg"
        ];

        //for(let i =0;i<5;i++){
        //    let p: Product = new Product(artikelNrs[i],naams[i],omschrijvingen[i],imgUrls[i],prijzen[i]);
        //    this.productService.create(p).subscribe();
        //}

        this.productService.getAll().subscribe(data => this.producten = data);

        if(localStorage.getItem("currentUser")){
            let user = JSON.parse(localStorage.getItem("currentUser"));
            if(user){
                this.permissionsService.loadPermissions(user.roles);
            }
        }
        
    }

    order : Bestelling;
    addItem(id:string){
        this.order = JSON.parse(localStorage.getItem("shoppingBag"));
        if(this.order === undefined || this.order ===null)
            this.order = new Bestelling("",[]);
        
        let product: Product = this.producten.find(p=>p._id===id);
        this.order.producten.push(product);
        this.order.totaal+=product.prijs;
        this.order.totaal = parseFloat(this.order.totaal.toFixed(2));
        localStorage.setItem("shoppingBag", JSON.stringify(this.order));
        this.orderService.setOrder(this.order);
    }
}