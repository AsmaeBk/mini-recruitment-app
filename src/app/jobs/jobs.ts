import { Component, signal } from '@angular/core';
import { JobCard } from '../components/job-card/job-card';

@Component({
  selector: 'app-jobs',
  imports: [JobCard],
  templateUrl: './jobs.html',
  styleUrl: './jobs.scss',
})
export class Jobs {

    appUrl = signal("https://www.google.com/")
}
