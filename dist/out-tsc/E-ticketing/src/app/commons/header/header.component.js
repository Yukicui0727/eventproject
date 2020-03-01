import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { select } from '@ngrx/store';
import { map } from 'rxjs/operators';
let HeaderComponent = class HeaderComponent {
    constructor(authService, shoppingCartService, store) {
        this.authService = authService;
        this.shoppingCartService = shoppingCartService;
        this.store = store;
        this.itemsCount$ = store.pipe(select('items'), map((items) => {
            return items.length ? items.map(item => item.qty).reduce((a, b) => a + b) : 0;
        }));
    }
    ngOnInit() {
    }
    logout() {
    }
};
HeaderComponent = __decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.scss']
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map