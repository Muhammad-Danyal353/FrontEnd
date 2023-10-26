// import { Injectable } from '@angular/core';
// import { Food } from '../shared/models/food';

// @Injectable({
//   providedIn: 'root',
// })
// export class TryService {
//   constructor() {}
//   foods: Food[] = [];
//   addtoCart(food: Food) {
//     let index = this.foods.findIndex((item) => item.id === food.id);
//     if (index === -1) {
//       food.quantity++;
//       this.foods.push(food);
//     } else {
//       this.foods[index].quantity += 1;
//     }
//   }
//   getItem() {
//     return this.foods;
//   }
//   ClearCart() {
//     this.foods = [];
//     return this.foods;
//   }
// }
