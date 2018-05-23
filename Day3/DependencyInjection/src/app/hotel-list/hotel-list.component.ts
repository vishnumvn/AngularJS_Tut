import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  rating: string;
  toChild: string ;
  hotelToReview: string;
  hotelList = ['Hotel1', 'Hotel2', 'Hotel3', 'Hotel4'];
  constructor() {
    this.toChild = 'review from Parent';
    console.log('Parent is initialized');
   }

  ngOnInit() {
    console.log('Parent ng init');
  }
  LoadHotels() {
    alert('Hotel Loaded');
  }

  onchange(val) {
    this.rating = val;
  }
}
