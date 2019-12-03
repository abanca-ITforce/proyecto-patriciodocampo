import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country/country.component';
import { CurrentCardComponent } from './country/current-card/current-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [CountryComponent, CurrentCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    CountryRoutingModule
  ]
})
export class CountryModule { }
