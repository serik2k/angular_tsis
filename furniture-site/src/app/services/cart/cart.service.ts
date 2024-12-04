import { Component, Injectable } from '@angular/core';
import { Cart } from '../../shared/Cart';
import { CartItem } from '../../shared/CartItem';
import { Furn } from '../../shared/Furn';

@Injectable({
  providedIn: 'root'
})
@Component({
  
  template: `<div (mouseenter)="onMouseEnter()" (mouseleave)="onMouseLeave()">Hover over me</div>`,
})
export class CartService {
  private cart:Cart = new Cart();
  
  addToCart(furn: Furn):void{
    let cartItem = this.cart.items.find(item => item.furn.id === furn.id);
    if(cartItem){
      this.changeQuantity(furn.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(furn));
  }

  removeFromCart(furnId:number): void{
    this.cart.items = 
    this.cart.items.filter(item => item.furn.id != furnId);
  }

  changeQuantity(furnId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.furn.id === furnId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }
  onMouseEnter() {
    console.log('Mouse entered');
  }
  onMouseLeave() {
    console.log('Mouse left');
  }
}
