import { TestBed } from '@angular/core/testing';

import { SocialManagerService } from './social-manager.service';

describe('SocialManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocialManagerService = TestBed.get(SocialManagerService);
    expect(service).toBeTruthy();
  });
});
