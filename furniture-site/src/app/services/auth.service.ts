// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({ providedIn: 'root' })
// export class AuthService {
//   private readonly username = 'user';
//   private readonly password = 'password';

  
//   private loggedInSubject = new BehaviorSubject<boolean>(this.isLoggedIn());
//   loggedIn$ = this.loggedInSubject.asObservable();

//   constructor() {}

//   login(username: string, password: string): boolean {
//     if (username === this.username && password === this.password) {
//       localStorage.setItem('loggedIn', 'true');
//       this.loggedInSubject.next(true); 
//       return true;
//     }
//     return false;
//   }

//   logout(): void {
//     localStorage.removeItem('loggedIn');
//     this.loggedInSubject.next(false);
//   }

//   isLoggedIn(): boolean {
//     return localStorage.getItem('loggedIn') === 'true';
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://localhost:3000/users'; // Point to /users
  private loggedInSubject = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));
  loggedIn$ = this.loggedInSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.get<any[]>(this.baseUrl).pipe(
      map(users => {
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
          return user; // Return the matched user
        } else {
          throw new Error('Invalid credentials');
        }
      }),
      tap(user => {
        console.log('Login successful:', user); // Debug log
        localStorage.setItem('token', user.token); // Save token from user data
        this.loggedInSubject.next(true);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loggedInSubject.next(false);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
