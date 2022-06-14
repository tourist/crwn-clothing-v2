import { Item } from '../cart/cart.types';

export interface Category {
  title: string;
  items: Item[];
  imageUrl: string;
  route: string;
}

export type Categories = Category[];
