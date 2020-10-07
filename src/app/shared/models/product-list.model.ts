export interface ProductList {
  id: number;
  title: string;
  boxId: number;
  maxSize: number;
}

export type ProductLists = Array<ProductList>;