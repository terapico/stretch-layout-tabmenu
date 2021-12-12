import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ClaimDetail } from '../app.model';

@Injectable({
  providedIn: 'root'
})
export class ClaimDetailService {

  private data: ClaimDetail[] = [
    { id: 1, description: 'Claim 1', partId: 1},
    { id: 2, description: 'Claim 2', partId: 2},
    { id: 3, description: 'Claim 3', partId: 3},
    { id: 4, description: 'Claim 4', partId: 4},
    { id: 5, description: 'Claim 5', partId: 5},
    { id: 6, description: 'Claim 6', partId: 6},
  ];

  constructor() { }

  getClaims(): Observable<ClaimDetail[]> {
    return of(this.data);
  }
}
