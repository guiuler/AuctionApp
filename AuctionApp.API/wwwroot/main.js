(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");






var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router, alertify, userService) {
        this.authService = authService;
        this.router = router;
        this.alertify = alertify;
        this.userService = userService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        this.alertify.error('Você deve estar logado para acessar essa página');
        this.router.navigate(['/home']);
        return false;
    };
    AuthGuard.prototype.canShowForAdmin = function () {
        return this.userService.isAdmin();
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_services/alertify.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/alertify.service.ts ***!
  \***********************************************/
/*! exports provided: AlertifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyService", function() { return AlertifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlertifyService = /** @class */ (function () {
    function AlertifyService() {
    }
    AlertifyService.prototype.confirm = function (message, okCallback) {
        alertify.confirm(message, function (e) {
            if (e) {
                okCallback();
            }
            else {
            }
        });
    };
    AlertifyService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.warning(message);
    };
    AlertifyService.prototype.message = function (message) {
        alertify.message(message);
    };
    AlertifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertifyService);
    return AlertifyService;
}());



/***/ }),

/***/ "./src/app/_services/auction-bid.service.ts":
/*!**************************************************!*\
  !*** ./src/app/_services/auction-bid.service.ts ***!
  \**************************************************/
/*! exports provided: AuctionBidService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuctionBidService", function() { return AuctionBidService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AuctionBidService = /** @class */ (function () {
    function AuctionBidService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    AuctionBidService.prototype.getAuctionBids = function () {
        return this.http.get(this.baseUrl + 'auctionbids');
    };
    AuctionBidService.prototype.getAuctionBid = function (id) {
        return this.http.get(this.baseUrl + 'auctionbids/' + id);
    };
    AuctionBidService.prototype.createAuctionBid = function (model, userId, auctionId) {
        model.auctionId = auctionId;
        model.userId = userId;
        return this.http.post(this.baseUrl + 'auctionbids', model);
    };
    AuctionBidService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AuctionBidService);
    return AuctionBidService;
}());



/***/ }),

/***/ "./src/app/_services/auction.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/auction.service.ts ***!
  \**********************************************/
/*! exports provided: AuctionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuctionService", function() { return AuctionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AuctionService = /** @class */ (function () {
    function AuctionService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    AuctionService.prototype.getAuctions = function () {
        return this.http.get(this.baseUrl + 'auctions');
    };
    AuctionService.prototype.getAuction = function (id) {
        return this.http.get(this.baseUrl + 'auctions/' + id);
    };
    AuctionService.prototype.createAuction = function (model, idUser) {
        if (model.isNew) {
            model.isNew = true;
        }
        else {
            model.isNew = false;
        }
        model.userId = idUser;
        return this.http.post(this.baseUrl + 'auctions', model);
    };
    AuctionService.prototype.deleteAuction = function (id) {
        return this.http.delete(this.baseUrl + 'auctions/' + id);
    };
    AuctionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AuctionService);
    return AuctionService;
}());



/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'auth/';
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
    }
    AuthService.prototype.login = function (model) {
        var _this = this;
        return this.http.post(this.baseUrl + 'login', model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var user = response;
            if (user) {
                localStorage.setItem('token', user.token);
                _this.decodedToken = _this.jwtHelper.decodeToken(user.token);
            }
        }));
    };
    AuthService.prototype.register = function (model) {
        return this.http.post(this.baseUrl + 'register', model);
    };
    AuthService.prototype.loggedIn = function () {
        var token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/_services/error.interceptor.ts":
/*!************************************************!*\
  !*** ./src/app/_services/error.interceptor.ts ***!
  \************************************************/
/*! exports provided: ErrorInterceptor, ErrorInterceptorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptorProvider", function() { return ErrorInterceptorProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor() {
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                if (error.status === 401) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.statusText);
                }
                var applicationError = error.headers.get('Application-Error');
                if (applicationError) {
                    console.log(applicationError);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(applicationError);
                }
                var serverError = error.error;
                var modalStateErrors = '';
                if (serverError && typeof serverError === 'object') {
                    for (var key in serverError) {
                        if (serverError[key]) {
                            modalStateErrors += serverError[key] + '\n';
                        }
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(modalStateErrors || serverError || 'Server Error');
            }
        }));
    };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());

var ErrorInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
    useClass: ErrorInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alertify.service */ "./src/app/_services/alertify.service.ts");






