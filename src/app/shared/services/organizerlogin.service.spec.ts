import { TestBed } from '@angular/core/testing';

import { OrganizerloginService } from '../services/organizerlogin.service';

describe('OrganizerloginService', () => {
  let service: OrganizerloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizerloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
