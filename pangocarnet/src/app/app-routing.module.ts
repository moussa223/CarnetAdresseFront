import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InscriptionComponent} from "./inscription/inscription.component";
import {ConnexionComponent} from "./connexion/connexion.component";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./auth.guard";
import {RoleComponent} from "./role/role.component";
import {AmiComponent} from "./ami/ami.component";
import {RolemodiferComponent} from "./rolemodifer/rolemodifer.component";
import {MalisteamiComponent} from "./malisteami/malisteami.component";

const routes: Routes = [{path: '', component: InscriptionComponent },
  { path: 'login', component: ConnexionComponent },
  { path: 'home', component: HomeComponent,canActivate:[AuthGuard] } //canActive verifie si l'utilisateur est connecté
  // en verifiant si le token est présent dans le local storage
  ,{ path: 'role', component: RoleComponent,canActivate:[AuthGuard] },
  { path: 'UpdateRole', component: RolemodiferComponent,canActivate:[AuthGuard] },
  { path: 'ami', component: AmiComponent,canActivate:[AuthGuard] },
  { path: 'mesamis', component: MalisteamiComponent,canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
