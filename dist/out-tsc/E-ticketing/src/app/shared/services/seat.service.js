import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let SeatService = class SeatService {
    constructor(http) {
        this.http = http;
    }
    getSeatTable() {
        return this.http.get('http://localhost:4201/assets/mock-data/seat-table-mock.json');
    }
};
SeatService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SeatService);
export { SeatService };
//# sourceMappingURL=seat.service.js.map