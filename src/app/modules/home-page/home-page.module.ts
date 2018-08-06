import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './home-page-routing.module';

import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SlideComponent } from './slide/slide.component';

@NgModule({
    declarations: [
        HomePageComponent,
        WelcomeComponent,
        AboutComponent,
        SlideshowComponent,
        SlideComponent
    ],
    imports: [
      CommonModule,
      HomePageRoutingModule
    ],
    providers: [],
    bootstrap: []
  })
  export class HomePageModule { }