var UserService = /** @class */ (function () {
    function UserService(http, route, alertify) {
        this.http = http;
        this.route = route;
        this.alertify = alertify;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
    }
    UserService.prototype.isAdmin = function () {
        var _this = this;
        this.getUser(+this.route.snapshot.params['id']).subscribe(function (user) {
            _this.user = user;
        });
        return this.user.isAdministrator;
    };
    UserService.prototype.getUser = function (id) {
        return this.http.get(this.baseUrl + 'users/' + id);
    };
    UserService.prototype.updateUser = function (id, user) {
        return this.http.put(this.baseUrl + 'users/' + id, user);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<router-outlet><router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
    }
    AppComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('token');
        if (token) {
            this.authService.decodedToken = this.jwtHelper.decodeToken(token);
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auction_auction_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auction/auction.component */ "./src/app/auction/auction.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _services_error_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_services/error.interceptor */ "./src/app/_services/error.interceptor.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _auctionbid_auctionbid_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auctionbid/auctionbid.component */ "./src/app/auctionbid/auctionbid.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _services_auction_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_services/auction.service */ "./src/app/_services/auction.service.ts");
/* harmony import */ var _cards_auction_card_auction_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./cards/auction-card/auction-card.component */ "./src/app/cards/auction-card/auction-card.component.ts");
/* harmony import */ var _auction_detail_auction_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./auction-detail/auction-detail.component */ "./src/app/auction-detail/auction-detail.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _auction_create_auction_create_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./auction-create/auction-create.component */ "./src/app/auction-create/auction-create.component.ts");
/* harmony import */ var _users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./users-edit/users-edit.component */ "./src/app/users-edit/users-edit.component.ts");
/* harmony import */ var _auctionbid_create_auctionbid_create_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./auctionbid-create/auctionbid-create.component */ "./src/app/auctionbid-create/auctionbid-create.component.ts");



























