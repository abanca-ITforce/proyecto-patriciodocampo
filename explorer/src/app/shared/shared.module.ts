import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [CountriesListComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatListModule
  ],
  exports: [CountriesListComponent]
})
export class SharedModule { }
