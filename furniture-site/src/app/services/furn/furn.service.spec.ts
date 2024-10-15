import { TestBed } from '@angular/core/testing';

import { FurnService } from './furn.service';

describe('FurnService', () => {
  let service: FurnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FurnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
