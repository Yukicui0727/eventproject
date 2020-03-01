import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOrganizerAddressComponent } from './search-organizer-address.component';

describe('SearchOrganizerAddressComponent', () => {
  let component: SearchOrganizerAddressComponent;
  let fixture: ComponentFixture<SearchOrganizerAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchOrganizerAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOrganizerAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
