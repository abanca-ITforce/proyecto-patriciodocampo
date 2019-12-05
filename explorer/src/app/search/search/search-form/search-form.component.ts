import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Input() incomeLevels: any[];

  @Output() filter = new EventEmitter<any>();

  filterForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.filterForm = this.formBuilder.group({
      incomeLevel: ''
    });
  }
  onSubmit() {
    const filter = this.filterForm.value;
    this.filter.emit(filter);
  }

}
