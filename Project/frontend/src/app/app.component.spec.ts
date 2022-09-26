import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ImageTableComponent } from './components/image-table/image-table.component';
import { WeaponTextComponent } from './components/weapon-text/weapon-text.component';
import { FrontendServiceService } from './services/frontend-service.service';

describe('AppComponent', () => {
  let frontendTest: FrontendServiceService;
  let imgTest: ImageTableComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientModule],
      providers: [FrontendServiceService, WeaponTextComponent, ImageTableComponent]
    }).compileComponents();
    frontendTest = TestBed.inject(FrontendServiceService);
    imgTest = TestBed.inject(ImageTableComponent);
  });

  // UNIT TESTS
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Monster Hunter Weapon Randomizer'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Monster Hunter Weapon Randomizer');
  });

  it('should change isDuplicatedChecked when duplicateToggle() is called', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.isDuplicateChecked).toBeFalsy();
    app.duplicateToggle();
    expect(app.isDuplicateChecked).toBeTruthy();
  })

  it('should return isDuplicate value from getDuplicate()', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.isDuplicateChecked).toBeFalsy();
    app.duplicateToggle();
    expect(app.getDuplicateValue()).toBeTruthy();
  })

  // INTEGERGRATE TESTS

  it('should call restCounter() on the frontEndService', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.resetCounter();
    fixture.detectChanges();
    expect(imgTest.rollCount).toEqual([0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
  })

  it('should call getWeapon() when isDuplicateCheck is false', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.isDuplicateChecked).toBeFalsy();
    app.spinWheel();
    fixture.detectChanges();
  })

  it('should call getWeaponNoDuplicate() when isDuplicateCheck is true', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.isDuplicateChecked).toBeFalsy();
    app.duplicateToggle();
    expect(app.getDuplicateValue()).toBeTruthy();
    app.spinWheel();
    fixture.detectChanges();
  })
});
