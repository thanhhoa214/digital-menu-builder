import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { ProductList } from '../shared/models/product-list.model';
import { Products } from '../shared/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  @Input() attribute: ProductList = {
    id: 1,
    title: 'Today Special',
    boxId: 1,
    maxSize: 6,
    isAvailable: true,
  };
  @Input() products: Products = [
    {
      id: 1,
      title: 'Hello World',
      description: 'description',
      price: 123123,
      src: null,
      storeId: null,
    },
    {
      id: 2,
      title: 'Hello World',
      description: 'description',
      price: 123123,
      src: null,
      storeId: null,
    },
    {
      id: 2,
      title: 'Hello World',
      description: 'description',
      price: 123123,
      src: null,
      storeId: null,
    },
    {
      id: 2,
      title: 'Hello World',
      description: 'description',
      price: 123123,
      src: null,
      storeId: null,
    },
    {
      id: 2,
      title: 'Hello World',
      description: 'description',
      price: 123123,
      src: null,
      storeId: null,
    },
    {
      id: 2,
      title: 'Hello World',
      description: 'description',
      price: 123123,
      src: null,
      storeId: null,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
