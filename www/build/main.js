webpackJsonp([3],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowsePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BrowsePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BrowsePage = /** @class */ (function () {
    function BrowsePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BrowsePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BrowsePage');
    };
    BrowsePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-browse',template:/*ion-inline-start:"/Users/Chris/Documents/whereismyclientfe/src/pages/browse/browse.html"*/'<!--\n  Generated template for the BrowsePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Browse</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Chris/Documents/whereismyclientfe/src/pages/browse/browse.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], BrowsePage);
    return BrowsePage;
}());

//# sourceMappingURL=browse.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavoritesPage = /** @class */ (function () {
    function FavoritesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FavoritesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoritesPage');
    };
    FavoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorites',template:/*ion-inline-start:"/Users/Chris/Documents/whereismyclientfe/src/pages/favorites/favorites.html"*/'<!--\n  Generated template for the FavoritesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Favorites</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Chris/Documents/whereismyclientfe/src/pages/favorites/favorites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], FavoritesPage);
    return FavoritesPage;
}());

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__findCharitiesPage_findCharitiesPage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__portfolio_portfolio__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__browse_browse__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__favorites_favorites__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_5__browse_browse__["a" /* BrowsePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_6__favorites_favorites__["a" /* FavoritesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__findCharitiesPage_findCharitiesPage__["a" /* FindCharitiesPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__portfolio_portfolio__["a" /* PortfolioPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/Chris/Documents/whereismyclientfe/src/pages/tabs/tabs.html"*/'<!--\n  Generated template for the TabsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-tabs selectedIndex="2">\n  <ion-tab [root]="tab1Root" tabTitle="Browse" tabIcon="code-working"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Favorites" tabIcon="star-outline"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Search" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Portfolio" tabIcon="pie"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Profile" tabIcon="contact" ></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/Chris/Documents/whereismyclientfe/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 129:
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
webpackEmptyAsyncContext.id = 129;

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/browse/browse.module": [
		469,
		2
	],
	"../pages/favorites/favorites.module": [
		470,
		1
	],
	"../pages/tabs/tabs.module": [
		471,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 170;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_ts_User__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, http, authService) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.authService = authService;
    }
    RegisterPage.prototype.navigatetoLogin = function () {
        var _this = this;
        var user = new __WEBPACK_IMPORTED_MODULE_2__models_ts_User__["a" /* User */]();
        user.password = this.password;
        user.username = this.username;
        this.http
            .post(this.authService.getBaseUrl() + "/register", user)
            .subscribe(function (result) {
            console.log(result);
            // Our username and password (on this) should have data from the user
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */], {
                user: user
            });
        }, function (error) {
            console.log(error);
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/Chris/Documents/whereismyclientfe/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar></ion-navbar>\n</ion-header>\n\n<br>\n<br>\n\n<ion-content padding>\n\n<ion-grid>\n  <ion-row>\n    <ion-col text-center>\n\n          <h1>create your account</h1>\n            <ion-item>\n              <ion-label floating>first name</ion-label>\n              <ion-input type="text" value=""></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>last name</ion-label>\n              <ion-input type="text"></ion-input>\n            </ion-item>\n          <ion-item>\n            <ion-label floating>username</ion-label>\n            <ion-input type="username" [(ngModel)]="username"></ion-input>\n          </ion-item>\n            <ion-item>\n              <ion-label floating>password</ion-label>\n              <ion-input type="password" [(ngModel)]="password"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>confirm password</ion-label>\n              <ion-input type="password"></ion-input>\n            </ion-item>\n          <br>\n          <br>\n\n          <button ion-button (click)="navigatetoLogin()" block outline>submit</button>\n\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/Chris/Documents/whereismyclientfe/src/pages/register/register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.getBaseUrl = function () {
        // return "http://localhost:3000";
        return "https://whereismyclient-api.herokuapp.com";
    };
    AuthService.prototype.login = function (username, password, callback) {
        this.http
            .post(this.getBaseUrl() + "/login", {
            username: username,
            password: password
        })
            .subscribe(function (result) {
            var responseJson = result.json();
            // store the token in local storage
            localStorage.setItem("TOKEN", responseJson.token);
            //this.navCtrl.push(ProfilePage);
            callback();
        }, function (error) {
            callback(error);
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StripeJavaScriptPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StripeJavaScriptPage = /** @class */ (function () {
    function StripeJavaScriptPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.stripe = Stripe('pk_test_8OYeDSReq6YQ3ShqhhHsigs3');
    }
    StripeJavaScriptPage.prototype.ionViewDidLoad = function () {
        this.setupStripe();
    };
    StripeJavaScriptPage.prototype.setupStripe = function () {
        var _this = this;
        var elements = this.stripe.elements();
        var style = {
            base: {
                color: '#32325d',
                lineHeight: '24px',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#aab7c4'
                }
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
            }
        };
        this.card = elements.create('card', { style: style });
        this.card.mount('#card-element');
        this.card.addEventListener('change', function (event) {
            var displayError = document.getElementById('card-errors');
            if (event.error) {
                displayError.textContent = event.error.message;
            }
            else {
                displayError.textContent = '';
            }
        });
        var form = document.getElementById('payment-form');
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            // this.stripe.createToken(this.card)
            _this.stripe.createSource(_this.card).then(function (result) {
                if (result.error) {
                    var errorElement = document.getElementById('card-errors');
                    errorElement.textContent = result.error.message;
                }
                else {
                    console.log(result);
                }
            });
        });
    };
    StripeJavaScriptPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-stripe-java-script',template:/*ion-inline-start:"/Users/Chris/Documents/whereismyclientfe/src/pages/stripe-java-script/stripe-java-script.html"*/'<ion-header>\n<ion-navbar>\n  <ion-title>JavaScript</ion-title>\n</ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <form action="/" method="post" id="payment-form">\n\n    <div class="form-row">\n      <div id="card-element">\n        <!-- a Stripe Element will be inserted here. -->\n      </div>\n\n      <!-- Used to display Element errors -->\n      <div id="card-errors" role="alert"></div>\n    </div>\n\n    <button ion-button block large>Add Card</button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"/Users/Chris/Documents/whereismyclientfe/src/pages/stripe-java-script/stripe-java-script.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], StripeJavaScriptPage);
    return StripeJavaScriptPage;
}());

