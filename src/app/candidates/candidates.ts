import { Component, inject, OnInit, signal } from '@angular/core';
import { CandidateService } from '../service/candidate-service';
import { CandidateType } from '../model/CandidateType';
import { Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.html',
  styleUrl: './candidates.scss',
  imports: [RouterLink],
})
export class Candidates{

  candidatesService = inject(CandidateService)
  candidates = toSignal(this.candidatesService.getCandidatesFromApi(),{initialValue:[]})
  
}
