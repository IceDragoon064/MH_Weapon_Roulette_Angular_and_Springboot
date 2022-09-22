import { TestBed } from '@angular/core/testing';

import { FrontendPostServiceService } from './frontend-post-service.service';

describe('FrontendPostServiceService', () => {
  let service: FrontendPostServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrontendPostServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
