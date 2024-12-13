import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {CanActivate} from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
// for Router import:
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
// for Core import:
import { LoadingBarModule } from '@ngx-loading-bar/core';
// for Redux use:

import { AppComponent } from './app.component';

import { OverlayModule } from '@angular/cdk/overlay';
import { DEFAULT_GLOBAL_TOASTR_CONFIG } from './core/helpers/ui/ui.constant';
import { EventsModule } from './features/events/events.module';
import { LoginComponent } from './features/login/login.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, LoginComponent, ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    OverlayModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgbModule,
    ToastrModule.forRoot(DEFAULT_GLOBAL_TOASTR_CONFIG),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),

    // for HttpClient use:
    LoadingBarHttpClientModule,
    // for Router use:
    LoadingBarRouterModule,
    // for Core use:
    LoadingBarModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
