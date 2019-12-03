import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private httpClient: HttpClient) {
    this.getCountryList();
   }
  private apiURL = 'https://api.worldbank.org/v2/country?per_page=1000&format=json';
  list: any = [];
  public countryList$: Observable<any> = null;
  // region = null;
  // incomeLevel = null;
  // lendingType = null;

  ngOnInit() {
  }

  private getCountryList() {
    this.getFilteredList(null, null, null);
  }

  public getFilteredList(region, incomeLevel, lendingType) {

    // tslint:disable-next-line: max-line-length
    const filterURL = `https://api.worldbank.org/v2/country?per_page=1000&format=json`;
    this.httpClient
      .get<any>(filterURL)
      .subscribe(data => this.list = data[1]);
  }

}
