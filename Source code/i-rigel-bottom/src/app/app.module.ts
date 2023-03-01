import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// for in app browser
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// for home modal
import { HomeModelPageModule } from '../app/home-model/home-model.module';
// for product models
import { ProductColorPageModule } from '../app/product-color/product-color.module';
import { ProductPricePageModule } from '../app/product-price/product-price.module';
import { ProductSizePageModule } from '../app/product-size/product-size.module';
import { ProductSortPageModule } from '../app/product-sort/product-sort.module';
import { BlankModalPageModule } from './blank-modal/blank-modal.module';
// for product detail modal
import { ProductDetailModalPageModule } from './product-detail-modal/product-detail-modal.module';
import { SplashScreenPageModule } from '../app/splash-screen/splash-screen.module';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BlankModalPageModule,
    HomeModelPageModule,
    ProductColorPageModule,
    ProductPricePageModule,
    ProductSizePageModule,
    ProductSortPageModule,
    ProductDetailModalPageModule,
    SplashScreenPageModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    InAppBrowser,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
