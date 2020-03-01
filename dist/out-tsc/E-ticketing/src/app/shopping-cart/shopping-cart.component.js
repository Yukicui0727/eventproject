import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { select } from '@ngrx/store';
import { RemoveItem, SetItem } from '../shared/actions/shopping-cart.action';
import { map } from 'rxjs/operators';
let ShoppingCartComponent = class ShoppingCartComponent {
    constructor(shoppingCartService, store) {
        this.shoppingCartService = shoppingCartService;
        this.store = store;
        this.qtyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.items$ = store.pipe(select('items'), map((items) => this.items = items));
    }
    ngOnInit() {
        // this.items = this.shoppingCartService.items;
    }
    setCart(qty, event) {
        // this.shoppingCartService.setCart({
        //   qty,
        //   product
        // });
        this.store.dispatch(new SetItem({
            qty,
            event
        }));
    }
    checkout() {
        // if (!this.items.length) return; // TODO: better UX.
        // const order: Order = {
        //   purchase_date: JSON.stringify(new Date()).substring(1, 11),
        //   purchases: this.items
        // };
        // // this.ordersService.addOrder(order)
        // //   .subscribe(res => {
        // //     this.items = [];
        // //     this.shoppingCartService.clearCart();
        // //   });
        // this.store.dispatch(new AddOrder(order));
    }
    removeFromCart(item) {
        // this.shoppingCartService.removeFromCart(item);
        this.store.dispatch(new RemoveItem(item));
    }
};
ShoppingCartComponent = __decorate([
    Component({
        selector: 'app-shopping-cart',
        templateUrl: './shopping-cart.component.html',
        styleUrls: ['./shopping-cart.component.scss']
    })
], ShoppingCartComponent);
export { ShoppingCartComponent };
//# sourceMappingURL=shopping-cart.component.js.map