import { Component, Input } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';
import { RefundService } from 'src/app/shared/services/refund.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";
import { OnInit } from '@angular/core';
import { CreateOrganizerOrderRefundComponent } from '../refund/create-organizer-order-refund/create-organizer-order-refund.component';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders = [];
  @Input() model:any = {};
  constructor(
    private http: HttpClient,
    private orderService: OrderService,
    private refundService: RefundService,
    private cookieService: CookieService
  ) { }

  Organizer_ID = Number(this.cookieService.get("OrganizerID"));

  ngOnInit() {
    this.orderService.searchOrganizerorder(this.Organizer_ID + "").subscribe(
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

  onrefundorganizer(order) { 
  console.log(order);
    let myVar = { oorder_id: order.organizerOrderID };
    console.log(myVar);
    this.refundService.CreateOrganizerOrderRefund(myVar).subscribe(
    res => {
     alert(res.message);
      }
    );
  }
}
