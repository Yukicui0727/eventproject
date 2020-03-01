import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetorganizerorderComponent } from './getorganizerorder.component';

describe('GetorganizerorderComponent', () => {
  let component: GetorganizerorderComponent;
  let fixture: ComponentFixture<GetorganizerorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetorganizerorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetorganizerorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
