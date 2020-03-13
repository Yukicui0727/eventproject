import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class  RefundService{

  private fqdnApp = environment.fqdnApp

  constructor(
    private http: HttpClient
  ) { }

  public CreateOrganizerOrderRefund(payload: any): Observable<any> {
    return this.http.post(this.fqdnApp + '/organizer_refund/create', payload);
  }
  public CreateCustomerOrderRefund(payload: any): Observable<any> {
    return this.http.post(this.fqdnApp + '/customer_refund/create', payload);
  }
}