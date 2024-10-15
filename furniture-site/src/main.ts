import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { FurnPageComponent } from './app/furn-page/furn-page.component';
import { CartPageComponent } from './app/cart-page/cart-page.component';
import { NotFoundComponent } from './app/not-found/not-found.component';
import { SearchComponent } from './app/search/search.component';
import { LoginComponent } from './app/login/login.component'; // Import LoginComponent


const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent }, // Add route for LoginComponent
  { path: 'tag/:tag', component: HomeComponent },
  { path: 'furn/:id', component: FurnPageComponent },
  { path: 'cart-page', component: CartPageComponent },
  { path: 'search/:searchTerm', component: SearchComponent },
  { path: '**', component: NotFoundComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)  
  ]
});
