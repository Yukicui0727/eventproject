import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.scss']
})
export class CustomerOrderComponent implements OnInit {

  orders = [];
  constructor(
    private http: HttpClient,
    private orderService: OrderService,
    private cookieService: CookieService
  ) { }

  Customer_ID = Number(this.cookieService.get("CustomerID"));

  ngOnInit() {
    this.orderService.searchCustomerorder(this.Customer_ID + "").subscribe(
      res => {
        if (res.message) {
          alert(res.message);
          return;
        }
        this.orders = res;
      },
      error => {
        alert(JSON.stringify(error.error));
      }
    );
  }

  display_order = true;
  OrderService: any;


  private fqdnApp = environment.fqdnApp

}

