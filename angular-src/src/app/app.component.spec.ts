import { TestBed, async } from '@angular/core/testing';
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

describe('AppComponent', () => {
  beforeEach(async(() => {
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
        { provide: APP_BASE_HREF, useValue: '/'}
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render an alert tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('cl-alert'));
  }));
  it('should render an router-outlet tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('router-outlet'));
  }));
});
