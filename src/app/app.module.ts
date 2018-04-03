import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsModalModule } from 'ng2-bs3-modal';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';



import { AppComponent } from './app.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { ResetPasswordComponent } from './components/auth/reset-password/reset-password.component';
import { InvestmentsService } from './services/investments.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { UserRessolverService } from './services/user-ressolver.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { AuthGuardService } from './services/auth-guard.service';
import { BackAuthGuardService } from './services/back-auth-guard.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TransactionsComponent } from './components/dashboard/transactions/transactions.component';
import { InvestComponent } from './components/dashboard/invest/invest.component';
import { UserInvestmentsResolverService } from './services/user-investments-resolver.service';
import { InvestmentTypesResolverService } from './services/investment-types-resolver.service';
import { SettingsComponent } from './components/dashboard/settings/settings.component';
import { TermsComponent } from './components/static-pages/terms/terms.component';
import { PrivacyComponent } from './components/static-pages/privacy/privacy.component';
import { AboutUsComponent } from './components/static-pages/about-us/about-us.component';
import { DisclaimerComponent } from './components/static-pages/disclaimer/disclaimer.component';

export const AppRoutes: Routes = [
  { path: '',redirectTo:'dashboard/invest' ,pathMatch:'full'},
  { path: 'sign-in', component: SignInComponent,canActivate:[BackAuthGuardService] },
  { path: 'sign-up', component: SignUpComponent,canActivate:[BackAuthGuardService] },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'privacy-policy', component: PrivacyComponent },
  { path: 'terms-and-conditions', component: TermsComponent },
  { path: 'disclaimer', component: DisclaimerComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'dashboard/:section', component: DashboardComponent ,canActivate:[AuthGuardService],resolve:{user:UserRessolverService,
    userInvesments:UserInvestmentsResolverService,investmentTypes:InvestmentTypesResolverService}}
];

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ResetPasswordComponent,
    DashboardComponent,
    TransactionsComponent,
    InvestComponent,
    SettingsComponent,
    TermsComponent,
    PrivacyComponent,
    AboutUsComponent,
    DisclaimerComponent
  ],
  imports: [
    BrowserModule,
    BsModalModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingBarHttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    ToastrService,
    InvestmentsService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    UserRessolverService,
    UserService,
    AuthGuardService,
    BackAuthGuardService,
    InvestmentTypesResolverService,
    UserInvestmentsResolverService,
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
