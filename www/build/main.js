webpackJsonp([0],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payments_payments__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jsonwebtoken__ = __webpack_require__(55);
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
            selector: 'page-charityInfo',template:/*ion-inline-start:"/Users/mayapelichet/iXperience/wheresmyclife/src/pages/charityInfo/charityInfo.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Your Account / {{charity.name}}\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <div>\n        <br>\n        <h1>{{charity.name}}</h1>\n        <img src={{charity.logourl}} width="200px" height="200px">\n        <h4 style="text-align: left">{{charity.description}}</h4>\n        <div style="position: absolute; text-align: center; left: 50%; bottom: 3%; transform: translate(-50%);">\n            <a href={{charity.siteurl}} style="display: inline; float: none;">\n                <button ion-button center round>Visit Site</button>\n            </a>\n            <a (click)="navigatetoPayments(charity);" style="display: inline; float: left;">\n                <button ion-button center round>Add Donation</button>\n            </a>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/mayapelichet/iXperience/wheresmyclife/src/pages/charityInfo/charityInfo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], CharityPage);
    return CharityPage;
}());

//# sourceMappingURL=charityInfo.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__);
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
    function PaymentsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.charity = this.navParams.get("charity");
        this.DonationStatus = this.navParams.get("DonationStatus");
        this.token = localStorage.getItem("TOKEN");
        var jsBody = Object(__WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__["verify"])(this.token, 'shh');
        console.log("profile token: ", this.token);
        this.user = jsBody.user;
    }
    PaymentsPage.prototype.navigatetoProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    PaymentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payments',template:/*ion-inline-start:"/Users/mayapelichet/iXperience/wheresmyclife/src/pages/payments/payments.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Your Account / {{charity.name}}\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content text-center padding>\n    <div>\n        <br>\n        <ion-list>\n            <ion-item>\n                <h1> Make a Payment to {{charity.name}}</h1>\n                <img src={{charity.logourl}} width="200px" height="200px">\n            </ion-item>\n            <ion-item>\n                <ion-label float>Credit Card Number:</ion-label>\n                <ion-input></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label float>3-Digit Security Code:</ion-label>\n                <ion-input></ion-input>\n            </ion-item>\n            <ion-item>\n                    <ion-label float>Donation Amount:</ion-label>\n                    <ion-input [(ngModel)]="deposit"></ion-input>\n                </ion-item>\n        </ion-list>\n        <ion-list radio-group>\n            <ion-item>\n                <ion-label>Instant Deposit</ion-label>\n                <ion-radio value="friends" checked></ion-radio>\n            </ion-item>\n            <ion-item>\n                <ion-label>Monthly</ion-label>\n                <ion-radio value="family"></ion-radio>\n            </ion-item>\n        </ion-list>\n        <button ion-button (click)="navigatetoPortfolio()" color="danger" round>Donate</button>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/mayapelichet/iXperience/wheresmyclife/src/pages/payments/payments.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], PaymentsPage);
    return PaymentsPage;
}());

//# sourceMappingURL=payments.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindCharitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payments_payments__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jsonwebtoken__ = __webpack_require__(55);
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






var FindCharitiesPage = /** @class */ (function () {
    function FindCharitiesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.DonationStatus = false;
        this.token = localStorage.getItem("TOKEN");
        var jsBody = Object(__WEBPACK_IMPORTED_MODULE_4_jsonwebtoken__["verify"])(this.token, 'shh');
        console.log("profile token: ", this.token);
        this.user = jsBody.user;
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
            selector: 'page-findCharitiesPage',template:/*ion-inline-start:"/Users/mayapelichet/iXperience/wheresmyclife/src/pages/findCharitiesPage/findCharitiesPage.html"*/'<ion-header>\n    <ion-navbar>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n        <ion-row>\n            <ion-col text-center>\n                <h1>find charities</h1>\n                <ion-list>\n                    <ion-item *ngFor="let charity of user.charitiesNotDonatedTo">\n                        <ion-thumbnail item-start>\n                            <img src={{charity.logourl}}>\n                        </ion-thumbnail>\n                        <h2>{{charity.name}}</h2>\n                        <button ion-button clear item-end (click)="navigatetoPayments(charity);">Donate Now</button>\n                    </ion-item>\n                </ion-list>\n            </ion-col>\n        </ion-row>\n        </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/mayapelichet/iXperience/wheresmyclife/src/pages/findCharitiesPage/findCharitiesPage.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], FindCharitiesPage);
    return FindCharitiesPage;
}());

//# sourceMappingURL=findCharitiesPage.js.map

/***/ }),

