import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import { sample_foods, sample_tags } from 'src/data';
import { tag } from '../shared/models/tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}
  foods: Food[] = sample_foods;
  getAll(): Food[] {
    return sample_foods;
  }
  getItemsbySearch(searchTerm: string) {
    return this.getAll().filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  getAlltags(): tag[] {
    return sample_tags;
  }
  getAllFoodsbytags(tag: string): Food[] {
    return tag === 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tag));
  }
  getById(id: number): Food | undefined {
    // Find the food item with the matching ID in the foods array
    return this.getAll().find((food) => food.id === id);
  }
}
