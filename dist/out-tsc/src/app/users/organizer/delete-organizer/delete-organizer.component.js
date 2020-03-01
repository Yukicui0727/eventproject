import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
let DeleteOrganizerComponent = class DeleteOrganizerComponent {
    constructor(organizerService) {
        this.organizerService = organizerService;
        this.isLoading = false;
        this.deletedOrganizers = [];
    }
    ngOnInit() {
        this.Organizer_ID = new FormControl();
    }
    onDelete() {
        this.isLoading = true;
        this.deletedOrganizers = [];
        this.organizerService.deleteOrganizer(this.Organizer_ID.value).subscribe(res => {
            this.isLoading = false;
            if (res.message) {
                alert(res.message);
                return;
            }
            this.deletedOrganizers = res;
        }, error => {
            this.isLoading = false;
            alert(JSON.stringify(error.error));
        });
    }
};
DeleteOrganizerComponent = __decorate([
    Component({
        selector: 'app-delete-organizer',
        templateUrl: './delete-organizer.component.html',
        styleUrls: ['./delete-organizer.component.scss']
    })
], DeleteOrganizerComponent);
export { DeleteOrganizerComponent };
//# sourceMappingURL=delete-organizer.component.js.map