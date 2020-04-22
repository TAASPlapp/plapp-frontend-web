import { TestBed } from '@angular/core/testing';

import { GardenerService } from './gardener.service';

describe('GardenerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GardenerService = TestBed.get(GardenerService);
    expect(service).toBeTruthy();
  });
});
