import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.css']
})
export class CardDisplayComponent implements OnInit {
  @Input() region: any;
  constructor(private locationPoint: Location) { }
  totalCountries = 1;
  msg = {
    nocountries : 'This region has no registered countries.',
    countries: 'You can navigate into more countries from this region below.'
  };
  ngOnInit() {
    console.log('aa' + this.region.countries[0]);
  }
  goBackClick() {
    this.locationPoint.back();
  }
}