/***/ 154:
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
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 195:
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
webpackEmptyAsyncContext.id = 195;

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__(283);
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
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
        };
        this.authService.login(this.username, this.password, callback);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/mayapelichet/iXperience/wheresmyclife/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar></ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col text-center>\n          <ion-list>\n            <h1 >sign in to continue</h1>\n            <br>\n\n            <ion-item>\n              <ion-label floating>username</ion-label>\n              <ion-input type="text" value="" [(ngModel)]="username"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label floating>password</ion-label>\n              <ion-input type="password" value="" [(ngModel)]="password"></ion-input>\n            </ion-item>\n            <br>\n\n            <ion-item>\n              <ion-label style="size:3">remember me</ion-label>\n              <ion-checkbox color="dark" checked="false"></ion-checkbox>\n            </ion-item>\n          </ion-list>\n          <a href="nonexistent.com" id="forgot"> forgot password?</a>\n          <button padding ion-button (click)="navigatetoProfile()" block outline>submit</button>\n\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n\n  <!-- <ion-row>\n    <a href="nonexistent.com" id="forgot"> Forgot Password?</a>\n  </ion-row>\n  <br>\n  <ion-row>\n    <button padding ion-button (click)="navigatetoProfile()" block outline>submit</button>\n  </ion-row> -->\n\n</ion-content>'/*ion-inline-end:"/Users/mayapelichet/iXperience/wheresmyclife/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__charityInfo_charityInfo__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__findCharitiesPage_findCharitiesPage__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__);
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
    function PortfolioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.token = localStorage.getItem("TOKEN");
        var jsBody = Object(__WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__["verify"])(this.token, 'shh');
        console.log("profile token: ", this.token);
        this.user = jsBody.user;
    }
    PortfolioPage_1 = PortfolioPage;
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
            selector: 'page-portfolio',template:/*ion-inline-start:"/Users/mayapelichet/iXperience/wheresmyclife/src/pages/portfolio/portfolio.html"*/'<ion-header>\n    <ion-navbar>\n\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-grid>\n        <ion-row>\n            <ion-col text-center>\n                    <h1 style="text-align: center">portfolio</h1>\n                    <ion-item-group>\n                        <ion-card>\n                            <ion-card-header>\n                                charity donations\n                            </ion-card-header>\n                            <ion-card-content>\n                                <canvas #doughnutCanvas></canvas>\n                            </ion-card-content>\n                        </ion-card>\n                            <ion-list>\n                                <ion-item *ngFor="let charity of user.charitiesDonatedTo">\n                                    <ion-thumbnail item-start>\n                                        <img src={{charity.logourl}}>\n                                    </ion-thumbnail>\n                                    <h2>{{charity.name}}</h2>\n                                    <p>${{charity.userDonationTotal}} Given • 167 Treatments Provided</p>\n                                    <button ion-button clear item-end (click)="navigateToCharity(charity);">View</button>\n                                </ion-item>\n                            </ion-list>\n\n                    </ion-item-group>\n\n\n                    <ion-buttons>\n                        <button padding ion-button block outline (click)="navigatetoFindCharities()">find charities</button>    \n                        <br>            \n                        <button ion-button (click)="navigatetoHome()" block outline>logout</button>\n\n                    </ion-buttons>\n\n\n\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/mayapelichet/iXperience/wheresmyclife/src/pages/portfolio/portfolio.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], PortfolioPage);
    return PortfolioPage;
    var PortfolioPage_1;
}());

