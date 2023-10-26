import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shared/models/food';
import { CartItem } from '../shared/models/cart-item';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  cart: Cart = this.getCartFromLocalStorage();
  cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  addToCart(food: Food): void {
    let cartItem = this.cart.items.find((item) => item.food.id === food.id);
    if (cartItem) return;
    this.cart.items.push(new CartItem(food));
    this.setCartToLocalStorage();
  }
  removeitemFromCart(foodId: number): void {
    this.cart.items = this.cart.items.filter((item) => item.food.id !== foodId);
    this.setCartToLocalStorage();
  }
  changeQuantity(foodId: number, quantity: number) {
    let CartItem = this.cart.items.find((item) => item.food.id === foodId);
    if (!CartItem) return;
    CartItem.quantity = quantity;
    CartItem.price = quantity * CartItem.food.price;
    this.setCartToLocalStorage();
  }
  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }
  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }
  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.price,
      0
    );
    this.cart.totalCount = this.cart.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.quantity,
      0
    );
    const cartJSON = JSON.stringify(this.cart);
    localStorage.setItem('cart', cartJSON);
    this.cartSubject.next(this.cart);
  }
  private getCartFromLocalStorage(): Cart {
    const cartjson = localStorage.getItem('Cart');
    return cartjson ? JSON.parse(cartjson) : new Cart();
  }
}
