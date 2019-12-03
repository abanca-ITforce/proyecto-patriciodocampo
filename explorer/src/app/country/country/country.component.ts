import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
// import { ActivatedRoute } from '@angular/router';
// import { CountryListService } from 'src/app/countryList.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {

// activatedRoute: ActivatedRoute, private countryListService: CountryListService

  constructor(private router: Router, private httpClient: HttpClient) { }

  list: any = [];
  urlsplit = this.router.url.split('/');
  apiURL = 'https://api.worldbank.org/v2/country?region=' + this.urlsplit[2] + '&per_page=1000&format=json';
  // console.log(urlsplit[2]);
  // console.log(apiURL);
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.getCountryDetails();
  }
  public getCountryDetails() {

    // tslint:disable-next-line: max-line-length
    const filterURL = `https://api.worldbank.org/v2/country?&per_page=1000&format=json`;
    this.httpClient
      .get<any>(filterURL)
      .subscribe(data => {
        console.log(data[1]);
        // tslint:disable-next-line: max-line-length
        this.httpClient.get<any>(JSON.stringify(data[1])).pipe(filter(ctr => ctr.id === this.urlsplit[2])).subscribe(data2 => console.log(data2));
      });
  }
}
