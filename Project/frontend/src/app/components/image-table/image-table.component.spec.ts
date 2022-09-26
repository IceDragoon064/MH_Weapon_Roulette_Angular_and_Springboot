import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageTableComponent } from './image-table.component';

describe('ImageTableComponent', () => {
  let component: ImageTableComponent;
  let fixture: ComponentFixture<ImageTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageTableComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ImageTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment rollCount when incrementCount() is called', () => {
    const testClass = new ImageTableComponent();
    const indexNum = 1;
    let testRoll = component.rollCount[indexNum];
    expect(testRoll).toBe(0);
    spyOn(component, 'incrementCount');
    testClass.incrementCount(indexNum);
    expect(testRoll).toBe(testRoll++);
    var testElement = document.createElement('td');
    document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(testElement);
  })

  it('should reset rollCount when resetCount() is called', () => {
    const testClass = new ImageTableComponent();
    spyOn(component, 'resetCount');
    testClass.resetCount();
    for(let i = 0; i < component.rollCount.length; i++){
      expect(component.rollCount[i]).toEqual(0);
    }
    var testElement = document.createElement('td');
    document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(testElement);
  })
});
