import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService implements CanActivate{

  constructor(private router: Router) { 

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{   
    return true;
  }
}
