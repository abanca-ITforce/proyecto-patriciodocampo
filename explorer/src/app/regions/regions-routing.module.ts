import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegionsComponent } from './regions.component';


const routes: Routes = [
   {    path: '', component: RegionsComponent  },
   {    path: ':IDreg', loadChildren: () => import('./region-card/region-card.module').then(m => m.RegionCardModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionsRoutingModule { }
