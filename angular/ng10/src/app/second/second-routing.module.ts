import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LenovoComponent } from './lenovo/lenovo.component';

const routes: Routes = [
  { path: '', component: LenovoComponent } // /second/lenovo
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondRoutingModule { }
