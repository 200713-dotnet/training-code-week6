import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FredComponent } from './fred/fred.component';
import { DerfComponent } from './derf/derf.component';
import { SecondModule } from './second/second.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FredComponent,
    DerfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SecondModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
