import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownModule } from 'primeng/dropdown';
import { SingleSelectDropdownComponent } from './single-select-dropdown/single-select-dropdown.component';
import { DropdownPanelComponent } from './dropdown-panel/dropdown-panel.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    SingleSelectDropdownComponent,
    DropdownPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    AccordionModule,
    FormsModule,
    BrowserAnimationsModule,

  ],
  exports: [
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
