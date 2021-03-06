import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country/country.component';
import { CurrentCardComponent } from './country/current-card/current-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [CountryComponent, CurrentCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatIconModule,
    MatDividerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB0QS1J_g6nqvt7vzARlPnvJCX69mF_bhs'
    }),
    CountryRoutingModule
  ],
  exports: []
})
export class CountryModule { }
