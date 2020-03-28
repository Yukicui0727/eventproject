import { Component, Input } from '@angular/core';
import { RefundService } from 'src/app/shared/services/refund.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-customer-refund',
  templateUrl: './customer-refund.component.html',
  styleUrls: ['./customer-refund.component.scss']
})
export class CustomerRefundComponent implements OnInit {
  refunds = [];
  @Input() model: any = {};
  constructor(
    private http: HttpClient,
    private refundService: RefundService,
    private cookieService: CookieService
  ) { }

  Customer_ID = Number(this.cookieService.get("CustomerID"));

  ngOnInit() {
    this.refundService.searchCustomerrefund(this.Customer_ID + "").subscribe(
      res => {
        if (res.message) {
          alert(res.message);
          return;
        }
        this.refunds = res;
      },
      error => {
        alert(JSON.stringify(error.error));
      }
    );
  }

 
  RefundService: any;


  private fqdnApp = environment.fqdnApp

}
