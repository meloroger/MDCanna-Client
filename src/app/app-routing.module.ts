import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { ProductsComponent } from './components/products/products.component';
import { AddOrderComponent } from './components/orders/add-order/add-order.component';
import { AddStockComponent } from './components/add-stock/add-stock.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent
    /*  canActivate: [AuthGuard] */
  },
  {
    path: 'add-order',
    component: AddOrderComponent
    /*  canActivate: [AuthGuard] */
  },
  {
    path: 'add-stock',
    component: AddStockComponent
    /*  canActivate: [AuthGuard] */
  },
  {
    path: 'profile',
    component: ProfileComponent /*  canActivate: [AuthGuard] */
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
