import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { Cart } from 'src/app/shared/models/cart';
import { CartItem } from 'src/app/shared/models/cart-item';
// import { TryService } from 'src/app/Services/try.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cart!: Cart;
  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((newCart) => {
      this.cart = newCart;
    });
  }
  removeFromCart(cartItem: CartItem) {
    this.cartService.removeitemFromCart(cartItem.food.id);
  }
  changeQuantity(cartItem: CartItem, qunatityInstrring: string) {
    const quantity = parseInt(qunatityInstrring);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }
}
