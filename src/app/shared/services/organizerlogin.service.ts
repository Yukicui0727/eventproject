import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrganizerloginService {

  private fqdnApp = environment.fqdnApp

  constructor(
    private http: HttpClient
  ) { }

  public Organizerlogin(payload: any): Observable<any> {
    return this.http.post(this.fqdnApp + '/organizer-api/organizer/login', payload);
  }

}
