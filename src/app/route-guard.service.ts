import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Cookie, CookieService } from 'ng2-cookies'

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(public router:Router) { }

  canActivate():boolean{
    if(Cookie.get('authtoken')===null || Cookie.get('authtoken')==='' || Cookie.get('authtoken')===undefined){
      this.router.navigate(['/login'])
    }

    else{
      return true;
    }

  }
}
