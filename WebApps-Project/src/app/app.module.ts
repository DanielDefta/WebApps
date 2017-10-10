/* import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
//bootstrap
import{AlertModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
 
import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { NgxPermissionsModule} from 'ngx-permissions';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { customHttpProvider } from './_helpers/custom-http';
import { AlertComponent } from './_directives/alert.component';
import { AuthGuard } from './_guards/auth.guard';
import { AlertService } from './_services/alert.service';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';
import { BedrijfService } from './_services/bedrijf.service';

import { HeaderComponent } from './header/header.component';
import { WelcomeheaderComponent } from './header/welcomeheader.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MijnprofielComponent } from './mijnProfiel/mijnprofiel.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordrecoverComponent } from './passwordrecover/passwordrecover.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import {EmployeetableComponent} from './admin/employeetable/employeetable.component';

 
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        NgxPermissionsModule.forRoot(),
        BrowserAnimationsModule
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
        EmployeetableComponent
    ],
    providers: [
        customHttpProvider,
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        BedrijfService
    ],
    bootstrap: [AppComponent]
})
 
export class AppModule { }