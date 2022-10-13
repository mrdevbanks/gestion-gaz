import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepotComponent } from './depot/depot.component';
import { GerantComponent } from './gerant/gerant.component';
import { HistoriqueComponent } from './historique/historique.component';
import { InventaireComponent } from './inventaire/inventaire.component';
import { ListeDepotComponent } from './liste-depot/liste-depot.component';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [{ path:"login", component: LoginComponent },
{path:"password", component:PasswordComponent},
{path:"dashboard", component:DashboardComponent},
{path:"profil", component:ProfilComponent},
{path:"historique", component:HistoriqueComponent},
{path:"depot", component:DepotComponent},
{path:"listeDepot", component:ListeDepotComponent},
{path:"inventaire", component:InventaireComponent},
{path:"gerant", component:GerantComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
