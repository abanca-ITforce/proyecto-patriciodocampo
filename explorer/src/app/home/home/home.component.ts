import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private apiURL = 'https://api.worldbank.org/v2/country?per_page=1000&format=json';
  list: any = [];

  constructor(private httpClient: HttpClient) {
    this.getCountryList();
   }

  ngOnInit() {
  }

  private getCountryList() {
    this.httpClient
      .get(this.apiURL)
      .subscribe(data => this.list = data[1]);
  }

}
