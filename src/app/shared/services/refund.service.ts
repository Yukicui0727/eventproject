import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class  RefundService{

  private fqdnApp = environment.fqdnApp

  constructor(
    private http: HttpClient
  ) { }
  createAuthorizationHeader(headers: HttpHeaders) {
    headers.append('Authorization', 'Basic '+btoa("admin:Enfec@13")); 
  }

  public CreateOrganizerOrderRefund(payload: any): Observable<any> {
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

    return this.http.post(this.fqdnApp + '/refund-api/organizer_refund/create', payload,headersOpt1);
  }   
  
  public searchOrganizerrefund(id: string): Observable<any> {
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
    return this.http.get(this.fqdnApp + '/refund-api/organizer_refund/get_organizer_refund/' + id , headersOpt1);
  }                                    
  
  public DeleteOrganizerrefund(id: string): Observable<any> {
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
    return this.http.delete(this.fqdnApp + '/refund-api/organizer_refund/delete/' + id , headersOpt1);
  }                                    
  

  public CreateCustomerOrderRefund(payload: any): Observable<any> {
    return this.http.post(this.fqdnApp + '/customer_refund/create', payload);
  }
}
