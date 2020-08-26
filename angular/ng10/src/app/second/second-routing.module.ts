import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LenovoComponent } from './lenovo/lenovo.component';
import { ThinkpadComponent } from './thinkpad/thinkpad.component';

const routes: Routes = [
  { path: '', component: LenovoComponent }, // /second
  { path: 'thinkpad', component: ThinkpadComponent } // /second/thinkpad
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondRoutingModule { }
