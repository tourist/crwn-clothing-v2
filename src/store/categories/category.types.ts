import { Item } from '../cart/cart.types';

export interface Category {
  title: string;
  items: Item[];
}

export type Categories = Category[];
