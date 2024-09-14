import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimerComponent } from '../timer/timer.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-timer-controller',
  standalone: true,
  imports: [NgIf, TimerComponent, RouterOutlet],
  templateUrl: './timer-controller.component.html',
  styleUrls: ['./timer-controller.component.css'] // исправлено styleUrl на styleUrls
})
export class TimerControllerComponent {
  seconds = 0;
  minutes = 0;
  hours = 0;
  started = true;
  intervalId: any;

  start() {
    this.started = false;
    this.intervalId = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds -= 1;
      } else if (this.minutes > 0 || this.hours > 0) {
        if (this.minutes === 0 && this.hours > 0) {
          this.hours -= 1;
          this.minutes = 59;
        } else if (this.minutes > 0) {
          this.minutes -= 1;
        }
        this.seconds = 59;
      } else {
        
        this.stopTimer();

      }
    }, 1000);
  }

  stopTimer() {
    this.started = true;
    clearInterval(this.intervalId);
  }



  onTimeChange(newTime: number, unit: 'seconds' | 'minutes' | 'hours') {
    if (unit === 'seconds') {
      this.seconds = newTime;
    } else if (unit === 'minutes') {
      this.minutes = newTime;
    } else if (unit === 'hours') {
      this.hours = newTime;
    }
  }
}
