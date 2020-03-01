import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
let EditOrganizerComponent = class EditOrganizerComponent {
    constructor(organizerService) {
        this.organizerService = organizerService;
        this.isLoading = false;
    }
    ngOnInit() {
        this.fg = new FormGroup({
            Organizer_ID: new FormControl(),
            Organizer_Name: new FormControl(),
            Password: new FormControl(),
            Other_Details: new FormControl(),
        });
    }
    onEdit() {
        console.log(this.fg.value);
        this.isLoading = true;
        this.organizerService.editOrganizer(this.fg.value).subscribe(res => {
            this.isLoading = false;
            alert(res.message);
        }, err => {
            this.isLoading = false;
            alert(err.error.message);
        });
    }
};
EditOrganizerComponent = __decorate([
    Component({
        selector: 'app-edit-organizer',
        templateUrl: './edit-organizer.component.html',
        styleUrls: ['./edit-organizer.component.scss']
    })
], EditOrganizerComponent);
export { EditOrganizerComponent };
//# sourceMappingURL=edit-organizer.component.js.map