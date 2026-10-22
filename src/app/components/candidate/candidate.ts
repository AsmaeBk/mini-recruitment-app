import { Component, inject, OnInit } from '@angular/core';
import { CandidateService } from '../../service/candidate-service';
import { ActivatedRoute } from '@angular/router';
import { CandidateType } from '../../model/CandidateType';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-candidate',
  imports: [],
  templateUrl: './candidate.html',
  styleUrl: './candidate.scss',
})
export class Candidate {
  private candidateService = inject(CandidateService);
  private route = inject(ActivatedRoute);

  candidate = toSignal(
    this.route.paramMap.pipe(
      map((params) => params.get('id')!),
      switchMap((id) => this.candidateService.getCandidateById(id)),
    ),
  );
}