function tokenGetter() {
    return localStorage.getItem('token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _auction_auction_component__WEBPACK_IMPORTED_MODULE_9__["AuctionComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
                _auctionbid_auctionbid_component__WEBPACK_IMPORTED_MODULE_16__["AuctionbidComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_17__["UsersComponent"],
                _cards_auction_card_auction_card_component__WEBPACK_IMPORTED_MODULE_21__["AuctionCardComponent"],
                _auction_detail_auction_detail_component__WEBPACK_IMPORTED_MODULE_22__["AuctionDetailComponent"],
                _auction_create_auction_create_component__WEBPACK_IMPORTED_MODULE_24__["AuctionCreateComponent"],
                _users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_25__["UsersEditComponent"],
                _auctionbid_create_auctionbid_create_component__WEBPACK_IMPORTED_MODULE_26__["AuctionbidCreateComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_18__["appRoutes"]),
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost:5000'],
                        blacklistedRoutes: ['localhost:5000/api/auth']
                    }
                })
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
                _services_error_interceptor__WEBPACK_IMPORTED_MODULE_14__["ErrorInterceptorProvider"],
                _services_alertify_service__WEBPACK_IMPORTED_MODULE_15__["AlertifyService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"],
                _services_auction_service__WEBPACK_IMPORTED_MODULE_20__["AuctionService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_23__["UserService"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auction-create/auction-create.component.css":
/*!*************************************************************!*\
  !*** ./src/app/auction-create/auction-create.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1Y3Rpb24tY3JlYXRlL2F1Y3Rpb24tY3JlYXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/auction-create/auction-create.component.html":
/*!**************************************************************!*\
  !*** ./src/app/auction-create/auction-create.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-4\">\n          <form #registerForm=\"ngForm\" (ngSubmit)=\"create()\">\n              <h2 class=\"text-center text-primary\">Preencha as informações do leilão</h2>\n              <hr>\n            \n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" required name=\"name\" [(ngModel)]=\"model.Name\" placeholder=\"Nome\">\n              </div>\n            \n              <div class=\"form-group\">\n                <input type=\"number\" class=\"form-control\" required name=\"initialValue\" [(ngModel)]=\"model.initialValue\" min=0 placeholder=\"Lance inicial\">\n              </div>\n            \n              <div class=\"form-group\">\n                  <label>Qual o estado do produto? <select name=\"isNew\" [(ngModel)]=\"model.isNew\">\n                      <option selected value=1>Novo</option>\n                      <option value=0>Usado</option>\n                    </select></label>\n              </div>\n            \n              <div class=\"form-group\">\n                <input type=\"date\" class=\"form-control\" required name=\"initialDate\" [(ngModel)]=\"model.initialDate\" placeholder=\"Data de abertura\">\n              </div>\n            \n              <div class=\"form-group\">\n                  <input type=\"date\" class=\"form-control\" required name=\"finalDate\" [(ngModel)]=\"model.finalDate\" placeholder=\"Data de finalização\">\n                </div>\n             \n              <div class=\"form-group text-center\">\n                <button class=\"btn btn-success mr-2\" type=\"submit\">Cadastrar</button>\n                <button class=\"btn btn-default\" type=\"button\" (click)=\"cancel()\">Cancelar</button>\n              </div>\n            \n            </form>\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/auction-create/auction-create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/auction-create/auction-create.component.ts ***!
  \************************************************************/
/*! exports provided: AuctionCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuctionCreateComponent", function() { return AuctionCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auction.service */ "./src/app/_services/auction.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AuctionCreateComponent = /** @class */ (function () {
    function AuctionCreateComponent(auctionService, alertify, authService, router) {
        this.auctionService = auctionService;
        this.alertify = alertify;
        this.authService = authService;
        this.router = router;
        this.cancelRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.model = {};
    }
    AuctionCreateComponent.prototype.ngOnInit = function () {
    };
    AuctionCreateComponent.prototype.create = function () {
        var _this = this;
        this.auctionService.createAuction(this.model, this.authService.decodedToken.nameid).subscribe(function () {
            _this.alertify.success('Cadastro realizado com sucesso');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    AuctionCreateComponent.prototype.cancel = function () {
        this.router.navigate(['/auctions']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuctionCreateComponent.prototype, "cancelRegister", void 0);
    AuctionCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auction-create',
            template: __webpack_require__(/*! ./auction-create.component.html */ "./src/app/auction-create/auction-create.component.html"),
            styles: [__webpack_require__(/*! ./auction-create.component.css */ "./src/app/auction-create/auction-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auction_service__WEBPACK_IMPORTED_MODULE_2__["AuctionService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AuctionCreateComponent);
    return AuctionCreateComponent;
}());



/***/ }),

/***/ "./src/app/auction-detail/auction-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/auction-detail/auction-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-thumbnail {\r\n    margin: 25px;\r\n    width: 85%;\r\n    height: 85%;\r\n}\r\n\r\n.card-body {\r\n    padding: 0 25px;\r\n}\r\n\r\n.card-footer {\r\n    padding: 10px 15px;\r\n    background-color: #fff;\r\n    border-top: none;\r\n}\r\n\r\n.scrollable {\r\n    overflow-y: auto;\r\n    height: 690px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXVjdGlvbi1kZXRhaWwvYXVjdGlvbi1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtDQUNmOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2F1Y3Rpb24tZGV0YWlsL2F1Y3Rpb24tZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXRodW1ibmFpbCB7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgaGVpZ2h0OiA4NSU7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMCAyNXB4O1xyXG59XHJcblxyXG4uY2FyZC1mb290ZXIge1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbn1cclxuXHJcbi5zY3JvbGxhYmxlIHtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDY5MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/auction-detail/auction-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/auction-detail/auction-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\">  \n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <img class=\"card-img-top img-thumbnail\" src=\"https://png.pngtree.com/element_origin_min_pic/29/04/20/1657235dbe3e9f4.jpg\" alt=\"{{auction?.name}}\">\n        <div class=\"card-body\">\n          <div>\n            <strong>Nome:</strong>\n            <p>{{auction?.name}}</p>\n            <strong>Lance inicial:</strong>\n            <p>{{auction?.initialValue}}</p>\n            <strong>Novo ou usado:</strong>\n            <p>{{formatStatusAuction(auction?.isNew)}}</p>\n            <strong>Abertura do leilão:</strong>\n            <p>{{formatDate(auction?.initialDate)}}</p>\n            <strong>Encerramento do leilão:</strong>\n            <p>{{formatDate(auction?.finalDate)}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card header\">\n            <h2>Últimos lances:</h2>\n        </div>\n        <div class=\"card-body scrollable\">\n          <div>\n              <table class=\"table table-list\">\n                  <thead>\n                      <tr>\n                          <th>Valor do lance</th>\n                          <th>Data</th>\n                      </tr>\n                  </thead>\n                  <tbody>\n                      <tr *ngFor=\"let auctionBid of auction?.auctionBids\">\n                          <td>{{auctionBid?.value}}</td>\n                          <td>{{formatDate(auctionBid?.dateOfBid)}}</td>\n                      </tr>\n                  </tbody>\n              </table>   \n            </div>\n          </div>\n        <hr>\n        <div class=\"card-footer\">\n          <app-auctionbid-create></app-auctionbid-create>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-8\">\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/auction-detail/auction-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/auction-detail/auction-detail.component.ts ***!
  \************************************************************/
/*! exports provided: AuctionDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuctionDetailComponent", function() { return AuctionDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auction.service */ "./src/app/_services/auction.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");






var AuctionDetailComponent = /** @class */ (function () {
    function AuctionDetailComponent(auctionService, alertifyService, route, authService) {
        this.auctionService = auctionService;
        this.alertifyService = alertifyService;
        this.route = route;
        this.authService = authService;
    }
    AuctionDetailComponent.prototype.ngOnInit = function () {
        this.loadAuction();
    };
    AuctionDetailComponent.prototype.loadAuction = function () {
        var _this = this;
        this.auctionService.getAuction(+this.route.snapshot.params['id']).subscribe(function (auction) {
            _this.auction = auction;
        }, function (error) {
            _this.alertifyService.error(error);
        });
    };
    AuctionDetailComponent.prototype.exclude = function () {
        this.auctionService.deleteAuction(+this.route.snapshot.params['id']);
    };
    AuctionDetailComponent.prototype.formatDate = function (date) {
        if (date != null) {
            return (date.split('T')[0].split('-'))[2] + '/' + (date.split('T')[0].split('-'))[1] + '/' + (date.split('T')[0].split('-'))[0] +
                ' ' + date.split('T')[1];
        }
        else {
            return '';
        }
    };
    AuctionDetailComponent.prototype.formatStatusAuction = function (status) {
        if (status) {
            return 'Novo';
        }
        else {
            return 'Usado';
        }
    };
    AuctionDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auction-detail',
            template: __webpack_require__(/*! ./auction-detail.component.html */ "./src/app/auction-detail/auction-detail.component.html"),
            styles: [__webpack_require__(/*! ./auction-detail.component.css */ "./src/app/auction-detail/auction-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auction_service__WEBPACK_IMPORTED_MODULE_2__["AuctionService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], AuctionDetailComponent);
    return AuctionDetailComponent;
}());



/***/ }),

