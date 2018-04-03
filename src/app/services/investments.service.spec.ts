import { TestBed, inject } from '@angular/core/testing';

import { InvestmentsService } from './investments.service';

describe('InvestmentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvestmentsService]
    });
  });

  it('should be created', inject([InvestmentsService], (service: InvestmentsService) => {
    expect(service).toBeTruthy();
  }));
});
