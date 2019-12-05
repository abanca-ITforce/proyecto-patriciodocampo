import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RegionCardComponent } from './region-card.component';
import { RegionCardRoutingModule } from './RegionCardRoutingModule';
import { CardDisplayComponent } from './card-display/card-display.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [RegionCardComponent, CardDisplayComponent],
  imports: [CommonModule, MatCardModule, RegionCardRoutingModule, MatToolbarModule, MatIconModule],
  exports: []
})
export class RegionCardModule {
}
