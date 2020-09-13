import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage {

  
searchQuery: string = '';
items: string[];

constructor() {
  this.initializeItems();
}

initializeItems() {
  this.items = [
    'Amsterdam',
    'Bogota',
  ];
}
}