//# sourceMappingURL=stripe-java-script.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StripeNativePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the StripeNativePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StripeNativePage = /** @class */ (function () {
    function StripeNativePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StripeNativePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StripeNativePage');
    };
    StripeNativePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-stripe-native',template:/*ion-inline-start:"/Users/Chris/Documents/whereismyclientfe/src/pages/stripe-native/stripe-native.html"*/'<!--\n  Generated template for the StripeNativePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>StripeNative</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Chris/Documents/whereismyclientfe/src/pages/stripe-native/stripe-native.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], StripeNativePage);
    return StripeNativePage;
}());

//# sourceMappingURL=stripe-native.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__charityInfo_charityInfo__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__findCharitiesPage_findCharitiesPage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_ts_User__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__portfolio_portfolio__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, http, app, authService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.app = app;
        this.authService = authService;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__models_ts_User__["a" /* User */]();
        this.token = localStorage.getItem("TOKEN");
        var callback = function (err) {
            if (err) {
                // TODO: display error
                return;
            }
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__profile_profile__["a" /* ProfilePage */]);
        };
        this.http
            .get(this.authService.getBaseUrl() + "/user?jwt=" + this.token)
            .subscribe(function (result) {
            _this.user = result.json();
            console.log("this user: " + _this.user);
            console.log("result.json " + result.json());
        }, function (error) {
            callback(error);
        });
        console.log("My user is:" + this.user.username);
    }
    SettingsPage_1 = SettingsPage;
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log("Charities Donated to is:", this.charitiesDonatedTo);
    };
    SettingsPage.prototype.updateUserCreds = function () {
        this.http
            .patch(this.authService.getBaseUrl() + "/updateUser?jwt=" + this.token, {
            username: this.newUsername,
            password: this.newPassword
        })
            .subscribe(function (result) {
            var responseJson = result.json();
            // store the token in local storage
            localStorage.setItem("TOKEN", responseJson.token);
        }, function (error) {
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__profile_profile__["a" /* ProfilePage */]);
        console.log("I definitely pushed the profile page");
    };
    SettingsPage.prototype.logout = function () {
        //this.authServ.navigatetoHome (); // this is a function to logout from the server
        var root = this.app.getRootNav(); // in this line, you have to declare a root, which is the app's root 
        root.popToRoot(); // here you go to the root.
    };
    SettingsPage.prototype.navigatetoFindCharities = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__findCharitiesPage_findCharitiesPage__["a" /* FindCharitiesPage */]);
    };
    SettingsPage.prototype.navigatetoPortfolio = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__portfolio_portfolio__["a" /* PortfolioPage */]);
    };
    SettingsPage.prototype.navigateToCharity = function (charity) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__charityInfo_charityInfo__["a" /* CharityPage */], {
            charity: charity
        });
    };
    SettingsPage.prototype.navigateToSettings = function () {
        this.navCtrl.push(SettingsPage_1);
    };
    SettingsPage = SettingsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/Chris/Documents/whereismyclientfe/src/pages/settings/settings.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col text-center>\n        <!-- <h1>Change Username</h1> -->\n        <!-- <ion-item>\n          <ion-label floating>old password</ion-label>\n          <ion-input type="password" [(ngModel)]="password"></ion-input>\n        </ion-item> -->\n        <ion-item>\n          <ion-label floating>new username</ion-label>\n          <ion-input type="username" [(ngModel)]="newUsername"></ion-input>\n        </ion-item>\n        <!-- <ion-item>\n          <button ion-button (click)="updateUserCreds()" block outline>Change Username</button>\n        </ion-item> -->\n\n\n        <!-- <h1>Change Password</h1> -->\n        <!-- <ion-item>\n          <ion-label floating>old password</ion-label>\n          <ion-input type="password" [(ngModel)]="password"></ion-input>\n        </ion-item> -->\n        <ion-item>\n          <ion-label floating>new password</ion-label>\n          <ion-input type="text" [(ngModel)]="newPassword"></ion-input>\n        </ion-item>\n        <ion-item>\n          <button ion-button (click)="updateUserCreds()" block outline>Change Credentials</button>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/Chris/Documents/whereismyclientfe/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_7__auth_service__["a" /* AuthService */]])
    ], SettingsPage);
    return SettingsPage;
    var SettingsPage_1;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(370);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_charityInfo_charityInfo__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_findCharitiesPage_findCharitiesPage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_portfolio_portfolio__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_payments_payments__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_settings_settings__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_browse_browse__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_favorites_favorites__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_stripe_java_script_stripe_java_script__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_stripe_native_stripe_native__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_charityInfo_charityInfo__["a" /* CharityPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_findCharitiesPage_findCharitiesPage__["a" /* FindCharitiesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_portfolio_portfolio__["a" /* PortfolioPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_payments_payments__["a" /* PaymentsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_browse_browse__["a" /* BrowsePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_stripe_native_stripe_native__["a" /* StripeNativePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_stripe_java_script_stripe_java_script__["a" /* StripeJavaScriptPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/browse/browse.module#BrowsePageModule', name: 'BrowsePage', segment: 'browse', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorites/favorites.module#FavoritesPageModule', name: 'FavoritesPage', segment: 'favorites', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_charityInfo_charityInfo__["a" /* CharityPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_findCharitiesPage_findCharitiesPage__["a" /* FindCharitiesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_portfolio_portfolio__["a" /* PortfolioPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_payments_payments__["a" /* PaymentsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_browse_browse__["a" /* BrowsePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_stripe_native_stripe_native__["a" /* StripeNativePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_stripe_java_script_stripe_java_script__["a" /* StripeJavaScriptPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_15__auth_service__["a" /* AuthService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__charityInfo_charityInfo__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__findCharitiesPage_findCharitiesPage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_ts_User__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__portfolio_portfolio__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settings_settings__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, http, app, authService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.app = app;
        this.authService = authService;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__models_ts_User__["a" /* User */]();
        this.token = localStorage.getItem("TOKEN");
        var callback = function (err) {
            if (err) {
                // TODO: display error
                return;
            }
            _this.navCtrl.push(ProfilePage_1);
        };
        this.http
            .get(this.authService.getBaseUrl() + "/user?jwt=" + this.token)
            .subscribe(function (result) {
            _this.user = result.json();
            console.log("this user: " + _this.user);
            console.log("result.json " + result.json());
        }, function (error) {
            callback(error);
        });
        console.log("My user is:" + this.user.username);
        this.http
            .get(this.authService.getBaseUrl() + "/donation1/charitiesDonatedTo?jwt=" + this.token)
            .subscribe(function (result) {
            _this.charitiesDonatedTo = result.json();
        }, function (error) {
            callback(error);
        });
    }
    ProfilePage_1 = ProfilePage;
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.http
            .get(this.authService.getBaseUrl() + "/user?jwt=" + this.token)
            .subscribe(function (result) {
            _this.user = result.json();
            console.log("this user: " + _this.user);
            console.log("result.json " + result.json());
        }, function (error) {
        });
    };
    ProfilePage.prototype.logout = function () {
        //this.authServ.navigatetoHome (); // this is a function to logout from the server
        var root = this.app.getRootNav(); // in this line, you have to declare a root, which is the app's root 
        root.popToRoot(); // here you go to the root.
    };
    ProfilePage.prototype.navigatetoFindCharities = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__findCharitiesPage_findCharitiesPage__["a" /* FindCharitiesPage */]);
    };
    ProfilePage.prototype.navigatetoPortfolio = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__portfolio_portfolio__["a" /* PortfolioPage */]);
    };
    ProfilePage.prototype.navigateToCharity = function (charity) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__charityInfo_charityInfo__["a" /* CharityPage */], {
            charity: charity
        });
    };
    ProfilePage.prototype.navigateToSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__settings_settings__["a" /* SettingsPage */]);
    };
    ProfilePage = ProfilePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/Chris/Documents/whereismyclientfe/src/pages/profile/profile.html"*/'<ion-header>\n    <ion-navbar hideBackButton>\n        <ion-buttons start padding>\n            <button ion-button (click)="logout()" >\n                <ion-icon name="log-out"></ion-icon>\n            </button>            \n                \n        </ion-buttons>\n        <ion-title>Profile</ion-title>\n\n        <ion-buttons end padding>\n            <button ion-button clear (click)="navigateToSettings()">\n                <ion-icon name="settings"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-grid>\n        <ion-row>\n            <ion-col text-center>\n                <br>\n                <img src="../../assets/imgs/Asset 7@2x.png" center>\n                <ion-item-group>\n                    <ion-label>username: {{this.user.username}}</ion-label>\n                    <br>\n                    <br>\n                    <h1>your charities</h1>\n                    <ion-list>\n                        <ion-item *ngFor="let charity of this.charitiesDonatedTo">\n                            <ion-thumbnail item-start>\n                                <img src={{charity.logourl}}>\n                            </ion-thumbnail>\n                            <h2>{{charity.name}}</h2>\n                            <p>${{charity.userDonationTotal}} Given • 167 Treatments Provided</p>\n                            <button ion-button clear item-end (click)="navigateToCharity(charity);">View</button>\n                        </ion-item>\n                    </ion-list>\n                </ion-item-group>\n            </ion-col>\n        </ion-row>\n\n    </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/Chris/Documents/whereismyclientfe/src/pages/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_8__auth_service__["a" /* AuthService */]])
    ], ProfilePage);
    return ProfilePage;
    var ProfilePage_1;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 178,
	"./af.js": 178,
	"./ar": 179,
	"./ar-dz": 180,
	"./ar-dz.js": 180,
	"./ar-kw": 181,
	"./ar-kw.js": 181,
	"./ar-ly": 182,
	"./ar-ly.js": 182,
	"./ar-ma": 183,
	"./ar-ma.js": 183,
	"./ar-sa": 184,
	"./ar-sa.js": 184,
	"./ar-tn": 185,
	"./ar-tn.js": 185,
	"./ar.js": 179,
	"./az": 186,
	"./az.js": 186,
	"./be": 187,
	"./be.js": 187,
	"./bg": 188,
	"./bg.js": 188,
	"./bm": 189,
	"./bm.js": 189,
	"./bn": 190,
	"./bn.js": 190,
	"./bo": 191,
	"./bo.js": 191,
	"./br": 192,
	"./br.js": 192,
	"./bs": 193,
	"./bs.js": 193,
	"./ca": 194,
	"./ca.js": 194,
	"./cs": 195,
	"./cs.js": 195,
	"./cv": 196,
	"./cv.js": 196,
	"./cy": 197,
	"./cy.js": 197,
	"./da": 198,
	"./da.js": 198,
	"./de": 199,
	"./de-at": 200,
	"./de-at.js": 200,
	"./de-ch": 201,
	"./de-ch.js": 201,
	"./de.js": 199,
	"./dv": 202,
	"./dv.js": 202,
	"./el": 203,
	"./el.js": 203,
	"./en-au": 204,
	"./en-au.js": 204,
	"./en-ca": 205,
	"./en-ca.js": 205,
	"./en-gb": 206,
	"./en-gb.js": 206,
	"./en-ie": 207,
	"./en-ie.js": 207,
	"./en-il": 208,
	"./en-il.js": 208,
	"./en-nz": 209,
	"./en-nz.js": 209,
	"./eo": 210,
	"./eo.js": 210,
	"./es": 211,
	"./es-do": 212,
	"./es-do.js": 212,
	"./es-us": 213,
	"./es-us.js": 213,
	"./es.js": 211,
	"./et": 214,
	"./et.js": 214,
	"./eu": 215,
	"./eu.js": 215,
	"./fa": 216,
	"./fa.js": 216,
	"./fi": 217,
	"./fi.js": 217,
	"./fo": 218,
	"./fo.js": 218,
	"./fr": 219,
	"./fr-ca": 220,
	"./fr-ca.js": 220,
	"./fr-ch": 221,
	"./fr-ch.js": 221,
	"./fr.js": 219,
	"./fy": 222,
	"./fy.js": 222,
	"./gd": 223,
	"./gd.js": 223,
	"./gl": 224,
	"./gl.js": 224,
	"./gom-latn": 225,
	"./gom-latn.js": 225,
	"./gu": 226,
	"./gu.js": 226,
	"./he": 227,
	"./he.js": 227,
	"./hi": 228,
	"./hi.js": 228,
	"./hr": 229,
	"./hr.js": 229,
	"./hu": 230,
	"./hu.js": 230,
	"./hy-am": 231,
	"./hy-am.js": 231,
	"./id": 232,
	"./id.js": 232,
	"./is": 233,
	"./is.js": 233,
	"./it": 234,
	"./it.js": 234,
	"./ja": 235,
	"./ja.js": 235,
	"./jv": 236,
	"./jv.js": 236,
	"./ka": 237,
	"./ka.js": 237,
	"./kk": 238,
	"./kk.js": 238,
	"./km": 239,
	"./km.js": 239,
	"./kn": 240,
	"./kn.js": 240,
	"./ko": 241,
	"./ko.js": 241,
	"./ky": 242,
	"./ky.js": 242,
	"./lb": 243,
	"./lb.js": 243,
	"./lo": 244,
	"./lo.js": 244,
	"./lt": 245,
	"./lt.js": 245,
	"./lv": 246,
	"./lv.js": 246,
	"./me": 247,
	"./me.js": 247,
	"./mi": 248,
	"./mi.js": 248,
	"./mk": 249,
	"./mk.js": 249,
	"./ml": 250,
	"./ml.js": 250,
	"./mn": 251,
	"./mn.js": 251,
	"./mr": 252,
	"./mr.js": 252,
	"./ms": 253,
	"./ms-my": 254,
	"./ms-my.js": 254,
	"./ms.js": 253,
	"./mt": 255,
	"./mt.js": 255,
	"./my": 256,
	"./my.js": 256,
	"./nb": 257,
	"./nb.js": 257,
	"./ne": 258,
	"./ne.js": 258,
	"./nl": 259,
	"./nl-be": 260,
	"./nl-be.js": 260,
	"./nl.js": 259,
	"./nn": 261,
	"./nn.js": 261,
	"./pa-in": 262,
	"./pa-in.js": 262,
	"./pl": 263,
	"./pl.js": 263,
	"./pt": 264,
	"./pt-br": 265,
	"./pt-br.js": 265,
	"./pt.js": 264,
	"./ro": 266,
	"./ro.js": 266,
	"./ru": 267,
	"./ru.js": 267,
	"./sd": 268,
	"./sd.js": 268,
	"./se": 269,
	"./se.js": 269,
	"./si": 270,
	"./si.js": 270,
	"./sk": 271,
	"./sk.js": 271,
	"./sl": 272,
	"./sl.js": 272,
	"./sq": 273,
	"./sq.js": 273,
	"./sr": 274,
	"./sr-cyrl": 275,
	"./sr-cyrl.js": 275,
	"./sr.js": 274,
	"./ss": 276,
	"./ss.js": 276,
	"./sv": 277,
	"./sv.js": 277,
	"./sw": 278,
	"./sw.js": 278,
	"./ta": 279,
	"./ta.js": 279,
	"./te": 280,
	"./te.js": 280,
	"./tet": 281,
	"./tet.js": 281,
	"./tg": 282,
	"./tg.js": 282,
	"./th": 283,
	"./th.js": 283,
	"./tl-ph": 284,
	"./tl-ph.js": 284,
	"./tlh": 285,
	"./tlh.js": 285,
	"./tr": 286,
	"./tr.js": 286,
	"./tzl": 287,
	"./tzl.js": 287,
	"./tzm": 288,
	"./tzm-latn": 289,
	"./tzm-latn.js": 289,
	"./tzm.js": 288,
	"./ug-cn": 290,
	"./ug-cn.js": 290,
	"./uk": 291,
	"./uk.js": 291,
	"./ur": 292,
	"./ur.js": 292,
	"./uz": 293,
	"./uz-latn": 294,
	"./uz-latn.js": 294,
	"./uz.js": 293,
	"./vi": 295,
	"./vi.js": 295,
	"./x-pseudo": 296,
	"./x-pseudo.js": 296,
	"./yo": 297,
	"./yo.js": 297,
	"./zh-cn": 298,
	"./zh-cn.js": 298,
	"./zh-hk": 299,
	"./zh-hk.js": 299,
	"./zh-tw": 300,
	"./zh-tw.js": 300
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 424;

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Chris/Documents/whereismyclientfe/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Chris/Documents/whereismyclientfe/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindCharitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payments_payments__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__charityInfo_charityInfo__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FindCharitiesPage = /** @class */ (function () {
    function FindCharitiesPage(navCtrl, navParams, http, authService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.authService = authService;
        this.DonationStatus = false;
        this.token = localStorage.getItem("TOKEN");
        console.log("profile token: ", this.token);
        var callback = function (err) {
            if (err) {
                // TODO: display error
                return;
            }
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
        };
        this.http
            .get(this.authService.getBaseUrl() + "/user?jwt=" + this.token)
            .subscribe(function (result) {
            _this.user = result.json();
            console.log("this user: " + _this.user);
            console.log("result.json " + result.json());
        }, function (error) {
            callback(error);
        });
        this.http
            .get(this.authService.getBaseUrl() + "/charity", this.token)
            .subscribe(function (result) {
            _this.charitiesAll = result.json();
        }, function (error) {
            callback(error);
        });
    }
    FindCharitiesPage.prototype.navigateToProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */], {
            user: this.user,
        });
    };
    FindCharitiesPage.prototype.navigateToPayments = function (charity) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__payments_payments__["a" /* PaymentsPage */], {
            user: this.user,
            charity: charity,
            DonationStatus: this.DonationStatus
        });
    };
    FindCharitiesPage.prototype.navigateToCharityInfo = function (charity) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__charityInfo_charityInfo__["a" /* CharityPage */], {
            charity: charity
        });
    };
    FindCharitiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-findCharitiesPage',template:/*ion-inline-start:"/Users/Chris/Documents/whereismyclientfe/src/pages/findCharitiesPage/findCharitiesPage.html"*/'<ion-header>\n    <ion-navbar>\n        <!-- //<ion-title>Search</ion-title> -->\n        <ion-searchbar [(ngModel)]="charity" [showCancelButton]="shouldShowCancel" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)">\n            </ion-searchbar>\n\n    </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content>\n\n    <ion-grid>\n        <ion-row>\n            <ion-col text-center>\n               \n\n                <!-- <ion-list>\n                    <ion-item *ngFor="let charity of charitiesAll">\n                        <ion-thumbnail item-start>\n                            <img src="{{charity.logourl}}">\n                        </ion-thumbnail>\n                        <h2>{{charity.name}}</h2>\n                        <button ion-button clear item-end (click)="navigatetoPayments(charity);">Donate Now</button>\n                    </ion-item>\n                </ion-list> -->\n\n                <ion-list *ngFor="let charity of charitiesAll">\n                    <ion-item-sliding>\n                        <ion-item>\n                            <ion-card>\n                                <img (click)="navigateToCharityInfo(charity)" src="{{charity.featuredimage1}}" />\n                                <img src="{{charity.logourl}}" />\n\n                            </ion-card>\n                        </ion-item>\n                    </ion-item-sliding>\n                </ion-list>\n\n\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/Chris/Documents/whereismyclientfe/src/pages/findCharitiesPage/findCharitiesPage.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_6__auth_service__["a" /* AuthService */]])
    ], FindCharitiesPage);
    return FindCharitiesPage;
}());

