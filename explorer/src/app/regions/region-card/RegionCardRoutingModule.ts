import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegionCardComponent } from './region-card.component';

const routes: Routes = [{ path: ':IDreg', component: RegionCardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionCardRoutingModule { }
