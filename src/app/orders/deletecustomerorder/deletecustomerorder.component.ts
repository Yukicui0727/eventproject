import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-deletecustomerorder',
  templateUrl: './deletecustomerorder.component.html',
  styleUrls: ['./deletecustomerorder.component.scss']
})
export class DeletecustomerorderComponent implements OnInit {


  public isLoading = false;
  public Customer_Order_ID: FormControl
  public deletedCustomersorder = [];

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.Customer_Order_ID = new FormControl();
  }

  public onDelete() {
    this.isLoading = true;
    this.deletedCustomersorder = [];
    this.orderService.deleteCustomerrorder(this.Customer_Order_ID.value).subscribe(
      res => {
        this.isLoading = false;
        if (res.message) {
          alert(res.message);
          return;
        }
        this.deletedCustomersorder = res;
      },
      error => {
        this.isLoading = false;
        alert(JSON.stringify(error.error));
      }
    );
  }

}

