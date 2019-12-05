import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryListService } from 'src/app/countryList.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-region-card',
  templateUrl: './region-card.component.html',
  styleUrls: ['./region-card.component.css']
})
export class RegionCardComponent implements OnInit {
  regionData$: Observable<any[]>;
  regionCountries$: Observable<any[]>;
  constructor(private countryListService: CountryListService, private rute: ActivatedRoute) { }

  ngOnInit() {
    const regCODE: string = this.rute.snapshot.params.IDreg;
    console.log(regCODE);
    this.regionData$ = this.countryListService.getDataFromRegion$(regCODE);
    this.regionCountries$ = this.countryListService.getCountriesFromRegion$(regCODE);
    // const regs: any = this.countryListService.getCountriesFromRegion$(regCODE).subscribe();
  }

}
