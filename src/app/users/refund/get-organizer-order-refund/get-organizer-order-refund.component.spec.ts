import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOrganizerOrderRefundComponent } from './get-organizer-order-refund.component';

describe('GetOrganizerOrderRefundComponent', () => {
  let component: GetOrganizerOrderRefundComponent;
  let fixture: ComponentFixture<GetOrganizerOrderRefundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetOrganizerOrderRefundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOrganizerOrderRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
