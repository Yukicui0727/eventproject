import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let OrderService = class OrderService {
    constructor(http) {
        this.http = http;
        this.fqdnApp = environment.fqdnApp;
    }
    getOrganizerOrder(id) {
        return this.http.get(this.fqdnApp + '/organizerorder-api/getorganizerorder-info/' + id);
    }
    createOrganizerorder(payload) {
        return this.http.post(this.fqdnApp + '/organizerorder-api/create', payload);
    }
    deleteOrganizerorder(id) {
        return this.http.delete(this.fqdnApp + '/organizerOrder-api/organizerorder/delete/' + id);
    }
};
OrderService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], OrderService);
export { OrderService };
//# sourceMappingURL=orders.service.js.map