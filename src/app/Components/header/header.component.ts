import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { FoodService } from 'src/app/Services/food.service';
// import { TryService } from 'src/app/Services/try.service';
import { tag } from 'src/app/shared/models/tag';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  searchTerm = '';
  tags?: tag[]; //code for tag filter
  constructor(
    activatedRoute: ActivatedRoute,
    private router: Router,
    private foodService: FoodService,
    public cartService: CartService
  ) {
    this.tags = this.foodService.getAlltags(); //code for tag filter
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) this.searchTerm = params.searchTerm;
    });
  }
  search(term: string) {
    if (term) this.router.navigateByUrl('/search/' + term);
  }
}
