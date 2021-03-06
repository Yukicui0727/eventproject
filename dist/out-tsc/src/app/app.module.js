import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { shoppingCartReducer } from './shared/reducers/shopping-cart.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './commons/footer/footer.component';
import { HeaderComponent } from './commons/header/header.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { ProductsComponent } from './products/products.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatBadgeModule } from '@angular/material/badge';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkTableModule } from '@angular/cdk/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AddOrganizerComponent } from './users/organizer/add-organizer/add-organizer.component';
import { SearchOrganizerComponent } from './users/organizer/search-organizer/search-organizer.component';
import { EditOrganizerComponent } from './users/organizer/edit-organizer/edit-organizer.component';
import { DeleteOrganizerComponent } from './users/organizer/delete-organizer/delete-organizer.component';
import { OrganizerComponent } from './users/organizer/organizer.component';
import { SeatComponent } from './seat/seat.component';
import { OrganizerorderComponent } from './orders/organizerorder/organizerorder.component';
import { CreateOrganizerOrderComponent } from './orders/organizerorder/createorganizerorder/createorganizerorder.component';
import { GetorganizerorderComponent } from './orders/organizerorder/getorganizerorder/getorganizerorder.component';
import { DeleteorganizerorderComponent } from './orders/organizerorder/deleteorganizerorder/deleteorganizerorder.component';
import { AddOrganizerAddressComponent } from './users/organizer/add-organizer-address/add-organizer-address.component';
import { SearchOrganizerAddressComponent } from './users/organizer/search-organizer-address/search-organizer-address.component';
import { UpdateOrganizerAddressComponent } from './users/organizer/update-organizer-address/update-organizer-address.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            FooterComponent,
            HeaderComponent,
            HomeComponent,
            OrdersComponent,
            ProductDetailComponent,
            LoginComponent,
            RegisterComponent,
            UserInfoComponent,
            ProductsComponent,
            ShoppingCartComponent,
            AddOrganizerComponent,
            SearchOrganizerComponent,
            EditOrganizerComponent,
            DeleteOrganizerComponent,
            OrganizerComponent,
            SeatComponent,
            OrganizerorderComponent,
            CreateOrganizerOrderComponent,
            GetorganizerorderComponent,
            DeleteorganizerorderComponent,
            AddOrganizerAddressComponent,
            SearchOrganizerAddressComponent,
            UpdateOrganizerAddressComponent,
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            MatButtonModule,
            MatToolbarModule,
            MatIconModule,
            MatInputModule,
            MatSidenavModule,
            MatListModule,
            MatCardModule,
            MatTableModule,
            MatDialogModule,
            MatNativeDateModule,
            MatSelectModule,
            MatBadgeModule,
            MatRadioModule,
            MatMenuModule,
            MatAutocompleteModule,
            MatDatepickerModule,
            MatExpansionModule,
            CdkTableModule,
            FormsModule,
            ReactiveFormsModule,
            BrowserAnimationsModule,
            CommonModule,
            Ng2SearchPipeModule,
            StoreModule.forRoot({
                items: shoppingCartReducer,
            }),
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map