import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PartDetail } from '../app.model';

@Injectable({
  providedIn: 'root'
})
export class PartDetailService {

  data: PartDetail[] = [
    { id: 1, partDesc: 'Brake Pad' },
    { id: 2, partDesc: 'Battery'},
    { id: 3, partDesc: 'Headlight'},
    { id: 4, partDesc: 'Air Bag'},
    { id: 5, partDesc: 'Fuel Pump'},
    { id: 6, partDesc: 'Alternator'},
  ]

  constructor() { }

  getPartById(id: number): Observable<PartDetail | null> {
    let result: PartDetail = this.data.find(part => part.id === id)!;
    return of(result);
  }
}
