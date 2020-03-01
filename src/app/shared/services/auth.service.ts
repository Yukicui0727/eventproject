import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {User} from '../models/user';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_API_URL = `${environment.API_URL}`;

  userSubject: Subject<User> = new BehaviorSubject<User>(null);

  constructor(
    private http: HttpClient
  ) {
 
    // this.checkLogin(user);
  }
  checkLogin(user): Observable<any> {
    console.log("checkLogin");
    const body = {"email":user.Email, 'psw': user.password}; 
    let url = `${this.AUTH_API_URL}/Login`; 

    return this.http.post(url, JSON.stringify(body), {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }); 
  }

  login(user): Observable<{success: boolean, user: User}> {
    console.log("login");
    return this.http.post(`${this.AUTH_API_URL}/Login`, 
    JSON.stringify({"email": user.Username, 'psw': user.password}),
    {headers:{"Content-Type":'application/json'}})
      .pipe(
        map((res: {success: boolean, user: User}) => {
          this.userSubject.next(res.user);
          return res;
        })
      );
  }

  register(user: User): Observable<{success: boolean}> {
    return this.http.post<{success: boolean, user: User}>(`${this.AUTH_API_URL}/users`, user);
  }

  logout(): Observable<{success: boolean}> {
    return this.http.post<{success: boolean}>(`${this.AUTH_API_URL}/logout`, null, {withCredentials: true});
  }
}
