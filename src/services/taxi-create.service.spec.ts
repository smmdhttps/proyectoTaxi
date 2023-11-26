import { TestBed } from '@angular/core/testing';

import { TaxiCreateService } from './taxi-create.service';

describe('TaxiCreateService', () => {
  let service: TaxiCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxiCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
