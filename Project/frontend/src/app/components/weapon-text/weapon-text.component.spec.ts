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
});
