import { TestBed } from '@angular/core/testing';

import { CcrService } from './ccr.service';

describe('CcrService', () => {
  let service: CcrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CcrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
