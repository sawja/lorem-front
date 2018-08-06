import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Observable, of, Subscription, fromEvent } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  screenWidth: number;
  routesVisible: boolean;

  constructor(private renderer2: Renderer2) {
    fromEvent(window, 'resize')
      .pipe(
        map((event:any) => event.target.innerWidth),
        //debounceTime(500)
      ).subscribe(width => {
        this.screenWidth = width;
        this.checkDesign(this.screenWidth);
      })
    }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.checkDesign(this.screenWidth);
  }

  checkDesign(width: number): void {
    if (width > 720) {
      this.routesVisible = false;
    } else {
      this.routesVisible = true;
    }
  }

  toggleHamburger(): void {
    if (this.screenWidth <= 720) {
      this.routesVisible = !this.routesVisible;
    }
    
  }


}
