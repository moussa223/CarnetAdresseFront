import { Component,OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-rolemodifer',
  templateUrl: './rolemodifer.component.html',
  styleUrls: ['./rolemodifer.component.css']
})
export class RolemodiferComponent implements OnInit{
  pangolinlogin: any
  model: any = {
    name: '',
    login: '',
    role:'',
    ami:'',
    password: '',
  };
  constructor(private http:HttpClient,private router: Router) {}
  ngOnInit() {

  }
  Submit(){
    this.pangolinlogin = localStorage.getItem('login')
    console.log(localStorage.getItem('login'))
    this.http.put('http://localhost:3000/Updatepangolin/'+this.pangolinlogin,{ role:this.model.role}).subscribe(response =>{
      console.log(response)
      alert('Role modifié, Veuillez le vérifier en cliquant sur afficher mon rôle ')
      this.router.navigate(['/home'])
      localStorage.setItem('role',this.model.role)
    })

  }
}
