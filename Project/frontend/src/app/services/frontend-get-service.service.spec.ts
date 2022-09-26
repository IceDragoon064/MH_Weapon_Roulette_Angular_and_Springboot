import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { FrontendGetServiceService } from './frontend-get-service.service';

describe('FrontendGetServiceService', () => {
  let service: FrontendGetServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(FrontendGetServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a weapon from getARandomWeapon()', () => {
    expect(service.getARandomWeapon()).toBeTruthy();
  })

  it('should return a weapon from getARandomWeaponNoDuplicate()', () => {
    expect(service.getARandomWeaponNoDuplicate()).toBeTruthy();
  })
});
