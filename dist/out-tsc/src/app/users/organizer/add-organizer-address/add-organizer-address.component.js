import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
let AddOrganizerAddressComponent = class AddOrganizerAddressComponent {
    constructor(organizerService) {
        this.organizerService = organizerService;
        this.isLoading = false;
    }
    ngOnInit() {
        this.fg = new FormGroup({
            Street1: new FormControl(),
            Street2: new FormControl(),
            City: new FormControl(),
            State: new FormControl(),
            Zipcode: new FormControl(),
            Other_Details: new FormControl(),
            Organizer_ID: new FormControl(),
        });
    }
    onCreate() {
        console.log(this.fg.value);
        this.isLoading = true;
        this.organizerService.addOrganizeraddress(this.fg.value).subscribe(res => {
            this.isLoading = false;
            alert(res.message);
        }, err => {
            this.isLoading = false;
            alert(err.error.message);
        });
    }
};
AddOrganizerAddressComponent = __decorate([
    Component({
        selector: 'app-add-organizer-address',
        templateUrl: './add-organizer-address.component.html',
        styleUrls: ['./add-organizer-address.component.scss']
    })
], AddOrganizerAddressComponent);
export { AddOrganizerAddressComponent };
//# sourceMappingURL=add-organizer-address.component.js.map