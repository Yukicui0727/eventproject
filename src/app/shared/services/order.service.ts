import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private fqdnApp = environment.fqdnApp

  constructor(
    private http: HttpClient
  ) { }

  public searchOrganizerorder(id: string): Observable<any> {
    return this.http.get(this.fqdnApp + '/organizerOrder-api/getallorganizerorder-info/' + id);
  }
  public deleteOrganizerorder(id: string): Observable<any> {
    return this.http.get(this.fqdnApp + '/organizerOrder-api/organizerorder/delete/' + id);
  }
  public searchCustomerorder(id: string): Observable<any> {
    return this.http.get(this.fqdnApp + '/customerOrder-api/CustomerOrderByCID/' + id);
  }
  public deleteCustomerrorder(id: string): Observable<any> {
    return this.http.get(this.fqdnApp + '/customerOrder-api/CustomerOrder/Delete/' + id);
  }
}
