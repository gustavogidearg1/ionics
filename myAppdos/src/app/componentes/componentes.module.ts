import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenufloatComponent } from './menufloat/menufloat.component';

//https://www.cloudwebfactory.com/blog/menu-flotante-con-ionic-5-angular/

@NgModule({
  declarations: [MenufloatComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MenufloatComponent
  ]
})
export class ComponentesModule { }
