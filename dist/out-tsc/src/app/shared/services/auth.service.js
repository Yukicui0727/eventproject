import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.AUTH_API_URL = `${environment.API_URL}`;
        this.userSubject = new BehaviorSubject(null);
        // this.checkLogin(user);
    }
    checkLogin(user) {
        console.log("checkLogin");
        const body = { "email": user.Email, 'psw': user.password };
        let url = `${this.AUTH_API_URL}/Login`;
        return this.http.post(url, JSON.stringify(body), {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        });
    }
    login(user) {
        console.log("login");
        return this.http.post(`${this.AUTH_API_URL}/Login`, JSON.stringify({ "email": user.Username, 'psw': user.password }), { headers: { "Content-Type": 'application/json' } })
            .pipe(map((res) => {
            this.userSubject.next(res.user);
            return res;
        }));
    }
    register(user) {
        return this.http.post(`${this.AUTH_API_URL}/users`, user);
    }
    logout() {
        return this.http.post(`${this.AUTH_API_URL}/logout`, null, { withCredentials: true });
    }
};
AuthService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map