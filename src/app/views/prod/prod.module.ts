import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdRoutingModule } from './prod-routing.module';
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {ProductComponent} from "./product/product.component";
import {ProductsComponent} from "./products/products.component";


@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
    CommonModule,
    ProdRoutingModule
  ],
  exports: [
    ProdRoutingModule
  ]
})
export class ProdModule { }
