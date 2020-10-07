import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-box-three',
  templateUrl: './box-three.component.html',
  styleUrls: ['./box-three.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
