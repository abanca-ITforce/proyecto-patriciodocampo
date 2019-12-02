import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './country/country.component';


const routes: Routes = [
  {    path: '', component: CountryComponent  },
  {    path: ':ID3', loadChildren: () => import('./country.module').then(m => m.CountryModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
