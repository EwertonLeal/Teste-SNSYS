import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this.authenticationService.getToken();

    if (currentUser) {
      this.router.navigate(['/dashboard']);
      return false;
    }

    return true;
  }
}
