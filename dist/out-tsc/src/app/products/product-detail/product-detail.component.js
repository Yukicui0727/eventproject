import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { AddItem } from '../../shared/actions/shopping-cart.action';
let ProductDetailComponent = class ProductDetailComponent {
    constructor(router, es, shoppingCartService, store) {
        this.router = router;
        this.es = es;
        this.shoppingCartService = shoppingCartService;
        this.store = store;
    }
    ngOnInit() {
        this.router.paramMap.pipe(switchMap((paramMap) => {
            const id = +paramMap.get('id');
            return this.es.getEvent(id);
        })).subscribe((res) => {
            // @ts-ignore
            this.event = res;
        });
    }
    addToCart() {
        // this.shoppingCartService.addToCart({
        //   qty: 1,
        //   product: this.product
        // });
        this.store.dispatch(new AddItem({
            qty: 1,
            event: this.event
        }));
    }
};
ProductDetailComponent = __decorate([
    Component({
        selector: 'app-product-detail',
        templateUrl: './product-detail.component.html',
        styleUrls: ['./product-detail.component.scss']
    })
], ProductDetailComponent);
export { ProductDetailComponent };
//# sourceMappingURL=product-detail.component.js.map