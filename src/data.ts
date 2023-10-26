import { Food } from './app/shared/models/food';
import { tag } from './app/shared/models/tag';
export const sample_foods: Food[] = [
  {
    id: 1,
    name: 'Pizza',
    price: 10,
    tags: ['Fast Food', 'Italian'],
    favorite: true,
    stars: 4,
    imageUrl: './assets/1.webp',
    origins: ['Italy'],
    cookTime: '20-30 minutes',
    quantity: 0,
  },
  {
    id: 2,
    name: 'Burger',
    price: 8,
    tags: ['Fast Food', 'American'],
    favorite: true,
    stars: 4.5,
    imageUrl: './assets/23.jpg',
    origins: ['USA'],
    cookTime: '15-20 minutes',
    quantity: 0,
  },
  {
    id: 3,
    name: 'Sushi',
    price: 15,
    tags: ['Japanese', 'Seafood'],
    favorite: false,
    stars: 5,
    imageUrl: './assets/2333.jpg',
    origins: ['Japan'],
    cookTime: '25-35 minutes',
    quantity: 0,
  },
  // ... continue with more instances ...
  {
    id: 4,
    name: 'Ice Cream',
    price: 5,
    tags: ['Dessert'],
    favorite: true,
    stars: 4.8,
    imageUrl: './assets/1.webp',
    origins: ['USA', 'Italy'],
    cookTime: '10-15 minutes',
    quantity: 0,
  },
  {
    id: 5,
    name: 'Pizza',
    price: 10,
    tags: ['Fast Food', 'Italian'],
    favorite: true,
    stars: 4,
    imageUrl: './assets/23.jpg',
    origins: ['Italy'],
    cookTime: '20-30 minutes',
    quantity: 0,
  },
  {
    id: 6,
    name: 'Burger',
    price: 8,
    tags: ['Fast Food', 'American'],
    favorite: true,
    stars: 4.5,
    imageUrl: './assets/2333.jpg',
    origins: ['USA'],
    cookTime: '15-20 minutes',
    quantity: 0,
  },
  {
    id: 7,
    name: 'Sushi',
    price: 15,
    tags: ['Japanese', 'Seafood'],
    favorite: false,
    stars: 5,
    imageUrl: './assets/1.webp',
    origins: ['Japan'],
    cookTime: '25-35 minutes',
    quantity: 0,
  },
  {
    id: 8,
    name: 'Pasta',
    price: 12,
    tags: ['Italian'],
    favorite: true,
    stars: 4.2,
    imageUrl: './assets/23.jpg',
    origins: ['Italy'],
    cookTime: '12-18 minutes',
    quantity: 0,
  },
  {
    id: 9,
    name: 'Taco',
    price: 7,
    tags: ['Mexican'],
    favorite: false,
    stars: 4.3,
    imageUrl: './assets/2333.jpg',
    origins: ['Mexico'],
    cookTime: '10-15 minutes',
    quantity: 0,
  },
  {
    id: 10,
    name: 'Salad',
    price: 6,
    tags: ['Healthy'],
    favorite: true,
    stars: 4.8,
    imageUrl: './assets/1.webp',
    origins: ['Greece'],
    cookTime: '8-10 minutes',
    quantity: 0,
  },
  {
    id: 11,
    name: 'Burrito',
    price: 9,
    tags: ['Mexican'],
    favorite: true,
    stars: 4.4,
    imageUrl: './assets/23.jpg',
    origins: ['Mexico'],
    cookTime: '15-20 minutes',
    quantity: 0,
  },
  {
    id: 12,
    name: 'Sandwich',
    price: 5,
    tags: ['Fast Food'],
    favorite: false,
    stars: 4.1,
    imageUrl: './assets/2333.jpg',
    origins: ['USA'],
    cookTime: '5-10 minutes',
    quantity: 0,
  },
  {
    id: 13,
    name: 'Fries',
    price: 4,
    tags: ['Fast Food'],
    favorite: true,
    stars: 4.6,
    imageUrl: './assets/1.webp',
    origins: ['Belgium'],
    cookTime: '18-25 minutes',
    quantity: 0,
  },
  {
    id: 14,
    name: 'Ice Cream',
    price: 5,
    tags: ['Dessert'],
    favorite: true,
    stars: 4.8,
    imageUrl: './assets/23.jpg',
    origins: ['USA', 'Italy'],
    cookTime: '10-15 minutes',
    quantity: 0,
  },
  // ... continue with more instances ...
  {
    id: 15,
    name: 'Sushi Burrito',
    price: 14,
    tags: ['Japanese', 'Mexican'],
    favorite: false,
    stars: 4.7,
    imageUrl: './assets/2333.jpg',
    origins: ['Japan', 'Mexico'],
    cookTime: '20-25 minutes',
    quantity: 0,
  },
];

export const sample_tags: tag[] = [
  { name: 'FastFood', count: 6 },
  { name: 'Japanese', count: 7 },
  { name: 'Mexican', count: 9 },
  { name: 'Sushi Rolls', count: 5 },
  { name: 'Healthy', count: 4 },
  { name: 'Italian', count: 5 },
  { name: 'Dessert', count: 8 },
  { name: 'American', count: 9 },
  { name: 'Seafood', count: 9 },
  { name: 'All', count: 30 },
];