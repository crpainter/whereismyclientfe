webpackJsonp([4],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payments_payments__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jsonwebtoken__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jsonwebtoken__);
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
    function CharityPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.DonationStatus = true;
        this.charity = this.navParams.get("charity");
        this.token = localStorage.getItem("TOKEN");
        var jsBody = Object(__WEBPACK_IMPORTED_MODULE_4_jsonwebtoken__["verify"])(this.token, 'shh');
        console.log("profile token: ", this.token);
        this.user = jsBody.user;
    }
    CharityPage.prototype.navigatetoProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */], {
            username: this.username
        });
    };
    CharityPage.prototype.navigatetoPayments = function (charity) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__payments_payments__["a" /* PaymentsPage */], {
            charity: charity,
            DonationStatus: this.DonationStatus
        });
    };
    CharityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-charityInfo',template:/*ion-inline-start:"/Users/Chris/Documents/whereismyclientfe/src/pages/charityInfo/charityInfo.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Your Account / {{charity.name}}\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <div>\n        <br>\n        <h1>{{charity.name}}</h1>\n        <img src={{charity.logourl}} width="200px" height="200px">\n        <h4 style="text-align: left">{{charity.description}}</h4>\n        <div style="position: absolute; text-align: center; left: 50%; bottom: 3%; transform: translate(-50%);">\n            <a href={{charity.siteurl}} style="display: inline; float: none;">\n                <button ion-button center round>Visit Site</button>\n            </a>\n            <a (click)="navigatetoPayments(charity);" style="display: inline; float: left;">\n                <button ion-button center round>Add Donation</button>\n            </a>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/Chris/Documents/whereismyclientfe/src/pages/charityInfo/charityInfo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CharityPage);
    return CharityPage;
}());

