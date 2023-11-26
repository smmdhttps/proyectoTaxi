import { TestBed } from '@angular/core/testing';

import { TaxiEditService } from './taxi-edit.service';

describe('TaxiEditService', () => {
  let service: TaxiEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxiEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
