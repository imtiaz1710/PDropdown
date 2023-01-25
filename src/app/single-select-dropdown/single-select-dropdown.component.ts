import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { Dropdown } from 'primeng/dropdown';

@Component({
  selector: 'app-single-select-dropdown',
  templateUrl: './single-select-dropdown.component.html',
  styleUrls: ['./single-select-dropdown.component.scss']
})
export class SingleSelectDropdownComponent implements OnInit {
  @Input() options: any[];
  @Output() select: EventEmitter<any> = new EventEmitter();
  option: any;
  @ViewChild('dropdown', {static: false}) dropdownRef: Dropdown;

  constructor() { }

  ngOnInit(): void {
    console.log('On init: ', this.option);
    console.log('On init: ', this.dropdownRef);
  }

  submit(){
    console.log('On Submit option: ', this.option);
    console.log('On Submit dropdown ref: ', this.dropdownRef);
    this.select.emit(this.option);
    this.option = undefined;
    this.dropdownRef.value = undefined;
  }

  onHideDropdown(event){
    console.log('On hide:', event);
  }
}