//# sourceMappingURL=charityInfo.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__portfolio_portfolio__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stripe_java_script_stripe_java_script__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stripe_native_stripe_native__ = __webpack_require__(385);
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
    function PaymentsPage(navCtrl, navParams, http, app, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.stripe = Stripe('pk_test_9xDCoJstNY3XTH470KJmBNzU');
        this.charity = this.navParams.get("charity");
        this.DonationStatus = this.navParams.get("DonationStatus");
        this.token = localStorage.getItem("TOKEN");
        var jsBody = Object(__WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__["verify"])(this.token, 'shh');
        console.log("profile token: ", this.token);
        this.user = jsBody.user;
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
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__portfolio_portfolio__["a" /* PortfolioPage */]);
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
            .post("http://localhost:3000/payment?jwt=" + localStorage.getItem("Token"), {
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__stripe_java_script_stripe_java_script__["a" /* StripeJavaScriptPage */]);
    };
    PaymentsPage.prototype.openNative = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__stripe_native_stripe_native__["a" /* StripeNativePage */]);
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
            .post("http://localhost:3000/user/charity/addDonation?jwt=" + this.token + "&charity_id=" + this.charity.id + "&donation_amount=" + this.deposit, {})
            .subscribe(function (result) {
            // The log below says it all, this code is allowing this form to "function" even though the strip logic isn't completely functioning correctly.
            console.log("And I wouldn't have gotten away with it either if it weren't for that meddling http property.");
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__portfolio_portfolio__["a" /* PortfolioPage */], {
                user: _this.user
            });
        }, function (error) {
            callback(error);
        });
    };
    PaymentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payments',template:/*ion-inline-start:"/Users/Chris/Documents/whereismyclientfe/src/pages/payments/payments.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Your Account / {{charity.name}}\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content text-center padding>\n    <div>\n        <br>\n        <ion-list>\n            <ion-item>\n                <h1> Make a Payment to {{charity.name}}</h1>\n                <img src={{charity.logourl}} width="200px" height="200px">\n            </ion-item>\n            <ion-item>\n                <ion-label float>Donation Amount:</ion-label>\n                <ion-input [(ngModel)]="deposit"></ion-input>\n            </ion-item>\n        </ion-list>\n        <<ion-list radio-group [(ngModel)]="frequency">\n            <ion-item>\n                <ion-label>One Time</ion-label>\n                <ion-radio value="oneTime" (click)="oneTimeTrue()"></ion-radio>\n            </ion-item>\n            <ion-item>\n                <ion-label>Monthly</ion-label>\n                <ion-radio value="monthly" (click)="monthlyTrue()"></ion-radio>\n            </ion-item>\n            </ion-list>\n            <form action="/" method="post" id="payment-form">\n                <div class="form-row">\n                    <div id="card-element"></div>\n                    <!-- Used to display Element errors -->\n                    <div id="card-errors" role="alert"></div>\n                </div>\n                <button ion-button block (click)="navigatetoPortfolio()" color="danger">Donate Once</button>\n            </form>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/Chris/Documents/whereismyclientfe/src/pages/payments/payments.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object])
    ], PaymentsPage);
    return PaymentsPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=payments.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(254);
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/Chris/Documents/whereismyclientfe/src/pages/home/home.html"*/'<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row> \n        <ion-col text-center>\n          <img stacked src="../../assets/imgs/Asset 3@2x.png"/>\n        </ion-col>\n      </ion-row>\n    <br>\n    <ion-row >\n      <ion-col text-center>\n        <button ion-button (click)="navigatetoLogin()" block outline>Sign In</button>\n        <br>\n        <button ion-button  (click)="navigatetoRegister()" block outline>Register</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/Chris/Documents/whereismyclientfe/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(159);
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
            selector: 'page-login',template:/*ion-inline-start:"/Users/Chris/Documents/whereismyclientfe/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar></ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col text-center>\n          <ion-list>\n            <h1 >sign in to continue</h1>\n            <br>\n\n            <ion-item>\n              <ion-label floating>username</ion-label>\n              <ion-input type="text" value="" [(ngModel)]="username"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label floating>password</ion-label>\n              <ion-input type="password" value="" [(ngModel)]="password"></ion-input>\n            </ion-item>\n            <br>\n\n            <ion-item>\n              <ion-label style="size:3">remember me</ion-label>\n              <ion-checkbox color="dark" checked="false"></ion-checkbox>\n            </ion-item>\n          </ion-list>\n          <a href="nonexistent.com" id="forgot"> forgot password?</a>\n          <button padding ion-button (click)="navigatetoProfile()" block outline>submit</button>\n\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n\n  <!-- <ion-row>\n    <a href="nonexistent.com" id="forgot"> Forgot Password?</a>\n  </ion-row>\n  <br>\n  <ion-row>\n    <button padding ion-button (click)="navigatetoProfile()" block outline>submit</button>\n  </ion-row> -->\n\n</ion-content>'/*ion-inline-end:"/Users/Chris/Documents/whereismyclientfe/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowsePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/Chris/Documents/whereismyclientfe/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Chris/Documents/whereismyclientfe/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__findCharitiesPage_findCharitiesPage__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__portfolio_portfolio__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__browse_browse__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__favorites_favorites__ = __webpack_require__(157);
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

/***/ 168:
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
webpackEmptyAsyncContext.id = 168;

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/browse/browse.module": [
		653,
		3
	],
	"../pages/favorites/favorites.module": [
		654,
		2
	],
	"../pages/settings/settings.module": [
		655,
		1
	],
	"../pages/tabs/tabs.module": [
		656,
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
webpackAsyncContext.id = 209;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(39);
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
    AuthService.prototype.login = function (username, password, callback) {
        this.http
            .post("http://localhost:3000/login", {
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

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_ts_User__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(133);
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
    function RegisterPage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
    }
    RegisterPage.prototype.navigatetoLogin = function () {
        var _this = this;
        var user = new __WEBPACK_IMPORTED_MODULE_2__models_ts_User__["a" /* User */]();
        user.password = this.password;
        user.username = this.username;
        this.http
            .post("http://localhost:3000/register", user)
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
            selector: 'page-register',template:/*ion-inline-start:"/Users/Chris/Documents/whereismyclientfe/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar></ion-navbar>\n</ion-header>\n\n<br>\n<br>\n\n<ion-content padding>\n\n<ion-grid>\n  <ion-row>\n    <ion-col text-center>\n\n          <h1>create your account</h1>\n            <ion-item>\n              <ion-label floating>first name</ion-label>\n              <ion-input type="text" value=""></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>last name</ion-label>\n              <ion-input type="password"></ion-input>\n            </ion-item>\n          <ion-item>\n            <ion-label floating>username</ion-label>\n            <ion-input type="username" [(ngModel)]="username"></ion-input>\n          </ion-item>\n            <ion-item>\n              <ion-label floating>password</ion-label>\n              <ion-input type="text" value="" [(ngModel)]="password"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>confirm password</ion-label>\n              <ion-input type="password"></ion-input>\n            </ion-item>\n          <br>\n          <br>\n\n          <button ion-button (click)="navigatetoLogin()" block outline>submit</button>\n\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/Chris/Documents/whereismyclientfe/src/pages/register/register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StripeJavaScriptPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StripeNativePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(452);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_charityInfo_charityInfo__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_findCharitiesPage_findCharitiesPage__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_portfolio_portfolio__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_payments_payments__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_service__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_settings_settings__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_browse_browse__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_favorites_favorites__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_stripe_java_script_stripe_java_script__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_stripe_native_stripe_native__ = __webpack_require__(385);
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
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
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

/***/ 481:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 483:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 520:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 521:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 580:
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

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__charityInfo_charityInfo__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__findCharitiesPage_findCharitiesPage__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__portfolio_portfolio__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settings_settings__ = __webpack_require__(158);
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
    function ProfilePage(navCtrl, navParams, http, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.app = app;
        this.token = localStorage.getItem("TOKEN");
        var jsBody = Object(__WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__["verify"])(this.token, 'shh');
        this.user = jsBody.user;
        console.log(this.user.username);
        var callback = function (err) {
            if (err) {
                // TODO: display error
                return;
            }
            _this.navCtrl.push(ProfilePage_1);
        };
        this.http
            .get("http://localhost:3000/donation1/charitiesDonatedTo?jwt=" + this.token)
            .subscribe(function (result) {
            _this.charitiesDonatedTo = result.json();
        }, function (error) {
            callback(error);
        });
    }
    ProfilePage_1 = ProfilePage;
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log("Charities Donated to is:", this.charitiesDonatedTo);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__portfolio_portfolio__["a" /* PortfolioPage */]);
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
            selector: 'page-profile',template:/*ion-inline-start:"/Users/Chris/Documents/whereismyclientfe/src/pages/profile/profile.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-buttons start padding>\n            <button ion-button (click)="logout()" >\n                <ion-icon name="log-out"></ion-icon>\n            </button>            \n                \n        </ion-buttons>\n        <ion-title>Profile</ion-title>\n\n        <ion-buttons end padding>\n            <button ion-button clear (click)="navigateToSettings()">\n                <ion-icon name="settings"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-grid>\n        <ion-row>\n            <ion-col text-center>\n                <br>\n                <img src="../../assets/imgs/Asset 7@2x.png" center>\n                <ion-item-group>\n                    <ion-label>username: {{this.user.username}}</ion-label>\n                    <br>\n                    <br>\n                    <h1>your charities</h1>\n                    <ion-list>\n                        <ion-item *ngFor="let charity of this.charitiesDonatedTo">\n                            <ion-thumbnail item-start>\n                                <img src={{charity.logourl}}>\n                            </ion-thumbnail>\n                            <h2>{{charity.name}}</h2>\n                            <p>${{charity.userDonationTotal}} Given • 167 Treatments Provided</p>\n                            <button ion-button clear item-end (click)="navigateToCharity(charity);">View</button>\n                        </ion-item>\n                    </ion-list>\n                </ion-item-group>\n            </ion-col>\n        </ion-row>\n\n    </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/Chris/Documents/whereismyclientfe/src/pages/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], ProfilePage);
    return ProfilePage;
    var ProfilePage_1;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 261,
	"./af.js": 261,
	"./ar": 262,
	"./ar-dz": 263,
	"./ar-dz.js": 263,
	"./ar-kw": 264,
	"./ar-kw.js": 264,
	"./ar-ly": 265,
	"./ar-ly.js": 265,
	"./ar-ma": 266,
	"./ar-ma.js": 266,
	"./ar-sa": 267,
	"./ar-sa.js": 267,
	"./ar-tn": 268,
	"./ar-tn.js": 268,
	"./ar.js": 262,
	"./az": 269,
	"./az.js": 269,
	"./be": 270,
	"./be.js": 270,
	"./bg": 271,
	"./bg.js": 271,
	"./bm": 272,
	"./bm.js": 272,
	"./bn": 273,
	"./bn.js": 273,
	"./bo": 274,
	"./bo.js": 274,
	"./br": 275,
	"./br.js": 275,
	"./bs": 276,
	"./bs.js": 276,
	"./ca": 277,
	"./ca.js": 277,
	"./cs": 278,
	"./cs.js": 278,
	"./cv": 279,
	"./cv.js": 279,
	"./cy": 280,
	"./cy.js": 280,
	"./da": 281,
	"./da.js": 281,
	"./de": 282,
	"./de-at": 283,
	"./de-at.js": 283,
	"./de-ch": 284,
	"./de-ch.js": 284,
	"./de.js": 282,
	"./dv": 285,
	"./dv.js": 285,
	"./el": 286,
	"./el.js": 286,
	"./en-au": 287,
	"./en-au.js": 287,
	"./en-ca": 288,
	"./en-ca.js": 288,
	"./en-gb": 289,
	"./en-gb.js": 289,
	"./en-ie": 290,
	"./en-ie.js": 290,
	"./en-il": 291,
	"./en-il.js": 291,
	"./en-nz": 292,
	"./en-nz.js": 292,
	"./eo": 293,
	"./eo.js": 293,
	"./es": 294,
	"./es-do": 295,
	"./es-do.js": 295,
	"./es-us": 296,
	"./es-us.js": 296,
	"./es.js": 294,
	"./et": 297,
	"./et.js": 297,
	"./eu": 298,
	"./eu.js": 298,
	"./fa": 299,
	"./fa.js": 299,
	"./fi": 300,
	"./fi.js": 300,
	"./fo": 301,
	"./fo.js": 301,
	"./fr": 302,
	"./fr-ca": 303,
	"./fr-ca.js": 303,
	"./fr-ch": 304,
	"./fr-ch.js": 304,
	"./fr.js": 302,
	"./fy": 305,
	"./fy.js": 305,
	"./gd": 306,
	"./gd.js": 306,
	"./gl": 307,
	"./gl.js": 307,
	"./gom-latn": 308,
	"./gom-latn.js": 308,
	"./gu": 309,
	"./gu.js": 309,
	"./he": 310,
	"./he.js": 310,
	"./hi": 311,
	"./hi.js": 311,
	"./hr": 312,
	"./hr.js": 312,
	"./hu": 313,
	"./hu.js": 313,
	"./hy-am": 314,
	"./hy-am.js": 314,
	"./id": 315,
	"./id.js": 315,
	"./is": 316,
	"./is.js": 316,
	"./it": 317,
	"./it.js": 317,
	"./ja": 318,
	"./ja.js": 318,
	"./jv": 319,
	"./jv.js": 319,
	"./ka": 320,
	"./ka.js": 320,
	"./kk": 321,
	"./kk.js": 321,
	"./km": 322,
	"./km.js": 322,
	"./kn": 323,
	"./kn.js": 323,
	"./ko": 324,
	"./ko.js": 324,
	"./ky": 325,
	"./ky.js": 325,
	"./lb": 326,
	"./lb.js": 326,
	"./lo": 327,
	"./lo.js": 327,
	"./lt": 328,
	"./lt.js": 328,
	"./lv": 329,
	"./lv.js": 329,
	"./me": 330,
	"./me.js": 330,
	"./mi": 331,
	"./mi.js": 331,
	"./mk": 332,
	"./mk.js": 332,
	"./ml": 333,
	"./ml.js": 333,
	"./mn": 334,
	"./mn.js": 334,
	"./mr": 335,
	"./mr.js": 335,
	"./ms": 336,
	"./ms-my": 337,
	"./ms-my.js": 337,
	"./ms.js": 336,
	"./mt": 338,
	"./mt.js": 338,
	"./my": 339,
	"./my.js": 339,
	"./nb": 340,
	"./nb.js": 340,
	"./ne": 341,
	"./ne.js": 341,
	"./nl": 342,
	"./nl-be": 343,
	"./nl-be.js": 343,
	"./nl.js": 342,
	"./nn": 344,
	"./nn.js": 344,
	"./pa-in": 345,
	"./pa-in.js": 345,
	"./pl": 346,
	"./pl.js": 346,
	"./pt": 347,
	"./pt-br": 348,
	"./pt-br.js": 348,
	"./pt.js": 347,
	"./ro": 349,
	"./ro.js": 349,
	"./ru": 350,
	"./ru.js": 350,
	"./sd": 351,
	"./sd.js": 351,
	"./se": 352,
	"./se.js": 352,
	"./si": 353,
	"./si.js": 353,
	"./sk": 354,
	"./sk.js": 354,
	"./sl": 355,
	"./sl.js": 355,
	"./sq": 356,
	"./sq.js": 356,
	"./sr": 357,
	"./sr-cyrl": 358,
	"./sr-cyrl.js": 358,
	"./sr.js": 357,
	"./ss": 359,
	"./ss.js": 359,
	"./sv": 360,
	"./sv.js": 360,
	"./sw": 361,
	"./sw.js": 361,
	"./ta": 362,
	"./ta.js": 362,
	"./te": 363,
	"./te.js": 363,
	"./tet": 364,
	"./tet.js": 364,
	"./tg": 365,
	"./tg.js": 365,
	"./th": 366,
	"./th.js": 366,
	"./tl-ph": 367,
	"./tl-ph.js": 367,
	"./tlh": 368,
	"./tlh.js": 368,
	"./tr": 369,
	"./tr.js": 369,
	"./tzl": 370,
	"./tzl.js": 370,
	"./tzm": 371,
	"./tzm-latn": 372,
	"./tzm-latn.js": 372,
	"./tzm.js": 371,
	"./ug-cn": 373,
	"./ug-cn.js": 373,
	"./uk": 374,
	"./uk.js": 374,
	"./ur": 375,
	"./ur.js": 375,
	"./uz": 376,
	"./uz-latn": 377,
	"./uz-latn.js": 377,
	"./uz.js": 376,
	"./vi": 378,
	"./vi.js": 378,
	"./x-pseudo": 379,
	"./x-pseudo.js": 379,
	"./yo": 380,
	"./yo.js": 380,
	"./zh-cn": 381,
	"./zh-cn.js": 381,
	"./zh-hk": 382,
	"./zh-hk.js": 382,
	"./zh-tw": 383,
	"./zh-tw.js": 383
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
webpackContext.id = 608;

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(132);
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

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindCharitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payments_payments__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jsonwebtoken__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(39);
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
    function FindCharitiesPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.DonationStatus = false;
        this.token = localStorage.getItem("TOKEN");
        var jsBody = Object(__WEBPACK_IMPORTED_MODULE_4_jsonwebtoken__["verify"])(this.token, 'shh');
        console.log("profile token: ", this.token);
        this.user = jsBody.user;
        var callback = function (err) {
            if (err) {
                // TODO: display error
                return;
            }
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
        };
        this.http
            .get("http://localhost:3000/charity", this.token)
            .subscribe(function (result) {
            _this.charitiesAll = result.json();
        }, function (error) {
            callback(error);
        });
    }
    FindCharitiesPage.prototype.navigatetoProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */], {
            user: this.user,
        });
    };
    FindCharitiesPage.prototype.navigatetoPayments = function (charity) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__payments_payments__["a" /* PaymentsPage */], {
            user: this.user,
            charity: charity,
            DonationStatus: this.DonationStatus
        });
    };
    FindCharitiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-findCharitiesPage',template:/*ion-inline-start:"/Users/Chris/Documents/whereismyclientfe/src/pages/findCharitiesPage/findCharitiesPage.html"*/'<ion-header>\n        <ion-navbar>\n                <ion-title>Search</ion-title>\n              </ion-navbar>\n\n\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n\n<ion-content>\n\n    <ion-grid>\n        <ion-row nowrap class="forecast_container">\n            <ion-col text-center>\n                <!-- <ion-searchbar [(ngModel)]="charity" \n                [showCancelButton]="shouldShowCancel"\n                 (ionInput)="onInput($event)" (ionCancel)="onCancel($event)">\n                </ion-searchbar> -->\n                <ion-list>\n                    <ion-item *ngFor="let charity of charitiesAll">\n                        <ion-thumbnail item-start>\n                            <img src="{{charity.logourl}}">\n                        </ion-thumbnail>\n                        <h2>{{charity.name}}</h2>\n                        <button ion-button clear item-end (click)="navigatetoPayments(charity);">Donate Now</button>\n                    </ion-item>\n                </ion-list>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/Chris/Documents/whereismyclientfe/src/pages/findCharitiesPage/findCharitiesPage.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
    ], FindCharitiesPage);
    return FindCharitiesPage;
}());

