import { TestBed, inject } from '@angular/core/testing';

import { InvestmentTypesResolverService } from './investment-types-resolver.service';

describe('InvestmentTypesResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvestmentTypesResolverService]
    });
  });

  it('should be created', inject([InvestmentTypesResolverService], (service: InvestmentTypesResolverService) => {
    expect(service).toBeTruthy();
  }));
});
