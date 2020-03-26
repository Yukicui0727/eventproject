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

  @Input() model:any = {};
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
        res[0]
        this.model = res[0];
      },
      error => {
        alert(JSON.stringify(error.error));
      }
    );
  }
  
  
  Copymodel = Object.assign({}, this.model);

  display_order =true;
  OrderService: any;


  private fqdnApp = environment.fqdnApp



  onSaveorder() {
    var options = {
      "organizerOrderID": this.model.organizerOrderID,
      "eventID": this.model.eventID,
      "organizerID": this.model.organizerID,
      "dateTime": this.model.dateTime
    };
  }

Cancel() {
  this.display_order = true;  
}

get diagnostic() { return JSON.stringify(this.model); }

}
