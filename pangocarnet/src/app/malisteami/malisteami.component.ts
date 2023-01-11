import { Component,OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RoleService} from "../role.service";
import {Router} from "@angular/router";
import {AmiService} from "../ami.service";

@Component({
  selector: 'app-malisteami',
  templateUrl: './malisteami.component.html',
  styleUrls: ['./malisteami.component.css']
})
export class MalisteamiComponent implements OnInit{
  pangolin: any
  amiArray:any
  pangolinlogin : any;
    constructor(private http:HttpClient,private roleService:RoleService,private amiService:AmiService,private router:Router) {}
  ngOnInit() {
    this.pangolinlogin = localStorage.getItem('login')
    this.pangolin = localStorage.getItem('ami')
    this.amiArray = this.pangolin.split(",")
    //this.amiArray = Array.of(this.pangolin)
      console.log(localStorage.getItem('ami'))
  }

  deleteFriend(login:string,amiLogin:string){
    this.amiService.DeleteFriend(this.pangolinlogin,amiLogin).subscribe(response=>{
      console.log(response)
      localStorage.clear()
      alert('Ami supprimé, Veuillez vous reconnecter pour voir les modifications apportées')
      this.router.navigate(['/login'])
    })
  }
}
