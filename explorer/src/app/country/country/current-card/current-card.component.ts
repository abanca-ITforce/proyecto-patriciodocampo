import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryListService } from 'src/app/countryList.service';
import { Location } from '@angular/common';

// tslint:disable-next-line: use-pipe-transform-interface
@Component({
  selector: 'app-current-card',
  templateUrl: './current-card.component.html',
  styleUrls: ['./current-card.component.css']
})


export class CurrentCardComponent implements OnInit {

  @Input() id: string;
  // tslint:disable-next-line: variable-name
  constructor(private locationPoint: Location, private countryListService: CountryListService) { }
  @Input() country: any;

  countryMore$: Observable<any[]>;

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    console.log('url= https://www.google.com/maps/embed/v1/place?q=' + this.country.latitude + ',' + this.country.longitude + '&amp;key=AIzaSyB0QS1J_g6nqvt7vzARlPnvJCX69mF_bhs');
    // this.populationGDPData$ = this.countryListService.getPopulationGDP$(this.id);
    this.country.latitude = parseFloat(this.country.latitude);
    this.country.longitude = parseFloat(this.country.longitude);

    // const getMore$ = this.countryListService.getCountryMore$(this.id);
    this.countryMore$ = this.countryListService.getCountryMore$(this.id);
    // console.log('holaaa' + this.countryMore$[1].population);

  }
  goBackClick(){
    this.locationPoint.back();
  }
  pickLocation(event) {
    this.country.latitude = event.coords.lat;
    this.country.longitude = event.coords.lng;
    console.log(event);
  }


}
