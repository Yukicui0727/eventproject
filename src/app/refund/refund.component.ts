import { Component, Input } from '@angular/core';
import { RefundService } from 'src/app/shared/services/refund.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.scss']
})
export class RefundComponent implements OnInit {
  refunds = [];
  @Input() model: any = {};
  constructor(
    private http: HttpClient,
    private refundService: RefundService,
    private cookieService: CookieService
  ) { }

  Organizer_ID = Number(this.cookieService.get("OrganizerID"));

  ngOnInit() {
    this.refundService.searchOrganizerrefund(this.Organizer_ID + "").subscribe(
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

  display_refund = true;
  RefundService: any;


  private fqdnApp = environment.fqdnApp

}

