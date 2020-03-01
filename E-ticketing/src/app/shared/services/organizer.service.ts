import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrganizerService {

  private fqdnApp = environment.fqdnApp

  constructor(
    private http: HttpClient
  ) { }

  public createOrganizer(payload: any): Observable<any> {
    return this.http.post(this.fqdnApp + '/organizer-api/organizer/create', payload);
  }

  public searchOrganizer(id: string): Observable<any> {
    return this.http.get(this.fqdnApp + '/organizer-api/organizer/search/' + id);
  }
}
