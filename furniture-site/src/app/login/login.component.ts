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

  // login() {
  //   this.authService.login(this.username, this.password).subscribe({
  //     next: (response) => {
  //       // если логин успешен, перенаправляем на главную страницу
  //       localStorage.setItem('auth_token', response.token);
  //       this.router.navigate(['/']);
  //       this.username = '';
  //       this.password = '';
  //     },
  //     error: (err) => {
  //       // если произошла ошибка (например, неверные данные)
  //       this.errorMessage = 'Неверные данные для входа. Попробуйте снова.';
  //     }
  //   });
  // }
  login(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        this.router.navigate(['/']); // Navigate to homepage after login
        this.username = '';
        this.password = '';
      },
      error: err => {
        this.errorMessage = 'Invalid username or password.';
        console.error(err.message);
      }
    });
  }
  
  
  
  onMouseEnter() {
    console.log('Mouse entered');
  }
  onMouseLeave() {
    console.log('Mouse left');
  }
}
