import { Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'; 
import { UserManagementComponent } from './services/user-management.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'search/:searchTerm', component: SearchComponent }, // <-- Add this route for search
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'user-management', component: UserManagementComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

