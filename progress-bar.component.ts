import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input() background: string;
  @Input() progressColor: string;
  @Input() width: string;
  constructor() { }

  ngOnInit() {
  }

}
