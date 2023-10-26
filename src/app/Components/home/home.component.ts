import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { FoodService } from 'src/app/Services/food.service';
import { Cart } from 'src/app/shared/models/cart';
import { Food } from 'src/app/shared/models/food';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private foodService: FoodService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        this.foods = foodService.getItemsbySearch(params.searchTerm);
      else if (params.tag)
        this.foods = this.foodService.getAllFoodsbytags(params.tag);
      else this.foods = this.foodService.getAll();
    });
  }
  foods: Food[] = [];
  food!: Food;
  addToCart(food: Food) {
    this.cartService.addToCart(food);
    // alert('Item is added to Cart');
  }
  ngOnInit() {}
}
