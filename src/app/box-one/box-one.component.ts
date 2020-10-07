import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-box-one',
  templateUrl: './box-one.component.html',
  styleUrls: ['./box-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
