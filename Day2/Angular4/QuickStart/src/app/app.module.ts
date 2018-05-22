import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ShowCustomerComponent } from './show-customer/show-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ShowCustomerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] // One component used to start while booting
})
export class AppModule { }
