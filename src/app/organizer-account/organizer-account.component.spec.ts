import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerAccountComponent } from './organizer-account.component';

describe('OrganizerAccountComponent', () => {
  let component: OrganizerAccountComponent;
  let fixture: ComponentFixture<OrganizerAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizerAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizerAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
