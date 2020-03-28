import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  createAuthorizationHeader(headers: HttpHeaders) {
    headers.append('Authorization', 'Basic '+btoa("admin:Enfec@13")); 
  }

  public searchOrganizerorder(id: string): Observable<any> {
    let headersOpt = new HttpHeaders(); 
    console.log("OrganizerID");
    this.createAuthorizationHeader(headersOpt); 
    var headersOpt1 = {
      headers: new HttpHeaders(
        {
          'Authorization':'Basic ' + btoa('admin:Enfec@13'),
        }
      )
    }
    return this.http.get(this.fqdnApp + '/OrganizerOrder-api/getallorganizerorder-info/' + id , headersOpt1);
  }                                      
  public deleteOrganizerorder(id: string): Observable<any> {
    return this.http.get(this.fqdnApp + '/organizerOrder-api/organizerorder/delete/' + id);
  }
  public searchCustomerorder(id: string): Observable<any> {
      let headersOpt = new HttpHeaders(); 
      console.log("CustomerID");
      this.createAuthorizationHeader(headersOpt); 
      var headersOpt1 = {
        headers: new HttpHeaders(
          {
            'Authorization':'Basic ' + btoa('admin:Enfec@13'),
          }
        )
      }
    return this.http.get(this.fqdnApp + '/CustomerOrder-api/CustomerOrderByCID/' + id,headersOpt1);
  }                                     
  public deleteCustomerrorder(id: string): Observable<any> {
    return this.http.get(this.fqdnApp + '/customerOrder-api/CustomerOrder/Delete/' + id);
  }
}
