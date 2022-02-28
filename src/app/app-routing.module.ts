import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductComponent} from "./product-module/product/product.component";
import {AuthGuard} from "./service/auth/auth.guard";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'product/:id', component: ProductComponent, canActivate:[AuthGuard]},
  { path: '', component: HomeComponent },
  {
    path: 'admin', loadChildren: ()=> import('./product-module/product-module.module').then(module => module.ProductModuleModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
