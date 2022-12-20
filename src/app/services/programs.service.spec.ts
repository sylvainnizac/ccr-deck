import { TestBed } from '@angular/core/testing';

import { ProgramsService } from './programs.service';

describe('ProgramsService', () => {
  let service: ProgramsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
