import { TestBed } from '@angular/core/testing';

import { Con2backService } from './con2back.service';

describe('Con2backService', () => {
  let service: Con2backService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Con2backService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
