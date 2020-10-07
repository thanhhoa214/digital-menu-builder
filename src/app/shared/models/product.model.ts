export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  src: string;
  storeId: string;
}

export type Products = Array<Product>;
