import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Box } from '../shared/models/box.model';

@Component({
  selector: 'app-box-one',
  templateUrl: './box-one.component.html',
  styleUrls: ['./box-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxOneComponent implements OnInit {
  @Input() box: Box;
  ownName: 'swd-box1';

  constructor() {}

  ngOnInit(): void {}
}
