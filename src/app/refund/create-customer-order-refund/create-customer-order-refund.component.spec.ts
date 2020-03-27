import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomerOrderRefundComponent } from './create-customer-order-refund.component';

describe('CreateCustomerOrderRefundComponent', () => {
  let component: CreateCustomerOrderRefundComponent;
  let fixture: ComponentFixture<CreateCustomerOrderRefundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCustomerOrderRefundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCustomerOrderRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
