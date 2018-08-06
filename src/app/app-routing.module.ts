import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '',   redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'products-page', loadChildren: './modules/products-page/products-page.module#ProductsPageModule'},
  { path: '**', redirectTo: 'home-page'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