/***/ "./src/app/auction/auction.component.css":
/*!***********************************************!*\
  !*** ./src/app/auction/auction.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1Y3Rpb24vYXVjdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/auction/auction.component.html":
/*!************************************************!*\
  !*** ./src/app/auction/auction.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <br>\r\n  <h2>Leilões Ativos</h2>\r\n  <hr>\r\n  <div class=\"row\">\r\n    <button class=\"btn btn-success\" [routerLink]=\"['/auctions/create']\"><i class=\"fa fa-plus\"></i> Adicionar um novo leilão</button>\r\n  </div>\r\n  <br>\r\n  <div class=\"row\">\r\n    <div *ngFor=\"let auction of auctions\" class=\"col-lg-2 col-md-3 col-sm-6\">\r\n      <app-auction-card [auction]=\"auction\"></app-auction-card>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/auction/auction.component.ts":
/*!**********************************************!*\
  !*** ./src/app/auction/auction.component.ts ***!
  \**********************************************/
/*! exports provided: AuctionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuctionComponent", function() { return AuctionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auction.service */ "./src/app/_services/auction.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");




var AuctionComponent = /** @class */ (function () {
    function AuctionComponent(auctionService, alertifyService) {
        this.auctionService = auctionService;
        this.alertifyService = alertifyService;
    }
    AuctionComponent.prototype.ngOnInit = function () {
        this.loadAuctions();
    };
    AuctionComponent.prototype.loadAuctions = function () {
        var _this = this;
        this.auctionService.getAuctions().subscribe(function (auctions) {
            _this.auctions = auctions;
        }, function (error) {
            _this.alertifyService.error(error);
        });
    };
    AuctionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auction',
            template: __webpack_require__(/*! ./auction.component.html */ "./src/app/auction/auction.component.html"),
            styles: [__webpack_require__(/*! ./auction.component.css */ "./src/app/auction/auction.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auction_service__WEBPACK_IMPORTED_MODULE_2__["AuctionService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], AuctionComponent);
    return AuctionComponent;
}());



