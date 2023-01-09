import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InscriptionComponent} from "./inscription/inscription.component";
import {ConnexionComponent} from "./connexion/connexion.component";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [{path: '', component: InscriptionComponent },
  { path: 'login', component: ConnexionComponent },
  { path: 'home', component: HomeComponent,canActivate:[AuthGuard] } //canActive verifie si l'utilisateur est connecté
  // en verifiant si le token est présent dans le local storage
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
