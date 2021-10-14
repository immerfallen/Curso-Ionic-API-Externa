import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [    
    { title: 'API Externa', url: 'api', icon: 'mail' },
    
  ];


  constructor() {}
}
