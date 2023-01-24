import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-panel',
  templateUrl: './dropdown-panel.component.html',
  styleUrls: ['./dropdown-panel.component.scss']
})
export class DropdownPanelComponent implements OnInit {
 @Input()  options: any[];

  selectedList: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(event){
    this.selectedList.push(event);
    const index = this.options.findIndex(o => o == event);

    if(index != -1) {
      this.options.splice(index, 1);
      this.options = [...this.options];
    } 
  }

  removeFromSelection(option){
    this.options.push(option);
    this.options = [...this.options];
    
    const index = this.selectedList.findIndex(o => o == option);

    if(index != -1) {
      this.selectedList.splice(index, 1);
      //this.options = [...this.options];
    } 
  }

  // removeElementFromArray(array: any[], elementToRemove: any){
  //   const index = array.findIndex(o => o == elementToRemove);

  //   if(index != -1) {
  //     array.splice(index, 1);
  //     array = [...array];
  //   } 
  // }
  
}
