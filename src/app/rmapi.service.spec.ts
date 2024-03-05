import { TestBed } from '@angular/core/testing';

import { RMapiService } from './rmapi.service';

describe('RMapiService', () => {
  let service: RMapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RMapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
