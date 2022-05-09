import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { MenuCategoryComponent } from './components/menu-category/menu-category.component';
import { MenuWrapComponent } from './components/menu-wrap/menu-wrap.component';
import { OrderWrapComponent } from './components/order-wrap/order-wrap.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RetryInterceptor } from './interceptors/retry.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MenuItemComponent,
    MenuCategoryComponent,
    MenuWrapComponent,
    OrderWrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true
    },
    { 
      provide: HTTP_INTERCEPTORS, useClass: RetryInterceptor, multi:true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
