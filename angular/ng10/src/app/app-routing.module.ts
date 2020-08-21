import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DerfComponent } from './derf/derf.component';
import { FredComponent } from './fred/fred.component';
import { LenovoComponent } from './second/lenovo/lenovo.component';

const routes: Routes = [
  { path: 'fred', component: FredComponent },
  { path: 'derf', component: DerfComponent },
  { path: 'second', loadChildren: () => import('./second/second.module').then(m => m.SecondModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
