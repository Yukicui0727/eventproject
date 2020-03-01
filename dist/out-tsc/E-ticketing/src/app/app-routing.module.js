import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { OrganizerComponent } from './users/organizer/organizer.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AddOrganizerComponent } from './users/organizer/add-organizer/add-organizer.component';
import { SearchOrganizerComponent } from './users/organizer/search-organizer/search-organizer.component';
import { EditOrganizerComponent } from './users/organizer/edit-organizer/edit-organizer.component';
import { DeleteOrganizerComponent } from './users/organizer/delete-organizer/delete-organizer.component';
import { SeatComponent } from './seat/seat.component';
const routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'users',
        component: OrganizerComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'user-info',
                component: UserInfoComponent
            },
            {
                path: 'organizer',
                children: [
                    {
                        path: 'add',
                        component: AddOrganizerComponent
                    },
                    {
                        path: 'search',
                        component: SearchOrganizerComponent
                    },
                    {
                        path: 'edit',
                        component: EditOrganizerComponent
                    },
                    {
                        path: 'del',
                        component: DeleteOrganizerComponent
                    },
                ]
            }
        ]
    },
    {
        path: 'seat',
        component: SeatComponent
    },
    {
        path: 'products',
        children: [
            {
                path: '',
                component: ProductsComponent
            },
            {
                path: 'product-detail/:id',
                component: ProductDetailComponent
            }
        ]
    },
    {
        path: 'shopping-cart',
        component: ShoppingCartComponent
    },
    {
        path: 'orders',
        component: OrdersComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map