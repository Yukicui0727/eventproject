import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
let SearchOrganizerComponent = class SearchOrganizerComponent {
    constructor(organizerService) {
        this.organizerService = organizerService;
        this.isLoading = false;
        this.searchedOrganizers = [];
    }
    ngOnInit() {
        this.Organizer_ID = new FormControl();
    }
    onSearch() {
        this.isLoading = true;
        this.searchedOrganizers = [];
        this.organizerService.searchOrganizer(this.Organizer_ID.value).subscribe(res => {
            this.isLoading = false;
            if (res.message) {
                alert(res.message);
                return;
            }
            this.searchedOrganizers = res;
        }, error => {
            this.isLoading = false;
            alert(JSON.stringify(error.error));
        });
    }
};
SearchOrganizerComponent = __decorate([
    Component({
        selector: 'app-search-organizer',
        templateUrl: './search-organizer.component.html',
        styleUrls: ['./search-organizer.component.scss']
    })
], SearchOrganizerComponent);
export { SearchOrganizerComponent };
//# sourceMappingURL=search-organizer.component.js.map