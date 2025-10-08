import { NgModule } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  declarations: [],
  imports: [
    CarouselModule,
    TooltipModule,
    InputTextModule
  ],
  exports: [
    CarouselModule,
    TooltipModule,
    InputTextModule
  ]
})
export class PrimengModule { }
