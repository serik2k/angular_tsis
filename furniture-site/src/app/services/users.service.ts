import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private baseUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  // Получение всех пользователей
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  // Создание нового пользователя
  createUser(user: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, user);
  }

  // Удаление пользователя по ID
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  // Обновление пользователя (если потребуется в будущем)
  updateUser(id: number, user: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, user);
  }
}
