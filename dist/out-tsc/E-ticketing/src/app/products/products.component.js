import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ProductsComponent = class ProductsComponent {
    constructor(es) {
        this.es = es;
    }
    ngOnInit() {
        this.es.getEvents().subscribe((res) => {
            this.events = res;
        });
    }
};
ProductsComponent = __decorate([
    Component({
        selector: 'app-products',
        templateUrl: './products.component.html',
        styleUrls: ['./products.component.scss']
    })
], ProductsComponent);
export { ProductsComponent };
//# sourceMappingURL=products.component.js.map