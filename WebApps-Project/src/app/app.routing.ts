import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent} from './welcome/welcome.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { MijnprofielComponent} from './mijnProfiel/mijnprofiel.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordrecoverComponent} from './passwordrecover/passwordrecover.component';
import { AuthGuard } from './_guards/auth.guard';
import { NgxPermissionsGuard } from 'ngx-permissions';


const appRoutes: Routes = [
   { path: '', component: WelcomeComponent },
   { path: 'welcome', component: WelcomeComponent },
   { path: 'home', component: HomeComponent, canActivate: [AuthGuard, NgxPermissionsGuard],
    data:{
        permissions: {
            only: ['EMPLOYEE'],
            redirectTo: 'dashboard'
        }
    }},
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard, NgxPermissionsGuard],
    data:{
        permissions: {
            only: 'ADMIN',
            redirectTo: 'home'
        }
    }},
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },
   { path: 'passwordrecover' , component: PasswordrecoverComponent},
   { path: 'mijnprofiel', component: MijnprofielComponent, canActivate: [AuthGuard]},

   // otherwise redirect to home
   { path: '**', component: HomeComponent, canActivate: [AuthGuard, NgxPermissionsGuard],
   data:{
       permissions: {
           only: ['EMPLOYEE'],
           redirectTo: 'dashboard'
       }
   }}
];

export const routing = RouterModule.forRoot(appRoutes);