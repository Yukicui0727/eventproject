import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
let CreateOrganizerOrderComponent = class CreateOrganizerOrderComponent {
    constructor(orderService) {
        this.orderService = orderService;
        this.isLoading = false;
    }
    ngOnInit() {
        this.fg = new FormGroup({
            Organizer_OrderID: new FormControl(),
            Event_ID: new FormControl(),
            Organizer_ID: new FormControl(),
            dateTime: new FormControl(),
        });
    }
    onCreate() {
        console.log(this.fg.value);
        this.isLoading = true;
        this.orderService.createOrganizerorder(this.fg.value).subscribe(res => {
            this.isLoading = false;
            alert(res.message);
        }, err => {
            this.isLoading = false;
            alert(err.error.message);
        });
    }
};
CreateOrganizerOrderComponent = __decorate([
    Component({
        selector: 'app-Create-organizer',
        templateUrl: './createorganizerorder.component.html',
        styleUrls: ['./createorganizerorder.component.scss']
    })
], CreateOrganizerOrderComponent);
export { CreateOrganizerOrderComponent };
//# sourceMappingURL=createorganizerorder.component.js.map