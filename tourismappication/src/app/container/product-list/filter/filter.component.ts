import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
@Input() all: any;
@Input() heighestRated: any;
@Input() mostBooked: any;

selectedFilterRadioButton : string ='all';
}
