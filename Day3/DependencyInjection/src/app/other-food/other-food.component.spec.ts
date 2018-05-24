import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherFoodComponent } from './other-food.component';

describe('OtherFoodComponent', () => {
  let component: OtherFoodComponent;
  let fixture: ComponentFixture<OtherFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
