import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverageComponent } from './coverage/coverage.component';
import { DetailsComponent } from './details/details.component';
import { DownloadPolicyComponent } from './download-policy/download-policy.component';
import { LandingComponent } from './landing/landing.component';
import { PaymentComponent } from './payment/payment.component';
import { PolicyComponent } from './policy/policy.component';
import { QuotePolicyComponent } from './quote-policy/quote-policy.component';
import { RetrivequoteComponent } from './retrivequote/retrivequote.component';
import { RiskinfoComponent } from './riskinfo/riskinfo.component';


const routes: Routes = [
  {path:'',redirectTo:'getQuote',pathMatch:'full'},
  {path:'getQuote',component:LandingComponent},
  {path:'details',component:DetailsComponent},
  {path:'coverage',component:CoverageComponent},
  {path:'riskinfo',component:RiskinfoComponent},
  {path:'policyReview',component:PolicyComponent},
  {path:'quotePolicy',component:QuotePolicyComponent},
  {path:'payment',component:PaymentComponent},
  {path:'downloadPolicy',component:DownloadPolicyComponent},
  {path:'retriveQuote',component:RetrivequoteComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
