import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let OrganizerService = class OrganizerService {
    constructor(http) {
        this.http = http;
        this.fqdnApp = environment.fqdnApp;
    }
    createOrganizer(payload) {
        return this.http.post(this.fqdnApp + '/organizer-api/organizer/create', payload);
    }
    searchOrganizer(id) {
        return this.http.get(this.fqdnApp + '/organizer-api/organizer/search/' + id);
    }
};
OrganizerService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], OrganizerService);
export { OrganizerService };
//# sourceMappingURL=organizer.service.js.map