//# sourceMappingURL=findCharitiesPage.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payments_payments__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CharityPage = /** @class */ (function () {
    function CharityPage(navCtrl, navParams, http, authService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.authService = authService;
        this.DonationStatus = true;
        this.charity = this.navParams.get("charity");
        this.token = localStorage.getItem("TOKEN");
        console.log("profile token: ", this.token);
        var callback = function (err) {
            if (err) {
                // TODO: display error
                return;
            }
        };
        this.http
            .get(this.authService.getBaseUrl() + "/user?jwt=" + this.token)
            .subscribe(function (result) {
            _this.user = result.json();
            console.log("this user: " + _this.user);
            console.log("result.json " + result.json());
        }, function (error) {
            callback(error);
        });
    }
    CharityPage.prototype.navigateToProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */], {
            username: this.username
        });
    };
    CharityPage.prototype.navigateToPayments = function (charity) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__payments_payments__["a" /* PaymentsPage */], {
            charity: charity,
            DonationStatus: this.DonationStatus,
        });
    };
    CharityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-charityInfo',template:/*ion-inline-start:"/Users/Chris/Documents/whereismyclientfe/src/pages/charityInfo/charityInfo.html"*/'<ion-header>\n    <ion-navbar>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n    <ion-grid id="gridcharity">\n        <ion-row>\n            <ion-col text-center>\n                    <img src={{charity.featuredimage1}}>\n                    <br> \n                   \n                    <div class="charitydes">\n\n                            <h2>{{charity.name}}</h2>\n                            <br>\n                            <h5>About</h5>\n                    <p>{{charity.description}}</p>\n                    </div>\n                    <br>\n\n                    <div class="button-divs">\n                    <a href="{{charity.siteurl}}">\n                        <button ion-button block outline>Visit Site\n                        </button>\n                    </a>\n                    <br>\n                    <button ion-button block outline (click)="navigateToPayments(charity)">\n                        Add Donation\n                    </button>\n\n                    </div>\n                    <br>\n                    <br>\n\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/Chris/Documents/whereismyclientfe/src/pages/charityInfo/charityInfo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */]])
    ], CharityPage);
    return CharityPage;
}());

