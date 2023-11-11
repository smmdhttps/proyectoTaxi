import { TestBed } from '@angular/core/testing';

import { TaxiCrudService } from './taxi-crud.service';

describe('TaxiCrudService', () => {
  let service: TaxiCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxiCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
