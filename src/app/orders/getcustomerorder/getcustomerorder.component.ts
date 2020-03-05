import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-getcustomerorder',
  templateUrl: './getcustomerorder.component.html',
  styleUrls: ['./getcustomerorder.component.scss']
})
export class GetcustomerorderComponent implements OnInit {

  public isLoading = false;
  public Customer_ID: FormControl
  public searchedCustomersorder = [];

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.Customer_ID = new FormControl();
  }

  public onSearch() {
    this.isLoading = true;
    this.searchedCustomersorder = [];
    this.orderService.searchCustomerorder(this.Customer_ID.value).subscribe(
      res => {
        this.isLoading = false;
        if (res.message) {
          alert(res.message);
          return;
        }
        this.searchedCustomersorder = res;
      },
      error => {
        this.isLoading = false;
        alert(JSON.stringify(error.error));
      }
    );
  }

}

