import { Component, Input } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders= [];

 
  constructor(
    private http: HttpClient,
    private orderService: OrderService,
    private cookieService: CookieService
  ) { }
  
  Organizer_ID = Number(this.cookieService.get("OrganizerID"));

  ngOnInit(){
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
  
  

  display_order =true;
  OrderService: any;


  private fqdnApp = environment.fqdnApp



  
}