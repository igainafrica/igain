webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-loading-bar [color]=\"'#ffff00'\"></ngx-loading-bar>\n<router-outlet></router-outlet>\n<div id=\"footer\">\n    <a [routerLink]=\"['/privacy-policy']\">Privacy policy</a>\n    <a [routerLink]=\"['/about-us']\">About Us</a>\n    <a [routerLink]=\"['/disclaimer']\">Disclaimer</a>\n    <a [routerLink]=\"['/terms-and-conditions']\">Terms of Use</a>\n\n    <span>&copy; Igain Africa 2017. All rights reserved</span>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AppRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bs3_modal__ = __webpack_require__("../../../../ng2-bs3-modal/bundles/ng2-bs3-modal.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bs3_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_bs3_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_loading_bar_http_client__ = __webpack_require__("../../../../@ngx-loading-bar/http-client/esm5/ngx-loading-bar-http-client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_auth_sign_in_sign_in_component__ = __webpack_require__("../../../../../src/app/components/auth/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_auth_sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/components/auth/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_auth_reset_password_reset_password_component__ = __webpack_require__("../../../../../src/app/components/auth/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_investments_service__ = __webpack_require__("../../../../../src/app/services/investments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_user_ressolver_service__ = __webpack_require__("../../../../../src/app/services/user-ressolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_interceptor_service__ = __webpack_require__("../../../../../src/app/services/auth-interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_back_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/back-auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_dashboard_transactions_transactions_component__ = __webpack_require__("../../../../../src/app/components/dashboard/transactions/transactions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_dashboard_invest_invest_component__ = __webpack_require__("../../../../../src/app/components/dashboard/invest/invest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_user_investments_resolver_service__ = __webpack_require__("../../../../../src/app/services/user-investments-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_investment_types_resolver_service__ = __webpack_require__("../../../../../src/app/services/investment-types-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_dashboard_settings_settings_component__ = __webpack_require__("../../../../../src/app/components/dashboard/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_static_pages_terms_terms_component__ = __webpack_require__("../../../../../src/app/components/static-pages/terms/terms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_static_pages_privacy_privacy_component__ = __webpack_require__("../../../../../src/app/components/static-pages/privacy/privacy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_static_pages_about_us_about_us_component__ = __webpack_require__("../../../../../src/app/components/static-pages/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_static_pages_disclaimer_disclaimer_component__ = __webpack_require__("../../../../../src/app/components/static-pages/disclaimer/disclaimer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppRoutes = [
    { path: '', redirectTo: 'dashboard/invest', pathMatch: 'full' },
    { path: 'sign-in', component: __WEBPACK_IMPORTED_MODULE_10__components_auth_sign_in_sign_in_component__["a" /* SignInComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__services_back_auth_guard_service__["a" /* BackAuthGuardService */]] },
    { path: 'sign-up', component: __WEBPACK_IMPORTED_MODULE_11__components_auth_sign_up_sign_up_component__["a" /* SignUpComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__services_back_auth_guard_service__["a" /* BackAuthGuardService */]] },
    { path: 'reset-password', component: __WEBPACK_IMPORTED_MODULE_12__components_auth_reset_password_reset_password_component__["a" /* ResetPasswordComponent */] },
    { path: 'privacy-policy', component: __WEBPACK_IMPORTED_MODULE_27__components_static_pages_privacy_privacy_component__["a" /* PrivacyComponent */] },
    { path: 'terms-and-conditions', component: __WEBPACK_IMPORTED_MODULE_26__components_static_pages_terms_terms_component__["a" /* TermsComponent */] },
    { path: 'disclaimer', component: __WEBPACK_IMPORTED_MODULE_29__components_static_pages_disclaimer_disclaimer_component__["a" /* DisclaimerComponent */] },
    { path: 'about-us', component: __WEBPACK_IMPORTED_MODULE_28__components_static_pages_about_us_about_us_component__["a" /* AboutUsComponent */] },
    { path: 'dashboard/:section', component: __WEBPACK_IMPORTED_MODULE_20__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__services_auth_guard_service__["a" /* AuthGuardService */]], resolve: { user: __WEBPACK_IMPORTED_MODULE_16__services_user_ressolver_service__["a" /* UserRessolverService */],
            userInvesments: __WEBPACK_IMPORTED_MODULE_23__services_user_investments_resolver_service__["a" /* UserInvestmentsResolverService */], investmentTypes: __WEBPACK_IMPORTED_MODULE_24__services_investment_types_resolver_service__["a" /* InvestmentTypesResolverService */] } }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_auth_sign_in_sign_in_component__["a" /* SignInComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_auth_sign_up_sign_up_component__["a" /* SignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_auth_reset_password_reset_password_component__["a" /* ResetPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_dashboard_transactions_transactions_component__["a" /* TransactionsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_dashboard_invest_invest_component__["a" /* InvestComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_dashboard_settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_static_pages_terms_terms_component__["a" /* TermsComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_static_pages_privacy_privacy_component__["a" /* PrivacyComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_static_pages_about_us_about_us_component__["a" /* AboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_static_pages_disclaimer_disclaimer_component__["a" /* DisclaimerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_bs3_modal__["BsModalModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__ngx_loading_bar_http_client__["a" /* LoadingBarHttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(AppRoutes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */],
                __WEBPACK_IMPORTED_MODULE_13__services_investments_service__["a" /* InvestmentsService */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_17__services_auth_interceptor_service__["a" /* AuthInterceptorService */], multi: true },
                __WEBPACK_IMPORTED_MODULE_16__services_user_ressolver_service__["a" /* UserRessolverService */],
                __WEBPACK_IMPORTED_MODULE_15__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_18__services_auth_guard_service__["a" /* AuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_19__services_back_auth_guard_service__["a" /* BackAuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_24__services_investment_types_resolver_service__["a" /* InvestmentTypesResolverService */],
                __WEBPACK_IMPORTED_MODULE_23__services_user_investments_resolver_service__["a" /* UserInvestmentsResolverService */],
                __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/auth/reset-password/reset-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/auth/reset-password/reset-password.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  reset-password works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/auth/reset-password/reset-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent() {
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
    };
    ResetPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__("../../../../../src/app/components/auth/reset-password/reset-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/auth/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/auth/sign-in/sign-in.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {}\n\ninput:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {\n    background: red !important;\n}\n\nbutton:hover {\n    opacity: 0.8;\n}\n\n.imgcontainer {\n    text-align: center;\n    margin: 24px 0 12px 0;\n}\n\n.container {\n    padding: 16px;\n}\n\nspan.psw {\n    float: right;\n    padding-top: 16px;\n}\n\n.vert_center {\n    position: absolute;\n    top: 45%;\n    left: 25%;\n    -webkit-transform: translate(-50%, -50%);  \n    transform: translate(-50%, -50%);\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n}\n\n#hd_left {\n    position: relative;\n    text-align: center;\n}\n\n.h_left {\n    background: #222946;\n    height: 100%;\n    background-image: url(\"/./assets/images/bg3.jpg\") !important;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n.h_right {\n    background: white;\n    height: 100%;\n}\n\n/* Change styles for span and cancel button on extra small screens */\n\n@media screen and (max-width: 300px) {\n    span.psw {\n       display: block;\n       float: none;\n    }\n    .cancelbtn {\n       width: 100%;\n    }\n    .momo {\n        width: 90%;\n    }\n}\n\n@media only screen and (max-width: 765px) {\n    .vert_center {\n        left: 50%;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/auth/sign-in/sign-in.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"half_width f_left n_margin\">\n  <img src=\"assets/images/thebg.jpg\" width=\"100%\">\n</div> -->\n\n<!--\n<header>\n    \n</header>\n-->\n\n<div class=\"half_width f_left n_margin h_left\" id=\"\">\n    <a href=\"#\"><img class=\"the_logo\" src=\"assets/images/igain_white.png\" alt=\"logo\" width=\"100\"></a>\n  \n  <div class=\"white_texts vert_center\">\n    <h1 style=\"font-weight: 600; text-align: left;\"><span style=\"font-size: 75px; font-weight: 900;\">80%</span><br>in less than 3 days</h1>\n    \n    <div style=\"margin: 40px auto;\">\n      We trusted because of these features.\n      <br>- One\n      <br>- Two\n    </div>\n    \n    <span>Donate across networks.</span>\n  <img src=\"assets/images/mobile_money.png\" alt=\"all mobile money networks\" width=\"320\" class=\"momo\">\n    \n  </div>\n\n</div>\n\n<div class=\"half_width f_right n_margin form_box h_right\" id=\"\">\n\n    <form action=\"/action_page.php\" >\n    \n      <div class=\"container\">\n        \n            <h1>Sign In</h1>\n            <p>Please fill in this form to login.</p>\n            <hr>\n        <label for=\"uname\"><b>Number</b></label>\n        <input type=\"text\" placeholder=\"Enter Phone number\" name=\"number\" required [(ngModel)]=\"number\">\n    \n        <label for=\"psw\"><b>Password</b></label>\n        <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" [(ngModel)]=\"password\" required>\n            \n        <button (click)=login() >Login</button>\n        <!-- <label>\n          <input type=\"checkbox\" checked=\"checked\" name=\"remember\"> Remember me\n        </label> -->\n      </div>\n    \n      <div class=\"container\" style=\"\">\n        <span>Don't have an account <a [routerLink]=\"['/sign-up']\" >Sign Up</a></span>\n        <!-- <span class=\"psw\">Forgot <a href=\"#\">password?</a></span> -->\n      </div>\n    </form>\n    </div>\n\n   "

/***/ }),

/***/ "../../../../../src/app/components/auth/sign-in/sign-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignInComponent = /** @class */ (function () {
    function SignInComponent(toastr, router, authService) {
        this.toastr = toastr;
        this.router = router;
        this.authService = authService;
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.login = function () {
        var _this = this;
        if (!this.number || !this.password) {
            throw new Error('username or password cant be empty');
        }
        console.log(this.number, this.password);
        this.authService.signIn(this.number, this.password).subscribe(function (res) {
            localStorage.setItem('authToken', res.authToken);
            _this.router.navigate(['/dashboard/invest']);
        }, function (err) {
            console.log(err);
            _this.toastr.error('Error Signing in, try again!', 'Error!');
        });
    };
    SignInComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__("../../../../../src/app/components/auth/sign-in/sign-in.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/auth/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/auth/sign-up/sign-up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {font-family: Arial, Helvetica, sans-serif;\n}\n\n\nbody,html {\n    background-color: white !important;\n}\n\n\nform {}\n\n\nbutton:hover {\n    opacity: 0.8;\n}\n\n\n.cancelbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #f44336;\n}\n\n\n.imgcontainer {\n    text-align: center;\n    margin: 24px 0 12px 0;\n}\n\n\n.container {\n    padding: 16px;\n}\n\n\nspan.psw {\n    float: right;\n    padding-top: 16px;\n}\n\n\n/* Change styles for span and cancel button on extra small screens */\n\n\n@media screen and (max-width: 300px) {\n    span.psw {\n       display: block;\n       float: none;\n    }\n    .cancelbtn {\n       width: 100%;\n    }\n    .momo {\n        width: 90%;\n    }\n}\n\n\n.vert_center {\n    position: absolute;\n    top: 45%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);  \n    transform: translate(-50%, -50%);\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n}\n\n\n#hd_left {\n    position: relative;\n    text-align: center;\n}\n\n\n.h_left {\n    width: 100%;\n    background: #222946;\n    height: 100%;\n    background-image: url(\"/./assets/images/bg3.jpg\") !important;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n\n.h_right {\n    width: 100%;\n    height: auto;\n    margin-bottom: 50px;\n    background: white;\n}\n\n\n@media only screen and (max-width: 765px) {\n    .vert_center {\n        left: 50%;\n    }\n    .h_right {\n        margin-bottom: 32px !important;\n    }\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/auth/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"half_width f_left n_margin h_left\" id=\"\">\n    <a href=\"#\"><img class=\"the_logo\" src=\"assets/images/igain_white.png\" alt=\"logo\" width=\"100\"></a>\n    <div class=\"white_texts vert_center\" style=\"\">\n        <h1 style=\"font-weight: 600; text-align: left;\"><span style=\"font-size: 75px; font-weight: 900;\">80%</span><br>in less than 3 days</h1>\n        \n        <div style=\"margin: 40px auto;\">\n          We trusted because of these features.\n          <br>- One\n          <br>- Two\n        </div>\n        \n        <span>Donate across networks.</span>\n      <img src=\"assets/images/mobile_money.png\" alt=\"all mobile money networks\" width=\"320\" class=\"momo\">\n        \n      </div>\n</div>\n\n\n<div class=\"half_width f_left n_margin h_right\" id=\"\">\n  <form action=\"/action_page.php\" style=\"\">\n    <div class=\"container\">\n      <h1>Sign Up</h1>\n      <p>Please fill in this form to create an account.</p>\n      <hr>\n\n      <label for=\"username\">\n        <b>Name</b><span style=\"color: red;\"> *</span>\n      </label>\n      <input type=\"text\" placeholder=\"Enter Name\" [(ngModel)]=\"name\" name=\"username\" required>\n\n      \n      <label for=\"email\">\n        <b>Network Operator</b><span style=\"color: red;\"> *</span>\n      </label>\n      <select class=\"form-control dropdown-select\" [(ngModel)]=\"momoChannel\" id=\"momoChannel\" name=\"momoChannel\">\n        <option value=\"mtn\"> MTN </option>\n        <option value=\"tigo\"> TIGO </option>\n        <option value=\"airtel\"> AIRTEL </option>\n      </select>\n\n      <label for=\"phoneNumber\">\n        <b>Mobile Money Number</b><span style=\"color: red;\"> *</span>\n      </label>\n      <input type=\"text\" placeholder=\"Phone Number\" [(ngModel)]=\"phoneNumber\" name=\"phoneNumber\" required>\n\n      <label for=\"psw\">\n        <b>Password</b><span style=\"color: red;\"> *</span>\n      </label>\n      <input type=\"password\" placeholder=\"Enter Password\" [(ngModel)]=\"password1\" name=\"psw\" required>\n\n      <label for=\"psw-repeat\">\n        <b>Repeat Password</b><span style=\"color: red;\"> *</span>\n      </label>\n      <input type=\"password\" placeholder=\"Repeat Password\" [(ngModel)]=\"password2\" name=\"psw-repeat\" required>\n\n      <!-- <label>\n            <input type=\"checkbox\" checked=\"checked\" name=\"remember\" style=\"margin-bottom:15px\"> Remember me\n          </label> -->\n\n      <p>By creating an account you agree to our\n        <a href=\"#\" style=\"color:dodgerblue\">Terms & Privacy</a>.</p>\n\n      <div class=\"clearfix\">\n        <button (click)=\"register()\" class=\"signupbtn\">Sign Up</button>\n      </div>\n      <div class=\"container\" style=\"\">\n        <span>Already have an account <a [routerLink]=\"['/sign-in']\" >Login</a></span>\n        <!-- <span class=\"psw\">Forgot <a href=\"#\">password?</a></span> -->\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/auth/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(toastr, router, authService) {
        this.toastr = toastr;
        this.router = router;
        this.authService = authService;
        this.momoChannel = 'mtn';
    }
    ;
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.register = function () {
        var _this = this;
        if (!this.password1 || !this.password2) {
            this.toastr.error('password Field cant be empty', 'Error!');
            throw new Error('password empty');
        }
        else if (this.password1 != this.password2) {
            this.toastr.error('password mismatch', 'Error!');
            throw new Error('password mismatch');
        }
        this.authService.register({
            name: this.name,
            photoUrl: this.photoUrl,
            momoNumber: this.phoneNumber,
            password: this.password1,
            momoChannel: this.momoChannel
        }).subscribe(function (res) {
            localStorage.setItem('authToken', res.authToken);
            _this.router.navigate(['/dashboard/invest']);
        }, function (err) {
            console.log(err);
            _this.toastr.error(err.error.message, 'Error!');
            if (err.error.details) {
                err.error.details.forEach(function (element) {
                    _this.toastr.error(element.error, 'Error!');
                });
            }
        });
    };
    SignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__("../../../../../src/app/components/auth/sign-up/sign-up.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/auth/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\n    background: #fff !important;\n    color: black !important;\n    -webkit-box-shadow: 0px 0px 5px silver;\n            box-shadow: 0px 0px 5px silver;\n}\n\nnav a *, nav a i, nav * {\n    color: black !important;\n}\n\n.w3-sidebar {\n    top: 0;\n}\n\n.w3-bar-block .w3-bar-item {\n    padding: 18px 16px !important;\n}\n\n.w3-bar-item {\n    font-weight: bold;\n}\n\n.w3-bar-item:hover, .w3-bar-item:active, .w3-bar-item:focus {\n    background: #f7f7f9 !important;\n    color: #ff7701 !important;\n    text-decoration: none !important;\n    font-weight: bold;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-light-grey\">\n\n  <!-- Top container -->\n  <div class=\"w3-bar w3-top w3-black w3-large\" style=\"z-index:4; background-color: #222946 !important;\">\n    <button class=\"w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey\" (click)=\"w3_open();\">\n      <i class=\"fa fa-bars\"></i>  Menu</button>\n    <!--<span class=\"w3-bar-item w3-right\">Logo</span>-->\n  </div>\n\n  <!-- Sidebar/menu -->\n  <nav class=\"w3-sidebar w3-collapse w3-white w3-animate-left\" style=\"z-index:3;width:300px;\" [ngStyle]=\"{'display':isSideBarOpened === true ? 'block' : 'none' }\"\n    id=\"mySidebar\">\n    <br>\n    <div class=\"w3-container w3-row\">\n      <a href=\"#\"><img class=\"the_logo\" src=\"assets/images/igain.png\" alt=\"logo\" width=\"75\" style=\"margin:0 auto; padding: 0;\"></a>\n      <hr>\n      <div class=\"w3-col s4\">\n        <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYtKMZne2YXSUggshooAnLNQIASLfpcCRSW9R7eZUpFfPu8ih\" class=\"w3-circle w3-margin-right\" style=\"width:46px\">\n      </div>\n      <div class=\"w3-col s8 w3-bar\">\n        <span>Welcome,\n          <br>\n          <strong style=\"font-size: 20px;\">{{user.name}}</strong>\n        </span>\n        <br>\n      </div>\n    </div>\n    <hr>\n    <div class=\"w3-container\">\n      <h5>Dashboard</h5>\n    </div>\n    <div class=\"w3-bar-block\">\n      <a href=\"#\" class=\"w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black\" (click)=\"w3_close()\" title=\"close menu\">\n        <i class=\"fa fa-remove fa-fw\"></i>  Close Menu</a>\n      <!-- <a href=\"#\" class=\"w3-bar-item w3-button w3-padding\"><i class=\"fa fa-users fa-fw\"></i>  Traffic</a> -->\n      <a (click)=\"section='invest'\" [routerLink]=\"['/dashboard','invest']\" class=\"w3-bar-item w3-button w3-padding\">\n        <i class=\"fa fa-diamond fa-fw\"></i>  Invest</a>\n      <a (click)=\"section='transactions'\" [routerLink]=\"['/dashboard','transactions']\" class=\"w3-bar-item w3-button w3-padding\">\n        <i class=\"fa fa-bank fa-fw\"></i>  Transactions</a>\n      <a (click)=\"section='settings'\" [routerLink]=\"['/dashboard','settings']\" class=\"w3-bar-item w3-button w3-padding\">\n        <i class=\"fa fa-cog fa-fw\"></i>  Settings</a>\n      <br>\n      <br>\n      <a (click)=\"logout()\" class=\"w3-bar-item w3-button w3-padding\">\n        <i class=\"fa fa-cog fa-fw\"></i>  logout</a>\n      <br>\n      <br>\n\n    </div>\n  </nav>\n\n\n  <!-- Overlay effect when opening sidebar on small screens -->\n  <div class=\"w3-overlay w3-hide-large w3-animate-opacity\" (click)=\"w3_close()\" style=\"cursor:pointer\" title=\"close side menu\"\n    [ngStyle]=\"{'display':isSideBarOpened === true ? 'block' : 'none' }\" id=\"myOverlay\"></div>\n\n  <!-- !PAGE CONTENT! -->\n  <div class=\"w3-main\" style=\"margin-left:300px;margin-top:60px;margin-bottom:75px; background: #f7f7f9;\">\n    <app-invest *ngIf=\"section=='invest'\"></app-invest>\n    <app-transactions *ngIf=\"section=='transactions'\"></app-transactions>\n    <app-settings *ngIf=\"section=='settings'\"></app-settings>\n  </div>\n\n</div>\n\n\n\n<bs-modal #image>\n  <bs-modal-header [showDismiss]=\"true\">\n    <h4 class=\"modal-title\">Upload Profile Image</h4>\n  </bs-modal-header>\n  <bs-modal-body>\n  </bs-modal-body>\n  <bs-modal-footer [showDefaultButtons]=\"true\"></bs-modal-footer>\n</bs-modal>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, authService, activatedRoute) {
        this.router = router;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.isSideBarOpened = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.section = this.activatedRoute.snapshot.params['section'];
        this.user = this.activatedRoute.snapshot.data['user'];
    };
    DashboardComponent.prototype.ngOnChanges = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(this.section);
    };
    DashboardComponent.prototype.logout = function () {
        var _this = this;
        this.authService.signOut().subscribe(function (res) {
            _this.router.navigate(['/sign-in']);
        });
    };
    DashboardComponent.prototype.w3_close = function () {
        this.isSideBarOpened = false;
    };
    DashboardComponent.prototype.w3_open = function () {
        this.isSideBarOpened = !this.isSideBarOpened;
    };
    DashboardComponent.prototype.onUploadFinished = function ($event) {
        console.log($event);
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/invest/invest.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\n    margin: 0;\n    padding: 0;\n    background: #f7f7f9 !important;\n    background-size: cover;\n    font-family: 'Open Sans', sans-serif;\n    z-index: -10;\n}\n\nbody, html {\n    background: #f7f7f9 !important;\n}\n\n#overlay{\n    position: absolute;\n    background-color: transparent;\n    z-index: -5;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    bottom: 0;\n}\n\n.investbox{\n    width: 320px;\n    height: 360px;\n    color: #000;\n    top: 50%;\n    left: 60%;\n    padding: 60px 30px;\n    position: absolute;\n    -webkit-transform: translate(-50%,  -50%);\n            transform: translate(-50%,  -50%);\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-shadow: 0px 0px 5px #ececec;\n            box-shadow: 0px 0px 5px #ececec;\n}\n\nh1{\n    color: #fff;\n    margin: 0;\n    padding: 0 0 0px;\n    text-align: center;\n    font-size: 22px;\n    font-weight: bold;\n}\n\n.investbox p {\n    margin: 0;\n    padding: 0;\n    font-weight: bold;\n    font-size: 13px;\n}\n\n.investbox input{\n    width: 100%;\n    margin-bottom: 20px;\n}\n\n.investbox input[type=\"text\"], input[type=\"password\"], select{\n    border: none;\n    border-bottom: 1px solid #bdc3c7;\n    outline: none;\n    height: 30px;\n    font-size: 16px;\n    opacity: 1;\n    margin-bottom: 32px;\n    color: #000;\n}\n\n.investbox input[type=\"submit\"]{\n    border: none;\n    outline: none;\n    height: 40px;\n    background: #2ecc71;\n    color: #ffffff;\n    font-size: 14px;\n    font-weight: bold;\n    font-family: 'Open Sans', sans-serif;\n}\n\n.investbox input[type=\"submit\"]:hover {\n    cursor: pointer;\n    background: #27ae60;\n    color: #fff;\n    \n}\n\n.investbox a {\n    font-size: 14px;\n    text-decoration: none;\n    color: #fff;\n    opacity: 0.8;\n}\n\n.investbox a:hover {\n    color: #fff;\n    opacity: 1;\n}\n\n#text-account {\n    font-size: 14px;\n    color: #fff;\n    opacity: 0.4;\n}\n\n#create-account:hover {\n    text-decoration: underline;\n    font-weight: bold;\n}\n\n.investbox {\n    background-color: #fff;\n}\n\nform {\n    width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/invest/invest.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"overlay\"></div>\n<div class=\"investbox\">\n    <h1><i class=\"fa fa-diamond fa-fw\"></i> Invest</h1><br>\n    <form>\n        <select class=\"form-control dropdown-select\" [(ngModel)]=\"investmentPackage\" id=\"investmentPackage\" name=\"investmentPackage\">\n                <option *ngFor=\"let investpackage of investmentPackages\" [value]=\"investpackage.id\"> {{investpackage.name}} </option>\n\n          </select>\n        <input class=\"btn_a\" style=\"\" (click)=\"invest()\" type=\"submit\" value=\"Invest\">\n    </form>\n    &nbsp;\n    <p></p>\n    <p></p>\n    &nbsp;\n    <a href=\"#\">View Activity</a>\n    &nbsp;\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/invest/invest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_investments_service__ = __webpack_require__("../../../../../src/app/services/investments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvestComponent = /** @class */ (function () {
    function InvestComponent(toastr, activatedRoute, investmentService) {
        this.toastr = toastr;
        this.activatedRoute = activatedRoute;
        this.investmentService = investmentService;
        this.investmentPackages = this.activatedRoute.snapshot.data['investmentTypes'].data;
        this.investmentPackage = this.investmentPackages[0].id;
    }
    InvestComponent.prototype.ngOnInit = function () {
    };
    InvestComponent.prototype.invest = function () {
        var _this = this;
        this.investmentService.pledge(this.investmentPackage).subscribe(function (investment) {
            console.log(investment);
            _this.investmentService.activateInvestment(investment.data.id).subscribe(function (result) {
                _this.toastr.success('Pledge Placed!', 'Success!');
                window.location.href = '/dashboard/transactions';
            }, function (err) {
                _this.toastr.error("Please Pay! " + investment.data.fee + " to activate this donation", 'Error!');
                window.location.href = '/dashboard/transactions';
            });
        }, function (err) {
            _this.toastr.error('Pledge could not be Placed!', 'Error!');
        });
    };
    InvestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-invest',
            template: __webpack_require__("../../../../../src/app/components/dashboard/invest/invest.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/invest/invest.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__services_investments_service__["a" /* InvestmentsService */]])
    ], InvestComponent);
    return InvestComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n.settings-wrapper {\n    max-width: 400px;\n    margin: 0 auto;\n    color: #000;\n    top: 50%;\n    left: 60%;\n    padding: 60px 30px;\n    position: absolute;\n    -webkit-transform: translate(-50%,  -50%);\n            transform: translate(-50%,  -50%);\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-shadow: 0px 0px 5px #ececec;\n            box-shadow: 0px 0px 5px #ececec;\n    background: white;\n}\n\n.profile-image{\n    height: 96px;\n    width: 96px;\n    background: red;\n    margin: 0 auto;\n}\n\nbutton {\n    display: inline;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    margin: 0;\n    background: none;\n    color: #222946;\n    text-decoration: underline;\n}\n\n.s_profile {\n    background-color: #222946 !important;\n    color: white !Important;\n    text-decoration: none;\n}\n\n#action_buttons {\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"settings-wrapper\">\n  <div class=\"profile-image\"></div>\n<label for=\"name\"><b>Name</b></label>\n<input type=\"text\" placeholder=\"Enter Username\" name=\"name\" required [(ngModel)]=\"name\">\n\n<label for=\"psw\"><b>Password</b></label>\n<input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" [(ngModel)]=\"password\" required>\n    \n&nbsp;\n<div id=\"action_buttons\">\n<button (click)=cancel() >Cancel</button>\n<button (click)=reset() >Reset</button>\n\n<button class=\"s_profile\" (click)=update() >Save Changes</button>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent.prototype.cancel = function () {
    };
    SettingsComponent.prototype.reset = function () {
    };
    SettingsComponent.prototype.update = function () {
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/components/dashboard/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/transactions/transactions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".status{\n    font-weight: bold;\n}\n.date{\n    font-style: italic;\n    color: #777;\n}\nbody, html {\n    background: white;\n}\n.w3-main {\n    margin-top: 0px !important;\n}\n.label-danger {\n    background-color: #ff7701;\n}\n.btn-success {\n    color: #222946;\n    background: none;\n    border-color: #222946;\n    border-radius: 0;\n    border: none;\n    text-decoration: underline;\n    padding: 10px 0;\n}\n.btn-success:hover, .btn-success:focus {\n    color: #ff7701;\n    background: none;\n}\ntr {\n    background: #fff;\n}\n.table-hover>tbody>tr:hover {\n    background: #fff;\n}\n.text-success {\n    color: #222946;\n}\n.table {\n    width: 90%;\n    max-width: 90%;\n    margin-bottom: 20px;\n    margin: 0 auto 20px auto;\n    -webkit-box-shadow: 0px 0px 5px silver;\n            box-shadow: 0px 0px 5px silver;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/transactions/transactions.component.html":
/***/ (function(module, exports) {

module.exports = "<p style=\"font-size: 28px; text-align: center;\">Recent Transactions</p>\n\n<table *ngIf=\"investments && investments.length>0\" class=\"table-hover table \" style=\"width:100%\">\n\n  <tr  *ngFor=\"let investment of investments\">\n    <td>\n      <div *ngIf=\"investment.status.donationsCompleted\" class=\"status sent text-danger\">SENT</div>\n     <div *ngIf=\"investment.status.pairingsCompleted\" class=\"status recieved text-success\">RECIEVED</div>\n      <div *ngIf=\"investment.status.pairingsCompleted\" class=\"status sent text-danger\">PENDING</div>\n      <div *ngIf=\"!investment.status.pairingsCompleted && !investment.status.donationsCompleted \" class=\"status recieved text-success\">PENDING</div>\n      <div class=\"date\">\n        @{{investment.updatedAt|date}}\n      </div>\n    </td>\n\n    <td>\n      <div>To: <span *ngIf=\"investment.donateTo.length>=1\">{{investment.donateTo.length}}</span> <span *ngIf=\"investment.donateTo.length<1\">Not Paired yet</span></div>\n      <div>From: {{user.name}}</div>\n    </td>\n    <td>\n      <!-- <span class=\"label label-success\">GHC 300</span> -->\n      <span class=\"label label-danger\">GHC {{investment.amountInvested}}</span>\n    </td>\n    <td>\n      <div>\n        <button (click)=\"modal.open()\"class=\"btn btn-success\">\n          Activate\n        </button>\n      </div>\n      <div>\n        <!-- <i class=\"fa fa-2x fa-check-circle text-success\" aria-hidden=\"true\"></i> -->\n      </div>\n      <!-- <div>-</div> -->\n    </td>\n  </tr>\n\n  <tr>\n    <td>\n      <!-- <div class=\"status sent text-danger\">SENT</div> -->\n      <div class=\"status recieved text-success\">RECIEVED</div>\n      <!-- <div class=\"status sent text-danger\">PENDING</div> -->\n      <!-- <div class=\"status recieved text-success\">PENDING</div> -->\n      <div class=\"date\">\n        @{{'2011-10-05T14:48:00.000Z'|date}}\n      </div>\n    </td>\n\n    <td>\n      <div>To: 024388699</div>\n      <div>From:</div>\n    </td>\n    <td>\n      <span class=\"label label-success\">GHC 300</span>\n      <!-- <span class=\"label label-danger\">GHC 200</span> -->\n    </td>\n    <td>\n      <div>\n        <!-- <button class=\"btn btn-success\"> Activate </button> -->\n      </div>\n      <div style=\"text-align: center;\">\n        <i style=\"color: #5cb85c;\" class=\"fa fa-2x fa-check-circle text-success\" aria-hidden=\"true\"></i>\n      </div>\n      <!-- <div>-</div> -->\n    </td>\n  </tr>\n\n</table>\n\n<div *ngIf=\"!investments || investments.length<1\">\n  You dont have any invest ments yet, click here to invest\n</div>\n<bs-modal #modal>\n  <bs-modal-header [showDismiss]=\"true\">\n      <h4 class=\"modal-title\">I'm a modal!</h4>\n  </bs-modal-header>\n  <bs-modal-body>\n      Hello World!\n  </bs-modal-body>\n  <bs-modal-footer [showDefaultButtons]=\"true\"></bs-modal-footer>\n</bs-modal>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/transactions/transactions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_investments_service__ = __webpack_require__("../../../../../src/app/services/investments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TransactionsComponent = /** @class */ (function () {
    function TransactionsComponent(activatedRoute, investmentService) {
        this.activatedRoute = activatedRoute;
        this.investmentService = investmentService;
        this.investments = [];
        this.investments = this.activatedRoute.snapshot.data['userInvesments'].data;
        this.user = this.activatedRoute.snapshot.data['user'];
        console.log('invest', this.activatedRoute.snapshot.data['userInvesments'].data);
    }
    TransactionsComponent.prototype.ngOnInit = function () {
    };
    TransactionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-transactions',
            template: __webpack_require__("../../../../../src/app/components/dashboard/transactions/transactions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/transactions/transactions.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__services_investments_service__["a" /* InvestmentsService */]])
    ], TransactionsComponent);
    return TransactionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/static-pages/about-us/about-us.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/static-pages/about-us/about-us.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"st_wrapper\">\n    <a href=\"#\"><img class=\"the_logo\" src=\"assets/images/igain.png\" alt=\"logo\" width=\"100\"></a>\n  \n<div id=\"ppHeader\">\n    <p>We are&nbsp;Igain&nbsp;Africa, The only peer-to-peer network that cares puts first your convenience. We're dedicated to giving you the very best of Peer-to-peer experience, with a focus on dependability, customer service, and uniqueness.</p>\n    <p>We aim to ...</p>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/static-pages/about-us/about-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__("../../../../../src/app/components/static-pages/about-us/about-us.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/static-pages/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/static-pages/disclaimer/disclaimer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/static-pages/disclaimer/disclaimer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"st_wrapper\">\n    <a href=\"#\"><img class=\"the_logo\" src=\"assets/images/igain.png\" alt=\"logo\" width=\"100\"></a>\n<h2>Disclaimer for Igain Africa</h2><p>If you require any more information or have any questions about our site’s disclaimer, please feel free to contact us by email at theigaininfo@gmail.com.<br>Disclaimers for www.igainafrica.com</p><p>All the information on this website is published in good faith and for general information purpose only. www.igainafrica.com does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (www.igainafrica.com), is strictly at your own risk. www.igainafrica.com will not be liable for any losses and/or damages in connection with the use of our website.</p><p>From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone ‘bad’.</p><p>Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their “Terms of Service” before engaging in any business or uploading any information.</p><p><strong>Consent</strong><br>By using our website, you hereby consent to our disclaimer and agree to its terms.</p><p><strong>Update</strong></p><p>Should we update, amend or make any changes to this document, those changes will be prominently posted here.</p><p>This Disclaimer was created at <a href=\"https://disclaimergenerator.net\" target=\"_blank\">World’s Free Disclaimer Generator</a>.</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/static-pages/disclaimer/disclaimer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisclaimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DisclaimerComponent = /** @class */ (function () {
    function DisclaimerComponent() {
    }
    DisclaimerComponent.prototype.ngOnInit = function () {
    };
    DisclaimerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-disclaimer',
            template: __webpack_require__("../../../../../src/app/components/static-pages/disclaimer/disclaimer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/static-pages/disclaimer/disclaimer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DisclaimerComponent);
    return DisclaimerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/static-pages/privacy/privacy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/static-pages/privacy/privacy.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"st_wrapper\">\n    <a href=\"#\"><img class=\"the_logo\" src=\"assets/images/igain.png\" alt=\"logo\" width=\"100\"></a>\n<div id=\"ppHeader\">igainafrica.com Privacy Policy</div>\n<div id=\"ppBody\">\n<div>&nbsp;</div>\n<div>&nbsp;</div>\n<div class=\"innerText\">This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.</div>\n<span id=\"infoCo\"></span><br />\n<div class=\"grayText\"><strong>What personal information do we collect from the people that visit our blog, website or app?</strong></div>\n<br />\n<div class=\"innerText\">When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address, mailing address, phone number or other details to help you with your experience.</div>\n<br />\n<div class=\"grayText\"><strong>When do we collect information?</strong></div>\n<br />\n<div class=\"innerText\">We collect information from you when you register on our site, fill out a form or enter information on our site.</div>\n<br />Provide us with feedback on our products or services&nbsp;<span id=\"infoUs\"></span><br />\n<div class=\"grayText\"><strong>How do we use your information?</strong></div>\n<br />\n<div class=\"innerText\">We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:<br /><br /></div>\n<div class=\"innerText\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>&bull;</strong>&nbsp;To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.</div>\n<span id=\"infoPro\"></span><br />\n<div class=\"grayText\"><strong>How do we protect your information?</strong></div>\n<br />\n<div class=\"innerText\">We do not use vulnerability scanning and/or scanning to PCI standards.</div>\n<div class=\"innerText\">We only provide articles and information. We never ask for credit card numbers.</div>\n<div class=\"innerText\">We use regular Malware Scanning.<br /><br /></div>\n<div class=\"innerText\">Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.</div>\n<br />\n<div class=\"innerText\">We implement a variety of security measures when a user enters, submits, or accesses their information to maintain the safety of your personal information.</div>\n<br />\n<div class=\"innerText\">All transactions are processed through a gateway provider and are not stored or processed on our servers.</div>\n<span id=\"coUs\"></span><br />\n<div class=\"grayText\"><strong>Do we use 'cookies'?</strong></div>\n<br />\n<div class=\"innerText\">Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information. For instance, we use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</div>\n<div class=\"innerText\"><br /><strong>We use cookies to:</strong></div>\n<div class=\"innerText\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>&bull;</strong>&nbsp;Understand and save user's preferences for future visits.</div>\n<div class=\"innerText\"><br />You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies.</div>\n<br />\n<div class=\"innerText\">If you turn cookies off, Some of the features that make your site experience more efficient may not function properly.It won't affect the user's experience that make your site experience more efficient and may not function properly.</div>\n<br /><span id=\"trDi\"></span><br />\n<div class=\"grayText\"><strong>Third-party disclosure</strong></div>\n<br />\n<div class=\"innerText\">We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.</div>\n<span id=\"trLi\"></span><br />\n<div class=\"grayText\"><strong>Third-party links</strong></div>\n<br />\n<div class=\"innerText\">Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.</div>\n<span id=\"gooAd\"></span><br />\n<div class=\"blueText\"><strong>Google</strong></div>\n<br />\n<div class=\"innerText\">Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users. https://support.google.com/adwordspolicy/answer/1316548?hl=en&nbsp;<br /><br /></div>\n<div class=\"innerText\">We use Google AdSense Advertising on our website.</div>\n<div class=\"innerText\"><br />Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to our users based on previous visits to our site and other sites on the Internet. Users may opt-out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy.</div>\n<div class=\"innerText\"><br /><strong>We have implemented the following:</strong></div>\n<div class=\"innerText\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>&bull;</strong>&nbsp;Demographics and Interests Reporting</div>\n<br />\n<div class=\"innerText\">We, along with third-party vendors such as Google use first-party cookies (such as the Google Analytics cookies) and third-party cookies (such as the DoubleClick cookie) or other third-party identifiers together to compile data regarding user interactions with ad impressions and other ad service functions as they relate to our website.</div>\n<div class=\"innerText\"><br /><strong>Opting out:</strong><br />Users can set preferences for how Google advertises to you using the Google Ad Settings page. Alternatively, you can opt out by visiting the Network Advertising Initiative Opt Out page or by using the Google Analytics Opt Out Browser add on.</div>\n<span id=\"calOppa\"></span><br />\n<div class=\"blueText\"><strong>California Online Privacy Protection Act</strong></div>\n<br />\n<div class=\"innerText\">CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law's reach stretches well beyond California to require any person or company in the United States (and conceivably the world) that operates websites collecting Personally Identifiable Information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals or companies with whom it is being shared. - See more at: http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf</div>\n<div class=\"innerText\"><br /><strong>According to CalOPPA, we agree to the following:</strong></div>\n<div class=\"innerText\">Users can visit our site anonymously.</div>\n<div class=\"innerText\">Once this privacy policy is created, we will add a link to it on our home page or as a minimum, on the first significant page after entering our website.</div>\n<div class=\"innerText\">Our Privacy Policy link includes the word 'Privacy' and can easily be found on the page specified above.</div>\n<div class=\"innerText\"><br />You will be notified of any Privacy Policy changes:</div>\n<div class=\"innerText\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>&bull;</strong>&nbsp;On our Privacy Policy Page</div>\n<div class=\"innerText\">Can change your personal information:</div>\n<div class=\"innerText\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>&bull;</strong>&nbsp;By logging in to your account</div>\n<div class=\"innerText\"><br /><strong>How does our site handle Do Not Track signals?</strong></div>\n<div class=\"innerText\">We honor Do Not Track signals and Do Not Track, plant cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in place.</div>\n<div class=\"innerText\"><br /><strong>Does our site allow third-party behavioral tracking?</strong></div>\n<div class=\"innerText\">It's also important to note that we do not allow third-party behavioral tracking</div>\n<span id=\"coppAct\"></span><br />\n<div class=\"blueText\"><strong>COPPA (Children Online Privacy Protection Act)</strong></div>\n<br />\n<div class=\"innerText\">When it comes to the collection of personal information from children under the age of 13 years old, the Children's Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, United States' consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children's privacy and safety online.<br /><br /></div>\n<div class=\"innerText\">We do not specifically market to children under the age of 13 years old.</div>\n<div class=\"innerText\">Do we let third-parties, including ad networks or plug-ins collect PII from children under 13?</div>\n<span id=\"ftcFip\"></span><br />\n<div class=\"blueText\"><strong>Fair Information Practices</strong></div>\n<br />\n<div class=\"innerText\">The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.<br /><br /></div>\n<div class=\"innerText\"><strong>In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur:</strong></div>\n<div class=\"innerText\">We will notify you via email</div>\n<div class=\"innerText\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>&bull;</strong>&nbsp;Within 7 business days</div>\n<div class=\"innerText\"><br />We also agree to the Individual Redress Principle which requires that individuals have the right to legally pursue enforceable rights against data collectors and processors who fail to adhere to the law. This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or government agencies to investigate and/or prosecute non-compliance by data processors.</div>\n<span id=\"canSpam\"></span><br />\n<div class=\"blueText\"><strong>CAN SPAM Act</strong></div>\n<br />\n<div class=\"innerText\">The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations.<br /><br /></div>\n<div class=\"innerText\"><strong>We collect your email address in order to:</strong></div>\n<div class=\"innerText\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>&bull;</strong>&nbsp;Send information, respond to inquiries, and/or other requests or questions</div>\n<div class=\"innerText\"><br /><strong>To be in accordance with CANSPAM, we agree to the following:</strong></div>\n<div class=\"innerText\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>&bull;</strong>&nbsp;Not use false or misleading subjects or email addresses.</div>\n<div class=\"innerText\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>&bull;</strong>&nbsp;Identify the message as an advertisement in some reasonable way.</div>\n<div class=\"innerText\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>&bull;</strong>&nbsp;Include the physical address of our business or site headquarters.</div>\n<div class=\"innerText\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>&bull;</strong>&nbsp;Monitor third-party email marketing services for compliance, if one is used.</div>\n<div class=\"innerText\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>&bull;</strong>&nbsp;Honor opt-out/unsubscribe requests quickly.</div>\n<div class=\"innerText\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>&bull;</strong>&nbsp;Allow users to unsubscribe by using the link at the bottom of each email.</div>\n<div class=\"innerText\"><strong><br />If at any time you would like to unsubscribe from receiving future emails, you can email us at</strong></div>\n<div class=\"innerText\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>&bull;</strong>&nbsp;Follow the instructions at the bottom of each email.</div>\nand we will promptly remove you from&nbsp;<strong>ALL</strong>&nbsp;correspondence.</div>\n<p><br /><span id=\"ourCon\"></span></p>\n<div class=\"blueText\"><strong>Contacting Us</strong></div>\n<p>&nbsp;</p>\n<div class=\"innerText\">If there are any questions regarding this privacy policy, you may contact us using the information below.<br /><br /></div>\n<div class=\"innerText\">igainafrica.com</div>\n<p>Kintampo, Republic of Ghana 00000</p>\n<div class=\"innerText\">Ghana</div>\n<div class=\"innerText\">support@igainafrica.com</div>\n<div class=\"innerText\">+233 20 551 6964</div>\n<div class=\"innerText\"><br />Last Edited on 2018-04-03</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/static-pages/privacy/privacy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivacyComponent = /** @class */ (function () {
    function PrivacyComponent() {
    }
    PrivacyComponent.prototype.ngOnInit = function () {
    };
    PrivacyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-privacy',
            template: __webpack_require__("../../../../../src/app/components/static-pages/privacy/privacy.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/static-pages/privacy/privacy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyComponent);
    return PrivacyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/static-pages/terms/terms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/static-pages/terms/terms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"st_wrapper\">\n    <a href=\"#\"><img class=\"the_logo\" src=\"assets/images/igain.png\" alt=\"logo\" width=\"100\"></a>  \n<h2 style=\"text-align: center;\">TERMS AND CONDITIONS</h2><ol><li><strong>Introduction</strong></li></ol><p>These Website Standard Terms and Conditions written on this webpage shall manage your use of this website. These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.</p><p>Minors or people below 18 years old are not allowed to use this Website.</p><ol start=\"2\"><li><strong>Intellectual Property Rights</strong></li></ol><p>Other than the content you own, under these Terms, Igain Africa and/or its licensors own all the intellectual property rights and materials contained in this Website.</p><p>You are granted limited license only for purposes of viewing the material contained on this Website.</p><ol start=\"3\"><li><strong>Restrictions</strong></li></ol><p>You are specifically restricted from all of the following</p><ul><li>publishing any Website material in any other media;</li><li>selling, sublicensing and/or otherwise commercializing any Website material;</li><li>publicly performing and/or showing any Website material;</li><li>using this Website in any way that is or may be damaging to this Website;</li><li>using this Website in any way that impacts user access to this Website;</li><li>using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;</li><li>engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;</li><li>using this Website to engage in any advertising or marketing.</li></ul><p>Certain areas of this Website are restricted from being access by you and Igain Africa may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.</p><ol start=\"4\"><li><strong>Your Content</strong></li></ol><p>In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant Igain Africa a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.</p><p>Your Content must be your own and must not be invading any third-party’s rights. Igain Africa reserves the right to remove any of Your Content from this Website at any time without notice.</p><ol start=\"5\"><li><strong>No warranties</strong></li></ol><p>This Website is provided “as is,” with all faults, and Igain Africa express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.</p><ol start=\"6\"><li><strong>Limitation of liability</strong></li></ol><p>In no event shall Igain Africa, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. &nbsp;Igain Africa, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p><ol start=\"7\"><li><strong>Indemnification</strong></li></ol><p>You hereby indemnify to the fullest extent Igain Africa from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.</p><ol start=\"8\"><li><strong>Severability</strong></li></ol><p>If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.</p><ol start=\"9\"><li><strong>Variation of Terms</strong></li></ol><p>Igain Africa is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.</p><ol start=\"10\"><li><strong>Assignment</strong></li></ol><p>The Igain Africa is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.</p><ol start=\"11\"><li><strong>Entire Agreement</strong></li></ol><p>These Terms constitute the entire agreement between Igain Africa and you in relation to your use of this Website, and supersede all prior agreements and understandings.</p><ol start=\"12\"><li><strong>Governing Law &amp; Jurisdiction</strong></li></ol><p>These Terms will be governed by and interpreted in accordance with the laws of the State of Ghana, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Ghana for the resolution of any disputes.</p><p>These terms and conditions have been generated at <a href=\"https://termsandcondiitionssample.com/\" target=\"_blank\">Terms And Conditions Sample.com</a>.</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/static-pages/terms/terms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsComponent = /** @class */ (function () {
    function TermsComponent() {
    }
    TermsComponent.prototype.ngOnInit = function () {
    };
    TermsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-terms',
            template: __webpack_require__("../../../../../src/app/components/static-pages/terms/terms.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/static-pages/terms/terms.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TermsComponent);
    return TermsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            _this.authService.getCurrentUser().subscribe(function (user) {
                if (user) {
                    observer.next(true);
                    observer.complete();
                }
                else {
                    observer.error(false);
                    _this.router.navigate(['/sign-in']);
                    observer.complete();
                }
            }, function (error) {
                observer.next(false);
                _this.router.navigate(['/sign-in']);
                observer.complete();
            });
        });
    };
    AuthGuardService.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth-interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthInterceptorService = /** @class */ (function () {
    function AuthInterceptorService(router) {
        this.router = router;
    }
    AuthInterceptorService.prototype.intercept = function (req, next) {
        var url = req.url.toLowerCase();
        if (url.startsWith(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl) && !url.startsWith(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + "/auth/sign-in/") && !url.startsWith(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + "/auth/register/")) {
            var token = localStorage.getItem('authToken');
            var header = 'Bearer ' + token;
            var headers = req.headers
                .set('Authorization', header);
            req = req.clone({ headers: headers });
        }
        return next.handle(req).pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["c" /* map */])(function (event) { return event; }));
    };
    AuthInterceptorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AuthInterceptorService);
    return AuthInterceptorService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(userservice, http) {
        this.userservice = userservice;
        this.http = http;
    }
    AuthService.prototype.register = function (user) {
        var url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].baseUrl + "/auth/register/";
        var body = { data: user };
        return this.http.post(url, body);
    };
    AuthService.prototype.signIn = function (number, password) {
        var url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].baseUrl + "/auth/sign-in/";
        var data = { momoNumber: number, password: password };
        var body = { data: data };
        return this.http.post(url, body);
    };
    AuthService.prototype.requestPasswordReset = function () {
    };
    AuthService.prototype.resetPassword = function () {
    };
    AuthService.prototype.signOut = function () {
        localStorage.removeItem('authToken');
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(true);
    };
    AuthService.prototype.isLoggedIn = function () {
        var token = localStorage.getItem("authToken");
        return !!token ? true : false;
    };
    AuthService.prototype.getCurrentUser = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            if (!_this.isLoggedIn()) {
                observer.error('not logged in');
            }
            _this.userservice.getMe().subscribe(function (user) {
                if (user) {
                    observer.next(user);
                    observer.complete();
                }
                else {
                    observer.error(false);
                }
            }, function (error) {
                observer.error(error);
            });
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/back-auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackAuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BackAuthGuardService = /** @class */ (function () {
    function BackAuthGuardService(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    BackAuthGuardService.prototype.canActivate = function (route, state) {
        var _this = this;
        var url = state.url;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            if (_this.authService.isLoggedIn()) {
                observer.next(false);
                _this.router.navigate(['/']);
                observer.complete();
            }
            else {
                observer.next(true);
                observer.complete();
            }
        });
    };
    BackAuthGuardService.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    BackAuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]])
    ], BackAuthGuardService);
    return BackAuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/services/investment-types-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvestmentTypesResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__investments_service__ = __webpack_require__("../../../../../src/app/services/investments.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InvestmentTypesResolverService = /** @class */ (function () {
    function InvestmentTypesResolverService(investmentService) {
        this.investmentService = investmentService;
    }
    InvestmentTypesResolverService.prototype.resolve = function (route, state) {
        return this.investmentService.getAllInvestmentsTypes();
    };
    InvestmentTypesResolverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__investments_service__["a" /* InvestmentsService */]])
    ], InvestmentTypesResolverService);
    return InvestmentTypesResolverService;
}());



