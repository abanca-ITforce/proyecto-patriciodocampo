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

  // countryMore$: Observable<any>;

  @Input() id: string;
  @Input() country: any;
  @Input() countryMore: any;

  // tslint:disable-next-line: variable-name
  constructor(private locationPoint: Location, private countryListService: CountryListService) { }
 kk = 'Loading...';
  ngOnInit() {
     setTimeout(() => {
        this.country.latitude = parseFloat(this.country.latitude);
        this.country.longitude = parseFloat(this.country.longitude);
      }, 1000);
    // this.countryMore$ = this.countryListService.getCountryMore$(this.country.id);
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: max-line-length
    // console.log('url= https://www.google.com/maps/embed/v1/place?q=' + this.country.latitude + ',' + this.country.longitude + '&amp;key=AIzaSyB0QS1J_g6nqvt7vzARlPnvJCX69mF_bhs');
    // this.populationGDPData$ = this.countryListService.getPopulationGDP$(this.id);


    // tslint:disable-next-line: max-line-length
    // if(this.country.more[1].value) { console.log('si: ' + this.country.more[1].value); } else { console.log('no: ' + this.country.more[1].value); }
    // this.countryMore[1].value = 'Not Aviable';
    // console.log('valor: ' + this.countryMore[1].value + ' // ' + 'valor2: ' + this.countryMore[1].indicator.value);
    // if (this.countryMore[1].value === '') { this.countryMore[1].value = 'Not Aviable'; }

    // const getMore$ = this.countryListService.getCountryMore$(this.id);
    // console.log(this.country.id);
    // this.countryMore$ = this.countryListService.getCountryMore$(this.country.id);
    // console.log('JSON: ' + JSON.stringify(this.countryMore$));
    // console.log('holaaa' + (this.countryMore));

  }
  goBackClick() {
    this.locationPoint.back();
  }
  pickLocation(event) {
    this.country.latitude = event.coords.lat;
    this.country.longitude = event.coords.lng;
    // this.country.more[1].value = 1;
  }
}
