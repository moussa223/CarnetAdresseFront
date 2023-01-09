import { Injectable } from '@angular/core';
import {  CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authservice:AuthService,private _router:Router) {}
  canActivate(): boolean {
    // on verifie si le token est présent dans le local storage
    if(this._authservice.loggedIn()){
      return true
    }else {
      alert('Veuillez Vous connecter pour accéder à cette page !')
      console.log('Veuillez Vous connecter pour accéder à cette page !')
      this._router.navigate(['/login'])
      return false
    }
  }

}
