import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Customer} from './Customer';
// import 'rxjs/add/operator/map';
// import 'node_modules/rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CustomerAPIService {

  constructor(private service: HttpClient) {}

    getCustomer() {
      return this.service.get<Customer[]>('http://localhost:3000/customers/');
   }
}
