webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(197);
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/Chris/Documents/goldenThread/src/pages/home/home.html"*/'\n\n<ion-content padding style="background-color: rgb(255, 203, 203)">\n    <div style="width:320px; height:180px; margin: 10% auto; \n    -moz-box-shadow: 2px 8px 8px 2px rgb(165, 164, 164); \n    -webkit-box-shadow: 2px 8px 8px 2px rgb(165, 164, 164); \n      box-shadow: 2px 8px 8px 2px rgb(165, 164, 164); \n      padding: 20px;\n      border-radius: 9px;\n      align-content: center;\n      background-color: white;">\n  <h1>Welcome to DoneGood</h1>\n  <h5>have an account?</h5>\n  <br>\n  <button ion-button style="float: left" (click)="navigatetoRegister()" round>Register</button>\n  <button ion-button style="float: right" (click)="navigatetoLogin()" round>Sign In</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/Chris/Documents/goldenThread/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(50);
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
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LoginPage.prototype.navigatetoProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */], {
            username: this.username
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/Chris/Documents/goldenThread/src/pages/login/login.html"*/'\n<ion-content padding style="background-color: rgb(255, 203, 203)">\n  <div style="width:340px; height:370px; margin: 10% auto; \n  -moz-box-shadow: 2px 8px 8px 2px rgb(165, 164, 164); \n  -webkit-box-shadow: 2px 8px 8px 2px rgb(165, 164, 164); \n    box-shadow: 2px 8px 8px 2px rgb(165, 164, 164); \n    padding: 20px;\n    border-radius: 9px;\n    background-color: white;">\n    <ion-list>\n      <h1>Please Sign In</h1>\n      <h5>to continue</h5>\n\n      <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input type="text" value="" [(ngModel)]="username"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password"></ion-input>\n      </ion-item>\n      <br>\n      <ion-item>\n        <ion-label style="size:3">Remember Me</ion-label>\n        <ion-checkbox color="dark" checked="false"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n    <a style="size: 9; margin-right: 50px; margin-left: 20px" href="nonexistent.com"> Forgot Password?</a>\n    <button ion-button (click)="navigatetoProfile()" color="blue" round>Submit</button>\n\n\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/Chris/Documents/goldenThread/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(50);
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
        this.name = navParams.get('name');
        this.description = navParams.get('description');
        this.logourl = navParams.get('logourl');
    }
    CharityPage.prototype.navigatetoProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */], {
            username: this.username
        });
    };
    CharityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'charityInfo-login',template:/*ion-inline-start:"/Users/Chris/Documents/goldenThread/src/pages/charityInfo/charityInfo.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            {{name}}\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content text-center padding>\n    <br>\n    <h1>{{name}}</h1>\n    <img src={{logourl}} width="400px" height="400px">\n    <p>{{description}}</p>\n</ion-content>'/*ion-inline-end:"/Users/Chris/Documents/goldenThread/src/pages/charityInfo/charityInfo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], CharityPage);
    return CharityPage;
}());

//# sourceMappingURL=charityInfo.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(50);
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
    function RegisterPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RegisterPage.prototype.navigatetoProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */], {
            username: this.username
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/Chris/Documents/goldenThread/src/pages/register/register.html"*/'\n<ion-content padding style="background-color: rgb(255, 203, 203)">\n  <div style="width:450px; height:470px; margin: 10% auto; \n        -moz-box-shadow: 2px 8px 8px 2px rgb(165, 164, 164); \n        -webkit-box-shadow: 2px 8px 8px 2px rgb(165, 164, 164); \n          box-shadow: 2px 8px 8px 2px rgb(165, 164, 164); \n          padding: 20px;\n          border-radius: 9px;\n          background-color: white;">\n    <h1>Create Your DoneGood Account</h1>\n    <h5>let\'s get you set up</h5>\n    <div style="float: left">\n      <ion-item>\n        <ion-label floating>First name</ion-label>\n        <ion-input type="text" value=""></ion-input>\n      </ion-item>\n    </div>\n    <div style="float: right">\n      <ion-item>\n        <ion-label floating>Last name</ion-label>\n        <ion-input type="password"></ion-input>\n      </ion-item>\n    </div>\n    <br>\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input type="username" [(ngModel)]="username"></ion-input>\n    </ion-item>\n    <p style="font-size: 13px; padding-left: 3%">This can include numbers or letters, but no symbols</p>\n    <div style="float: left">\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="text" value=""></ion-input>\n      </ion-item>\n    </div>\n    <div style="float: right">\n      <ion-item>\n        <ion-label floating>Confirm Password</ion-label>\n        <ion-input type="password"></ion-input>\n      </ion-item>\n    </div>\n    <div>\n      <p style="font-size: 13px; padding-left: 3%; float:left">Let\'s use at least 6 characters</p>\n    </div>\n    <br>\n\n\n    <div style="float:right; clear:left">\n      <button ion-button (click)="navigatetoProfile()" color="blue" round>Let\'s Go!</button>\n    </div>\n\n\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/Chris/Documents/goldenThread/src/pages/register/register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_charityInfo_charityInfo__ = __webpack_require__(196);
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
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_charityInfo_charityInfo__["a" /* CharityPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_charityInfo_charityInfo__["a" /* CharityPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(100);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Chris/Documents/goldenThread/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Chris/Documents/goldenThread/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__charityInfo_charityInfo__ = __webpack_require__(196);
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
        this.username = navParams.get('username');
    }
    ProfilePage.prototype.navigatetoHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    ProfilePage.prototype.navigateToCharity = function (charityName) {
        switch (charityName) {
            case 'Schistosomiasis Control Initiative':
                this.name = "Schistosomiasis Control Initiative";
                this.description = "The Schistosomiasis Control Initiative provides pills that help cure those who are infected with nutrient-sucking parasites.";
                this.logourl = "https://yt3.ggpht.com/a-/AJLlDp0IwdEtAAhi271YFTwwAZJycfUD1h6FNQtGzw=s900-mo-c-c0xffffffff-rj-k-no";
                break;
            case 'Against Malaria Foundation':
                this.name = "Against Malaria Foundation";
                this.description = "The Against Malaria Foundation provides bednets to people at risk for contracting Malaria.";
                this.logourl = "data:image/png;base64,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";
                break;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__charityInfo_charityInfo__["a" /* CharityPage */], {
            name: this.name,
            description: this.description,
            logourl: this.logourl
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/Chris/Documents/goldenThread/src/pages/profile/profile.html"*/'<ion-content padding style="background-color: rgb(255, 203, 203)">\n    <div style="width:450px; height:530px; margin: 10% auto; \n            -moz-box-shadow: 2px 8px 8px 2px rgb(165, 164, 164); \n            -webkit-box-shadow: 2px 8px 8px 2px rgb(165, 164, 164); \n              box-shadow: 2px 8px 8px 2px rgb(165, 164, 164); \n              padding: 20px;\n              border-radius: 9px;\n              background-color: white;">\n        <h1 style="text-align: center">Your Account</h1>\n        <img style="width: 110px; height: 110px; margin: 0 auto; display: block;" src="https://thewellatsacstate.com/cache/ce-image/fitness/staff/tatiana-quintero/assets/images/default-profile-image_500_500_bor3_0fa195_all_250.png">\n        <ion-item-group>\n            <ion-item>\n                <ion-label>Username: {{username}}</ion-label>\n            </ion-item>\n            <ion-item>\n                <ion-label>Your Charities:</ion-label>\n            </ion-item>\n            <ion-item>\n                <ion-thumbnail item-start>\n                    <img src="data:image/png;base64,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">\n                </ion-thumbnail>\n                <h2>Against Malaria Foundation</h2>\n                <p>$1,074 Given • 347 Bed Nets Delivered</p>\n                <button ion-button clear item-end (click)="navigateToCharity(\'Against Malaria Foundation\');">View</button>\n            </ion-item>\n            <ion-item>\n                <ion-thumbnail item-start>\n                    <img src="https://yt3.ggpht.com/a-/AJLlDp0IwdEtAAhi271YFTwwAZJycfUD1h6FNQtGzw=s900-mo-c-c0xffffffff-rj-k-no">\n                </ion-thumbnail>\n                <h2>Schistosomiasis Control Initiative</h2>\n                <p>$891 Given • 167 Treatments Provided</p>\n                <button ion-button clear item-end (click)="navigateToCharity(\'Schistosomiasis Control Initiative\');">View</button>\n            </ion-item>\n\n\n        </ion-item-group>\n        <div style="text-align: center">\n            <button ion-button (click)="navigatetoHome()" color="danger" round>Logout</button>\n        </div>\n\n\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/Chris/Documents/goldenThread/src/pages/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map