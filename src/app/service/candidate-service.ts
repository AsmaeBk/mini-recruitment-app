import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CandidateType } from '../model/CandidateType';

@Injectable({
  providedIn: 'root',
})
export class CandidateService {

  http = inject(HttpClient)
  
  getCandidatesFromApi() {
    const url = 'https://jsonplaceholder.typicode.com/users'
    return this.http.get<CandidateType[]>(url)
  }

  getCandidateById(id : string | null){
    const url = 'https://jsonplaceholder.typicode.com/users/'+id;
    return this.http.get<CandidateType>(url);
  }

}
