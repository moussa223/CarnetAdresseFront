import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router";
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  model: any = {
    login: '',
    password: '',
  };
  constructor(private http:HttpClient,private toastr: ToastrService,private router: Router) {}
  login() {
    this.http.post('http://localhost:3000/login', { login: this.model.login, password: this.model.password }).subscribe(
      (res:any) => {
        if (res) {
          // Login successful
          console.log(res)
          console.log('Authentification réussie');
          localStorage.setItem('token',res.token)
          localStorage.setItem('role',res.role)
          localStorage.setItem('login',res.login)
          localStorage.setItem('ami',res.ami)
          //alert('BRAVO ! Connexion reussi,vous sererz rediriger vers la HOME Page ')
          this.router.navigate(['/home']);
        }
      },
      (err) => {
        // la connexion a échoué, affichez un message d'erreur
        console.log(err)
        console.log("la connexion a échoué,  message d'erreur")
        alert('Oups ! la connexion a échoué, verifier bien que le mot de passe est correct ')
      }
    );
  }

  redirectToInscription() {
    this.router.navigate(['/']);
  }
}
