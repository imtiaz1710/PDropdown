import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChages(){

  }

  submit(){
    this.select.emit(this.option);
    this.option = undefined;
    console.log('On Submit: ', this.option);
  }

  onHideDropdown(event){
    console.log('On hide:', event);
  }
}
