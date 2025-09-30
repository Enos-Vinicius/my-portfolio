import { NgModule } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [],
  imports: [
    CarouselModule,
    TooltipModule
  ],
  exports: [
    CarouselModule,
    TooltipModule
  ]
})
export class PrimengModule { }
