import { TestBed, inject } from '@angular/core/testing';

import { UserRessolverService } from './user-ressolver.service';

describe('UserRessolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserRessolverService]
    });
  });

  it('should be created', inject([UserRessolverService], (service: UserRessolverService) => {
    expect(service).toBeTruthy();
  }));
});
