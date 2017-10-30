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
import { SocketService} from './_services/socket.service';

import { HeaderComponent } from './header/header.component';
import { WelcomeheaderComponent } from './header/welcomeheader.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MijnprofielComponent } from './mijnProfiel/mijnprofiel.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordrecoverComponent } from './passwordrecover/passwordrecover.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MaindashboardComponent} from './admin/dashboard/mainDashboard/maindashboard.component';
import {EmployeetableComponent} from './admin/employeetable/employeetable.component';
import { ChatComponent } from './admin/chat/chat.component';
 
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        NgxPermissionsModule.forRoot(),
        BrowserAnimationsModule,
        PushNotificationsModule
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
        EmployeetableComponent,
        ChatComponent
    ],
    providers: [
        //customHttpProvider,
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        BedrijfService,
        ConversationService,
        SocketService
    ],
    bootstrap: [AppComponent]
})
 
export class AppModule { }