import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {ShortTextPipe} from "./pipes/short-text.pipe";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    ProductCardComponent,
    ShortTextPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ProductCardComponent,
    ShortTextPipe
  ]
})
export class SharedModule { }
