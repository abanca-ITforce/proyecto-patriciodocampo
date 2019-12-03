import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryListService } from '../../countryList.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countries$: Observable<any[]>;

  constructor(private countryListService: CountryListService) {}

  ngOnInit() {
    this.countries$ = this.countryListService.getCountries$();
  }
}
