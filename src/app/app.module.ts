import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopmostHeaderComponent } from './topmost-header/topmost-header.component';
import { SearchHeaderComponent } from './search-header/search-header.component';
import { HomeComponent } from './home/home.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { FadeSliderComponent } from './fade-slider/fade-slider.component';
import { SponsProdSliderComponent } from './spons-prod-slider/spons-prod-slider.component';
import { RecommProductsComponent } from './recomm-products/recomm-products.component';
import { SponsProductsComponent } from './spons-products/spons-products.component';
import { LatestDealsComponent } from './latest-deals/latest-deals.component';
import { PopularCatComponent } from './popular-cat/popular-cat.component';
import { BestSellingProdComponent } from './best-selling-prod/best-selling-prod.component';
import { FooterComponent } from './footer/footer.component';
import { TopRightGridComponent } from './top-right-grid/top-right-grid.component';
import { BrandLocationContComponent } from './brand-location-cont/brand-location-cont.component';
import { ChatIconComponent } from './chat-icon/chat-icon.component';
import { CatListPageComponent } from './cat-list-page/cat-list-page.component';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { VariationComponent } from './variation/variation.component';
import { TopCatListSliderComponent } from './top-cat-list-slider/top-cat-list-slider.component';
import { AddToCartProdComponent } from './add-to-cart-prod/add-to-cart-prod.component';
import { BrowseCategoriesComponent } from './browse-categories/browse-categories.component';
import { PriceVariationComponent } from './price-variation/price-variation.component';
import { BrandVariationComponent } from './brand-variation/brand-variation.component';
import { ScreenSizeVariationComponent } from './screen-size-variation/screen-size-variation.component';
import { RamVariationComponent } from './ram-variation/ram-variation.component';
import { BatteryVariationComponent } from './battery-variation/battery-variation.component';
import { ConnectivityVariationComponent } from './connectivity-variation/connectivity-variation.component';
import { HardDriveVariationComponent } from './hard-drive-variation/hard-drive-variation.component';
import { OSVariationComponent } from './osvariation/osvariation.component';
import { ColorVariationComponent } from './color-variation/color-variation.component';
import { AvailabilityVariationComponent } from './availability-variation/availability-variation.component';
import { ShippingVariationComponent } from './shipping-variation/shipping-variation.component';
import { RatingVariationComponent } from './rating-variation/rating-variation.component';
import { CustomPriceRangeComponent } from './custom-price-range/custom-price-range.component';
import { ProdDetailsBreadCrumbComponent } from './prod-details-bread-crumb/prod-details-bread-crumb.component';
import { ProdDetailsPageComponent } from './prod-details-page/prod-details-page.component';
import { ProdDetailsImageComponent } from './prod-details-image/prod-details-image.component';
import { ProdDescOverviewComponent } from './prod-desc-overview/prod-desc-overview.component';
import { SingleProdItemComponent } from './single-prod-item/single-prod-item.component';
import { SimilarItemSectionComponent } from './similar-item-section/similar-item-section.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SMSVerification } from './sms-verification/sms-verification.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SavedOrdersPageComponent } from './saved-orders-page/saved-orders-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { DeliveryAddressComponent } from './delivery-address/delivery-address.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { TotalDetailItemComponent } from './total-detail-item/total-detail-item.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ProdDetailsImgSliderComponent } from './prod-details-img-slider/prod-details-img-slider.component';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';
import { NgtUniversalModule } from '@ng-toolkit/universal';

@NgModule({
  declarations: [
    AppComponent,
    TopmostHeaderComponent,
    SearchHeaderComponent,
    HomeComponent,
    MenuBarComponent,
    FadeSliderComponent,
    SponsProdSliderComponent,
    RecommProductsComponent,
    SponsProductsComponent,
    LatestDealsComponent,
    PopularCatComponent,
    BestSellingProdComponent,
    FooterComponent,
    TopRightGridComponent,
    BrandLocationContComponent,
    ChatIconComponent,
    CatListPageComponent,
    BreadCrumbComponent,
    VariationComponent,
    TopCatListSliderComponent,
    AddToCartProdComponent,
    BrowseCategoriesComponent,
    PriceVariationComponent,
    BrandVariationComponent,
    ScreenSizeVariationComponent,
    RamVariationComponent,
    BatteryVariationComponent,
    ConnectivityVariationComponent,
    HardDriveVariationComponent,
    OSVariationComponent,
    ColorVariationComponent,
    AvailabilityVariationComponent,
    ShippingVariationComponent,
    RatingVariationComponent,
    CustomPriceRangeComponent,
    ProdDetailsBreadCrumbComponent,
    ProdDetailsPageComponent,
    ProdDetailsImageComponent,
    ProdDescOverviewComponent,
    SingleProdItemComponent,
    SimilarItemSectionComponent,
    LoginComponent,
    SignupComponent,
    SMSVerification,
    ProfilePageComponent,
    ShoppingCartComponent,
    SavedOrdersPageComponent,
    CheckoutPageComponent,
    OrderItemComponent,
    ThankYouPageComponent,
    AccountInfoComponent,
    DeliveryAddressComponent,
    UserOrdersComponent,
    TotalDetailItemComponent,
    SideNavComponent,
    ProdDetailsImgSliderComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TransferHttpCacheModule,
    HttpClientModule,
    NgtUniversalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
