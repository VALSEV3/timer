import { Component } from '@angular/core';
import { TimerControllerComponent } from './timer-controller/timer-controller.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TimerControllerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Timer';
}
