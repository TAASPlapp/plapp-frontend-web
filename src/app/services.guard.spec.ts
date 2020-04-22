import { TestBed, async, inject } from '@angular/core/testing';

import { ServicesGuard } from './services.guard';

describe('ServicesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicesGuard]
    });
  });

  it('should ...', inject([ServicesGuard], (guard: ServicesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
