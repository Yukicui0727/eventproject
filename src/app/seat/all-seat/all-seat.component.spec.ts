import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSeatComponent } from './all-seat.component';

describe('AllSeatComponent', () => {
  let component: AllSeatComponent;
  let fixture: ComponentFixture<AllSeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
