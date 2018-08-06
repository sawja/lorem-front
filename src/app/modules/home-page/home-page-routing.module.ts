import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';

const homePageRoutes: Routes = [
  { path: 'home-page', component: HomePageComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(homePageRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    
  ]
})
export class HomePageRoutingModule { }