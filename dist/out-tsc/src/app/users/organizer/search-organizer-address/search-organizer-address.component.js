import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
let SearchOrganizerAddressComponent = class SearchOrganizerAddressComponent {
    constructor(organizerService) {
        this.organizerService = organizerService;
        this.isLoading = false;
        this.searchedOrganizersAddress = [];
    }
    ngOnInit() {
        this.Organizer_ID = new FormControl();
    }
    onSearch() {
        this.isLoading = true;
        this.searchedOrganizersAddress = [];
        this.organizerService.searchOrganizer(this.Organizer_ID.value).subscribe(res => {
            this.isLoading = false;
            if (res.message) {
                alert(res.message);
                return;
            }
            this.searchedOrganizersAddress = res;
        }, error => {
            this.isLoading = false;
            alert(JSON.stringify(error.error));
        });
    }
};
SearchOrganizerAddressComponent = __decorate([
    Component({
        selector: 'app-search-organizer-address',
        templateUrl: './search-organizer-address.component.html',
        styleUrls: ['./search-organizer-address.component.scss']
    })
], SearchOrganizerAddressComponent);
export { SearchOrganizerAddressComponent };
//# sourceMappingURL=search-organizer-address.component.js.map