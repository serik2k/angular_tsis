import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class UserManagementComponent implements OnInit {
  users: any[] = []; // Список пользователей
  newUserId: number = 0; // ID для нового пользователя
  newUsername: string = ''; // Имя для нового пользователя
  newEmail: string = ''; // Email для нового пользователя
  deleteUserId: number = 0; // ID пользователя для удаления

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    // Загружаем список пользователей при загрузке компонента
    this.fetchUsers();
  }

  // Получение списка пользователей
  fetchUsers(): void {
    this.usersService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        console.log('Fetched Users:', users);
      },
      error: (err) => console.error('Error fetching users:', err)
    });
  }

  // Добавление нового пользователя
  addUser(): void {
    const newUser = {
      id: this.newUserId,
      username: this.newUsername,
      email: this.newEmail
    };
    this.usersService.createUser(newUser).subscribe({
      next: (user) => {
        console.log('User Added:', user);
        this.fetchUsers(); // Обновляем список после добавления
      },
      error: (err) => console.error('Error adding user:', err)
    });
  }

  // Удаление пользователя по ID
  deleteUser(): void {
    this.usersService.deleteUser(this.deleteUserId).subscribe({
      next: () => {
        console.log('User Deleted');
        this.fetchUsers(); // Обновляем список после удаления
      },
      error: (err) => console.error('Error deleting user:', err)
    });
  }
}
