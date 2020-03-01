import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SeatComponent = class SeatComponent {
    constructor(seatService) {
        this.seatService = seatService;
    }
    ngOnInit() {
        this.seatService.getSeatTable().subscribe(res => {
            this.tableData = res;
        });
    }
};
SeatComponent = __decorate([
    Component({
        selector: 'app-seat',
        templateUrl: './seat.component.html',
        styleUrls: ['./seat.component.scss']
    })
], SeatComponent);
export { SeatComponent };
//# sourceMappingURL=seat.component.js.map