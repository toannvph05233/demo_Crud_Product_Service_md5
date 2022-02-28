import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {ShowProductComponent} from "./show-product/show-product.component";

const routes: Routes = [
  {path: 'products', component: ShowProductComponent},
  {path: 'managerProduct', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
