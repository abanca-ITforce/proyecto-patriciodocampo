import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryListService } from 'src/app/countryList.service';

// tslint:disable-next-line: use-pipe-transform-interface
@Component({
  selector: 'app-current-card',
  templateUrl: './current-card.component.html',
  styleUrls: ['./current-card.component.css']
})


export class CurrentCardComponent implements OnInit {
  populationGDPData$: Observable<any>;

  @Input() id: string;
  constructor() { }
  @Input() country: any;

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    console.log('url= https://www.google.com/maps/embed/v1/place?q=' + this.country.latitude + ',' + this.country.longitude + '&amp;key=AIzaSyB0QS1J_g6nqvt7vzARlPnvJCX69mF_bhs');
    // this.populationGDPData$ = this.countryListService.getPopulationGDP$(this.id);
    this.country.latitude = parseFloat(this.country.latitude);
    this.country.longitude = parseFloat(this.country.longitude);
  }


}
