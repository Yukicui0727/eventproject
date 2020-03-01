import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrganizerContactComponent } from './update-organizer-contact.component';

describe('UpdateOrganizerContactComponent', () => {
  let component: UpdateOrganizerContactComponent;
  let fixture: ComponentFixture<UpdateOrganizerContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateOrganizerContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOrganizerContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
