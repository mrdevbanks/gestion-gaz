import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfilComponent } from './profil/profil.component';
import { HistoriqueComponent } from './historique/historique.component';
import { DepotComponent } from './depot/depot.component';
import { ListeDepotComponent } from './liste-depot/liste-depot.component';
import { InventaireComponent } from './inventaire/inventaire.component';
import { GerantComponent } from './gerant/gerant.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PasswordComponent,
    DashboardComponent,
    ProfilComponent,
    HistoriqueComponent,
    DepotComponent,
    ListeDepotComponent,
    InventaireComponent,
    GerantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
