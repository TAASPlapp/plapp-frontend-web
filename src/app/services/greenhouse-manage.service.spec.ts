import { TestBed } from '@angular/core/testing';

import { GreenhouseManageService } from './greenhouse-manage.service';

describe('GreenhouseManageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GreenhouseManageService = TestBed.get(GreenhouseManageService);
    expect(service).toBeTruthy();
  });
});
