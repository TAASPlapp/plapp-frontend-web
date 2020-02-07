import { TestBed } from '@angular/core/testing';

import { UserManageService } from './user-manage.service';

describe('UserManageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserManageService = TestBed.get(UserManageService);
    expect(service).toBeTruthy();
  });
});
