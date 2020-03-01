import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
let UserDetailService = class UserDetailService {
    constructor(http) {
        this.http = http;
    }
    addUserDetail(userDetail) {
        return this.http.post(`${environment.API_URL}/user-details`, userDetail, { withCredentials: true });
    }
    updateUserDetail(userDetail) {
        return this.http.put(`${environment.API_URL}/user-details`, userDetail, { withCredentials: true });
    }
};
UserDetailService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserDetailService);
export { UserDetailService };
//# sourceMappingURL=user-detail.service.js.map