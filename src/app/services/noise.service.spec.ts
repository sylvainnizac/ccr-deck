import { TestBed } from '@angular/core/testing';

import { NoiseService } from './noise.service';

describe('NoiseService', () => {
  let service: NoiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
