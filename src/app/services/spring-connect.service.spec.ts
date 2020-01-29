import { TestBed } from '@angular/core/testing';

import { SpringConnectService } from './spring-connect.service';

describe('SpringConnectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpringConnectService = TestBed.get(SpringConnectService);
    expect(service).toBeTruthy();
  });
});

