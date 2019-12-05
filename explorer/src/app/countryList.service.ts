import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryListService {

  constructor(private httpClient: HttpClient) { }

  getRegions$() {
    const url = `https://api.worldbank.org/v2/region/?format=json`;
    return this.httpClient.get<any[]>(url).pipe(map(result => result[1]));
  }
  getDataFromRegion$(code) {
    const url = `https://api.worldbank.org/v2/region/?format=json`;
    return this.httpClient.get<any[]>(url).pipe(map(result => result[1].filter(x => x.code === code)));
  }
  getCountriesFromRegion$(code) {
    const url = `https://api.worldbank.org/v2/country?region=${ code }&per_page=1000&format=json`;
    return this.httpClient.get<any[]>(url).pipe(map(result => result[1]));
  }
  getCountries$() {
    const url = `https://api.worldbank.org/v2/country/?per_page=1000&format=json`;
    return this.httpClient.get<any[]>(url).pipe(map(result => result[1].filter(x => x.capitalCity)));
  }
  getCountryById$(id) {
    const filterURL = `https://api.worldbank.org/v2/country/${ id }?per_page=1000&format=json`;
    return this.httpClient.get<any>(filterURL).pipe(map(result => result[1][0]));
  }

  getCountryMore$(id) {
    // tslint:disable-next-line: max-line-length
    const filterURL = `https://api.worldbank.org/v2/countries/${ id }/indicators/SP.POP.TOTL;NY.GDP.MKTP.CD/?source=2&date=2018&per_page=1000&format=json`;
    return this.httpClient.get<any>(filterURL).pipe(map(result => [result[1][0], result[1][1]]));
  }

}
