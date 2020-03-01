import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeatService {

  constructor(
    private http: HttpClient
  ) { }

  public getSeatTable(): Observable<any>{
    return this.http.get('http://localhost:4201/assets/mock-data/seat-table-mock.json');
  }
}