//# sourceMappingURL=findCharitiesPage.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__charityInfo_charityInfo__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__findCharitiesPage_findCharitiesPage__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_chart_js__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_chart_js__);
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
    function PortfolioPage(navCtrl, navParams, http, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.app = app;
        this.token = localStorage.getItem("TOKEN");
        var jsBody = Object(__WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__["verify"])(this.token, 'shh');
        console.log("profile token: ", this.token);
        this.user = jsBody.user;
    }
    PortfolioPage_1 = PortfolioPage;
    PortfolioPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var callback = function (err) {
            if (err) {
                // TODO: display error
                return;
            }
        };
        this.http
            .get("http://localhost:3000/donation1/charitiesDonatedTo?jwt=" + this.token)
            .subscribe(function (result) {
            _this.charitiesDonatedTo = result.json();
            console.log("My charitiesDonatedTo was=" + _this.charitiesDonatedTo[1].id);
            _this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_7_chart_js__["Chart"](_this.doughnutCanvas.nativeElement, {
                type: 'doughnut',
                data: {
                    labels: _this.charitiesDonatedTo.map(function (e) { return e.name; }),
                    datasets: [{
                            label: 'Dollars Donated',
                            data: _this.charitiesDonatedTo.map(function (e) { return e.userDonationTotal; }),
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            hoverBackgroundColor: [
                                "#FF6384",
                                "#36A2EB",
                                "#FFCE56",
                                "#FF6384",
                                "#36A2EB",
                                "#FFCE56"
                            ]
                        }]
                }
            });
        }, function (error) {
            callback(error);
        });
    };
    PortfolioPage.prototype.navigatetoHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    PortfolioPage.prototype.navigatetoFindCharities = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__findCharitiesPage_findCharitiesPage__["a" /* FindCharitiesPage */]);
    };
    PortfolioPage.prototype.navigatetoPortfolio = function () {
        this.navCtrl.push(PortfolioPage_1);
    };
    PortfolioPage.prototype.navigateToCharity = function (charity) {
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
            selector: 'page-portfolio',template:/*ion-inline-start:"/Users/Chris/Documents/whereismyclientfe/src/pages/portfolio/portfolio.html"*/'<ion-header>\n        <ion-navbar><ion-title>Portfolio</ion-title></ion-navbar>\n    \n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-grid>\n        <ion-row>\n            <ion-col text-center>\n                    <ion-item-group>\n                        <ion-card>\n                            <ion-card-content>\n                                <canvas #doughnutCanvas></canvas>\n                            </ion-card-content>\n                        </ion-card>\n                            <ion-list>\n                                <ion-item *ngFor="let charity of this.charitiesDonatedTo">\n                                    <ion-thumbnail item-start>\n                                        <img src={{charity.logourl}}>\n                                    </ion-thumbnail>\n                                    <h2>{{charity.name}}</h2>\n                                    <p>${{charity.userDonationTotal}} Given • 167 Treatments Provided</p>\n                                    <button ion-button clear item-end (click)="navigateToCharity(charity);">View</button>\n                                </ion-item>\n                            </ion-list>\n\n                    </ion-item-group>\n\n\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/Chris/Documents/whereismyclientfe/src/pages/portfolio/portfolio.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], PortfolioPage);
    return PortfolioPage;
    var PortfolioPage_1;
}());

//# sourceMappingURL=portfolio.js.map

/***/ })

},[429]);
//# sourceMappingURL=main.js.map