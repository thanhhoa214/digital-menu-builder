import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { TemplateService } from '../template.service';
import { Template } from '../shared/models/template.model';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateComponent implements OnInit {
  @Input() templateVersion = '1.1.1';
  ownName: 'swd-template';
  template$: Observable<Template>;

  constructor(templateService: TemplateService) {
    // this.template$ = templateService.getTemplateById('1');
    this.template$ = of({
      createdTime: '2020-10-07T12:13:43.373',
      description: 'Demo Template',
      id: 1,
      name: 'Demo Template',
      storeId: 1,
      uilink: null,
      boxes: [
        {
          id: 1,
          templateId: 1,
          boxType: {
            id: 1,
            name: 'product',
            description: 'contain product list',
          },
          footerSrc: null,
          footerTitle: null,
          headerSrc:
            'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          headerTitle: null,
          location: 1,
          src: 'imageBackgroundSrc',
          productLists: [
            {
              boxId: 1,
              id: 1,
              location: null,
              maxSize: 5,
              title: 'Salad',
              products: [
                {
                  id: 1,
                  location: 1,
                  description: 'strawberries, cranberries, raisins, pineapple',
                  price: '5$',
                  src: null,
                  title: 'Hand Tossed salad',
                },
                {
                  description: 'parmesan cheese, lemon juice',
                  id: 2,
                  location: 2,
                  price: '8$',
                  src: null,
                  title: 'Caesar Salad',
                },

                {
                  description: 'Beef, Mushroom',
                  id: 3,
                  location: 3,
                  price: '8$',
                  src: null,
                  title: 'Roast Beef With Mushroom Sauce',
                },
                {
                  description: 'Vegetables, Mushroom',
                  id: 4,
                  location: 4,
                  price: '15$',
                  src: null,
                  title: 'Roasted Vegetables',
                },
                {
                  description: 'Potato',
                  id: 5,
                  location: 5,
                  price: '12$',
                  src: null,
                  title: 'Loaded Baked Potato',
                },
              ],
            },
          ],
        },
      ],
    });
  }

  ngOnInit(): void {}
}
