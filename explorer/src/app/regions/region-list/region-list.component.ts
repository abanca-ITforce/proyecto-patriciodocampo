import { Component, OnInit, Input } from '@angular/core';
import { RegionsComponent } from '../regions.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.css']
})
export class RegionListComponent implements OnInit {
  @Input() regions: any;
  constructor() { }
  ngOnInit() {

  }

}
