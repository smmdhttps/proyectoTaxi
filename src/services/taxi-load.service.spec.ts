import { TestBed } from '@angular/core/testing';

import { TaxiLoadService } from './taxi-load.service';

describe('TaxiLoadService', () => {
  let service: TaxiLoadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxiLoadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
