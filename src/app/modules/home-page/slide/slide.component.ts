import { Component, OnInit, Input } from '@angular/core';
import { Slide } from 'src/app/shared/models/slide';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  @Input() slide: Slide;
  toggleAnimation: boolean;
  
  constructor() {
    this.toggleAnimation = true;
  }

  ngOnInit() {
    
  }

  ngOnChanges() {
    this.toggleAnimation = !this.toggleAnimation;
    setTimeout(() => {
      this.toggleAnimation = !this.toggleAnimation;
    }, 20);
  }

}

