import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
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
import { RefundComponent } from './refund/refund.component';
import { CreateOrganizerOrderRefundComponent } from './refund/create-organizer-order-refund/create-organizer-order-refund.component';
import { SeatComponent } from './seat/seat.component';
import { AddSeatComponent } from './seat/add-seat/add-seat.component';
import { CustomerComponent } from './customer/customer.component';
import { GetcustomerorderComponent } from './orders/getcustomerorder/getcustomerorder.component';
import { DeletecustomerorderComponent } from './orders/deletecustomerorder/deletecustomerorder.component';
import { CreateCustomerOrderRefundComponent } from './refund/create-customer-order-refund/create-customer-order-refund.component';
import { ResetemailComponent } from './resetemail/resetemail.component';
import { SearchOrganizerComponent } from './search-organizer/search-organizer.component';
import {OrganizerAccountComponent} from'./organizer-account/organizer-account.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'refund',
    component: RefundComponent  
  },
  {
    path: 'orders',
    component:OrdersComponent,
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
    path: 'organizer_account',
    component: OrganizerAccountComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'reset_email',
    component: ResetemailComponent 
  },
  {
    path: 'search',
    component: SearchOrganizerComponent 
  },
  {
    path: 'users',
    component: OrganizerComponent,
    children: [
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
