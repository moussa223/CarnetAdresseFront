import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AmiService {
  pangolinlogin: any
  constructor(private http:HttpClient) { }

  addFriend(login:string,amiLogin:string){
    this.pangolinlogin = localStorage.getItem('login')
    return this.http.put('http://localhost:3000/addfriend/'+this.pangolinlogin+'/'+amiLogin,{amiLogin});
  }
}