/***/ }),

/***/ "./src/app/auctionbid-create/auctionbid-create.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/auctionbid-create/auctionbid-create.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1Y3Rpb25iaWQtY3JlYXRlL2F1Y3Rpb25iaWQtY3JlYXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/auctionbid-create/auctionbid-create.component.html":
/*!********************************************************************!*\
  !*** ./src/app/auctionbid-create/auctionbid-create.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <form #registerForm=\"ngForm\" (ngSubmit)=\"create()\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n          <input id=\"number\" type=\"number\" min=0 [(ngModel)]=\"model.value\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"0.00\">\n      </div>\n      <div class=\"col-sm-6\">\n          <button class=\"btn btn-success\" type=\"submit\"><i class=\"fa fa-plus\"></i> Dê seu lance</button>\n      </div>    \n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/auctionbid-create/auctionbid-create.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/auctionbid-create/auctionbid-create.component.ts ***!
  \******************************************************************/
/*! exports provided: AuctionbidCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuctionbidCreateComponent", function() { return AuctionbidCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auction_bid_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/auction-bid.service */ "./src/app/_services/auction-bid.service.ts");






var AuctionbidCreateComponent = /** @class */ (function () {
    function AuctionbidCreateComponent(auctionBidService, alertify, authService, route) {
        this.auctionBidService = auctionBidService;
        this.alertify = alertify;
        this.authService = authService;
        this.route = route;
        this.model = {};
    }
    AuctionbidCreateComponent.prototype.ngOnInit = function () {
    };
    AuctionbidCreateComponent.prototype.create = function () {
        var _this = this;
        this.auctionBidService.createAuctionBid(this.model, this.authService.decodedToken.nameid, +this.route.snapshot.params['id']).subscribe(function () {
            location.reload();
            _this.alertify.success('Lance realizado com sucesso');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    AuctionbidCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auctionbid-create',
            template: __webpack_require__(/*! ./auctionbid-create.component.html */ "./src/app/auctionbid-create/auctionbid-create.component.html"),
            styles: [__webpack_require__(/*! ./auctionbid-create.component.css */ "./src/app/auctionbid-create/auctionbid-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auction_bid_service__WEBPACK_IMPORTED_MODULE_5__["AuctionBidService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], AuctionbidCreateComponent);
    return AuctionbidCreateComponent;
}());



/***/ }),

/***/ "./src/app/auctionbid/auctionbid.component.css":
/*!*****************************************************!*\
  !*** ./src/app/auctionbid/auctionbid.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1Y3Rpb25iaWQvYXVjdGlvbmJpZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/auctionbid/auctionbid.component.html":
/*!******************************************************!*\
  !*** ./src/app/auctionbid/auctionbid.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <br>\n    <h2>Últimos Lances</h2>\n    <div class=\"row\">\n      <div>\n          <table class=\"table table-list\">\n              <thead>\n                  <tr>\n                      <th>Id</th>\n                      <th>Valor do lance</th>\n                      <th>Data</th>\n                      <th>Leilão</th>\n                  </tr>\n              </thead>\n              <tbody>\n                  <tr *ngFor=\"let auctionBid of auctionBid\">\n                      <td>{{auctionBid?.id}}</td>\n                      <td>{{auctionBid?.value}}</td>\n                      <td>{{formatDate(auctionBid?.dateOfBid)}}</td>\n                      <td><button class=\"btn btn-success\" [routerLink]=\"['/auctions/', auctionBid?.auctionId]\">Ir para o leilão</button></td>\n                  </tr>\n              </tbody>\n          </table>   \n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/auctionbid/auctionbid.component.ts":
/*!****************************************************!*\
  !*** ./src/app/auctionbid/auctionbid.component.ts ***!
  \****************************************************/
/*! exports provided: AuctionbidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuctionbidComponent", function() { return AuctionbidComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_auction_bid_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/auction-bid.service */ "./src/app/_services/auction-bid.service.ts");





