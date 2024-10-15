import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reset-link',
  templateUrl: './reset-link.component.html',
  standalone: true, // Marking it as a standalone component
  imports: [RouterModule] // Importing the RouterModule to use [routerLink]
})
export class ResetLinkComponent {
  resetLinkRoute: string = '/reset-password';
  resetLinkText: string = 'Click here to reset your password';
}
