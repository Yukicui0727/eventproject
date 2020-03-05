import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RefundService } from 'src/app/shared/services/refund.service';

@Component({
  selector: 'app-create-customer-order-refund',
  templateUrl: './create-customer-order-refund.component.html',
  styleUrls: ['./create-customer-order-refund.component.scss']
})
export class CreateCustomerOrderRefundComponent implements OnInit {

  public fg: FormGroup;
  public isLoading = false;

  constructor(
    private refundservice: RefundService
  ) { }

  ngOnInit(): void {
    this.fg = new FormGroup({
      Customer_Order_ID: new FormControl(),
      Description: new FormControl(),
    });
  }

  public onCreate() {
    console.log(this.fg.value);
    this.isLoading = true;
    this.refundservice.CreateCustomerOrderRefund(this.fg.value).subscribe(
        res => {
        this.isLoading = false;
        alert(res.message);
      },
      err => {
        this.isLoading = false;
        alert(err.error.message);
      }
    );
  }

}


