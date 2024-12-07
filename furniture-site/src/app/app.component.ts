import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

import { RatingModule } from 'ng-starrating';


Notification.requestPermission().then(permission => {
  if (permission === 'granted') {
    console.log('Push notifications granted.');
  }
});


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})


export class AppComponent {
  title = 'furn';
}
