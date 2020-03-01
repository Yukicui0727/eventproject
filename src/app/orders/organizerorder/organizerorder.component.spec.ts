import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerorderComponent } from './organizerorder.component';

describe('OrganizerorderComponent', () => {
  let component: OrganizerorderComponent;
  let fixture: ComponentFixture<OrganizerorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizerorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizerorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
