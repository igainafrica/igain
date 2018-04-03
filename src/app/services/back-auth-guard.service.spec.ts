import { TestBed, inject } from '@angular/core/testing';

import { BackAuthGuardService } from './back-auth-guard.service';

describe('BackAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackAuthGuardService]
    });
  });

  it('should be created', inject([BackAuthGuardService], (service: BackAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
