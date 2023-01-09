import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router";



@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  model: any = {
    name: '',
    login: '',
    role:'',
    ami:'',
    password: '',
  };
  constructor(private http:HttpClient,private toastr: ToastrService,private router: Router) {}

  onSubmit() {
    if (this.model.name == '' || this.model.login == '' || this.model.role == '' || this.model.password == ''){
      alert('veuillez remplir tous les champs du formulaire')
    }
    else {
      //important de mettre res:any sinon typescript mettra une erreur
      this.http.post('http://localhost:3000/AddPangolin', this.model).subscribe((res:any) => {
        console.log(res);
        console.log('inscription reussi')
        alert('inscription reussi');
        localStorage.setItem('token',res.token)
        this.router.navigate(['/login']);
      },error => {
        console.log(error);
        alert('inscription non reussi ')
      });
    }
  }
  redirectToLogin() {
    this.router.navigate(['/login']);
  }
}
