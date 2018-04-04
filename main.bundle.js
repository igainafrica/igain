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
exports.push([module.i, "form {}\n\ninput:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {\n    background: red !important;\n}\n\nbutton:hover {\n    opacity: 0.8;\n}\n\n.imgcontainer {\n    text-align: center;\n    margin: 24px 0 12px 0;\n}\n\n.container {\n    padding: 16px;\n}\n\nspan.psw {\n    float: right;\n    padding-top: 16px;\n}\n\n/* Change styles for span and cancel button on extra small screens */\n\n@media screen and (max-width: 300px) {\n    span.psw {\n       display: block;\n       float: none;\n    }\n    .cancelbtn {\n       width: 100%;\n    }\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/auth/sign-in/sign-in.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"half_width f_left n_margin\">\n  <img src=\"assets/images/thebg.jpg\" width=\"100%\">\n</div> -->\n\n<!--\n<header>\n    \n</header>\n-->\n\n<div class=\"half_width f_left n_margin\" id=\"h_left\">\n    <a href=\"#\"><img class=\"the_logo\" src=\"assets/images/igain_white.png\" alt=\"logo\" width=\"100\"></a>\n  <div class=\"white_texts texts_c\">\n    <h1>Welcome to IGAIN Africa</h1>\n    <p>\n      this is the best peer to peer platform online.\n    </p>\n  </div>\n</div>\n\n<div class=\"half_width f_right n_margin form_box\" id=\"h_right\">\n\n    <form action=\"/action_page.php\" >\n    \n      <div class=\"container\">\n        \n            <h1>Sign In</h1>\n            <p>Please fill in this form to login.</p>\n            <hr>\n        <label for=\"uname\"><b>Number</b></label>\n        <input type=\"text\" placeholder=\"Enter Phone number\" name=\"number\" required [(ngModel)]=\"number\">\n    \n        <label for=\"psw\"><b>Password</b></label>\n        <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" [(ngModel)]=\"password\" required>\n            \n        <button (click)=login() >Login</button>\n        <!-- <label>\n          <input type=\"checkbox\" checked=\"checked\" name=\"remember\"> Remember me\n        </label> -->\n      </div>\n    \n      <div class=\"container\" style=\"\">\n        <span>Don't have an account <a [routerLink]=\"['/sign-up']\" >Sign Up</a></span>\n        <!-- <span class=\"psw\">Forgot <a href=\"#\">password?</a></span> -->\n      </div>\n    </form>\n    </div>\n\n   "

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
exports.push([module.i, "body {font-family: Arial, Helvetica, sans-serif;}\nform {}\nbutton:hover {\n    opacity: 0.8;\n}\n.cancelbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #f44336;\n}\n.imgcontainer {\n    text-align: center;\n    margin: 24px 0 12px 0;\n}\n.container {\n    padding: 16px;\n}\nspan.psw {\n    float: right;\n    padding-top: 16px;\n}\n/* Change styles for span and cancel button on extra small screens */\n@media screen and (max-width: 300px) {\n    span.psw {\n       display: block;\n       float: none;\n    }\n    .cancelbtn {\n       width: 100%;\n    }\n}\n#h_left {\n    background: #222946;\n    height: 120%;\n}\n#h_right {\n    background: white;\n    height: 120%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/auth/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"half_width f_left n_margin\" id=\"h_left\">\n    <a href=\"#\"><img class=\"the_logo\" src=\"assets/images/igain_white.png\" alt=\"logo\" width=\"100\"></a>\n  <div class=\"white_texts texts_c\">\n    <h1>Welcome to IGAIN Africa</h1>\n    <p>\n      this is the best peer to peer platform online.\n    </p>\n  </div>\n</div>\n\n\n<div class=\"half_width f_right n_margin\" id=\"h_right\">\n  <form action=\"/action_page.php\" style=\"\">\n    <div class=\"container\">\n      <h1>Sign Up</h1>\n      <p>Please fill in this form to create an account.</p>\n      <hr>\n\n      <label for=\"username\">\n        <b>Name</b>\n      </label>\n      <input type=\"text\" placeholder=\"Enter Name\" [(ngModel)]=\"name\" name=\"username\" required>\n\n      \n      <label for=\"email\">\n        <b>Network Operator</b>\n      </label>\n      <select class=\"form-control dropdown-select\" [(ngModel)]=\"momoChannel\" id=\"momoChannel\" name=\"momoChannel\">\n        <option value=\"mtn\"> MTN </option>\n        <option value=\"tigo\"> TIGO </option>\n        <option value=\"airtel\"> AIRTEL </option>\n      </select>\n\n      <label for=\"phoneNumber\">\n        <b>Mobile Money Number</b>\n      </label>\n      <input type=\"text\" placeholder=\"Phone Number\" [(ngModel)]=\"phoneNumber\" name=\"phoneNumber\" required>\n\n      <label for=\"psw\">\n        <b>Password</b>\n      </label>\n      <input type=\"password\" placeholder=\"Enter Password\" [(ngModel)]=\"password1\" name=\"psw\" required>\n\n      <label for=\"psw-repeat\">\n        <b>Repeat Password</b>\n      </label>\n      <input type=\"password\" placeholder=\"Repeat Password\" [(ngModel)]=\"password2\" name=\"psw-repeat\" required>\n\n      <!-- <label>\n            <input type=\"checkbox\" checked=\"checked\" name=\"remember\" style=\"margin-bottom:15px\"> Remember me\n          </label> -->\n\n      <p>By creating an account you agree to our\n        <a href=\"#\" style=\"color:dodgerblue\">Terms & Privacy</a>.</p>\n\n      <div class=\"clearfix\">\n        <button (click)=\"register()\" class=\"signupbtn\">Sign Up</button>\n      </div>\n      <div class=\"container\" style=\"\">\n        <span>Already have an account <a [routerLink]=\"['/sign-in']\" >Login</a></span>\n        <!-- <span class=\"psw\">Forgot <a href=\"#\">password?</a></span> -->\n      </div>\n    </div>\n  </form>\n</div>\n\n"

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

module.exports = "<div class=\"w3-light-grey\">\n\n  <!-- Top container -->\n  <div class=\"w3-bar w3-top w3-black w3-large\" style=\"z-index:4; background-color: #222946 !important;\">\n    <button class=\"w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey\" (click)=\"w3_open();\">\n      <i class=\"fa fa-bars\"></i>  Menu</button>\n    <!--<span class=\"w3-bar-item w3-right\">Logo</span>-->\n  </div>\n\n  <!-- Sidebar/menu -->\n  <nav class=\"w3-sidebar w3-collapse w3-white w3-animate-left\" style=\"z-index:3;width:300px;\" [ngStyle]=\"{'display':isSideBarOpened === true ? 'block' : 'none' }\"\n    id=\"mySidebar\">\n    <br>\n    <div class=\"w3-container w3-row\">\n      <a href=\"#\"><img class=\"the_logo\" src=\"assets/images/igain.png\" alt=\"logo\" width=\"75\" style=\"margin:0 auto; padding: 0;\"></a>\n      <hr>\n      <div class=\"w3-col s4\">\n        <img src=\"/w3images/avatar2.png\" class=\"w3-circle w3-margin-right\" style=\"width:46px\">\n      </div>\n      <div class=\"w3-col s8 w3-bar\">\n        <span>Welcome,\n          <strong>{{user.name}}</strong>\n        </span>\n        <br>\n        <a href=\"#\" class=\"w3-bar-item w3-button\">\n          <i class=\"fa fa-envelope\"></i>\n        </a>\n        <a href=\"#\" class=\"w3-bar-item w3-button\">\n          <i class=\"fa fa-user\"></i>\n        </a>\n        <a href=\"#\" class=\"w3-bar-item w3-button\">\n          <i class=\"fa fa-cog\"></i>\n        </a>\n      </div>\n    </div>\n    <hr>\n    <div class=\"w3-container\">\n      <h5>Dashboard</h5>\n    </div>\n    <div class=\"w3-bar-block\">\n      <a href=\"#\" class=\"w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black\" (click)=\"w3_close()\" title=\"close menu\">\n        <i class=\"fa fa-remove fa-fw\"></i>  Close Menu</a>\n      <!-- <a href=\"#\" class=\"w3-bar-item w3-button w3-padding\"><i class=\"fa fa-users fa-fw\"></i>  Traffic</a> -->\n      <a (click)=\"section='invest'\" [routerLink]=\"['/dashboard','invest']\" class=\"w3-bar-item w3-button w3-padding\">\n        <i class=\"fa fa-diamond fa-fw\"></i>  Invest</a>\n      <a (click)=\"section='transactions'\" [routerLink]=\"['/dashboard','transactions']\" class=\"w3-bar-item w3-button w3-padding\">\n        <i class=\"fa fa-bank fa-fw\"></i>  Transactions</a>\n      <a (click)=\"section='settings'\" [routerLink]=\"['/dashboard','settings']\" class=\"w3-bar-item w3-button w3-padding\">\n        <i class=\"fa fa-cog fa-fw\"></i>  Settings</a>\n      <br>\n      <br>\n      <a (click)=\"logout()\" class=\"w3-bar-item w3-button w3-padding\">\n        <i class=\"fa fa-cog fa-fw\"></i>  logout</a>\n      <br>\n      <br>\n\n    </div>\n  </nav>\n\n\n  <!-- Overlay effect when opening sidebar on small screens -->\n  <div class=\"w3-overlay w3-hide-large w3-animate-opacity\" (click)=\"w3_close()\" style=\"cursor:pointer\" title=\"close side menu\"\n    [ngStyle]=\"{'display':isSideBarOpened === true ? 'block' : 'none' }\" id=\"myOverlay\"></div>\n\n  <!-- !PAGE CONTENT! -->\n  <div class=\"w3-main\" style=\"margin-left:300px;margin-top:60px;margin-bottom:75px; background: #f7f7f9;\">\n    <app-invest *ngIf=\"section=='invest'\"></app-invest>\n    <app-transactions *ngIf=\"section=='transactions'\"></app-transactions>\n    <app-settings *ngIf=\"section=='settings'\"></app-settings>\n  </div>\n\n</div>\n\n\n\n<bs-modal #image>\n  <bs-modal-header [showDismiss]=\"true\">\n    <h4 class=\"modal-title\">Upload Profile Image</h4>\n  </bs-modal-header>\n  <bs-modal-body>\n  </bs-modal-body>\n  <bs-modal-footer [showDefaultButtons]=\"true\"></bs-modal-footer>\n</bs-modal>\n\n\n\n"

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

module.exports = "<p style=\"font-size: 28px; text-align: center;\">Recent Transactions</p>\n\n<table *ngIf=\"investments && investments.length>0\" class=\"table-hover table \" style=\"width:100%\">\n\n  <tr  *ngFor=\"let investment of investments\">\n    <td>\n      <div *ngIf=\"investment.status.donationsCompleted\" class=\"status sent text-danger\">SENT</div>\n     <div *ngIf=\"investment.status.pairingsCompleted\" class=\"status recieved text-success\">RECIEVED</div>\n      <div *ngIf=\"investment.status.pairingsCompleted\" class=\"status sent text-danger\">PENDING</div>\n      <div *ngIf=\"!investment.status.pairingsCompleted && !investment.status.donationsCompleted \" class=\"status recieved text-success\">PENDING</div>\n      <div class=\"date\">\n        @{{investment.updatedAt|date}}\n      </div>\n    </td>\n\n    <td>\n      <div>To: <span *ngIf=\"investment.donateTo.length>=1\">{{investment.donateTo.length}}</span> <span *ngIf=\"investment.donateTo.length<1\">Not Paired yet</span></div>\n      <div>From: {{user.name}}</div>\n    </td>\n    <td>\n      <!-- <span class=\"label label-success\">GHC 300</span> -->\n      <span class=\"label label-danger\">GHC {{investment.amountInvested}}</span>\n    </td>\n    <td>\n      <div>\n        <button (click)=\"modal.open()\"class=\"btn btn-success\">\n          Activate\n        </button>\n      </div>\n      <div>\n        <!-- <i class=\"fa fa-2x fa-check-circle text-success\" aria-hidden=\"true\"></i> -->\n      </div>\n      <!-- <div>-</div> -->\n    </td>\n  </tr>\n\n  <tr>\n    <td>\n      <!-- <div class=\"status sent text-danger\">SENT</div> -->\n      <div class=\"status recieved text-success\">RECIEVED</div>\n      <!-- <div class=\"status sent text-danger\">PENDING</div> -->\n      <!-- <div class=\"status recieved text-success\">PENDING</div> -->\n      <div class=\"date\">\n        @{{'2011-10-05T14:48:00.000Z'|date}}\n      </div>\n    </td>\n\n    <td>\n      <div>To: 024388699</div>\n      <div>From:</div>\n    </td>\n    <td>\n      <span class=\"label label-success\">GHC 300</span>\n      <!-- <span class=\"label label-danger\">GHC 200</span> -->\n    </td>\n    <td>\n      <div>\n        <!-- <button class=\"btn btn-success\"> Activate </button> -->\n      </div>\n      <div>\n        <i class=\"fa fa-2x fa-check-circle text-success\" aria-hidden=\"true\"></i>\n      </div>\n      <!-- <div>-</div> -->\n    </td>\n  </tr>\n\n</table>\n\n<div *ngIf=\"!investments || investments.length<1\">\n  You dont have any invest ments yet, click here to invest\n</div>\n<bs-modal #modal>\n  <bs-modal-header [showDismiss]=\"true\">\n      <h4 class=\"modal-title\">I'm a modal!</h4>\n  </bs-modal-header>\n  <bs-modal-body>\n      Hello World!\n  </bs-modal-body>\n  <bs-modal-footer [showDefaultButtons]=\"true\"></bs-modal-footer>\n</bs-modal>"

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

module.exports = "<p>\n  about-us works!\n</p>\n"

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

module.exports = "<p>\n  disclaimer works!\n</p>\n"

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

module.exports = "<p>\n  privacy works!\n</p>\n"

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

module.exports = "<p>\n  terms works!\n</p>\n"

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