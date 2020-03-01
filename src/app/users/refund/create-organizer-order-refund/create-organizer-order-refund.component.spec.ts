import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrganizerOrderRefundComponent } from './create-organizer-order-refund.component';

describe('CreateOrganizerOrderRefundComponent', () => {
  let component: CreateOrganizerOrderRefundComponent;
  let fixture: ComponentFixture<CreateOrganizerOrderRefundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrganizerOrderRefundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrganizerOrderRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
