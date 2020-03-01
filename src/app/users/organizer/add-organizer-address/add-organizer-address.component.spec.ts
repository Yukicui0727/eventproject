import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrganizerAddressComponent } from './add-organizer-address.component';

describe('AddOrganizerAddressComponent', () => {
  let component: AddOrganizerAddressComponent;
  let fixture: ComponentFixture<AddOrganizerAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrganizerAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrganizerAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
