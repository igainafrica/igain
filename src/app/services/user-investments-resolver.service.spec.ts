import { TestBed, inject } from '@angular/core/testing';

import { UserInvestmentsResolverService } from './user-investments-resolver.service';

describe('UserInvestmentsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserInvestmentsResolverService]
    });
  });

  it('should be created', inject([UserInvestmentsResolverService], (service: UserInvestmentsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
