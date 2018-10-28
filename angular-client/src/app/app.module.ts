import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { HttpService } from './http/http.service';
import { LandingPageService } from './landing-page/landing-page.service';

const routes: Routes = [
  {path:"", component: LandingPageComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [HttpService, LandingPageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
