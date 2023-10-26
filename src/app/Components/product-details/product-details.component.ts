import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { FoodService } from 'src/app/Services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  foods!: Food | undefined;
  route: any;
  constructor(
    private foodService: FoodService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.foods = this.foodService.getById(id);
  }
  addToCart(foods: Food) {
    this.cartService.addToCart(foods);
  }
}
