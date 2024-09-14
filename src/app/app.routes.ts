import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { TimerControllerComponent } from './timer-controller/timer-controller.component';
export const routes: Routes = [
  { path: 'app-timer-controller', component: TimerControllerComponent },
  { path: 'app-stopwatch', component: StopwatchComponent},
  { path: '', redirectTo: '/app-root', pathMatch: 'full' }

];
