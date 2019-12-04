import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryListService {

  constructor(private httpClient: HttpClient) { }

  getCountries$() {
    const url = `https://api.worldbank.org/v2/country/?per_page=1000&format=json`;
    return this.httpClient.get<any[]>(url).pipe(map(result => result[1]));
  }
  getCountryById$(id) {
    const filterURL = `https://api.worldbank.org/v2/country/${ id }?per_page=1000&format=json`;
    return this.httpClient.get<any>(filterURL).pipe(map(result => result[1][0]));
  }

  getCountryMore$(id) {
    // tslint:disable-next-line: max-line-length
    const filterURL = `https://api.worldbank.org/v2/countries/${ id }/indicators/SP.POP.TOTL;NY.GDP.MKTP.CD/?source=2&date=2018&per_page=1000&format=json`;
    this.httpClient.get<any>(filterURL).pipe(map(result => {
      const data = {
        population : result[1][0],
        GPD: result[1][1],
      };
      return data;
    }
      ));
  }

}
