import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';
 
@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private router: Router, private permissionsService: NgxPermissionsService) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            const perm = JSON.parse(localStorage.getItem('currentUser')).roles;
            this.permissionsService.addPermission(perm);
            return true;
        }
 
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}