import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';
 
//auth guard wordt gebruikt in de routing
//als de methode canActivate een false terug geeft kan de user niet naar de gevraagde pagina gaan -> terug naar login indien het via url gebeurt/ niet kunnen klikken als het een link/button is 
@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private router: Router, private permissionsService: NgxPermissionsService) { }
 
    //kijken of er een user opgeslaan is in de local storage + toevoegen van de nodige permissions die de user geeft
    //permissions zorgen wat de user kan doen binnen de applicatie 
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