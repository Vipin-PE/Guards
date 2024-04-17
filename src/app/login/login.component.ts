import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  login() {
    const admin = { email: 'admin@example.com', password: 'admin123' };
    const user = { email: 'user@example.com', password: 'user123' };

    if (this.email === admin.email && this.password === admin.password) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userType', 'admin');
      this.router.navigate(['/settings']);
    } else if (this.email === user.email && this.password === user.password) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userType', 'user');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid email or password');
    }
  }
}
