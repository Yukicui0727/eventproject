import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {CreateOrganizerOrderComponent } from './createorganizerorder.component';

describe('CreateOrganizerOrderComponent', () => {
  let component: CreateOrganizerOrderComponent;
  let fixture: ComponentFixture<CreateOrganizerOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrganizerOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrganizerOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
