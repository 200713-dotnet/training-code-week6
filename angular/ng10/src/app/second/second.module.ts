import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondRoutingModule } from './second-routing.module';
import { LenovoComponent } from './lenovo/lenovo.component';
import { FormsModule } from '@angular/forms';
import { ThinkpadComponent } from './thinkpad/thinkpad.component';
import { HttpClientModule } from '@angular/common/http';
import { DotnetPipe} from './dotnet/dotnet.pipe';


@NgModule({
  declarations: [LenovoComponent, ThinkpadComponent, DotnetPipe],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SecondRoutingModule
  ]
})
export class SecondModule { }
