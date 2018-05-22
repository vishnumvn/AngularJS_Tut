import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css']
})
export class ShowCustomerComponent implements OnInit {

   p1: Customer;
   p2: Customer;
   info: string;
  constructor() {
    this.p1 = {'customerId': 11, 'customerName': 'P1_name', 'image': '../assets/images/p1.png' };
    this.p2 = {'customerId': 22, 'customerName': 'P2_name', 'image': '../assets/images/p2.png' };
  }

  ngOnInit() {
  }

  getInformation() {
    console.log('Hello');
    this.info = 'Click event binding';
  }
}
