import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingRoutingModule } from './app-routing-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { CSKComponent } from '../csk/csk.component';
import { PlayersComponent } from '../players/players.component';
import { UmpireComponent } from '../umpire/umpire.component';
import { SponsorsComponent } from '../sponsors/sponsors.component';
import { ActivateService } from '../activate.service';

const routes: Routes = [
  {path: '', redirectTo: 'umpire', pathMatch: 'full'},
  {path: 'players/:team', component: PlayersComponent},
  {path: 'umpire', component: UmpireComponent, canActivate: [ActivateService]},
  {path: 'sponsors/:type', component: SponsorsComponent, canActivate: [ActivateService]},
  {path: '**', redirectTo: 'players'},
];

@NgModule({
  imports: [CommonModule, AppRoutingRoutingModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
