import { NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [NgIf],
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  @Input() title!: string;
  @Input() isStarted!: boolean;
  @Input() time = 0;
  @Output() timeChange = new EventEmitter<number>();

  increment() {
    if (this.time < 59) {
      this.time += 1;
    } else if (this.time == 59) {
      this.time = 0;
    }
    this.timeChange.emit(this.time);
  }

  decrement() {
    if (this.time > 0) {
      this.time -= 1;
    } else if (this.time == 0) {
      this.time = 59;
    }
    this.timeChange.emit(this.time);
  }
}
