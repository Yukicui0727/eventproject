import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
let AddOrganizerComponent = class AddOrganizerComponent {
    constructor(organizerService) {
        this.organizerService = organizerService;
        this.isLoading = false;
    }
    ngOnInit() {
        this.fg = new FormGroup({
            Organizer_Name: new FormControl(),
            Email_Address: new FormControl(),
            Password: new FormControl(),
            Other_Details: new FormControl(),
        });
    }
    onCreate() {
        console.log(this.fg.value);
        this.isLoading = true;
        this.organizerService.createOrganizer(this.fg.value).subscribe(res => {
            this.isLoading = false;
            alert(res.message);
        }, err => {
            this.isLoading = false;
            alert(err.error.message);
        });
    }
};
AddOrganizerComponent = __decorate([
    Component({
        selector: 'app-add-organizer',
        templateUrl: './add-organizer.component.html',
        styleUrls: ['./add-organizer.component.scss']
    })
], AddOrganizerComponent);
export { AddOrganizerComponent };
//# sourceMappingURL=add-organizer.component.js.map