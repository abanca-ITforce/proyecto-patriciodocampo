import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';
// import { CountryListService } from 'src/app/countryList.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {

// activatedRoute: ActivatedRoute, private countryListService: CountryListService

  constructor(private router: Router) { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    const urls = this.router.url;
    const urlsplit = urls.split('/');
    const apiURL = 'https://api.worldbank.org/v2/country?region=' + urlsplit[2] + '&per_page=1000&format=json';
    console.log(urlsplit[2]);
    console.log(apiURL);
  }

}
