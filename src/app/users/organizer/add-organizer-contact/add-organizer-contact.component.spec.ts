import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrganizerContactComponent } from './add-organizer-contact.component';

describe('AddOrganizerContactComponent', () => {
  let component: AddOrganizerContactComponent;
  let fixture: ComponentFixture<AddOrganizerContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrganizerContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrganizerContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
