import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ImageTableComponent } from '../components/image-table/image-table.component';
import { WeaponTextComponent } from '../components/weapon-text/weapon-text.component';
import { FrontendServiceService } from './frontend-service.service';
import { FrontendGetServiceService } from './frontend-get-service.service';

describe('FrontendServiceService', () => {
  let service: FrontendServiceService;
  let imgComponent: ImageTableComponent;
  let getService: FrontendGetServiceService;
  let wText: WeaponTextComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [WeaponTextComponent, ImageTableComponent, FrontendGetServiceService]
    });
    service = TestBed.inject(FrontendServiceService);
    imgComponent = TestBed.inject(ImageTableComponent);
    getService = TestBed.inject(FrontendGetServiceService);
    wText = TestBed.inject(WeaponTextComponent);
    spyOn(imgComponent, 'resetCount').and.callThrough;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return Weapon from getWeapon()', () => {
    expect(service.getWeapon()).toBeTruthy;
  })

  it('should return Weapon from getWeaponNoDuplicate()', () => {
    expect(service.getWeaponNoDuplicate()).toBeTruthy;
  })

  it('should reset count on imageTable from resetCounter()', () => {
    service.resetCounter();
    expect(imgComponent.resetCount).toHaveBeenCalled;
    expect(imgComponent.rollCount).toEqual([0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
  })
});


