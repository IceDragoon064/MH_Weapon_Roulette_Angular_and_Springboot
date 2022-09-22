import { TestBed } from '@angular/core/testing';

import { FrontendGetServiceService } from './frontend-get-service.service';

describe('FrontendGetServiceService', () => {
  let service: FrontendGetServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrontendGetServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
