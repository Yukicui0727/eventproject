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
    editOrganizer(payload) {
        return this.http.put(this.fqdnApp + '/organizer-api/organizer/edit', payload);
    }
    searchOrganizer(id) {
        return this.http.get(this.fqdnApp + '/organizer-api/organizer/search/' + id);
    }
    deleteOrganizer(id) {
        return this.http.get(this.fqdnApp + '/organizer-api/organizer/delete/' + id);
    }
    addOrganizeraddress(payload) {
        return this.http.post(this.fqdnApp + '/organizer-api/organizer/address/create', payload);
    }
    searchOrganizeraddress(id) {
        return this.http.get(this.fqdnApp + '/organizer-api/organizer/address/search/' + id);
    }
    updateOrganizeraddress(payload) {
        return this.http.put(this.fqdnApp + '/organizer-api/organizer/address/update', payload);
    }
};
OrganizerService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], OrganizerService);
export { OrganizerService };
//# sourceMappingURL=organizer.service.js.map