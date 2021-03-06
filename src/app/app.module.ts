import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ValidateService } from './services/validate.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { ProductsComponent } from './components/products/products.component';
import { ListOrdersComponent } from './components/orders/list-orders/list-orders.component';
import { AddOrderComponent } from './components/orders/add-order/add-order.component';
import { OrderService } from './services/order.service';
import { OrderComponent } from './components/orders/order/order.component';
import { AddStockComponent } from './components/add-stock/add-stock.component';
import { UpdateOrderComponent } from './components/orders/update-order/update-order.component';
import { StockMovementsComponent } from './components/orders/stock-movements/stock-movements.component';
import { OrderFacade } from './facades/order.facade';
import { ItemFacade } from './facades/item.facade';
import { ItemService } from './services/item.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    ProductsComponent,
    ListOrdersComponent,
    AddOrderComponent,
    OrderComponent,
    AddStockComponent,
    UpdateOrderComponent,
    StockMovementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [
    ValidateService,
    AuthService,
    AuthGuard,
    OrderService,
    OrderFacade,
    ItemService,
    ItemFacade
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
