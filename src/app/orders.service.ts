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

  public getOrganizerOrder(id: string): Observable<any> {
    return this.http.get(this.fqdnApp + '/organizerorder-api/getorganizerorder-info/' + id);
  } 

  public createOrganizerorder(payload: any): Observable<any> {
    return this.http.post(this.fqdnApp + '/organizerorder-api/create', payload);
  }
  
  public deleteOrganizerorder(id: string): Observable<any> {
    return this.http.delete(this.fqdnApp + '/organizerOrder-api/organizerorder/delete/' + id);
  }
}

  
