import { Component, inject, Inject, input, OnInit, signal } from '@angular/core';
import { JobsService } from '../../service/jobs-service';

@Component({
  selector: 'app-job-card',
  imports: [],
  templateUrl: './job-card.html',
  styleUrl: './job-card.scss'
})
export class JobCard {

  isClosed = signal(false)
  appUrl = input<string>()
  applicationMessage = signal('You haven\'t applied yet.')
  applyButtonLabel=signal('Apply')

  apply() {
    this.applicationMessage.set('Application submitted')
    this.isClosed.set(true)
    this.applyButtonLabel.set('Applied')
  }

  jobService = inject(JobsService)

  jobTitle= this.jobService.jobTitle
  company= this.jobService.company
  location = this.jobService.location
}

  
  
