import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
 
import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { NgxPermissionsModule} from 'ngx-permissions';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PushNotificationsModule} from 'angular2-notifications'
 
//import { customHttpProvider } from './_helpers/custom-http';
import { AlertComponent } from './_directives/alert.component';
import { AuthGuard } from './_guards/auth.guard';
import { AlertService } from './_services/alert.service';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';
import { BedrijfService } from './_services/bedrijf.service';
import { ConversationService} from './_services/conversation.service';
import { ProductService} from './_services/product.service';
import { SocketService} from './_services/socket.service';

import { OrderService} from './_services/order.service';

import { HeaderComponent } from './header/header.component';
import { WelcomeheaderComponent } from './header/welcomeheader.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MijnprofielComponent } from './mijnProfiel/mijnprofiel.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordrecoverComponent } from './passwordrecover/passwordrecover.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { BestellingAfdelingComponent } from './afdeling/bestelling/bestellingafdeling.component';
import { VerpakkingAfdelingComponent } from './afdeling/verpakking/verpakkingafdeling.component';
import { LeveringAfdelingComponent } from './afdeling/levering/leveringafdeling.component';
import { ChauffeurAfdelingComponent} from './afdeling/chauffeurs/chauffeur.component';
import { MaindashboardComponent } from './admin/dashboard/mainDashboard/maindashboard.component';
import { EmployeetableComponent } from './admin/employeetable/employeetable.component';
import { ChatComponent } from './chat/chat.component';
import { ShoppingbagComponent} from './shop/shoppingbag/shoppingbag.component';
import { PlaceOrderComponent } from './shop/placeorder/placeorder.component';
import { LoginRegisterComponent } from './shop/placeorder/loginregister/loginregister.component';
import { CustomerDetailsComponent } from './shop/placeorder/customerdetails/customerdetails.component';

import { NgDragDropModule } from 'ng-drag-drop';
import { AgmCoreModule } from '@agm/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

 
@NgModule({
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
        //customHttpProvider,
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
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    bootstrap: [AppComponent]
})
 
export class AppModule { }