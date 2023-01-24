import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  options: any[] = [
    {name: 'Bangladesh', code: 'aa'},
    {name: 'India', code: 'bb'},
    {name: 'Pakistan', code: 'cc'},
    {name: 'Nepal', code: 'dd'},
    {name: 'Srilanka', code: 'ee'},
    {name: 'Afganistan', code: 'ff'},
    {name: 'Bhutan', code: 'gg'}
  ];

  title = 'PDropdown';
}
