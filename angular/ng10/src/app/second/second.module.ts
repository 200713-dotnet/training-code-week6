import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondRoutingModule } from './second-routing.module';
import { LenovoComponent } from './lenovo/lenovo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LenovoComponent],
  imports: [
    CommonModule,
    FormsModule,
    SecondRoutingModule
  ]
})
export class SecondModule { }
