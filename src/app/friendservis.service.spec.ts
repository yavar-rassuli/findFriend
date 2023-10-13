import { TestBed } from '@angular/core/testing';

import { FriendservisService } from './friendservis.service';

describe('FriendservisService', () => {
  let service: FriendservisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FriendservisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
