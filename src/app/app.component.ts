import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mainMenu: {
    accessLink: Array<any>
  } = {accessLink: []  };
  ngOnInit(): void {
    this.mainMenu.accessLink = [
      {
        name: 'Home',
        router: ['/'],
        style: 'nav-link active'
      },
      {
        name: 'AboutUs',
        router: ['/', 'aboutUs'],
        style: 'nav-link'
      },
      {
        name: 'Contact',
        router: ['/', 'contact'],
        style: 'nav-link'
      }
    ]
  }
}
