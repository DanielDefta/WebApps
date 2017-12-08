import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { AlertComponent } from '../_directives/alert.component';
import { routing } from '../app.routing';
import { WelcomeComponent } from '../welcome/welcome.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { BestellingAfdelingComponent } from '../afdeling/bestelling/bestellingafdeling.component';
import { VerpakkingAfdelingComponent } from '../afdeling/verpakking/verpakkingafdeling.component';
import { LeveringAfdelingComponent } from '../afdeling/levering/leveringafdeling.component';
import { ChauffeurAfdelingComponent } from '../afdeling/chauffeurs/chauffeur.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { HeaderComponent } from '../header/header.component';
import { WelcomeheaderComponent } from '../header/welcomeheader.component';
import { MijnprofielComponent } from '../mijnProfiel/mijnprofiel.component';
import { PasswordrecoverComponent } from '../passwordrecover/passwordrecover.component';
import { MaindashboardComponent } from '../admin/dashboard/mainDashboard/maindashboard.component';
import { EmployeetableComponent } from '../admin/employeetable/employeetable.component';
import { ChatComponent } from '../chat/chat.component';
import { ShoppingbagComponent } from '../shop/shoppingbag/shoppingbag.component';
import { PlaceOrderComponent } from '../shop/placeorder/placeorder.component';
import { LoginRegisterComponent } from '../shop/placeorder/loginregister/loginregister.component';
import { CustomerDetailsComponent } from '../shop/placeorder/customerdetails/customerdetails.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PushNotificationsModule } from 'angular2-notifications';
import { NgDragDropModule } from 'ng-drag-drop';
import { AgmCoreModule } from '@agm/core/core.module';
import { APP_BASE_HREF } from '@angular/common';
import { AuthGuard } from '../_guards/auth.guard';
import { AlertService } from '../_services/alert.service';
import { AuthenticationService } from '../_services/authentication.service';
import { UserService } from '../_services/user.service';
import { BedrijfService } from '../_services/bedrijf.service';
import { ConversationService } from '../_services/conversation.service';
import { ProductService } from '../_services/product.service';
import { SocketService } from '../_services/socket.service';
import { OrderService } from '../_services/order.service';
import { Product } from '../_models/product';
import { By } from '@angular/platform-browser/src/dom/debug/by';
import { prepareProfile } from 'selenium-webdriver/firefox';
import { Observable } from 'rxjs/Observable';

describe('WelcomeComponent', () => {
    let comp:    WelcomeComponent;
    let fixture: ComponentFixture<WelcomeComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                AlertComponent,
                HeaderComponent,
                WelcomeheaderComponent,
                WelcomeComponent,
                MijnprofielComponent,
                HomeComponent,
                LoginComponent,
                RegisterComponent,
                PasswordrecoverComponent,
                DashboardComponent,
                MaindashboardComponent,
                BestellingAfdelingComponent,
                VerpakkingAfdelingComponent,
                LeveringAfdelingComponent,
                ChauffeurAfdelingComponent,
                EmployeetableComponent,
                ChatComponent,
                ShoppingbagComponent,
                PlaceOrderComponent,
                LoginRegisterComponent,
                CustomerDetailsComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                HttpModule,
                routing,
                NgxPermissionsModule.forRoot(),
                BrowserAnimationsModule,
                PushNotificationsModule,
                NgDragDropModule.forRoot(),
                AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyCfp0G7Yjzd6Sn20cOVtYCCc5-ZfO8WXMk'
                }),
            ],
            providers: [
                AuthGuard,
                AlertService,
                AuthenticationService,
                UserService,
                BedrijfService,
                ConversationService,
                ProductService,
                SocketService,
                OrderService,
                {  provide: APP_BASE_HREF, useValue: '/' }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(WelcomeComponent);
        comp    = fixture.componentInstance;

        let productService = fixture.debugElement.injector.get(ProductService);
        
          // Setup spy on the `getQuote` method
        let spy = spyOn(productService, 'getAll')
                .and.returnValue(fakeSubscribe([new Product("903.411.08","Chair EKEDALEN","Oak/ramna light grey","http://www.ikea.com/gb/en/images/products/ekedalen-chair-oak-ramna-light-grey__0516608_pe640444_s3.jpg",45.00)],0));

    });
    it('should render title in a h1 tag', (() => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('A Warm Welcome!');
    }));

    it('producten list length should be 1', () => {
        fixture.detectChanges();
        expect(comp.producten.length).toBe(1);
    });
});


function fakeSubscribe(returnValue,errorValue) {
    return {
      subscribe:function(callback){
        callback(returnValue);
      }
    }
  }

class MockProductService{
    
    getAll(){
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
        let producten : Product[] = [];
        for(let i =0;i<5;i++){
            let p: Product = new Product(artikelNrs[i],naams[i],omschrijvingen[i],imgUrls[i],prijzen[i]);
            producten.push(p);
        }

        return fakeSubscribe(producten,0);
    }
}
