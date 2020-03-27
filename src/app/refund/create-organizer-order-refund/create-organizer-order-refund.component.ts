import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RefundService } from 'src/app/shared/services/refund.service';

@Component({
  selector: 'app-create-organizer-order-refund',
  templateUrl: './create-organizer-order-refund.component.html',
  styleUrls: ['./create-organizer-order-refund.component.scss']
})
export class CreateOrganizerOrderRefundComponent implements OnInit {

  public fg: FormGroup;
  public isLoading = false;

  constructor(
    private refundservice: RefundService
  ) { }

  ngOnInit(): void {
    this.fg = new FormGroup({
      Organizer_Order_ID: new FormControl(),
      Description: new FormControl(),
    });
  }

  public onCreate() {
    console.log(this.fg.value);
    this.isLoading = true;
    this.refundservice.CreateOrganizerOrderRefund(this.fg.value).subscribe(
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

