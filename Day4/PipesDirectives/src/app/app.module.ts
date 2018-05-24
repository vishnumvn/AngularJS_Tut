import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CrudComponent } from './medicine/crud/crud.component';
import { ManageAPIService } from './Services/manage-api.service';
import { FilterMedPipe } from './pipes/filter-med.pipe';
import { InnerTextDirective } from './directives/inner-text.directive';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CrudComponent,
    FilterMedPipe,
    InnerTextDirective
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  providers: [ManageAPIService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
