import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageRoutingModule } from './products-page-routing.module';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { CategorySelectionComponent } from './category-selection/category-selection.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
    declarations: [ 
        ProductListComponent, 
        ProductsPageComponent, 
        CategorySelectionComponent, ProductDetailsComponent
    ],
    imports: [
      CommonModule,
      ProductsPageRoutingModule
    ],
    providers: [],
    bootstrap: []
  })
  export class ProductsPageModule { }