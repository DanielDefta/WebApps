import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent} from './welcome/welcome.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { BestellingAfdelingComponent } from './afdeling/bestelling/bestellingafdeling.component';
import { HomeComponent } from './home/home.component';
import { MijnprofielComponent} from './mijnProfiel/mijnprofiel.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordrecoverComponent} from './passwordrecover/passwordrecover.component';
import { PlaceOrderComponent } from './shop/placeorder/placeorder.component';
import { AuthGuard } from './_guards/auth.guard';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { ChatComponent } from './chat/chat.component';
import { VerpakkingAfdelingComponent } from './afdeling/verpakking/verpakkingafdeling.component';
import { LeveringAfdelingComponent } from './afdeling/levering/leveringafdeling.component';
import { ChauffeurAfdelingComponent} from './afdeling/chauffeurs/chauffeur.component';



const appRoutes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard, NgxPermissionsGuard],
    data:{
        permissions: {
            only: ['ADMIN'],
            redirectTo: 'afdeling/bestelling'
        }
    }},
    { path: 'afdeling/bestelling', component: BestellingAfdelingComponent, canActivate: [AuthGuard, NgxPermissionsGuard],
    data:{
        permissions: {
            only: ['BESTELLING'],
            redirectTo: 'afdeling/verpakking'
        }
    }},
    { path: 'afdeling/verpakking', component: VerpakkingAfdelingComponent, canActivate: [AuthGuard, NgxPermissionsGuard],
    data:{
        permissions: {
            only: ['VERPAKKING'],
            redirectTo: 'afdeling/levering'
        }
    }},
    { path: 'afdeling/levering', component: LeveringAfdelingComponent, canActivate: [AuthGuard, NgxPermissionsGuard],
    data:{
        permissions: {
            only: ['LEVERING'],
            redirectTo: 'afdeling/chauffeur'
        }
    }},
    { path: 'afdeling/chauffeur', component: ChauffeurAfdelingComponent, canActivate: [AuthGuard, NgxPermissionsGuard],
    data:{
        permissions: {
            only: ['CHAUFFEUR'],
            redirectTo: 'home'
        }
    }},
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard, NgxPermissionsGuard],
    data:{
        permissions: {
            only: ['CUSTOMER'],
            redirectTo: 'login'
        }
    }},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'passwordrecover' , component: PasswordrecoverComponent},
    { path: 'mijnprofiel', component: MijnprofielComponent, canActivate: [AuthGuard]},
    { path: 'messenger', component: ChatComponent, canActivate: [AuthGuard]},
    { path: 'placeorder', component: PlaceOrderComponent},

   // otherwise redirect to home
    { path: '**', component: DashboardComponent, canActivate: [AuthGuard, NgxPermissionsGuard],
    data:{
       permissions: {
           only: ['ADMIN'],
           redirectTo: 'afdeling/bestelling'
       }
    }}
];

export const routing = RouterModule.forRoot(appRoutes);
export const routes = appRoutes;