import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { OrganizerComponent } from './users/organizer/organizer.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrganizerorderComponent } from './orders/organizerorder/organizerorder.component';
import { DeleteorganizerorderComponent } from './orders/organizerorder/deleteorganizerorder/deleteorganizerorder.component';
import { GetorganizerorderComponent } from './orders/organizerorder/getorganizerorder/getorganizerorder.component';
import { RefundComponent } from './users/refund/refund.component';
import { CreateOrganizerOrderRefundComponent } from './users/refund/create-organizer-order-refund/create-organizer-order-refund.component';
import { SeatComponent } from './seat/seat.component';
import { AddSeatComponent } from './seat/add-seat/add-seat.component';
import { CustomerComponent } from './customer/customer.component';
import { GetcustomerorderComponent } from './orders/getcustomerorder/getcustomerorder.component';
import { DeletecustomerorderComponent } from './orders/deletecustomerorder/deletecustomerorder.component';
import { CreateCustomerOrderRefundComponent } from './users/refund/create-customer-order-refund/create-customer-order-refund.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'users',
    component: OrganizerComponent,
    children: [
      {
        path: 'refund',
        children: [
          {
            path: 'CreateOrganizer',
            component: CreateOrganizerOrderRefundComponent
          },
          {
            path: 'CreateCustomer',
            component: CreateCustomerOrderRefundComponent
          }
        ]
      },
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
        component: OrganizerComponent
      },
      {
        path: 'customer',
        component: CustomerComponent
      },
      {
        path: 'seat',
        component: SeatComponent,
        children: [
          {
            path: 'add-seat',
            component: AddSeatComponent
          },
        ]

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
        children: [
          {
            path: 'delete',
            component: DeleteorganizerorderComponent
          },
          {
            path: 'organizerorder/getorganizerorder',
            component: GetorganizerorderComponent
          },
          {
            path: 'organizerorder/deleteorganizerorder',
            component: DeleteorganizerorderComponent
          },
          {
            path: 'getcustomerorder',
            component: GetcustomerorderComponent
          },
          {
            path: 'deletecustomerorder',
            component: DeletecustomerorderComponent
          },
        ]
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
]
  

@NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
export class AppRoutingModule { }
