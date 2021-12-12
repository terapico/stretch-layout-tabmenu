import { TestBed } from '@angular/core/testing';

import { PartDetailService } from './part-detail.service';

describe('PartDetailService', () => {
  let service: PartDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
