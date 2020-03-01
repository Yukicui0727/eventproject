import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
let EventsService = class EventsService {
    constructor(http) {
        this.http = http;
    }
    getEvents() {
        return this.http.get(`${environment.API_URL}/events`);
    }
    getEvent(id) {
        return this.http.get(`${environment.API_URL}/events/${id}`);
    }
};
EventsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], EventsService);
export { EventsService };
//# sourceMappingURL=events.service.js.map