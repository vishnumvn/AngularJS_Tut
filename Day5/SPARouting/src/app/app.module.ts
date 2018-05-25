import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { UmpireComponent } from './umpire/umpire.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { CSKComponent } from './csk/csk.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AuthorizeService } from './authorize.service';
import { ActivateService } from './activate.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    UmpireComponent,
    SponsorsComponent,
    CSKComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthorizeService, ActivateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
