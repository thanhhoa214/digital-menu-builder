export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  src: string;
  storeId: string;
  isAvailable: boolean;
}

export type Products = Array<Product>;
