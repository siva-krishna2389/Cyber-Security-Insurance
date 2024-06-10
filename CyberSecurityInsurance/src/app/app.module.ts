import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { DetailsComponent } from './details/details.component';
import { CoverageComponent } from './coverage/coverage.component';
import { RiskinfoComponent } from './riskinfo/riskinfo.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PolicyComponent } from './policy/policy.component';
import { QuotePolicyComponent } from './quote-policy/quote-policy.component';
import { PaymentComponent } from './payment/payment.component';
import { DownloadPolicyComponent } from './download-policy/download-policy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RetrivequoteComponent } from './retrivequote/retrivequote.component';





@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DetailsComponent,
    CoverageComponent,
    RiskinfoComponent,
    PolicyComponent,
    QuotePolicyComponent,
    PaymentComponent,
    DownloadPolicyComponent,
    RetrivequoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
