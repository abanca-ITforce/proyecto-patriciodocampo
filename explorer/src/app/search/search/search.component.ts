import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryListService } from 'src/app/countryList.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  countries$: Observable<any[]>;
  incomeLevels$: Observable<any[]>;

  constructor(private countryListService: CountryListService) { }

  ngOnInit() {
    this.incomeLevels$ = this.countryListService.getIncomeLevels$();
  }

}
