import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Box } from '../shared/models/box.model';

@Component({
  selector: 'app-box-two',
  templateUrl: './box-two.component.html',
  styleUrls: ['./box-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxTwoComponent implements OnInit {
  @Input() box: Box;
  ownName: 'swd-box2';

  ngOnInit(): void {}
}
