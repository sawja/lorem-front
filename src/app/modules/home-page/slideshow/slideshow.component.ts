import { Component, OnInit, ViewChild} from '@angular/core';
import { SlideComponent } from '../slide/slide.component';
import { Slide } from 'src/app/shared/models/slide';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  @ViewChild(SlideComponent) slideComponent: SlideComponent;
  private description: string;
  private selectedIndex: number;
  private interval: any;
  slides: Slide[];
  range: number[];

  constructor() {
    this.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...';
    this.selectedIndex = 1;
    this.slides = [
      {
        imageSource: '/assets/images/slide1.jpg',
        description: this.description,
        author: 'Artist / Eiusmod Tempor',
        tags: ['lorem', 'ipsum']
      } as Slide,
      {
        imageSource: '/assets/images/slide2.jpg',
        description: this.description.split('').reverse().join(''),
        author: 'Developer / Dolore Magna',
        tags: ['consectetur', 'elit']
      } as Slide,
      {
        imageSource: '/assets/images/slide3.jpg',
        description: this.description.slice(5, 150),
        author: 'Manager / Adipiscing Incididunt',
        tags: ['dolor', 'aliqua']
      } as Slide,
      {
        imageSource: '/assets/images/slide4.jpg',
        description: this.description.split('').reverse().join(''),
        author: 'Guest / Aliqua Labore',
        tags: ['temport', 'sit']
      } as Slide    
    ]
    this.range = Array.from({length: this.slides.length}, (x, i) => i) // it only needs a property length
    //this.range = Array(this.slides.length).fill(0).map( (x, i) => i); // first create array filled with 0's then map
    //this.range = Array.from(Array(this.slides.length), (x, i) => i); // creates uncessesary temporary array 
   }

   ngOnInit() {
    this.initInterval();
  }

  switchSlide(): void {
    clearInterval(this.interval);
    this.initInterval();
    this.selectedIndex = (this.selectedIndex + 1) % this.slides.length;
  }

  initInterval(): void {
    this.interval = setInterval(() => { 
      this.selectedIndex = (this.selectedIndex + 1) % this.slides.length;
    }, 8000);
  }

}