/***/ }),

/***/ "../../../../../src/app/services/investments.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvestmentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvestmentsService = /** @class */ (function () {
    function InvestmentsService(http) {
        this.http = http;
    }
    InvestmentsService.prototype.pledge = function (investmentPackageId) {
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + "/investments/";
        return this.http.post(url, { investmentTypeId: investmentPackageId });
    };
    InvestmentsService.prototype.getUserInvestments = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + "/investments/";
        return this.http.get(url);
    };
    InvestmentsService.prototype.getAllInvestmentsTypes = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + "/investments/types/";
        return this.http.get(url);
    };
    InvestmentsService.prototype.activateInvestment = function (investmentId) {
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + "/investments/" + investmentId + "/activate";
        return this.http.put(url, {});
    };
    InvestmentsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], InvestmentsService);
    return InvestmentsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user-investments-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInvestmentsResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__investments_service__ = __webpack_require__("../../../../../src/app/services/investments.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserInvestmentsResolverService = /** @class */ (function () {
    function UserInvestmentsResolverService(investmentService) {
        this.investmentService = investmentService;
    }
    UserInvestmentsResolverService.prototype.resolve = function (route, state) {
        return this.investmentService.getUserInvestments();
    };
    UserInvestmentsResolverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__investments_service__["a" /* InvestmentsService */]])
    ], UserInvestmentsResolverService);
    return UserInvestmentsResolverService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user-ressolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRessolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserRessolverService = /** @class */ (function () {
    function UserRessolverService(userService) {
        this.userService = userService;
    }
    UserRessolverService.prototype.resolve = function (route, state) {
        return this.userService.getMe();
    };
    UserRessolverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]])
    ], UserRessolverService);
    return UserRessolverService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getMe = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + "/auth/myinfo/";
        return this.http.get(url);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: "https://p2p-backend.herokuapp.com"
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map