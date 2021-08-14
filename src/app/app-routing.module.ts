import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CatListPageComponent } from './cat-list-page/cat-list-page.component';
import { ProdDetailsPageComponent } from './prod-details-page/prod-details-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SMSVerification } from './sms-verification/sms-verification.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SavedOrdersPageComponent } from './saved-orders-page/saved-orders-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';
import { DeliveryAddressComponent } from './delivery-address/delivery-address.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
	{ path: 'category-list', component: CatListPageComponent },
  { path: 'prod-details', component: ProdDetailsPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'sms-verify', component: SMSVerification },
  { path: 'user/profile', component: ProfilePageComponent },
  { path: 'user/delivery', component: DeliveryAddressComponent },
  { path: 'user/orders', component: UserOrdersComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'favorites', component: SavedOrdersPageComponent },
  { path: 'checkout', component: CheckoutPageComponent },
  { path: 'successful-order', component: ThankYouPageComponent },
  // { path: 'successf-order', loadChildren: () => import('./app.module').then(mod =>{ mod.AppModule}) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
