
import { routes } from './app.routing'
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { Router} from '@angular/router';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertComponent } from './_directives/alert.component';
import { routing } from './app.routing';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { BestellingAfdelingComponent } from './afdeling/bestelling/bestellingafdeling.component';
import { VerpakkingAfdelingComponent } from './afdeling/verpakking/verpakkingafdeling.component';
import { LeveringAfdelingComponent } from './afdeling/levering/leveringafdeling.component';
import { ChauffeurAfdelingComponent } from './afdeling/chauffeurs/chauffeur.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeheaderComponent } from './header/welcomeheader.component';
import { MijnprofielComponent } from './mijnProfiel/mijnprofiel.component';
import { PasswordrecoverComponent } from './passwordrecover/passwordrecover.component';
import { MaindashboardComponent } from './admin/dashboard/mainDashboard/maindashboard.component';
import { EmployeetableComponent } from './admin/employeetable/employeetable.component';
import { ChatComponent } from './chat/chat.component';
import { ShoppingbagComponent } from './shop/shoppingbag/shoppingbag.component';
import { PlaceOrderComponent } from './shop/placeorder/placeorder.component';
import { LoginRegisterComponent } from './shop/placeorder/loginregister/loginregister.component';
import { CustomerDetailsComponent } from './shop/placeorder/customerdetails/customerdetails.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgxPermissionsModule } from 'ngx-permissions';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PushNotificationsModule } from 'angular2-notifications';
import { NgDragDropModule } from 'ng-drag-drop';
import { AgmCoreModule } from '@agm/core/core.module';
import { APP_BASE_HREF } from '@angular/common';
import { AuthGuard } from './_guards/auth.guard';
import { AlertService } from './_services/alert.service';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';
import { BedrijfService } from './_services/bedrijf.service';
import { ConversationService } from './_services/conversation.service';
import { ProductService } from './_services/product.service';
import { SocketService } from './_services/socket.service';
import { OrderService } from './_services/order.service';



describe("App: router", () => {
    let router: Router;
    let location: Location;
    let fixure;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                routing,
                BrowserModule,
                FormsModule,
                HttpModule,
                NgxPermissionsModule.forRoot(),
                BrowserAnimationsModule,
                PushNotificationsModule,
                NgDragDropModule.forRoot(),
                AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyCfp0G7Yjzd6Sn20cOVtYCCc5-ZfO8WXMk'
                }),
            ],
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
                { provide: APP_BASE_HREF, useValue: '/'}
            ],
            schemas: [NO_ERRORS_SCHEMA],
        });

        router = TestBed.get(Router);
        location = TestBed.get(Location);
    
        fixure = TestBed.createComponent(AppComponent);
        router.initialNavigation();
    });
    it("first time is /context.html", fakeAsync( () => {
        router.navigate(['']);
        tick(100);
        location.forward();
        expect(location.path()).toBe('/context.html');
    }));
    
    it("navigating to '' should navigate to /welcome", fakeAsync( () => {
        router.navigate(['/welcome']);
        tick(100);
        location.forward();
        expect(location.path()).toBe('');
    }));
    it("navigating to '/welcome' should navigate to /welcome", fakeAsync( () => {
        router.navigate(['login']);
        tick(100);
        expect(location.path()).toBe('/welcome');
    }));
    it("navigating to '/login' should navigate to /login", fakeAsync( () => {
        router.navigate(['register']);
        tick(100);
        expect(location.path()).toBe('/login');
    }));
    it("navigating to '/register' should navigate to /register", fakeAsync( () => {
        router.navigate(['passwordrecover']);
        tick(100);
        expect(location.path()).toBe('/register');
    }));
    it("navigating to '/passwordrecover' should navigate to /passwordrecover", fakeAsync( () => {
        router.navigate(['placeorder']);
        tick(100);
        expect(location.path()).toBe('/passwordrecover');
    }));
    it("navigating to '/placeorder' should navigate to /placeorder", fakeAsync( () => {
        router.navigate(['dashboard']);
        tick(100);
        expect(location.path()).toBe('/placeorder');
    }));

}) 