import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-stopwatch',
  standalone: true,
  imports: [NgIf],
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent {
  time: number = 0;  // Store time as a number
  displayTime: string = '0.00';  // This will be displayed in the template
  interval: any;
  started: boolean = true;  // Track whether the stopwatch is running

  // Start the stopwatch
  secondsStart() {
    this.started = false;  // Switch to the running state
    this.interval = setInterval(() => {
      this.time += 0.01;
      this.displayTime = this.formatTime(this.time);
    }, 10);  // Update time every 10ms
  }

  // Stop the stopwatch
  secondsStop() {
    this.started = true;  // Switch to the stopped state
    clearInterval(this.interval);  // Stop updating the time
  }

  // Reset the stopwatch
  secondsReset() {
    clearInterval(this.interval);
    this.time = 0;
    this.displayTime = '0.00';  // Reset display time
    this.started = true;  // Ensure the stopwatch is stopped
  }

  // Format the time as seconds.milliseconds
  formatTime(time: number): string {
    const seconds = Math.floor(time);
    const milliseconds = Math.floor((time - seconds) * 100);
    return `${seconds}.${milliseconds.toString().padStart(2, '0')}`;
  }
}