//# sourceMappingURL=portfolio.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(72);
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

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_ts_User__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(72);
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
    RegisterPage.prototype.navigatetoProfile = function () {
        var _this = this;
        var user = new __WEBPACK_IMPORTED_MODULE_3__models_ts_User__["a" /* User */]();
        user.password = this.password;
        user.username = this.username;
        this.http
            .post("http://localhost:3000/register", user)
            .subscribe(function (result) {
            console.log(result);
            // Our username and password (on this) should have data from the user
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */], {
                user: user
            });
        }, function (error) {
            console.log(error);
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/mayapelichet/iXperience/wheresmyclife/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar></ion-navbar>\n</ion-header>\n\n<br>\n<br>\n\n<ion-content padding>\n\n<ion-grid>\n  <ion-row>\n    <ion-col text-center>\n\n          <h1>create your account</h1>\n            <ion-item>\n              <ion-label floating>first name</ion-label>\n              <ion-input type="text" value=""></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>last name</ion-label>\n              <ion-input type="password"></ion-input>\n            </ion-item>\n          <ion-item>\n            <ion-label floating>username</ion-label>\n            <ion-input type="username" [(ngModel)]="username"></ion-input>\n          </ion-item>\n            <ion-item>\n              <ion-label floating>password</ion-label>\n              <ion-input type="text" value="" [(ngModel)]="password"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>confirm password</ion-label>\n              <ion-input type="password"></ion-input>\n            </ion-item>\n          <br>\n          <br>\n\n          <button ion-button (click)="navigatetoProfile()" block outline>submit</button>\n\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/mayapelichet/iXperience/wheresmyclife/src/pages/register/register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(308);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_charityInfo_charityInfo__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_findCharitiesPage_findCharitiesPage__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_portfolio_portfolio__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_payments_payments__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_service__ = __webpack_require__(283);
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
                __WEBPACK_IMPORTED_MODULE_14__pages_payments_payments__["a" /* PaymentsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_charityInfo_charityInfo__["a" /* CharityPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_findCharitiesPage_findCharitiesPage__["a" /* FindCharitiesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_portfolio_portfolio__["a" /* PortfolioPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_payments_payments__["a" /* PaymentsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_15__auth_service__["a" /* AuthService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(73);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/mayapelichet/iXperience/wheresmyclife/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/mayapelichet/iXperience/wheresmyclife/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 363:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 365:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 403:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 404:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__charityInfo_charityInfo__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__findCharitiesPage_findCharitiesPage__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__portfolio_portfolio__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jsonwebtoken__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jsonwebtoken__);
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
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.token = localStorage.getItem("TOKEN");
        var jsBody = Object(__WEBPACK_IMPORTED_MODULE_6_jsonwebtoken__["verify"])(this.token, 'shh');
        this.user = jsBody.user;
        console.log(this.user.username);
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
    };
    ProfilePage.prototype.navigatetoHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    ProfilePage.prototype.navigatetoFindCharities = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__findCharitiesPage_findCharitiesPage__["a" /* FindCharitiesPage */]);
    };
    ProfilePage.prototype.navigatetoPortfolio = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__portfolio_portfolio__["a" /* PortfolioPage */]);
    };
    ProfilePage.prototype.navigateToCharity = function (charity) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__charityInfo_charityInfo__["a" /* CharityPage */], {
            charity: charity
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/mayapelichet/iXperience/wheresmyclife/src/pages/profile/profile.html"*/'<ion-header>\n    <ion-navbar>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-grid>\n        <ion-row>\n            <ion-col text-center>\n                <h1 style="text-align: center">profile</h1>\n                <br>\n                <img src="../../assets/imgs/Asset 7@2x.png" center>\n                <ion-item-group>\n                    <ion-label>username: {{this.user.username}}</ion-label>\n                    <br> \n                    <br>\n                    <h1>your charities</h1>\n                    <ion-list>\n                        <!-- <ion-item *ngFor="let charity of user.charitiesDonatedTo">\n                    <ion-thumbnail item-start>\n                        <img src={{charity.logourl}}>\n                    </ion-thumbnail>\n                    <h2>{{charity.name}}</h2>\n                    <p>${{charity.userDonationTotal}} Given • 167 Treatments Provided</p>\n                    <button ion-button clear item-end (click)="navigateToCharity(charity);">View</button>\n                </ion-item> -->\n                    </ion-list>\n                </ion-item-group>\n            </ion-col>\n        </ion-row>\n\n        <ion-buttons>\n                <button padding ion-button block outline (click)="navigatetoFindCharities()">Find Charities</button>\n                <br>\n                <button padding ion-button block outline (click)="navigatetoPortfolio()">Your Portfolio</button>\n                <br>\n                <button ion-button (click)="navigatetoHome()" block outline>Logout</button>\n            </ion-buttons>\n    </ion-grid>\n\n    \n\n    </ion-content>'/*ion-inline-end:"/Users/mayapelichet/iXperience/wheresmyclife/src/pages/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 463:
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

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(284);
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/mayapelichet/iXperience/wheresmyclife/src/pages/home/home.html"*/'<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row> \n        <ion-col text-center>\n          <img stacked src="../../assets/imgs/Asset 3@2x.png"/>\n        </ion-col>\n      </ion-row>\n    <br>\n    <ion-row >\n      <ion-col text-center>\n        <button ion-button (click)="navigatetoLogin()" block outline>sign in</button>\n        <br>\n        <button ion-button  (click)="navigatetoRegister()" block outline>register</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/mayapelichet/iXperience/wheresmyclife/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[285]);
//# sourceMappingURL=main.js.map