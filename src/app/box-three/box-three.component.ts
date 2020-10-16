import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Box } from '../shared/models/box.model';

@Component({
  selector: 'app-box-three',
  templateUrl: './box-three.component.html',
  styleUrls: ['./box-three.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxThreeComponent implements OnInit {
  @Input() box: Box;
  ownName: 'swd-box3';
  firstAttr = {
    id: 1,
    title: 'Today Special',
    boxId: 1,
    maxSize: 5,
  };

  constructor() {}

  ngOnInit(): void {}
}
