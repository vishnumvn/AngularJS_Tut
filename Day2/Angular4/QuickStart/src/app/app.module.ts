import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ShowCustomerComponent } from './show-customer/show-customer.component';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { CustomerAPIService } from './customer-api.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ShowCustomerComponent
  ],
  imports: [
    BrowserModule,  HttpClientModule, FormsModule
  ],
  providers: [CustomerAPIService],
  bootstrap: [AppComponent] // One component used to start while booting
})
export class AppModule { }
