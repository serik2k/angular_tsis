import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { FurnPageComponent } from './app/furn-page/furn-page.component';
import { CartPageComponent } from './app/cart-page/cart-page.component';
import { NotFoundComponent } from './app/not-found/not-found.component';
import { SearchComponent } from './app/search/search.component';
import { LoginComponent } from './app/login/login.component';
import { provideHttpClient } from '@angular/common/http';
import { UserManagementComponent } from './app/services/user-management.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tag/:tag', component: HomeComponent },
  { path: 'furn/:id', component: FurnPageComponent },
  { path: 'cart-page', component: CartPageComponent },
  { path: 'search/:searchTerm', component: SearchComponent },
  { path: 'user-management', component: UserManagementComponent },
  { path: '**', component: NotFoundComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient() // Use provideHttpClient here
  ]
}).then(() => {
  // Регистрация кастомного Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/custom-service-worker.js').then(
        (registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        },
        (err) => {
          console.error('Service Worker registration failed:', err);
        }
      );
    });
  }
  
  
});
