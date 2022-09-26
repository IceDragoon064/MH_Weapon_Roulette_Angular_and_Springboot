import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeaponTextComponent } from './weapon-text.component';

describe('WeaponTextComponent', () => {
  let component: WeaponTextComponent;
  let fixture: ComponentFixture<WeaponTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaponTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeaponTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set new text through setText()', () => {
    const testClass = new WeaponTextComponent();
    const name = "Long Sword";
    let testName = testClass.weaponText;
    expect(testName).toBe("? ? ?");
    testClass.setText(name);
    fixture.detectChanges();
    expect(testClass.weaponText).toEqual(name);
  })

  it('should set new image through setImage()', () => {
    const testClass = new WeaponTextComponent();
    const imgIndex = 1; //Long Sword
    testClass.setImage(imgIndex);
    let testImg = testClass.weaponImg[imgIndex];
    expect(testImg).toBe("../../assets/images/longsword.png");
  })
});
