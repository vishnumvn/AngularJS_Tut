import { TestBed, inject } from '@angular/core/testing';

import { CustomerAPIService } from './customer-api.service';

describe('CustomerAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerAPIService]
    });
  });

  it('should be created', inject([CustomerAPIService], (service: CustomerAPIService) => {
    expect(service).toBeTruthy();
  }));
});
