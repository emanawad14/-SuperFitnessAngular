import { TestBed } from '@angular/core/testing';

import { MusclesIdService } from './muscles-id.service';

describe('MusclesIdService', () => {
  let service: MusclesIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusclesIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