var AuctionbidComponent = /** @class */ (function () {
    function AuctionbidComponent(auctionBidService, authService, alertify) {
        this.auctionBidService = auctionBidService;
        this.authService = authService;
        this.alertify = alertify;
    }
    AuctionbidComponent.prototype.ngOnInit = function () {
        this.loadAuctionBids();
    };
    AuctionbidComponent.prototype.loadAuctionBids = function () {
        var _this = this;
        this.auctionBidService.getAuctionBids().subscribe(function (auctionBid) {
            _this.auctionBid = auctionBid;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    AuctionbidComponent.prototype.formatDate = function (date) {
        return (date.split('T')[0].split('-'))[2] + '/' + (date.split('T')[0].split('-'))[1] + '/' + (date.split('T')[0].split('-'))[0] +
            ' ' + date.split('T')[1];
    };
    AuctionbidComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auctionbid',
            template: __webpack_require__(/*! ./auctionbid.component.html */ "./src/app/auctionbid/auctionbid.component.html"),
            styles: [__webpack_require__(/*! ./auctionbid.component.css */ "./src/app/auctionbid/auctionbid.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auction_bid_service__WEBPACK_IMPORTED_MODULE_4__["AuctionBidService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], AuctionbidComponent);
    return AuctionbidComponent;
}());



/***/ }),

/***/ "./src/app/cards/auction-card/auction-card.component.css":
/*!***************************************************************!*\
  !*** ./src/app/cards/auction-card/auction-card.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmRzL2F1Y3Rpb24tY2FyZC9hdWN0aW9uLWNhcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/cards/auction-card/auction-card.component.html":
/*!****************************************************************!*\
  !*** ./src/app/cards/auction-card/auction-card.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\n  <div class=\"card-img-wrapper\">\n    <img class=\"card-img-top\" src=\"https://png.pngtree.com/element_origin_min_pic/29/04/20/1657235dbe3e9f4.jpg\" alt=\"\">    \n  </div>\n  <div class=\"card-body p-1\">\n    <h6 class=\"card-title text-center mb-1\">{{auction?.name}}</h6>\n    <hr>\n    <p class=\"card-text text-muted text-center\">Lance inicial: <i class=\"fa fa-usd\"></i>{{auction?.initialValue}}</p>\n\n    <ul class=\"list-inline member-icons animate text-center\">\n        <li class=\"list-inline-item\"><button class=\"btn btn-primary\" [routerLink]=\"['/auctions/', auction?.id]\"><i class=\"fa fa-gavel\"></i> Dê um lance</button></li>\n      </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/cards/auction-card/auction-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/cards/auction-card/auction-card.component.ts ***!
  \**************************************************************/
/*! exports provided: AuctionCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuctionCardComponent", function() { return AuctionCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuctionCardComponent = /** @class */ (function () {
    function AuctionCardComponent() {
    }
    AuctionCardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuctionCardComponent.prototype, "auction", void 0);
    AuctionCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auction-card',
            template: __webpack_require__(/*! ./auction-card.component.html */ "./src/app/cards/auction-card/auction-card.component.html"),
            styles: [__webpack_require__(/*! ./auction-card.component.css */ "./src/app/cards/auction-card/auction-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuctionCardComponent);
    return AuctionCardComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n  <div *ngIf=\"!registerMode\" class=\"text-center\">\n    <h1>Encontre o produto que você quer</h1>\n    <p class=\"lead\">Venha dar os seus lances nos leilões... Cadastre-se agora!</p>\n    <div class=\"text-center\">\n      <button class=\"btn btn-primary btn-lg mr-2\" (click)=\"registerToggle()\">Crie sua conta</button>\n      <button class=\"btn btn-info btn-lg\">Saiba mais...</button>\n    </div>\n  </div>\n\n  <div *ngIf=\"registerMode\" class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-4\">\n        <app-register (cancelRegister)=\"cancelRegisterMode($event)\"></app-register>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(http) {
        this.http = http;
        this.registerMode = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.registerToggle = function () {
        this.registerMode = true;
    };
    HomeComponent.prototype.cancelRegisterMode = function (registerMode) {
        this.registerMode = registerMode;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-toggle, .dropdown-item {\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duLXRvZ2dsZSwgLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-primary\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/home']\">TOTVS Leilões</a>\n\n    <ul *ngIf=\"loggedIn()\" class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" [routerLink]=\"['/auctions']\">Leilões</a>  \n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" [routerLink]=\"['/auctionbids']\">Últimos Lances</a>\n      </li>\n    </ul>\n  \n    <div *ngIf=\"loggedIn()\" class=\"dropdown\" dropdown>\n      <a class=\"dropdown-toggle text-light\" dropdownToggle >\n        Olá {{authService.decodedToken?.unique_name | titlecase}}!\n      </a>\n    \n      <div class=\"dropdown-menu mt-3\" *dropdownMenu>\n        <a class=\"dropdown-item\" [routerLink]=\"['/user/profile']\"><i class=\"fa fa-user\"></i> Perfil</a>\n        <div class=\"dropdown-item\"></div>\n        <a class=\"dropdown-item\" (click)=\"logout()\"><i class=\"fa fa-sign-out\"></i> Logout</a>\n      </div>\n    </div>\n  \n    <form *ngIf=\"!loggedIn()\" #loginForm=\"ngForm\" class=\"form-inline my-2 my-lg-0\" (ngSubmit)=\"login()\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" name=\"username\" placeholder=\"Usuário\" required [(ngModel)]=\"model.username\">\n      <input class=\"form-control mr-sm-2\" type=\"password\" name=\"password\" placeholder=\"Senha\" required [(ngModel)]=\"model.password\">\n      <button [disabled]=\"!loginForm.valid\" class=\"btn btn-success my-2 my-sm-0\" type=\"submit\">Login</button>\n    </form>\n  </div>  \n</nav>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var NavComponent = /** @class */ (function () {
    function NavComponent(authService, alertify, router) {
        this.authService = authService;
        this.alertify = alertify;
        this.router = router;
        this.model = {};
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.model).subscribe(function (next) {
            _this.alertify.success('Login com sucesso');
        }, function (error) {
            _this.alertify.error(error);
        }, function () {
            _this.router.navigate(['/auctions']);
        });
    };
    NavComponent.prototype.loggedIn = function () {
        return this.authService.loggedIn();
    };
    NavComponent.prototype.logout = function () {
        localStorage.removeItem('token');
        this.alertify.message('Sessão encerrada');
        this.router.navigate(['/home']);
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #registerForm=\"ngForm\" (ngSubmit)=\"register()\">\n  <h2 class=\"text-center text-primary\">Informe seus dados</h2>\n  <hr>\n\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" required name=\"name\" [(ngModel)]=\"model.name\" placeholder=\"Nome\">\n  </div>\n\n  <div class=\"form-group\">\n    <input type=\"email\" class=\"form-control\" required name=\"email\" [(ngModel)]=\"model.email\" placeholder=\"Email\">\n  </div>\n\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" required name=\"cpf\" [(ngModel)]=\"model.cpf\" placeholder=\"CPF\">\n  </div>\n\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" required name=\"username\" [(ngModel)]=\"model.username\" placeholder=\"Usuário\">\n  </div>\n\n  <div class=\"form-group\">\n    <input type=\"password\" class=\"form-control\" required name=\"password\" [(ngModel)]=\"model.password\" placeholder=\"Senha\">\n  </div>\n\n  <div class=\"form-group text-center\">\n      <label><input type=\"checkbox\" class=\"form-control\" required name=\"isadministrator\" [(ngModel)]=\"model.isadministrator\">Administrador</label>\n  </div>\n\n  <div class=\"form-group text-center\">\n    <button class=\"btn btn-success mr-2\" type=\"submit\">Cadastrar</button>\n    <button class=\"btn btn-default\" type=\"button\" (click)=\"cancel()\">Cancelar</button>\n  </div>\n\n</form>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, alertify) {
        this.authService = authService;
        this.alertify = alertify;
        this.cancelRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.model = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.authService.register(this.model).subscribe(function () {
            _this.alertify.success('Cadastro realizado com sucesso');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    RegisterComponent.prototype.cancel = function () {
        this.cancelRegister.emit(false);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RegisterComponent.prototype, "cancelRegister", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _auction_auction_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auction/auction.component */ "./src/app/auction/auction.component.ts");
/* harmony import */ var _auctionbid_auctionbid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auctionbid/auctionbid.component */ "./src/app/auctionbid/auctionbid.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _auction_detail_auction_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auction-detail/auction-detail.component */ "./src/app/auction-detail/auction-detail.component.ts");
/* harmony import */ var _auction_create_auction_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auction-create/auction-create.component */ "./src/app/auction-create/auction-create.component.ts");
/* harmony import */ var _users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users-edit/users-edit.component */ "./src/app/users-edit/users-edit.component.ts");







var appRoutes = [
    // ORDEM DAS ROTAS É IMPORTANTE
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    // AGRUPAMENTO DE ROTAS QUE PRECISAM SER PROTEGIDAS POR LOGIN
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        children: [
            { path: 'auctions', component: _auction_auction_component__WEBPACK_IMPORTED_MODULE_1__["AuctionComponent"] },
            { path: 'auctions/create', component: _auction_create_auction_create_component__WEBPACK_IMPORTED_MODULE_5__["AuctionCreateComponent"] },
            { path: 'auctions/:id', component: _auction_detail_auction_detail_component__WEBPACK_IMPORTED_MODULE_4__["AuctionDetailComponent"] },
            { path: 'user/profile', component: _users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_6__["UsersEditComponent"] },
            { path: 'auctionbids', component: _auctionbid_auctionbid_component__WEBPACK_IMPORTED_MODULE_2__["AuctionbidComponent"] },
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/users-edit/users-edit.component.css":
/*!*****************************************************!*\
  !*** ./src/app/users-edit/users-edit.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzLWVkaXQvdXNlcnMtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/users-edit/users-edit.component.html":
/*!******************************************************!*\
  !*** ./src/app/users-edit/users-edit.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\">  \n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h2>Meu Perfil</h2>\n          </div>\n          <div class=\"card-body\">\n            <div>\n              <strong>Nome:</strong>\n              <p>{{user?.name}}</p>\n              <strong>Email:</strong>\n              <p>{{user?.email}}</p>\n              <strong>CPF:</strong>\n              <p>{{user?.cpf}}</p>\n              <strong>Administrador:</strong>\n              <p>{{convertStatusToText(user?.isAdministrator)}}</p>\n            </div>\n          </div>\n          <div class=\"card-footer\">\n            <button class=\"btn btn-danger\" (click)=\"deactivate()\">Desativar a conta</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/users-edit/users-edit.component.ts":
/*!****************************************************!*\
  !*** ./src/app/users-edit/users-edit.component.ts ***!
  \****************************************************/
/*! exports provided: UsersEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersEditComponent", function() { return UsersEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var UsersEditComponent = /** @class */ (function () {
    function UsersEditComponent(userService, authService, alertify, router) {
        this.userService = userService;
        this.authService = authService;
        this.alertify = alertify;
        this.router = router;
    }
    UsersEditComponent.prototype.ngOnInit = function () {
        this.loadUser();
    };
    UsersEditComponent.prototype.loadUser = function () {
        var _this = this;
        this.userService.getUser(this.authService.decodedToken.nameid).subscribe(function (user) {
            _this.user = user;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    UsersEditComponent.prototype.deactivate = function () {
        var _this = this;
        this.alertify.confirm('Ao desativar sua conta, você não poderá reativa-la. Deseja continuar?', function () {
            _this.user.isActive = false;
            _this.userService.updateUser(_this.authService.decodedToken.nameid, _this.user).subscribe(function (next) {
                _this.router.navigate(['/home']);
                localStorage.removeItem('token');
                _this.alertify.success('Usuário desativado');
            }, function (error) {
                _this.alertify.error(error);
            });
        });
    };
    UsersEditComponent.prototype.convertStatusToText = function (status) {
        if (status) {
            return 'Sim';
        }
        else {
            return 'Não';
        }
    };
    UsersEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users-edit',
            template: __webpack_require__(/*! ./users-edit.component.html */ "./src/app/users-edit/users-edit.component.html"),
            styles: [__webpack_require__(/*! ./users-edit.component.css */ "./src/app/users-edit/users-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], UsersEditComponent);
    return UsersEditComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  users works!\n</p>\n"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:5000/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Guilherme\Documents\AuctionApp\AuctionApp-SPA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map