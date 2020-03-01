import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ShoppingCartService = class ShoppingCartService {
    constructor() {
        this.items = [];
        this.itemCount = 0;
        this.items = JSON.parse(localStorage.getItem('items')) || [];
        this.setItemCount();
    }
    setCart(item) {
        const index = this.findInCart(item);
        this.items[index].qty = item.qty;
        this.updateCache();
    }
    addToCart(item) {
        const index = this.findInCart(item);
        if (index !== -1) {
            this.items[index].qty++;
        }
        else {
            this.items.push(item);
        }
        this.updateCache();
    }
    removeFromCart(item) {
        const index = this.findInCart(item);
        this.items.splice(index, 1);
        this.updateCache();
    }
    findInCart(item) {
        return this.items.findIndex(i => i.event.id === item.event.id);
    }
    updateCache() {
        localStorage.setItem('items', JSON.stringify(this.items));
        this.setItemCount();
    }
    setItemCount() {
        this.itemCount = this.items.length ? this.items.map(item => item.qty).reduce((a, b) => a + b) : 0;
    }
    clearCart() {
        this.items = [];
        this.updateCache();
    }
};
ShoppingCartService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ShoppingCartService);
export { ShoppingCartService };
//# sourceMappingURL=shopping-cart.service.js.map