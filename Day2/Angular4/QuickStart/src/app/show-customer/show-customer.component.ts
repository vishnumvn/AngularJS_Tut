import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerAPIService } from '../customer-api.service';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css']
})
export class ShowCustomerComponent implements OnInit {
   info: string;
   customerList: Customer[];
   tt: string;
  constructor(private service: CustomerAPIService) {
  }

  ngOnInit() {
    this.service.getCustomer().subscribe( d => this.customerList =  d);
    // this.tt = this.customerList.toString();
  }

  getInformation() {
    console.log('Hello');
    this.info = 'Click event binding';
  }
}
