import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrganizerAddressComponent } from './update-organizer-address.component';

describe('UpdateOrganizerAddressComponent', () => {
  let component: UpdateOrganizerAddressComponent;
  let fixture: ComponentFixture<UpdateOrganizerAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateOrganizerAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOrganizerAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
