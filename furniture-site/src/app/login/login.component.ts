import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service'; // Import your AuthService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService) {} 

  login() {
    console.log('Login method called');
    
    
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/']); 
      this.username = ''; 
      this.password = ''; 
    } else {
      this.errorMessage = 'Invalid login credentials. Please try again.';
    }
  }
  onMouseEnter() {
    console.log('Mouse entered');
  }
  onMouseLeave() {
    console.log('Mouse left');
  }
}
