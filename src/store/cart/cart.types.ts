export interface Item {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
}

export type Items = Item[];

export interface CartItem extends Item {
  quantity: number;
}

export type CartItems = CartItem[];
