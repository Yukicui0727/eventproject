import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteOrganizerOrderRefundComponent } from './delete-organizer-order-refund.component';

describe('DeleteOrganizerOrderRefundComponent', () => {
  let component: DeleteOrganizerOrderRefundComponent;
  let fixture: ComponentFixture<DeleteOrganizerOrderRefundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteOrganizerOrderRefundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteOrganizerOrderRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
