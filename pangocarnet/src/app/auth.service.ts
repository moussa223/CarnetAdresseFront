import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  loggedIn(){
    return !!localStorage.getItem('token') // la syntaxe retourne true or false
  }
  getToken(){
    return localStorage.getItem('token')
  }
}
