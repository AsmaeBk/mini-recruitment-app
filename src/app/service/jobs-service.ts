import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  
  jobTitle= signal('Software Engineer')
  company= signal('My Comp')
  location = signal('Tetouan, Morocco')
}
