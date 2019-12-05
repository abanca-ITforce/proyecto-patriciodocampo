import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionsRoutingModule } from './regions-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RegionListComponent } from './region-list/region-list.component';
import { RegionsComponent } from './regions.component';
import { MatListModule } from '@angular/material/list';
import { RegionCardModule } from './region-card/region-card.module';

@NgModule({
  declarations: [RegionsComponent, RegionListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RegionCardModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    RegionsRoutingModule
  ],
  exports: []
})
export class RegionsModule { }
