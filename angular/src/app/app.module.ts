import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Login1Component } from './login1/login1.component';
import { Signin1Component } from './signin1/signin1.component';

@NgModule({
  declarations: [
    AppComponent,
    Login1Component,
    Signin1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
