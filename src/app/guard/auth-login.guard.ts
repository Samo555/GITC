import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginGuard implements CanActivate {

  constructor(public router: Router) {

  }

  canActivate() {
    if(localStorage.getItem('access_token')) {
      this.router.navigateByUrl('/profile');
      return false;
    }
    return true;
  }
  
}
