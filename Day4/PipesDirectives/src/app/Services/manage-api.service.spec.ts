import { TestBed, inject } from '@angular/core/testing';

import { ManageAPIService } from './manage-api.service';

describe('ManageAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageAPIService]
    });
  });

  it('should be created', inject([ManageAPIService], (service: ManageAPIService) => {
    expect(service).toBeTruthy();
  }));
});
