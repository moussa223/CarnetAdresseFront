import { TestBed } from '@angular/core/testing';

import { RolemodifierService } from './rolemodifier.service';

describe('RolemodifierService', () => {
  let service: RolemodifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolemodifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
