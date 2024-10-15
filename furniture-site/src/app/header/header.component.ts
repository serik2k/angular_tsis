import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Import AuthService
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class HeaderComponent {
  isLoggedIn: boolean = false;
  private subscription: Subscription;

  constructor(private router: Router, private authService: AuthService) {
    // Subscribe to the loggedIn$ observable to update isLoggedIn
    this.subscription = this.authService.loggedIn$.subscribe(
      (status) => {
        this.isLoggedIn = status;
      }
    );
  }

  logout() {
    this.authService.logout(); // Call logout from AuthService
    this.router.navigate(['/']); // Redirect to homepage after logout
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); // Clean up the subscription
  }
}


