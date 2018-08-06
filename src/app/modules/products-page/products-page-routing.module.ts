import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './products-page/products-page.component';

const productsPageRoutes: Routes = [
    { path: '', component: ProductsPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(productsPageRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    
  ]
})
export class ProductsPageRoutingModule { }