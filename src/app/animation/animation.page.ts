import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.page.html',
  styleUrls: ['./animation.page.scss'],
})
export class AnimationPage implements OnInit {
  pet: any;

  constructor(
    
  ) { 
    
    this.pet = 'kittens';
  }

  ngOnInit() {
  }

}
