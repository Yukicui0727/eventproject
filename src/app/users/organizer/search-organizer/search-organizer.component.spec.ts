import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOrganizerComponent } from './search-organizer.component';

describe('SearchOrganizerComponent', () => {
  let component: SearchOrganizerComponent;
  let fixture: ComponentFixture<SearchOrganizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchOrganizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOrganizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
