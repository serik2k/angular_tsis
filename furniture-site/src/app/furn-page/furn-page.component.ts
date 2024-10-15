import { Component, OnInit, inject} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { FurnService } from '../services/furn/furn.service';
import { Furn } from '../shared/Furn';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { TagsComponent } from '../tags/tags.component';
@Component({
  selector: 'app-furn-page',
  templateUrl: './furn-page.component.html',
  standalone: true,
  styleUrls: ['./furn-page.component.css'],
  imports: [CommonModule, RouterModule, NotFoundComponent, TagsComponent,]
})
export class FurnPageComponent implements OnInit {
  private route = inject(ActivatedRoute)
  furn!: Furn;

  constructor(
    private activatedRoute: ActivatedRoute,
    private furnService: FurnService,
    private cartService: CartService,
    private router: Router
  ) {
    
    activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.furn = furnService.getFurnById(params['id']);
      }
    });
  }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(
    );

  }

  addToCart(): void {
    this.cartService.addToCart(this.furn);
    this.router.navigateByUrl('/cart-page');
  }
}
