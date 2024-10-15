import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly username = 'user';
  private readonly password = 'password';

  
  private loggedInSubject = new BehaviorSubject<boolean>(this.isLoggedIn());
  loggedIn$ = this.loggedInSubject.asObservable();

  constructor() {}

  login(username: string, password: string): boolean {
    if (username === this.username && password === this.password) {
      localStorage.setItem('loggedIn', 'true');
      this.loggedInSubject.next(true); 
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('loggedIn');
    this.loggedInSubject.next(false);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }
}
