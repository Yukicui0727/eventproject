import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOrganizerContactComponent } from './search-organizer-contact.component';

describe('SearchOrganizerContactComponent', () => {
  let component: SearchOrganizerContactComponent;
  let fixture: ComponentFixture<SearchOrganizerContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchOrganizerContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOrganizerContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
