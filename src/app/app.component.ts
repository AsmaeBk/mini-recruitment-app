import { Component, signal } from '@angular/core';
import { JobCard } from './components/job-card/job-card';
import { Header } from './components/header/header';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header],
  // Use "template" with backticks (``) instead of "templateUrl"
  template: `
    <div class="page-container">
      <app-header/>
      <router-outlet/>
    </div>
  `,
  styleUrls: ['./app.component.css'] // You can keep styles separate, or use styles: [] for inline CSS too
})
export class AppComponent {

}
