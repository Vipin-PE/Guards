import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoggedIn: boolean = false; 
  
  logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userType');
    this.isLoggedIn = false;
  }

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }
}