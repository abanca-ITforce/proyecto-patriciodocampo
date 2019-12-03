import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CountryListService } from 'src/app/countryList.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {

  countryData$: Observable<any>;
  constructor(private rute: ActivatedRoute, private countryListService: CountryListService) { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    const countryID = this.rute.snapshot.params.IDE;
    this.countryData$ = this.countryListService.getCountryById$(countryID);
    console.log(JSON.stringify(this.countryListService.getCountryById$(countryID)));
    // const countryID = this.activatedRoute.snapshot.params.countryId;
    // this.countryData$ = this.countryListService.getCountryById$(countryID);
  }

}
