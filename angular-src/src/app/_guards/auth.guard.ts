import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AuthenticationService} from '../_services/authentication.service';
import {NgxPermissionsService} from 'ngx-permissions';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private authService:AuthenticationService, private router:Router,private permissionsService: NgxPermissionsService){

  }

  canActivate(){
    console.log("true");
    if(this.authService.loggedIn()){
      console.log("true");
      if (sessionStorage.getItem('currentUser')) {
        console.log("true");
        // logged in so return true
        const perm = JSON.parse(sessionStorage.getItem('currentUser')).roles;
        this.permissionsService.addPermission(perm);
      }
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
