import { TestBed } from '@angular/core/testing';

import { LoadStateService } from '../load-state.service';

describe('LoadStateService', () => {
  let service: LoadStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
