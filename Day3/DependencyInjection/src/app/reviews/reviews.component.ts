import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  @Input() selectedHotel: string;
  @Input() fromParent: string;
  @Input() hotelName: string;
  @Output() result: EventEmitter<string> = new EventEmitter<string>();

  rating: string;
  hotelReviews: Map<string, string>;

  constructor() {
    console.log('Child is initialized');
    // this.fromParent = 'review done';
    this.hotelReviews = new Map<string, string>();
    this.hotelReviews.set('Hotel1', '5');
    this.hotelReviews.set('Hotel2', '3');
    this.hotelReviews.set('Hotel3', '4.5');
    this.hotelReviews.set('Hotel4', '1');
   }

  ngOnInit() {
    console.log('Child ng init called');
    this.rating = this.hotelReviews.get(this.hotelName);
  }

  GetReview() {
    console.log('came to send review' + this.selectedHotel);
    this.result.emit(this.hotelReviews.get(this.selectedHotel));
  }

}
