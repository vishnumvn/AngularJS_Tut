import { Component, OnInit, ViewChild, AfterViewInit, AfterContentInit, ViewContainerRef, ViewRef } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { CompadderService } from '../compadder.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit, AfterContentInit {
  menuItems: string[];
  // View child implementation
  @ViewChild(MenuComponent) menu: MenuComponent; // Injecting Child component to parent.

  MessageHotel: string;
  rating: string;
  toChild: string ;
  hotelToReview: string;
  hotelList = ['Hotel1', 'Hotel2', 'Hotel3', 'Hotel4'];
  constructor(private adderService: CompadderService, private viewref: ViewContainerRef) {
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
    if (this.rating === undefined) {
      this.MessageHotel = 'We cant find in Our DB';
    } else {
      this.MessageHotel = '';
    }
  }

  ngAfterContentInit(): void {
    this.menuItems = this.menu.getMenu();
  }

  dynamicAdder(foodType) {
    this.adderService.setViewContainerRef(this.viewref);
    this.adderService.addComponent(foodType);
  }

}
