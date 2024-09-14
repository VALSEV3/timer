import { Component } from '@angular/core';
import { TimerControllerComponent } from './timer-controller/timer-controller.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TimerControllerComponent,NavigationComponent,RouterLink,RouterLinkActive,RouterOutlet,StopwatchComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Timer';
}
