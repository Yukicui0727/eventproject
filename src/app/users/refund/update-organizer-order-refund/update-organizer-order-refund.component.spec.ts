import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrganizerOrderRefundComponent } from './update-organizer-order-refund.component';

describe('UpdateOrganizerOrderRefundComponent', () => {
  let component: UpdateOrganizerOrderRefundComponent;
  let fixture: ComponentFixture<UpdateOrganizerOrderRefundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateOrganizerOrderRefundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOrganizerOrderRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