//# sourceMappingURL=charityInfo.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__charityInfo_charityInfo__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_ts_User__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_chart_js__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PortfolioPage = /** @class */ (function () {
    function PortfolioPage(navCtrl, navParams, http, app, authService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.app = app;
        this.authService = authService;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_ts_User__["a" /* User */]();
        this.charity = this.navParams.get("charity");
        this.token = localStorage.getItem("TOKEN");
        var callback = function (err) {
            if (err) {
                // TODO: display error
                return;
            }
        };
        this.http
            .get(this.authService.getBaseUrl() + "/user?jwt=" + this.token)
            .subscribe(function (result) {
            _this.user = result.json();
            console.log("this user: " + _this.user);
            console.log("result.json " + result.json());
        }, function (error) {
            callback(error);
        });
    }
    PortfolioPage_1 = PortfolioPage;
    PortfolioPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        var callback = function (err) {
            if (err) {
                // TODO: display error
                return;
            }
        };
        this.http
            .get(this.authService.getBaseUrl() + "/donation1/charitiesDonatedTo?jwt=" + this.token)
            .subscribe(function (result) {
            _this.charitiesDonatedTo = result.json();
            console.log("My charitiesDonatedTo was=");
            _this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_6_chart_js__["Chart"](_this.doughnutCanvas.nativeElement, {
                type: 'doughnut',
                data: {
                    labels: _this.charitiesDonatedTo.map(function (e) { return e.name; }),
                    datasets: [{
                            label: 'Dollars Donated',
                            data: _this.charitiesDonatedTo.map(function (e) { return e.userDonationTotal; }),
                            backgroundColor: [
                                'rgba(255, 0, 123, .6)',
                                'rgba(0, 204, 226, .8)',
                                'rgba(191, 123, 33, .6)',
                                'rgba(0, 204, 226, .2)',
                                'rgba(0, 204, 226, .2)',
                                'rgba(0, 204, 226, .2)',
                            ],
                            hoverBorderColor: "#e1bf6a",
                            borderColor: ["#e1bf6a", "#e1bf6a", "#e1bf6a", "#e1bf6a", "#e1bf6a"],
                            borderWidth: 1,
                            hoverBorderWidth: 0,
                            hoverBackgroundColor: [
                                "#e1bf6a",
                                "#e1bf6a",
                                "#e1bf6a",
                                "#FF6384",
                                "#36A2EB",
                                "#FFCE56"
                            ]
                        }],
                },
                options: {
                    legend: {
                        labels: {
                            fontColor: "black",
                            fontFamily: "Open Sans",
                            fontWeight: 700,
                        }
                    }
                }
            });
        }, function (error) {
            callback(error);
        });
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    PortfolioPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var callback = function (err) {
            if (err) {
                // TODO: display error
                return;
            }
        };
        this.http
            .get(this.authService.getBaseUrl() + "/donation1/charitiesDonatedTo?jwt=" + this.token)
            .subscribe(function (result) {
            _this.charitiesDonatedTo = result.json();
            console.log("My charitiesDonatedTo was=");
            _this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_6_chart_js__["Chart"](_this.doughnutCanvas.nativeElement, {
                type: 'doughnut',
                data: {
                    labels: _this.charitiesDonatedTo.map(function (e) { return e.name; }),
                    datasets: [{
                            label: 'Dollars Donated',
                            data: _this.charitiesDonatedTo.map(function (e) { return e.userDonationTotal; }),
                            backgroundColor: [
                                'rgba(255, 0, 123, .6)',
                                'rgba(0, 204, 226, .8)',
                                'rgba(191, 123, 33, .6)',
                                'rgba(0, 204, 226, .2)',
                                'rgba(0, 204, 226, .2)',
                                'rgba(0, 204, 226, .2)',
                            ],
                            hoverBorderColor: "#e1bf6a",
                            borderColor: ["#e1bf6a", "#e1bf6a", "#e1bf6a", "#e1bf6a", "#e1bf6a"],
                            borderWidth: 1,
                            hoverBorderWidth: 0,
                            hoverBackgroundColor: [
                                "#e1bf6a",
                                "#e1bf6a",
                                "#e1bf6a",
                                "#FF6384",
                                "#36A2EB",
                                "#FFCE56"
                            ]
                        }],
                },
                options: {
                    legend: {
                        labels: {
                            fontColor: "black",
                            fontFamily: "Open Sans",
                            fontWeight: 700,
                        }
                    }
                }
            });
        }, function (error) {
            callback(error);
        });
    };
    PortfolioPage.prototype.navigatetoHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    PortfolioPage.prototype.navigatetoPortfolio = function () {
        this.navCtrl.push(PortfolioPage_1);
    };
    PortfolioPage.prototype.navigateToCharityInfo = function (charity) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__charityInfo_charityInfo__["a" /* CharityPage */], {
            charity: charity
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('doughnutCanvas'),
        __metadata("design:type", Object)
    ], PortfolioPage.prototype, "doughnutCanvas", void 0);
    PortfolioPage = PortfolioPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-portfolio',template:/*ion-inline-start:"/Users/Chris/Documents/whereismyclientfe/src/pages/portfolio/portfolio.html"*/'<ion-header>\n        <ion-navbar><ion-title>Portfolio</ion-title></ion-navbar>\n    \n\n</ion-header>\n\n\n<ion-content padding>\n        <ion-refresher (ionRefresh)="doRefresh($event)">\n                <ion-refresher-content></ion-refresher-content>\n              </ion-refresher>\n    <ion-grid id="portfolio">\n        <ion-row>\n            <ion-col text-center>\n                    <h3> Donation Data</h3>\n                    <br>\n\n                    <ion-item-group>\n                        <ion-card id="portfoliocard">\n                                <canvas #doughnutCanvas></canvas>\n                        </ion-card>\n                        <br>\n                        <h3> Recent Donations</h3>\n                            <ion-list>\n                                <ion-item *ngFor="let charity of this.charitiesDonatedTo">\n                                    <ion-thumbnail item-start>\n                                        <img id="album" (click)="navigateToCharityInfo(charity)" src={{charity.featuredimage1}}>\n                                    </ion-thumbnail>\n                                    <div id="charityname">\n                                    <h2 text-wrap>{{charity.name}}</h2>\n                                    </div>  \n                                    <br>\n                                    <p>${{charity.userDonationTotal}} Given</p>\n                                </ion-item>\n                            </ion-list>\n\n                    </ion-item-group>\n\n\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/Chris/Documents/whereismyclientfe/src/pages/portfolio/portfolio.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__auth_service__["a" /* AuthService */]) === "function" && _e || Object])
    ], PortfolioPage);
    return PortfolioPage;
    var PortfolioPage_1, _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=portfolio.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_ts_User__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stripe_java_script_stripe_java_script__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stripe_native_stripe_native__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__findCharitiesPage_findCharitiesPage__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var PaymentsPage = /** @class */ (function () {
    function PaymentsPage(navCtrl, navParams, http, app, alertCtrl, authService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.stripe = Stripe('pk_test_9xDCoJstNY3XTH470KJmBNzU');
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_ts_User__["a" /* User */]();
        this.charity = this.navParams.get("charity");
        this.DonationStatus = this.navParams.get("DonationStatus");
        this.token = localStorage.getItem("TOKEN");
        console.log("profile token: ", this.token);
        var callback = function (err) {
            if (err) {
                // TODO: display error
                return;
            }
        };
        this.http
            .get(this.authService.getBaseUrl() + "/user?jwt=" + this.token)
            .subscribe(function (result) {
            _this.user = result.json();
            console.log("this user: " + _this.user);
            console.log("result.json " + result.json());
        }, function (error) {
            callback(error);
        });
    }
    PaymentsPage.prototype.ionViewDidLoad = function () {
        this.setupStripe();
    };
    PaymentsPage.prototype.oneTimeTrue = function () {
        this.oneTime = true;
        this.monthly = false;
    };
    PaymentsPage.prototype.monthlyTrue = function () {
        this.oneTime = false;
        this.monthly = true;
    };
    PaymentsPage.prototype.setupStripe = function () {
        var _this = this;
        var elements = this.stripe.elements();
        var style = {
            base: {
                color: '#32325d',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#aab7c4'
                }
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
            }
        };
        this.card = elements.create('card', { style: style });
        this.card.mount('#card-element');
        this.card.addEventListener('change', function (event) {
            var displayError = document.getElementById('card-errors');
            if (event.error) {
                displayError.textContent = event.error.message;
            }
            else {
                displayError.textContent = '';
            }
        });
        var form = document.getElementById('payment-form');
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            // this.stripe.createToken(this.card) this.stripe.createSource(this.card)
            if (_this.oneTime) {
                _this.stripe.createToken(_this.card)
                    .then(function (result) {
                    if (result.error) {
                        var errorElement = document.getElementById('card-errors');
                        errorElement.textContent = result.error.message;
                    }
                    else {
                        console.log(result.token);
                        _this.stripeTokenHandler(result.token);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__findCharitiesPage_findCharitiesPage__["a" /* FindCharitiesPage */]);
                        _this.navCtrl.parent.select(3);
                        _this.donationSuccessful();
                    }
                });
            }
            else {
                // var ownerInfo = {
                //   owner: {
                //     name: this.name,
                //     address: {
                //       line1: this.address_line1,
                //       city: this.address_city,
                //       postal_code: this.address_zip,
                //       country: this.address_country,
                //     },
                //     //email: 'jenny.rosen@example.com'
                //   },
                // };
                // Un-comment below when ready to allow recurring payments
                // this.stripe.createSource(this.card)
                //     .then(result => {
                //         if (result.error) {
                //             // Inform the user if there was an error
                //             var errorElement = document.getElementById('card-errors');
                //             errorElement.textContent = result.error.message;
                //         } else {
                //             // Send the source to your server
                //             this.stripeSourceHandler(result.source);
                //             this.navCtrl.setRoot(PortfolioPage);
                //             this.donationSuccessful();
                //         }
                //     });
            }
        });
    };
    PaymentsPage.prototype.stripeTokenHandler = function (token) {
        this.http
            .post(this.authService.getBaseUrl() + "/payment?jwt=" + localStorage.getItem("Token"), {
            paymenttoken: token.id,
            amount: this.deposit,
            curency: this.curency,
            date: new Date().toDateString(),
            time: new Date().toTimeString()
        })
            .subscribe(function (result) {
            console.log(result);
        }, function (error) {
            console.log(error);
        });
    };
    // Un-comment below when ready to allow recurring payments
    // stripeSourceHandler(source) {
    //     this.http
    //       .post("http://localhost:3000/payment?jwt=" + localStorage.getItem("Token"), {
    //         cardholder: this.name,
    //         paymenttoken: source.id,
    //         amount: this.deposit,
    //         date: new Date().toDateString(),
    //         time: new Date().toTimeString()
    //       })
    //       .subscribe(
    //         result => {
    //           console.log(result);
    //         },
    //         error => {
    //           console.log(error);
    //         });
    //   }
    PaymentsPage.prototype.donationSuccessful = function () {
        console.log("Donation was definitely successful");
        var alert = this.alertCtrl.create({
            title: 'Donation Successful',
            subTitle: 'Thank you for donating!',
            buttons: ['Ok']
        });
        console.log('Donate clicked');
        alert.present();
    };
    PaymentsPage.prototype.navigatetoProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    PaymentsPage.prototype.openJavaScript = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__stripe_java_script_stripe_java_script__["a" /* StripeJavaScriptPage */]);
    };
    PaymentsPage.prototype.openNative = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__stripe_native_stripe_native__["a" /* StripeNativePage */]);
    };
    PaymentsPage.prototype.navigatetoPortfolio = function () {
        var _this = this;
        var callback = function (err) {
            if (err) {
                // TODO: display error
                return;
            }
        };
        this.http
            .post(this.authService.getBaseUrl() + "/user/charity/addDonation?jwt=" + this.token + "&charity_id=" + this.charity.id + "&donation_amount=" + this.deposit, {})
            .subscribe(function (result) {
            // The log below says it all, this code is allowing this form to "function" even though the strip logic isn't completely functioning correctly.
            console.log("And I wouldn't have gotten away with it either if it weren't for that meddling http property.");
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__findCharitiesPage_findCharitiesPage__["a" /* FindCharitiesPage */]);
            _this.navCtrl.parent.select(3);
            // this.navCtrl.push(FindCharitiesPage, {
            //     user: this.user
            // });
        }, function (error) {
            callback(error);
        });
    };
    PaymentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payments',template:/*ion-inline-start:"/Users/Chris/Documents/whereismyclientfe/src/pages/payments/payments.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Donate\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content text-center padding>\n        <ion-grid>\n                <ion-row>\n                    <ion-col text-center>\n        <br>\n        <ion-list>\n                <h1>{{charity.name}}</h1>\n                <br>\n            <ion-item>\n                <ion-label float>Donation Amount:</ion-label>\n                <ion-input [(ngModel)]="deposit"></ion-input>\n            </ion-item>\n        </ion-list>\n        <ion-list radio-group [(ngModel)]="frequency">\n            <ion-item>\n                <ion-label>One Time</ion-label>\n                <ion-radio value="oneTime" (click)="oneTimeTrue()"></ion-radio>\n            </ion-item>\n            <ion-item>\n                <ion-label>Monthly</ion-label>\n                <ion-radio value="monthly" (click)="monthlyTrue()"></ion-radio>\n            </ion-item>\n            </ion-list>\n            <form action="/" method="post" id="payment-form">\n                <div class="form-row">\n                    <div id="card-element"></div>\n                    <!-- Used to display Element errors -->\n                    <div id="card-errors" role="alert"></div>\n                </div>\n                <br>\n                <br>\n                <button ion-button block outline (click)="navigatetoPortfolio()" >Donate Once</button>\n            </form>\n\n        </ion-col>\n    </ion-row>\n</ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/Chris/Documents/whereismyclientfe/src/pages/payments/payments.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__auth_service__["a" /* AuthService */]) === "function" && _f || Object])
    ], PaymentsPage);
    return PaymentsPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=payments.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.navigatetoLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.navigatetoRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Chris/Documents/whereismyclientfe/src/pages/home/home.html"*/'<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row> \n        <ion-col text-center>\n          <img stacked src="../../assets/imgs/Asset 3@2x.png"/>\n        </ion-col>\n      </ion-row>\n    <br>\n    <ion-row >\n      <ion-col text-center>\n        <button ion-button (click)="navigatetoLogin()" block outline>sign in</button>\n        <br>\n        <button ion-button  (click)="navigatetoRegister()" block outline>register</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/Chris/Documents/whereismyclientfe/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, http, authService) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.authService = authService;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad LoginPage");
    };
    LoginPage.prototype.navigatetoProfile = function () {
        var _this = this;
        var callback = function (err) {
            if (err) {
                // TODO: display error
                return;
            }
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
        };
        this.authService.login(this.username, this.password, callback);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/Chris/Documents/whereismyclientfe/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar></ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col text-center>\n          <ion-list>\n            <h1 >sign in to continue</h1>\n            <br>\n\n            <ion-item>\n              <ion-label floating>username</ion-label>\n              <ion-input type="text" value="" [(ngModel)]="username"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label floating>password</ion-label>\n              <ion-input type="password" value="" [(ngModel)]="password"></ion-input>\n            </ion-item>\n            <br>\n\n            <ion-item>\n              <ion-label style="size:3">remember me</ion-label>\n              <ion-checkbox color="dark" checked="false"></ion-checkbox>\n            </ion-item>\n          </ion-list>\n          <a href="#" id="forgot"> forgot password?</a>\n          <button padding ion-button (click)="navigatetoProfile()" block outline>submit</button>\n\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n\n  <!-- <ion-row>\n    <a href="nonexistent.com" id="forgot"> Forgot Password?</a>\n  </ion-row>\n  <br>\n  <ion-row>\n    <button padding ion-button (click)="navigatetoProfile()" block outline>submit</button>\n  </ion-row> -->\n\n</ion-content>'/*ion-inline-end:"/Users/Chris/Documents/whereismyclientfe/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[347]);
//# sourceMappingURL=main.js.map