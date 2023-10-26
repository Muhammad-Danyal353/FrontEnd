import { Component } from '@angular/core';
import { FoodService } from 'src/app/Services/food.service';
import { tag } from 'src/app/shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent {
  tags?: tag[];
  constructor(private foodService: FoodService) {
    this.tags = this.foodService.getAlltags();
  }
}
