import { Component, OnInit, Input } from '@angular/core';
import { CountryListService } from 'src/app/countryList.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  regionList$: Observable<any[]>;
  @Input() regions: any[];
  constructor(private countryListService: CountryListService) { }

  ngOnInit() {
    this.regionList$ = this.countryListService.getRegions$();
  }

}
