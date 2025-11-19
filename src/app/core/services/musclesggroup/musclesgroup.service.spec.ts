import { TestBed } from '@angular/core/testing';

import { MusclesgroupService } from './musclesgroup.service';

describe('MusclesgroupService', () => {
  let service: MusclesgroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusclesgroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
