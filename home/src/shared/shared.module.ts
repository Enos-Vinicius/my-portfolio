import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from './external-libs/primeng.module';
import { MaterialModule } from './external-libs/material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    PrimengModule,
    MaterialModule
  ]
})
export class SharedModule { }
