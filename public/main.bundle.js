webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_animations/slide-in-out.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slideInOutAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
// import the required animation functions from the angular animations module

var slideInOutAnimation = 
// trigger name for attaching this animation to an element using the [@triggerName] syntax
Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["trigger"])('slideInOutAnimation', [
    // end state styles for route container (host)
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({
        // the view covers the whole screen with a semi tranparent background
        position: 'relative',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    })),
    // route 'enter' transition
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':enter', [
        // styles at start of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({
            // start with the content positioned off the right of the screen, 
            // -400% is required instead of -100% because the negative position adds to the width of the element
            position: 'absolute',
            right: '-400%',
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }),
        // animation and styles at end of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('1s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({
            // transition the right position to 0 which slides the content into view
            right: '20%',
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }))
    ]),
    // route 'leave' transition
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':leave', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({
            // start with the content positioned off the right of the screen, 
            // -400% is required instead of -100% because the negative position adds to the width of the element
            position: 'absolute',
            top: '0',
            left: '0',
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }),
        // animation and styles at end of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('1s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({
            // transition the left position to -400% which slides the content out of view
            position: 'relative',
            left: '-400%',
            // transition the background opacity to 0 to fade it out
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }))
    ])
]);
//# sourceMappingURL=slide-in-out.animation.js.map

/***/ }),

/***/ "../../../../../src/app/_animations/slide-right-left.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slideRightLeftAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
// import the required animation functions from the angular animations module

var slideRightLeftAnimation = 
// trigger name for attaching this animation to an element using the [@triggerName] syntax
Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["trigger"])('slideRightLeftAnimation', [
    // end state styles for route container (host)
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({
        // the view covers the whole screen with a semi tranparent background
        position: 'absolute',
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0)'
    })),
    // route 'enter' transition
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':enter', [
        // styles at start of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({
            // start with the content positioned off the right of the screen, 
            // -400% is required instead of -100% because the negative position adds to the width of the element
            position: 'fixed',
            right: '-400%',
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }),
        // animation and styles at end of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({
            // transition the right position to 0 which slides the content into view
            right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }))
    ]),
    // route 'leave' transition
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':leave', [
        // animation and styles at end of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({
            // transition the left position to -400% which slides the content out of view
            left: '-400%',
            // transition the background opacity to 0 to fade it out
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }))
    ])
]);
//# sourceMappingURL=slide-right-left.animation.js.map

/***/ }),

/***/ "../../../../../src/app/_directives/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@openClose]=\"stateExpression\" *ngIf=\"message && message!='a' \" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\" style=\"position:absolute; width:100%; top:-100px; text-align: center;\">\n    {{message.text}}\n    <div class=\"glyphicon glyphicon-remove\" (click)=\"collapse()\" style=\"position: absolute;right: 5px;top: 5px; z-index: 1\">.</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/_directives/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
        this.stateExpression = 'collapsed';
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; _this.expand(); });
    };
    AlertComponent.prototype.expand = function () {
        this.stateExpression = 'expanded';
        this.subscribeToData();
    };
    AlertComponent.prototype.collapse = function () {
        this.stateExpression = 'collapsed';
        this.timerSubscription.unsubscribe();
    };
    AlertComponent.prototype.subscribeToData = function () {
        var _this = this;
        this.timerSubscription = __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].timer(4000).first().subscribe(function () { return _this.collapse(); });
    };
    return AlertComponent;
}());
AlertComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cl-alert',
        template: __webpack_require__("../../../../../src/app/_directives/alert.component.html"),
        animations: [Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["trigger"])('openClose', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["state"])('collapsed, void', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({ top: '-100px' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["state"])('expanded', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({ top: '50px' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["transition"])('collapsed => expanded', [Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["animate"])('1s ease-in-out')]),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["transition"])('expanded => collapsed', [Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["animate"])('2s ease-in-out')]),
            ])],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */]) === "function" && _a || Object])
], AlertComponent);

var _a;
//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_permissions__ = __webpack_require__("../../../../ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_permissions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_permissions__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = (function () {
    function AuthGuard(authService, router, permissionsService) {
        this.authService = authService;
        this.router = router;
        this.permissionsService = permissionsService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            if (sessionStorage.getItem('currentUser')) {
                // logged in so return true
                var perm = JSON.parse(sessionStorage.getItem('currentUser')).roles;
                this.permissionsService.addPermission(perm);
            }
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_permissions__["NgxPermissionsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_permissions__["NgxPermissionsService"]) === "function" && _c || Object])
], AuthGuard);

var _a, _b, _c;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/_models/bedrijf.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bedrijf; });
var Bedrijf = (function () {
    function Bedrijf(naam, omschrijving, locatie) {
        this.naam = naam;
        this.omschrijving = omschrijving;
        this.locatie = locatie;
    }
    return Bedrijf;
}());

//# sourceMappingURL=bedrijf.js.map

/***/ }),

/***/ "../../../../../src/app/_models/bericht.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bericht; });
var Bericht = (function () {
    function Bericht(van, naar, message, date) {
        this.van = van;
        this.naar = naar;
        this.message = message;
        this.date = date;
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
    }
    return Bericht;
}());

//# sourceMappingURL=bericht.js.map

/***/ }),

/***/ "../../../../../src/app/_models/bestelling.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bestelling; });
var Bestelling = (function () {
    function Bestelling(omschrijving, producten) {
        this.totaal = 0;
        this.omschrijving = omschrijving;
        this.producten = producten;
    }
    return Bestelling;
}());

//# sourceMappingURL=bestelling.js.map

/***/ }),

/***/ "../../../../../src/app/_models/conversatie.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Conversatie; });
var Conversatie = (function () {
    function Conversatie(user1, user2) {
        this.user1 = user1;
        this.user2 = user2;
        this.userId1 = user1._id;
        this.userId2 = user2._id;
        this.berichten = [];
    }
    Conversatie.prototype.stuurBericht = function (bericht) {
        this.berichten.push(bericht);
    };
    return Conversatie;
}());

//# sourceMappingURL=conversatie.js.map

/***/ }),

/***/ "../../../../../src/app/_models/locatie.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Locatie; });
var Locatie = (function () {
    function Locatie(straat, nummer, postcode, stad, land) {
        this.straat = straat;
        this.nummer = nummer;
        this.postcode = postcode;
        this.stad = stad;
        this.land = land;
    }
    return Locatie;
}());

//# sourceMappingURL=locatie.js.map

/***/ }),

/***/ "../../../../../src/app/_models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(username, email, password, firstName, lastName, veiligheidsVraag1, aantwoordVraag1, veiligheidsVraag2, aantwoordVraag2, locatie) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.veiligheidsVraag1 = veiligheidsVraag1;
        this.aantwoordVraag1 = aantwoordVraag1;
        this.veiligheidsVraag2 = veiligheidsVraag2;
        this.aantwoordVraag2 = aantwoordVraag2;
        this.locatie = locatie;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/_services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//injectable
//kan in alle components gezet worden om succes/error bootschappen te tonen
var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        //als op true blijft het boodschap op andere pagina's ook
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    //onderstaande 2 methoden hebben invloed op de css
    //succes message tonen
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    //error message tonen
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    return AlertService;
}());
AlertService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object])
], AlertService);

var _a;
//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_permissions__ = __webpack_require__("../../../../ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_permissions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_permissions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__socket_service__ = __webpack_require__("../../../../../src/app/_services/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthenticationService = (function () {
    function AuthenticationService(http, userService, permissionsService, socketService) {
        this.http = http;
        this.userService = userService;
        this.permissionsService = permissionsService;
        this.socketService = socketService;
        this.isDev = false; //bij deployen
        //this.isDev=true; //bij development
    }
    //hier aanpassen voor de rechten? user.token
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(this.prepEndpoint('/users/authenticate'), { username: username, password: password })
            .map(function (response) {
            //login in gelukt als er een jwt token is in de response
            var user = response.json();
            if (user && user.token) {
                //user en de token opslaan in local storage om ingelogd te blijven
                _this.storeUserData(user.token, user);
            }
            return user;
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        var user = JSON.parse(sessionStorage.getItem('currentUser'));
        if (user) {
            user.online = false;
            this.userService.update(user).subscribe();
            this.authToken = null;
            this.user = null;
            sessionStorage.clear();
            this.permissionsService.flushPermissions();
            this.socketService.emit('userOffline', user._id);
        }
    };
    AuthenticationService.prototype.storeUserData = function (token, user) {
        sessionStorage.setItem('id_token', token);
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthenticationService.prototype.loadToken = function () {
        var token = sessionStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthenticationService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])(null, sessionStorage.getItem("id_token"));
    };
    AuthenticationService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return 'http://localhost:4000' + ep;
        }
        else {
            return 'https://projectwebappsdaniel.herokuapp.com' + ep;
        }
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_permissions__["NgxPermissionsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_permissions__["NgxPermissionsService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__socket_service__["a" /* SocketService */]) === "function" && _d || Object])
], AuthenticationService);

var _a, _b, _c, _d;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/bedrijf.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BedrijfService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BedrijfService = (function () {
    function BedrijfService(http) {
        this.http = http;
        this.isDev = false; //bij deployen
        //this.isDev=true; //bij development
    }
    BedrijfService.prototype.getAll = function () {
        return this.http.get(this.prepEndpoint('/bedrijf')).map(function (response) { return response.json(); });
    };
    BedrijfService.prototype.getById = function (_id) {
        return this.http.get(this.prepEndpoint('/bedrijf/' + _id)).map(function (response) { return response.json(); });
    };
    BedrijfService.prototype.create = function (bedrijf) {
        return this.http.post(this.prepEndpoint('/bedrijf/register'), bedrijf);
    };
    BedrijfService.prototype.update = function (bedrijf) {
        return this.http.put(this.prepEndpoint('/bedrijf/' + bedrijf._id), bedrijf);
    };
    BedrijfService.prototype.delete = function (_id) {
        return this.http.delete(this.prepEndpoint('/bedrijf/' + _id));
    };
    BedrijfService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return 'http://localhost:4000' + ep;
        }
        else {
            return 'https://projectwebappsdaniel.herokuapp.com' + ep;
        }
    };
    return BedrijfService;
}());
BedrijfService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], BedrijfService);

var _a;
//# sourceMappingURL=bedrijf.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/conversation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConversationService = (function () {
    function ConversationService(http) {
        this.http = http;
        this.isDev = false; //bij deployen
        //this.isDev=true; //bij development
    }
    ConversationService.prototype.create = function (conversatie) {
        return this.http.post(this.prepEndpoint('/conversation/create'), conversatie);
    };
    ConversationService.prototype.getById = function (_id) {
        return this.http.get(this.prepEndpoint('/conversation/' + _id)).map(function (response) { return response.json(); });
    };
    ConversationService.prototype.getByUsers = function (model) {
        return this.http.post(this.prepEndpoint('/conversation/getbyusers'), model).map(function (response) { return response.json(); });
    };
    ConversationService.prototype.update = function (conversatie) {
        return this.http.put(this.prepEndpoint('/conversation/' + conversatie._id), conversatie);
    };
    ConversationService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return 'http://localhost:4000' + ep;
        }
        else {
            return 'https://projectwebappsdaniel.herokuapp.com' + ep;
        }
    };
    return ConversationService;
}());
ConversationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ConversationService);

var _a;
//# sourceMappingURL=conversation.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderService = (function () {
    function OrderService(authService, http) {
        this.authService = authService;
        this.http = http;
        this.orderSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.loggedInSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.order = this.orderSource.asObservable();
        this.loggedIn = this.loggedInSource.asObservable();
        this.isDev = false; //bij deployen
        //this.isDev = true; //bij development
        if (localStorage.getItem("shoppingBag"))
            this.setOrder(JSON.parse(localStorage.getItem("shoppingBag")));
    }
    OrderService.prototype.setOrder = function (order) {
        this.orderSource.next(order);
    };
    OrderService.prototype.setLoggedIn = function () {
        this.loggedInSource.next(!this.authService.loggedIn());
    };
    OrderService.prototype.getAll = function () {
        return this.http.get(this.prepEndpoint('/order')).map(function (response) { return response.json(); });
    };
    OrderService.prototype.getById = function (_id) {
        return this.http.get(this.prepEndpoint('/order/' + _id)).map(function (response) { return response.json(); });
    };
    OrderService.prototype.create = function (order) {
        return this.http.post(this.prepEndpoint('/order/register'), order).map(function (response) { return response.json(); });
    };
    OrderService.prototype.update = function (order) {
        return this.http.put(this.prepEndpoint('/order/' + order._id), order);
    };
    OrderService.prototype.delete = function (_id) {
        return this.http.delete(this.prepEndpoint('/order/' + _id));
    };
    OrderService.prototype.getLocation = function (locatie) {
        var tekst = locatie.straat + locatie.nummer + locatie.stad + locatie.postcode + locatie.land;
        console.log(tekst);
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + tekst + '&key=AIzaSyCfp0G7Yjzd6Sn20cOVtYCCc5-ZfO8WXMk').map(function (response) { return response.json(); });
    };
    OrderService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return 'http://localhost:4000' + ep;
        }
        else {
            return 'https://projectwebappsdaniel.herokuapp.com' + ep;
        }
    };
    return OrderService;
}());
OrderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" && _b || Object])
], OrderService);

var _a, _b;
//# sourceMappingURL=order.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.isDev = false; //bij deployen
        //this.isDev=true; //bij development
    }
    ProductService.prototype.getAll = function () {
        return this.http.get(this.prepEndpoint('/product')).map(function (response) { return response.json(); });
    };
    ProductService.prototype.getById = function (_id) {
        return this.http.get(this.prepEndpoint('/product/' + _id)).map(function (response) { return response.json(); });
    };
    ProductService.prototype.create = function (bedrijf) {
        return this.http.post(this.prepEndpoint('/product/register'), bedrijf);
    };
    ProductService.prototype.update = function (bedrijf) {
        return this.http.put(this.prepEndpoint('/product/' + bedrijf._id), bedrijf);
    };
    ProductService.prototype.delete = function (_id) {
        return this.http.delete(this.prepEndpoint('/product/' + _id));
    };
    ProductService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return 'http://localhost:4000' + ep;
        }
        else {
            return 'https://projectwebappsdaniel.herokuapp.com' + ep;
        }
    };
    return ProductService;
}());
ProductService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ProductService);

var _a;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocketService = (function () {
    function SocketService() {
        //this.socket = io.connect('http://localhost:4000')
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__["connect"]('https://projectwebappsdaniel.herokuapp.com');
        if (sessionStorage.getItem("currentUser")) {
            var id = JSON.parse(sessionStorage.getItem("currentUser"))._id;
            this.socket.emit('online', id);
        }
    }
    SocketService.prototype.on = function (eventName, callback) {
        if (this.socket) {
            this.socket.on(eventName, function (data) {
                callback(data);
            });
        }
    };
    ;
    SocketService.prototype.emit = function (eventName, data) {
        if (this.socket) {
            this.socket.emit(eventName, data);
        }
    };
    ;
    SocketService.prototype.removeListener = function (eventName) {
        if (this.socket) {
            this.socket.removeListener(eventName);
        }
    };
    ;
    return SocketService;
}());
SocketService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SocketService);

//# sourceMappingURL=socket.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.isDev = false; //bij deployen
        //this.isDev=true; //bij development
    }
    UserService.prototype.getAll = function () {
        return this.http.get(this.prepEndpoint('/users')).map(function (response) { return response.json(); });
    };
    UserService.prototype.getById = function (_id) {
        return this.http.get(this.prepEndpoint('/users/' + _id)).map(function (response) { return response.json(); });
    };
    UserService.prototype.getByUsername = function (user) {
        return this.http.post(this.prepEndpoint('/users/passwordrecover'), user).map(function (response) { return response.json(); });
    };
    UserService.prototype.sendSecurityAnswers = function (user) {
        return this.http.post(this.prepEndpoint('/users/checkanswers'), user).map(function (response) { return response.json(); });
    };
    UserService.prototype.resetPassword = function (_id, passsword) {
        return this.http.post(this.prepEndpoint('/users/resetpassword'), { id: _id, password: passsword });
    };
    UserService.prototype.create = function (user) {
        return this.http.post(this.prepEndpoint('/users/register'), user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put(this.prepEndpoint('/users/' + user._id), user);
    };
    UserService.prototype.delete = function (_id) {
        return this.http.delete(this.prepEndpoint('/users/' + _id));
    };
    UserService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return 'http://localhost:4000' + ep;
        }
        else {
            return 'https://projectwebappsdaniel.herokuapp.com' + ep;
        }
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/admin/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container\">\n            <app-maindashboard></app-maindashboard>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_slide_in_out_animation__ = __webpack_require__("../../../../../src/app/_animations/slide-in-out.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(userService) {
        this.userService = userService;
        this.users = [];
        this.showMainDashboard = true;
        this.showOtherDashboard = false;
        this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        this.currentUser.online = true;
        this.userService.update(this.currentUser).subscribe();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
        this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        this.currentUser.online = true;
        this.userService.update(this.currentUser).subscribe();
    };
    DashboardComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) { _this.users = users; });
    };
    //hieronder methoden om van "pagina" te veranderen
    DashboardComponent.prototype.showDashboardMain = function (show) {
        this.showMainDashboard = !this.showMainDashboard;
        this.showOtherDashboard = !this.showMainDashboard;
    };
    DashboardComponent.prototype.showDashboardOther = function (show) {
        this.showOtherDashboard = !this.showOtherDashboard;
        this.showMainDashboard = !this.showOtherDashboard;
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/admin/dashboard/dashboard.component.html"),
        animations: [__WEBPACK_IMPORTED_MODULE_2__animations_slide_in_out_animation__["a" /* slideInOutAnimation */]],
        host: { '[@slideInOutAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/dashboard/mainDashboard/maindashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n        <app-employeetable></app-employeetable>\n        <div class=\"col-md-12\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    Werknemers\n                </div>\n                <!-- .panel-heading -->\n                <div class=\"panel-body\">\n                    <div class=\"panel-group\" id=\"accordion\">\n                        <div class=\"panel panel-default\">\n                            <div class=\"panel-heading\">\n                                <h4 class=\"panel-title\">\n                                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse1\" aria-expanded=\"false\" class=\"collapsed\">Klas1</a>\n                                </h4>\n                            </div>\n                            <div id=\"collapse1\" class=\"panel-collapse collapse\" aria-expanded=\"false\" style=\"height: 0px;\">\n                                <div class=\"panel-body\">\n                                    <p>blabla</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"panel panel-default\">\n                            <div class=\"panel-heading\">\n                                <h4 class=\"panel-title\">\n                                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse2\" aria-expanded=\"false\" class=\"collapsed\">Klas2</a>\n                                </h4>\n                            </div>\n                            <div id=\"collapse2\" class=\"panel-collapse collapse\" aria-expanded=\"false\" style=\"height: 0px;\">\n                                <div class=\"panel-body\">\n                                    <p>blabla</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- .panel-body -->\n            </div>\n        </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/dashboard/mainDashboard/maindashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaindashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaindashboardComponent = (function () {
    function MaindashboardComponent(userService) {
        this.userService = userService;
        this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        this.currentUser.online = true;
        this.userService.update(this.currentUser).subscribe();
    }
    MaindashboardComponent.prototype.ngOnInit = function () {
    };
    return MaindashboardComponent;
}());
MaindashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-maindashboard',
        template: __webpack_require__("../../../../../src/app/admin/dashboard/mainDashboard/maindashboard.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], MaindashboardComponent);

var _a;
//# sourceMappingURL=maindashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/employeetable/employeetable.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            Employees\n        </div>\n        <div class=\"panel-body\">\n\n            <ul class=\"nav nav-tabs\">\n                <li class=\"active\">\n                    <a href=\"#allEmployees\" data-toggle=\"tab\" aria-expanded=\"true\">All employees</a>\n                </li>\n                \n                <li class>\n                        <a href=\"#onlineEmployees\" data-toggle=\"tab\" aria-expanded=\"true\">Online employees</a>\n                    </li>\n            </ul>\n\n            <div class=\"tab-content\">\n                <div class=\"tab-pane fade active in\" id=\"allEmployees\">\n                        <div class=\"table-responsive\" style=\"max-height:300px; overflow-y: scroll\">\n                                <table class=\"table\">\n                                    <thead>\n                                        <tr>\n                                            <th>#</th>\n                                            <th (click)=\"sortByfirstName()\">First Name</th>\n                                            <th (click)=\"sortByLastName()\">Last Name</th>\n                                            <th (click)=\"sortByUsername()\">Username</th>\n                                            <th (click)=\"sortByFunctie()\">Functie</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let user of users; let i = index\" class=\"{{user.roles.includes('ADMIN')?'info':'warning'}}\">\n                                            <td>{{i+1}}</td>\n                                            <td>{{user.firstName}}</td>\n                                            <td>{{user.lastName}}</td>\n                                            <td>{{user.username}}</td>\n                                            <td>{{user.roles}}</td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                </div>\n\n                <div class=\"tab-pane fade\" id=\"onlineEmployees\">\n                        <div class=\"table-responsive\" style=\"max-height:300px; overflow-y: scroll\">\n                                <table class=\"table\">\n                                    <thead>\n                                        <tr>\n                                            <th>#</th>\n                                            <th (click)=\"sortByfirstName()\">First Name</th>\n                                            <th (click)=\"sortByLastName()\">Last Name</th>\n                                            <th (click)=\"sortByUsername()\">Username</th>\n                                            <th (click)=\"sortByFunctie()\">Functie</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let user of onlineUsers; let i = index\" class=\"{{user.roles.includes('ADMIN')?'info':'warning'}}\">\n                                            <td>{{i+1}}</td>\n                                            <td>{{user.firstName}}</td>\n                                            <td>{{user.lastName}}</td>\n                                            <td>{{user.username}}</td>\n                                            <td>{{user.roles}}</td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/employeetable/employeetable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeetableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_socket_service__ = __webpack_require__("../../../../../src/app/_services/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeetableComponent = (function () {
    function EmployeetableComponent(userService, socketService) {
        var _this = this;
        this.userService = userService;
        this.socketService = socketService;
        this.size = "col-lg-8";
        this.firstnameAlphabetical = 1;
        this.lastnameAlphabetical = 1;
        this.usernameAlphabetical = 1;
        this.rolesAlphabetical = 1;
        this.users = [];
        this.onlineUsers = [];
        this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        this.socketService.on('receive-user-online', function (user) {
            var u = _this.users.find(function (us) { return us._id === user._id; });
            var index = _this.onlineUsers.indexOf(u);
            if (index === -1) {
                _this.onlineUsers.push(u);
            }
        });
        this.socketService.on('receive-user-offline', function (data) {
            var u = _this.onlineUsers.find(function (us) { return us._id === data; });
            if (u) {
                _this.onlineUsers.splice(_this.onlineUsers.indexOf(u, 1));
            }
        });
    }
    EmployeetableComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
    };
    EmployeetableComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) { _this.users = users; });
        this.onlineUsers = this.users.filter(function (user) { return user.online === true; });
        this.onlineUsers.push(this.currentUser);
    };
    //users updaten => da verwijderen en alleen als een user registreert dan toevoegen => socket.io
    EmployeetableComponent.prototype.extend = function () {
        this.size = this.size === "col-lg-12" ? "col-lg-8" : "col-lg-12";
    };
    //methoden hieronder om te sorteren
    EmployeetableComponent.prototype.sortByfirstName = function () {
        var _this = this;
        this.users = this.users.sort(function (user1, user2) {
            if (user1.firstName > user2.firstName) {
                return _this.firstnameAlphabetical;
            }
            if (user1.firstName < user2.firstName) {
                return -_this.firstnameAlphabetical;
            }
            return 0;
        });
        this.firstnameAlphabetical = -this.firstnameAlphabetical;
    };
    EmployeetableComponent.prototype.sortByLastName = function () {
        var _this = this;
        this.users = this.users.sort(function (user1, user2) {
            if (user1.lastName > user2.lastName) {
                return _this.lastnameAlphabetical;
            }
            if (user1.lastName < user2.lastName) {
                return -_this.lastnameAlphabetical;
            }
            return 0;
        });
        this.lastnameAlphabetical = -this.lastnameAlphabetical;
    };
    EmployeetableComponent.prototype.sortByUsername = function () {
        var _this = this;
        this.users = this.users.sort(function (user1, user2) {
            if (user1.username > user2.username) {
                return _this.usernameAlphabetical;
            }
            if (user1.username < user2.username) {
                return -_this.usernameAlphabetical;
            }
            return 0;
        });
        this.usernameAlphabetical = -this.usernameAlphabetical;
    };
    EmployeetableComponent.prototype.sortByFunctie = function () {
        var _this = this;
        this.users = this.users.sort(function (user1, user2) {
            if (user1.roles > user2.roles) {
                return _this.rolesAlphabetical;
            }
            if (user1.roles < user2.roles) {
                return -_this.rolesAlphabetical;
            }
            return 0;
        });
        this.rolesAlphabetical = -this.rolesAlphabetical;
    };
    return EmployeetableComponent;
}());
EmployeetableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-employeetable',
        template: __webpack_require__("../../../../../src/app/admin/employeetable/employeetable.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_socket_service__["a" /* SocketService */]) === "function" && _b || Object])
], EmployeetableComponent);

var _a, _b;
//# sourceMappingURL=employeetable.component.js.map

/***/ }),

/***/ "../../../../../src/app/afdeling/bestelling/bestellingafdeling.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            Nieuwe bestellingen\n        </div>\n        <div class=\"panel-body\">\n            <div class=\"table-responsive\" style=\"max-height:300px; overflow-y: scroll\">\n                <table class=\"table\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>OrderId</th>\n                            <th>Description</th>\n                            <th>CustomerId</th>\n                            <th>Totaal</th>\n                            <th>Status</th>\n                            <th style=\"text-align: center\">Verwerk</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let order of newOrders; let i = index\" class=\"info\">\n                            <td>{{i+1}}</td>\n                            <td>{{order._id}}</td>\n                            <td>{{order.omschrijving}}</td>\n                            <td>{{order.customerId}}</td>\n                            <td>{{order.totaal}}</td>\n                            <td>{{order.status}}</td>\n                            <td style=\"text-align: center\"><button (click)=\"verwerkBestelling(order)\" class=\"glyphicon glyphicon glyphicon-ok                                \"></button></td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            Alle bestellingen\n        </div>\n        <div class=\"panel-body\">\n            <div class=\"table-responsive\" style=\"max-height:300px; overflow-y: scroll\">\n                <table class=\"table\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>OrderId</th>\n                            <th>Description</th>\n                            <th>CustomerId</th>\n                            <th>Totaal</th>\n                            <th>Status</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let order of orders; let i = index\" class=\"info\">\n                            <td>{{i+1}}</td>\n                            <td>{{order._id}}</td>\n                            <td>{{order.omschrijving}}</td>\n                            <td>{{order.customerId}}</td>\n                            <td>{{order.totaal}}</td>\n                            <td>{{order.status}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/afdeling/bestelling/bestellingafdeling.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BestellingAfdelingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_permissions__ = __webpack_require__("../../../../ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_permissions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_permissions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations_slide_in_out_animation__ = __webpack_require__("../../../../../src/app/_animations/slide-in-out.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_order_service__ = __webpack_require__("../../../../../src/app/_services/order.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BestellingAfdelingComponent = (function () {
    function BestellingAfdelingComponent(permissionsService, route, router, alertService, orderService) {
        this.permissionsService = permissionsService;
        this.route = route;
        this.router = router;
        this.alertService = alertService;
        this.orderService = orderService;
        this.orders = [];
        this.newOrders = [];
    }
    BestellingAfdelingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderService.getAll().subscribe(function (data) {
            data.forEach(function (o) {
                _this.orders.push(o);
                if (o.status === "NEW") {
                    _this.newOrders.push(o);
                }
            });
        });
    };
    BestellingAfdelingComponent.prototype.verwerkBestelling = function (order) {
        var _this = this;
        order.status = "VERWERKT";
        order.statusDescription = "Uw order is verwerkt en wordt nu verpakt";
        this.orderService.update(order).subscribe(function (data) {
            _this.alertService.success("U hebt order met id " + order._id + "succesfull verwerkt. Deze is doorgestuurd naar de verpakking afdeling");
        });
    };
    return BestellingAfdelingComponent;
}());
BestellingAfdelingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/afdeling/bestelling/bestellingafdeling.component.html"),
        animations: [__WEBPACK_IMPORTED_MODULE_4__animations_slide_in_out_animation__["a" /* slideInOutAnimation */]],
        host: { '[@slideInOutAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_permissions__["NgxPermissionsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_permissions__["NgxPermissionsService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_order_service__["a" /* OrderService */]) === "function" && _e || Object])
], BestellingAfdelingComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=bestellingafdeling.component.js.map

/***/ }),

/***/ "../../../../../src/app/afdeling/chauffeurs/chauffeur.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container\">\n    <div class=\"col-md-12\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                Bestellingen\n            </div>\n            <!-- .panel-heading -->\n            <div class=\"panel-body\">\n                <div class=\"panel-group\" id=\"accordion\">\n                    <div class=\"panel panel-default\" *ngFor=\"let order of currentUser.teLeverenOrders; let i = index\">\n                        <div class=\"panel-heading\">\n                            <div class=\"card text-white bg-primary mb-3\">\n                                <div class=\"card-body\">\n                                    <h4 class=\"card-title\">Bestelling nr: {{order._id}}</h4>\n                                    <p>Status: {{order.status}}</p>\n                                    <p>Adress: {{order.locatie.straat}} {{order.locatie.nummer}}, {{order.locatie.postcode}} {{order.locatie.stad}}, {{order.locatie.land}}</p>\n                                    <button *ngIf=\"order.status === 'KLAAR VOOR VERZENDING'\" class=\"btn btn-info btnCustom\" (click)=\"pickUp(order)\">Pick up</button>\n                                    <button *ngIf=\"order.status === 'ORDER PICKED UP'\" class=\"btn btn-info btnCustom\" (click)=\"deliver(order)\">Delivered</button>\n                                </div>\n                            </div>\n                            <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse{{i}}\" aria-expanded=\"true\" class=\"ng-tns-c1-1\">Collapse</a>\n                        </div>\n                        <div id=\"collapse{{i}}\" class=\"panel-collapse collapse in\" aria-expanded=\"true\" style=\"height: 331px;\">\n                            <div class=\"panel-body\">\n                                <div class=\"map\">\n                                    <agm-map [latitude]=\"order.lat\" [longitude]=\"order.lng\" [zoom]=\"17\">\n                                        <agm-marker [latitude]=\"order.lat\" [longitude]=\"order.lng\" [iconUrl]=\"'assets/mapMarker.png'\"></agm-marker>\n                                    </agm-map>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- .panel-body -->\n        </div>\n    </div>\n</div>\n<style>\n    .btnCustom {\n        height: 100%;\n        right: 0;\n        position: absolute;\n        top: 0;\n        width: 10%;\n        min-width: 75px;\n    }\n\n    .map {\n        width: 100%;\n        height: 300px;\n        display: flex;\n    }\n\n    agm-map {\n        -ms-flex-align: center;\n        height: 100%;\n        width: 100%;\n    }\n</style>"

/***/ }),

/***/ "../../../../../src/app/afdeling/chauffeurs/chauffeur.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChauffeurAfdelingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_permissions__ = __webpack_require__("../../../../ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_permissions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_permissions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations_slide_in_out_animation__ = __webpack_require__("../../../../../src/app/_animations/slide-in-out.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_order_service__ = __webpack_require__("../../../../../src/app/_services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_socket_service__ = __webpack_require__("../../../../../src/app/_services/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ChauffeurAfdelingComponent = (function () {
    function ChauffeurAfdelingComponent(permissionsService, route, router, alertService, orderService, socketService, userService, zone) {
        this.permissionsService = permissionsService;
        this.route = route;
        this.router = router;
        this.alertService = alertService;
        this.orderService = orderService;
        this.socketService = socketService;
        this.userService = userService;
        this.zone = zone;
        this.lat = 0;
        this.lng = 0;
    }
    ChauffeurAfdelingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        if (this.currentUser.teLeverenOrdersIds != undefined) {
            this.currentUser.teLeverenOrdersIds.forEach(function (oId) {
                if (_this.currentUser.teLeverenOrders === undefined)
                    _this.currentUser.teLeverenOrders = [];
                _this.orderService.getById(oId).subscribe(function (data) {
                    _this.currentUser.teLeverenOrders.push(data);
                });
            });
        }
        this.startWatchingLocation();
    };
    ChauffeurAfdelingComponent.prototype.ngOnDestroy = function () {
        this.stopWatchingLocation();
    };
    ChauffeurAfdelingComponent.prototype.pickUp = function (order) {
        var _this = this;
        order.status = "ORDER PICKED UP";
        order.statusDescription = "Uw bestelling is onderweg";
        this.orderService.update(order).subscribe(function (data) {
            _this.alertService.success("U hebt order met id " + order._id + "als onderweg gezet. De klant kan vanaf nu uw locatie live volgen");
        });
    };
    ChauffeurAfdelingComponent.prototype.deliver = function (order) {
        var _this = this;
        order.status = "ORDER DELIVERED";
        order.statusDescription = "Uw bestelling is geleverd";
        order.chauffeurId = "";
        this.orderService.update(order).subscribe(function (data) {
            _this.alertService.success("U hebt order met id " + order._id + "succesvol geleverd.");
            var index = _this.currentUser.teLeverenOrdersIds.indexOf(order._id);
            if (index != -1) {
                _this.currentUser.teLeverenOrdersIds.splice(index, 1);
                _this.currentUser.teLeverenOrders.splice(index, 1);
            }
        });
    };
    ChauffeurAfdelingComponent.prototype.getDeviceLocation = function () {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(function (location) {
                resolve(location);
            }, function (error) {
                console.log(error);
            });
        });
    };
    ChauffeurAfdelingComponent.prototype.updateLocation = function () {
        var _this = this;
        this.getDeviceLocation().then(function (result) {
            _this.lat = result.latitude;
            _this.lng = result.longitude;
            _this.currentUser.teLeverenOrders.forEach(function (o) {
                if (o.status === "ORDER PICKED UP") {
                    var sendingInfo = {
                        orderId: o._id,
                        lat: _this.lat,
                        lng: _this.lng
                    };
                    _this.socketService.emit("send-location", sendingInfo);
                }
            });
        });
    };
    ChauffeurAfdelingComponent.prototype.startWatchingLocation = function () {
        var _this = this;
        this.watchId = navigator.geolocation.watchPosition(function (location) {
            if (location) {
                _this.zone.run(function () {
                    _this.lat = location.coords.latitude;
                    _this.lng = location.coords.longitude;
                    _this.currentUser.teLeverenOrders.forEach(function (o) {
                        console.log(o);
                        if (o.status === "ORDER PICKED UP") {
                            var sendingInfo = {
                                orderId: o._id,
                                lat: _this.lat,
                                lng: _this.lng
                            };
                            _this.socketService.emit("send-location", sendingInfo);
                        }
                    });
                    //socket.io
                });
            }
        }, function (error) {
        }, {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 27000
        });
    };
    ChauffeurAfdelingComponent.prototype.stopWatchingLocation = function () {
        if (this.watchId) {
            navigator.geolocation.clearWatch(this.watchId);
            this.watchId = null;
        }
    };
    return ChauffeurAfdelingComponent;
}());
ChauffeurAfdelingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/afdeling/chauffeurs/chauffeur.component.html"),
        animations: [__WEBPACK_IMPORTED_MODULE_4__animations_slide_in_out_animation__["a" /* slideInOutAnimation */]],
        host: { '[@slideInOutAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_permissions__["NgxPermissionsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_permissions__["NgxPermissionsService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_order_service__["a" /* OrderService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__services_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_socket_service__["a" /* SocketService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _h || Object])
], ChauffeurAfdelingComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=chauffeur.component.js.map

/***/ }),

/***/ "../../../../../src/app/afdeling/levering/leveringafdeling.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container\">\n    <div class=\"col-md-3\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                Bestellingen\n            </div>\n            <div class=\"panel-body\">\n                <div class=\"card text-white bg-primary mb-3\" *ngFor=\"let order of orders; let i = index\" draggable [dragData]=\"order\">\n                    <div class=\"card-body\">\n                        <h4 class=\"card-title\">Bestelling nr: {{order._id}}</h4>\n                        <p class=\"card-text\">Deze bestelling is klaar voor verzending</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-md-9\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                Chauffeurs\n            </div>\n            <div class=\"panel-body\">\n                <div class=\"col-md-4\" *ngFor=\"let user of chauffeurs; let i = index\" droppable (onDrop)=\"onItemDrop(user, $event)\">\n                    <div class=\"card text-white bg-success mb-3\">\n                        <div class=\"card-header\" style=\"background: darkgreen;\">{{user.firstName}} {{user.lastName}}</div>\n                        <div class=\"card-body\" style=\"border-top: 1px solid rgba(0,0,0,.125);\" *ngFor=\"let order of user.teLeverenOrders; let i = index\">\n                            <h4 class=\"card-title\">Bestelling nr: {{order._id}}</h4>\n                            <p class=\"card-text\">Deze bestelling is klaar voor verzending</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/afdeling/levering/leveringafdeling.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeveringAfdelingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_permissions__ = __webpack_require__("../../../../ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_permissions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_permissions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations_slide_in_out_animation__ = __webpack_require__("../../../../../src/app/_animations/slide-in-out.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_order_service__ = __webpack_require__("../../../../../src/app/_services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LeveringAfdelingComponent = (function () {
    function LeveringAfdelingComponent(permissionsService, route, router, alertService, orderService, userService) {
        this.permissionsService = permissionsService;
        this.route = route;
        this.router = router;
        this.alertService = alertService;
        this.orderService = orderService;
        this.userService = userService;
        this.orders = [];
        this.alleOrders = [];
        this.chauffeurs = [];
    }
    LeveringAfdelingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderService.getAll().subscribe(function (data) {
            data.forEach(function (o) {
                _this.alleOrders.push(o);
                if (o.chauffeurId === null || o.chauffeurId === "") {
                    _this.orders.push(o);
                }
            });
            _this.userService.getAll().subscribe(function (data) {
                data.forEach(function (u) {
                    if (u.roles.indexOf("CHAUFFEUR") != -1) {
                        _this.chauffeurs.push(u);
                    }
                });
                _this.vulOrdersOfDrivers();
            });
        });
    };
    LeveringAfdelingComponent.prototype.vulOrdersOfDrivers = function () {
        var _this = this;
        this.chauffeurs.forEach(function (c) {
            if (c.teLeverenOrdersIds != undefined) {
                c.teLeverenOrdersIds.forEach(function (o) {
                    if (c.teLeverenOrders === undefined)
                        c.teLeverenOrders = [];
                    c.teLeverenOrders.push(_this.alleOrders.find(function (x) { return x._id === o; }));
                });
            }
        });
    };
    LeveringAfdelingComponent.prototype.onItemDrop = function (user, e) {
        // Get the dropped data here
        var index = this.orders.indexOf(e.dragData);
        if (index != -1) {
            this.orders.splice(index, 1);
        }
        e.dragData.chauffeurId = user._id;
        if (user.teLeverenOrders === undefined)
            user.teLeverenOrders = [];
        if (user.teLeverenOrdersIds === undefined || user.teLeverenOrdersIds === null)
            user.teLeverenOrdersIds = [];
        user.teLeverenOrders.push(e.dragData);
        user.teLeverenOrdersIds.push(e.dragData._id);
        this.orderService.update(e.dragData).subscribe();
        this.userService.update(user).subscribe();
    };
    return LeveringAfdelingComponent;
}());
LeveringAfdelingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/afdeling/levering/leveringafdeling.component.html"),
        animations: [__WEBPACK_IMPORTED_MODULE_4__animations_slide_in_out_animation__["a" /* slideInOutAnimation */]],
        host: { '[@slideInOutAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_permissions__["NgxPermissionsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_permissions__["NgxPermissionsService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_order_service__["a" /* OrderService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */]) === "function" && _f || Object])
], LeveringAfdelingComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=leveringafdeling.component.js.map

/***/ }),

/***/ "../../../../../src/app/afdeling/verpakking/verpakkingafdeling.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            Bestellingen te verpakken\n        </div>\n        <!-- .panel-heading -->\n        <div class=\"panel-body\">\n            <div class=\"panel-group\" id=\"accordion\">\n                <div class=\"panel panel-default\" *ngFor=\"let order of orders; let i = index\">\n                    <div class=\"panel-heading\">\n                        <h4 class=\"panel-title\">\n                            <div class=\"table-responsive\" style=\"max-height:300px; overflow-y: scroll\">\n                                <table class=\"table\">\n                                    <thead>\n                                        <tr>\n                                            <th>#</th>\n                                            <th>OrderId</th>\n                                            <th>Description</th>\n                                            <th>CustomerId</th>\n                                            <th>Totaal</th>\n                                            <th>Status</th>\n                                            <th style=\"text-align: center\">OPEN</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr class=\"info\">\n                                            <td>{{i+1}}</td>\n                                            <td>{{order._id}}</td>\n                                            <td>{{order.omschrijving}}</td>\n                                            <td>{{order.customerId}}</td>\n                                            <td>{{order.totaal}}</td>\n                                            <td>{{order.status}}</td>\n                                            <td style=\"text-align: center\">\n                                                <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#{{order._id}}\" aria-expanded=\"false\"\n                                                    class=\"collapsed glyphicon glyphicon-arrow-down\" style=\"text-decoration: none\"></a>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </h4>\n                    </div>\n                    <div id=\"{{order._id}}\" class=\"panel-collapse collapse\" aria-expanded=\"false\" style=\"height: 0px;\">\n                        <div class=\"panel-body\">\n                            <div *ngFor='let product of order.producten; let i = index' class=\"row\" style=\"vertical-align: middle\">\n                                <div class=\"col-xs-2\">\n                                    <img class=\"img-responsive\" src=\"{{product.imgUrl}}\">\n                                </div>\n                                <div class=\"col-xs-4\" style=\"vertical-align: m\">\n                                    <h4 class=\"product-name\">\n                                        <strong>{{product.naam}}</strong>\n                                    </h4>\n                                    <h4>\n                                        <small>{{product.omschrijving}}</small>\n                                    </h4>\n                                </div>\n                                <div class=\"col-xs-6\">\n                                    <div class=\"col-xs-6 text-right\">\n                                        <h6>\n                                            <strong>{{product.prijs}}\n                                                <span class=\"text-muted\">x</span>\n                                            </strong>\n                                        </h6>\n                                    </div>\n                                    <div class=\"col-xs-4\">\n                                        <input type=\"text\" disabled class=\"form-control input-sm\" value=\"1\">\n                                    </div>\n                                </div>\n                            </div>\n                            <div style=\"text-align: center\">\n                                <button type=\"button\" class=\"btn btn-info\" (click)=\"verwerkBestelling(order)\">Bestelling is verpakt</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- .panel-body -->\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/afdeling/verpakking/verpakkingafdeling.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerpakkingAfdelingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_permissions__ = __webpack_require__("../../../../ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_permissions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_permissions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations_slide_in_out_animation__ = __webpack_require__("../../../../../src/app/_animations/slide-in-out.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_order_service__ = __webpack_require__("../../../../../src/app/_services/order.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VerpakkingAfdelingComponent = (function () {
    function VerpakkingAfdelingComponent(permissionsService, route, router, alertService, orderService) {
        this.permissionsService = permissionsService;
        this.route = route;
        this.router = router;
        this.alertService = alertService;
        this.orderService = orderService;
        this.orders = [];
    }
    VerpakkingAfdelingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderService.getAll().subscribe(function (data) {
            data.forEach(function (o) {
                if (o.status === "VERWERKT") {
                    _this.orders.push(o);
                }
            });
        });
    };
    VerpakkingAfdelingComponent.prototype.verwerkBestelling = function (order) {
        var _this = this;
        order.status = "KLAAR VOOR VERZENDING";
        order.statusDescription = "Uw order is verpakt en zal binnenkort verzonden worden";
        this.orderService.update(order).subscribe(function (data) {
            var index = _this.orders.indexOf(order);
            if (index != -1) {
                _this.orders.splice(index, 1);
            }
            _this.alertService.success("U hebt order met id " + order._id + "succesfull verpakt. Deze is doorgestuurd naar de levering afdeling");
        });
    };
    return VerpakkingAfdelingComponent;
}());
VerpakkingAfdelingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/afdeling/verpakking/verpakkingafdeling.component.html"),
        animations: [__WEBPACK_IMPORTED_MODULE_4__animations_slide_in_out_animation__["a" /* slideInOutAnimation */]],
        host: { '[@slideInOutAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_permissions__["NgxPermissionsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_permissions__["NgxPermissionsService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_order_service__["a" /* OrderService */]) === "function" && _e || Object])
], VerpakkingAfdelingComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=verpakkingafdeling.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Router-outlet zorg dat de juiste pagina getoond wordt op basis van de url -->\n<cl-alert></cl-alert>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* import { Component } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  users: Array<any>;

  constructor(private _dataService: DataService) {
    this._dataService.getUsers()
      .subscribe(res => this.users = res);
  }

  public addUser(name: string, email: string) {
    this._dataService.addUser(email, name)
      .subscribe(res => this.users = res);
  }
} */

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app',
        template: __webpack_require__("../../../../../src/app/app.component.html")
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_permissions__ = __webpack_require__("../../../../ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_permissions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_permissions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_alert_component__ = __webpack_require__("../../../../../src/app/_directives/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_bedrijf_service__ = __webpack_require__("../../../../../src/app/_services/bedrijf.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_conversation_service__ = __webpack_require__("../../../../../src/app/_services/conversation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_product_service__ = __webpack_require__("../../../../../src/app/_services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_socket_service__ = __webpack_require__("../../../../../src/app/_services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_order_service__ = __webpack_require__("../../../../../src/app/_services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__header_welcomeheader_component__ = __webpack_require__("../../../../../src/app/header/welcomeheader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__mijnProfiel_mijnprofiel_component__ = __webpack_require__("../../../../../src/app/mijnProfiel/mijnprofiel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__passwordrecover_passwordrecover_component__ = __webpack_require__("../../../../../src/app/passwordrecover/passwordrecover.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__admin_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__afdeling_bestelling_bestellingafdeling_component__ = __webpack_require__("../../../../../src/app/afdeling/bestelling/bestellingafdeling.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__afdeling_verpakking_verpakkingafdeling_component__ = __webpack_require__("../../../../../src/app/afdeling/verpakking/verpakkingafdeling.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__afdeling_levering_leveringafdeling_component__ = __webpack_require__("../../../../../src/app/afdeling/levering/leveringafdeling.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__afdeling_chauffeurs_chauffeur_component__ = __webpack_require__("../../../../../src/app/afdeling/chauffeurs/chauffeur.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__admin_dashboard_mainDashboard_maindashboard_component__ = __webpack_require__("../../../../../src/app/admin/dashboard/mainDashboard/maindashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__admin_employeetable_employeetable_component__ = __webpack_require__("../../../../../src/app/admin/employeetable/employeetable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__shop_shoppingbag_shoppingbag_component__ = __webpack_require__("../../../../../src/app/shop/shoppingbag/shoppingbag.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__shop_placeorder_placeorder_component__ = __webpack_require__("../../../../../src/app/shop/placeorder/placeorder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__shop_placeorder_loginregister_loginregister_component__ = __webpack_require__("../../../../../src/app/shop/placeorder/loginregister/loginregister.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__shop_placeorder_customerdetails_customerdetails_component__ = __webpack_require__("../../../../../src/app/shop/placeorder/customerdetails/customerdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_ng_drag_drop__ = __webpack_require__("../../../../ng-drag-drop/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_ng_drag_drop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39_ng_drag_drop__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//import { customHttpProvider } from './_helpers/custom-http';


































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_permissions__["NgxPermissionsModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_8_angular2_notifications__["PushNotificationsModule"],
            __WEBPACK_IMPORTED_MODULE_39_ng_drag_drop__["NgDragDropModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_40__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyCfp0G7Yjzd6Sn20cOVtYCCc5-ZfO8WXMk'
            }),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__directives_alert_component__["a" /* AlertComponent */],
            __WEBPACK_IMPORTED_MODULE_19__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_20__header_welcomeheader_component__["a" /* WelcomeheaderComponent */],
            __WEBPACK_IMPORTED_MODULE_21__welcome_welcome_component__["a" /* WelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_22__mijnProfiel_mijnprofiel_component__["a" /* MijnprofielComponent */],
            __WEBPACK_IMPORTED_MODULE_23__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_24__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_25__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_26__passwordrecover_passwordrecover_component__["a" /* PasswordrecoverComponent */],
            __WEBPACK_IMPORTED_MODULE_27__admin_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_32__admin_dashboard_mainDashboard_maindashboard_component__["a" /* MaindashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_28__afdeling_bestelling_bestellingafdeling_component__["a" /* BestellingAfdelingComponent */],
            __WEBPACK_IMPORTED_MODULE_29__afdeling_verpakking_verpakkingafdeling_component__["a" /* VerpakkingAfdelingComponent */],
            __WEBPACK_IMPORTED_MODULE_30__afdeling_levering_leveringafdeling_component__["a" /* LeveringAfdelingComponent */],
            __WEBPACK_IMPORTED_MODULE_31__afdeling_chauffeurs_chauffeur_component__["a" /* ChauffeurAfdelingComponent */],
            __WEBPACK_IMPORTED_MODULE_33__admin_employeetable_employeetable_component__["a" /* EmployeetableComponent */],
            __WEBPACK_IMPORTED_MODULE_34__chat_chat_component__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_35__shop_shoppingbag_shoppingbag_component__["a" /* ShoppingbagComponent */],
            __WEBPACK_IMPORTED_MODULE_36__shop_placeorder_placeorder_component__["a" /* PlaceOrderComponent */],
            __WEBPACK_IMPORTED_MODULE_37__shop_placeorder_loginregister_loginregister_component__["a" /* LoginRegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_38__shop_placeorder_customerdetails_customerdetails_component__["a" /* CustomerDetailsComponent */]
        ],
        providers: [
            //customHttpProvider,
            __WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_11__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_12__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_13__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_14__services_bedrijf_service__["a" /* BedrijfService */],
            __WEBPACK_IMPORTED_MODULE_15__services_conversation_service__["a" /* ConversationService */],
            __WEBPACK_IMPORTED_MODULE_16__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_17__services_socket_service__["a" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_18__services_order_service__["a" /* OrderService */],
            { provide: __WEBPACK_IMPORTED_MODULE_41__angular_common__["APP_BASE_HREF"], useValue: '/' }
        ],
        schemas: [
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* unused harmony export routes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__afdeling_bestelling_bestellingafdeling_component__ = __webpack_require__("../../../../../src/app/afdeling/bestelling/bestellingafdeling.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mijnProfiel_mijnprofiel_component__ = __webpack_require__("../../../../../src/app/mijnProfiel/mijnprofiel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__passwordrecover_passwordrecover_component__ = __webpack_require__("../../../../../src/app/passwordrecover/passwordrecover.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shop_placeorder_placeorder_component__ = __webpack_require__("../../../../../src/app/shop/placeorder/placeorder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_permissions__ = __webpack_require__("../../../../ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_permissions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ngx_permissions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__afdeling_verpakking_verpakkingafdeling_component__ = __webpack_require__("../../../../../src/app/afdeling/verpakking/verpakkingafdeling.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__afdeling_levering_leveringafdeling_component__ = __webpack_require__("../../../../../src/app/afdeling/levering/leveringafdeling.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__afdeling_chauffeurs_chauffeur_component__ = __webpack_require__("../../../../../src/app/afdeling/chauffeurs/chauffeur.component.ts");
















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_1__welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__admin_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_11_ngx_permissions__["NgxPermissionsGuard"]],
        data: {
            permissions: {
                only: ['ADMIN'],
                redirectTo: 'afdeling/bestelling'
            }
        } },
    { path: 'afdeling/bestelling', component: __WEBPACK_IMPORTED_MODULE_3__afdeling_bestelling_bestellingafdeling_component__["a" /* BestellingAfdelingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_11_ngx_permissions__["NgxPermissionsGuard"]],
        data: {
            permissions: {
                only: ['BESTELLING'],
                redirectTo: 'afdeling/verpakking'
            }
        } },
    { path: 'afdeling/verpakking', component: __WEBPACK_IMPORTED_MODULE_13__afdeling_verpakking_verpakkingafdeling_component__["a" /* VerpakkingAfdelingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_11_ngx_permissions__["NgxPermissionsGuard"]],
        data: {
            permissions: {
                only: ['VERPAKKING'],
                redirectTo: 'afdeling/levering'
            }
        } },
    { path: 'afdeling/levering', component: __WEBPACK_IMPORTED_MODULE_14__afdeling_levering_leveringafdeling_component__["a" /* LeveringAfdelingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_11_ngx_permissions__["NgxPermissionsGuard"]],
        data: {
            permissions: {
                only: ['LEVERING'],
                redirectTo: 'afdeling/chauffeur'
            }
        } },
    { path: 'afdeling/chauffeur', component: __WEBPACK_IMPORTED_MODULE_15__afdeling_chauffeurs_chauffeur_component__["a" /* ChauffeurAfdelingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_11_ngx_permissions__["NgxPermissionsGuard"]],
        data: {
            permissions: {
                only: ['CHAUFFEUR'],
                redirectTo: 'home'
            }
        } },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_11_ngx_permissions__["NgxPermissionsGuard"]],
        data: {
            permissions: {
                only: ['CUSTOMER'],
                redirectTo: 'login'
            }
        } },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_7__register_register_component__["a" /* RegisterComponent */] },
    { path: 'passwordrecover', component: __WEBPACK_IMPORTED_MODULE_8__passwordrecover_passwordrecover_component__["a" /* PasswordrecoverComponent */] },
    { path: 'mijnprofiel', component: __WEBPACK_IMPORTED_MODULE_5__mijnProfiel_mijnprofiel_component__["a" /* MijnprofielComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'messenger', component: __WEBPACK_IMPORTED_MODULE_12__chat_chat_component__["a" /* ChatComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'placeorder', component: __WEBPACK_IMPORTED_MODULE_9__shop_placeorder_placeorder_component__["a" /* PlaceOrderComponent */] },
    // otherwise redirect to home
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__admin_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_11_ngx_permissions__["NgxPermissionsGuard"]],
        data: {
            permissions: {
                only: ['ADMIN'],
                redirectTo: 'afdeling/bestelling'
            }
        } }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(appRoutes);
var routes = appRoutes;
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"content\" style=\"margin-top: -100px;\">\n    <div class=\"contacts\">\n        <div class=\"c\">\n            <div class=\"title\">\n                <p>Contacts</p>\n            </div>\n            <div class=\"search\">\n                <input type=\"text\" placeholder=\"Search...\">\n            </div>\n            <div class=\"list\">\n                <div class=\"contact\" *ngFor=\"let user of users\" (click)=\"loadConversation(user._id)\" >\n                    <div class=\"initialso\" *ngIf=\"user.online\">\n                        <p style=\"min-width: 30px;\">{{user.firstName.charAt(0)}}{{user.lastName.charAt(0)}}</p>\n                    </div>\n                    <div class=\"initialsoff\" *ngIf=\"!user.online\">\n                        <p style=\"min-width: 30px;\">{{user.firstName.charAt(0)}}{{user.lastName.charAt(0)}}</p>\n                    </div>\n                    <div class=\"name\">\n                        <p>{{user.firstName}} {{user.lastName}}</p>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n\n    </div>\n    <div class=\"mainmessage\">\n        <div class=\"c\">\n            <div class=\"title\" *ngIf=\"currentConversation\">\n                <div *ngIf=\"currentConversation.user1._id != currentUser._id\">\n                        <p>{{currentConversation.user1.firstName}} {{currentConversation.user1.lastName}}</p>\n                        <div class=\"online\">\n                            <p *ngIf=\"currentConversation.user1.online===true\">online</p>\n                            <p *ngIf=\"currentConversation.user1.online===false\">offline</p>\n                            <p *ngIf=\"currentConversation.user1.online===undefined\">offline</p>\n                        </div>\n                </div>\n\n                <div *ngIf=\"currentConversation.user2._id != currentUser._id\">\n                        <p>{{currentConversation.user2.firstName}} {{currentConversation.user2.lastName}}</p>\n                        <div class=\"online\">\n                            <p *ngIf=\"currentConversation.user2.online===true\">online</p>\n                            <p *ngIf=\"currentConversation.user2.online===false\">offline</p>\n                            <p *ngIf=\"currentConversation.user2.online===undefined\">offline</p>\n                        </div>\n                </div>\n\n                <div *ngIf=\"currentConversation.user2._id === currentUser._id && currentConversation.user1._id === currentUser._id\">\n                        <p>{{currentUser.firstName}} {{currentUser.lastName}}</p>\n                        <div class=\"online\">\n                            <p *ngIf=\"currentUser.online===true\">online</p>\n                            <p *ngIf=\"currentUser.online===false\">offline</p>\n                        </div>\n                </div>\n                \n            </div>\n            <div class=\"chatbox\" *ngIf=\"currentConversation\" #scrollMe (scroll)=\"onScroll()\">\n                <div *ngFor=\"let bericht of currentConversation.berichten\" class=\"{{bericht.van===currentUser._id?'msgu':'msgo'}}\">\n                    <p>{{bericht.message}}\n\n                    <span class=\"tooltiptext\">{{bericht.hours}}:{{bericht.minutes}}</span>\n                    </p>\n                </div>\n            </div>\n            <div class=\"sendmsg\">\n                <input type=\"text\" placeholder=\"type a message\" [(ngModel)]=\"message\" (keyup.enter)=\"sendMessage()\">\n                <button (click)=\"sendMessage()\">Send</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_conversatie__ = __webpack_require__("../../../../../src/app/_models/conversatie.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_bericht__ = __webpack_require__("../../../../../src/app/_models/bericht.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_conversation_service__ = __webpack_require__("../../../../../src/app/_services/conversation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_socket_service__ = __webpack_require__("../../../../../src/app/_services/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatComponent = (function () {
    function ChatComponent(userService, conversationService, socketService) {
        this.userService = userService;
        this.conversationService = conversationService;
        this.socketService = socketService;
        this.disableScrollDown = false;
        this.users = [];
        this.position = 'before';
        //hier kan nog een methode komen als de user op de textbox drukt => "aan het typen" sturen via socket.io aan de andere user
        //hier kan nog een methode komen als de user het bericht leest
        //deze methode vervolledigen met socket.io => DONE
        this.message = "";
        this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAllUsers();
        this.socketService.on('receive-user-online', function (user) {
            _this.users.find(function (us) { return us._id === user._id; }).online = true;
        });
        this.socketService.on('receive-user-offline', function (data) {
            console.log(data);
            _this.users.find(function (us) { return us._id === data; }).online = false;
        });
        this.socketService.on('message-received', function (msg) {
            console.log(msg);
            if (msg.naar === _this.currentUser._id) {
                var options = {
                    body: msg.message,
                    icon: "assets/user.png",
                    vibrate: [200, 100, 200]
                };
            }
            if (_this.currentConversation != undefined) {
                if (msg.van === _this.currentConversation.userId1 || msg.van === _this.currentConversation.userId2)
                    _this.currentConversation.berichten.push(msg);
                _this.disableScrollDown = false;
                _this.scrollToBottom();
            }
        });
    };
    ChatComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) {
            _this.users = users;
            _this.users.find(function (u) { return u._id === _this.currentUser._id; }).online = true;
        });
    };
    //users updaten => da verwijderen en alleen als een user registreert dan toevoegen => socket.io
    //conersatie opladen in funtie van de 2 deelnemende users (parameter _id is de id van de ontvanger, de id van de huidige user wordt genomen van de currentUser)
    ChatComponent.prototype.loadConversation = function (_id) {
        var _this = this;
        if (this.messageSubscription)
            this.messageSubscription.unsubscribe();
        this.disableScrollDown = false;
        var model = {};
        model.userId1 = _id;
        model.userId2 = this.currentUser._id;
        this.conversationService.getByUsers(model).subscribe(function (data) {
            _this.currentConversation = data;
            _this.currentConversation.user1 = _this.users.find(function (u) { return u._id === _this.currentConversation.userId1; });
            _this.currentConversation.user2 = _this.users.find(function (u) { return u._id === _this.currentConversation.userId2; });
            _this.currentConversation.userId1 = _this.currentConversation.user1._id;
            _this.currentConversation.userId2 = _this.currentConversation.user2._id;
        }, function (error) {
            _this.conversationService.create(new __WEBPACK_IMPORTED_MODULE_1__models_conversatie__["a" /* Conversatie */](_this.currentUser, _this.users.find(function (user) { return user._id === _id; }))).subscribe();
            _this.conversationService.getByUsers(model).subscribe(function (data) {
                console.log(data);
                _this.currentConversation = data;
                _this.currentConversation.user1 = _this.users.find(function (u) { return u._id === _this.currentConversation.userId1; });
                _this.currentConversation.user2 = _this.users.find(function (u) { return u._id === _this.currentConversation.userId2; });
                _this.currentConversation.userId1 = _this.currentConversation.user1._id;
                _this.currentConversation.userId2 = _this.currentConversation.user2._id;
            });
        });
    };
    ChatComponent.prototype.sendMessage = function () {
        var date = new Date();
        if (this.message.trim() != "" && this.currentConversation != null) {
            this.currentConversation.berichten.push(new __WEBPACK_IMPORTED_MODULE_2__models_bericht__["a" /* Bericht */](this.currentUser._id, this.currentConversation.userId1 == this.currentUser._id ? this.currentConversation.userId2 : this.currentConversation.userId1, this.message, date));
            this.message = "";
            this.conversationService.update(this.currentConversation).subscribe();
            this.socketService.emit('send-message', this.currentConversation.berichten[this.currentConversation.berichten.length - 1]);
        }
    };
    //code hieronder werkt goed in chrome maar niet altijd in safari
    ChatComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    //wordt aangeroepen bij het scrollen
    ChatComponent.prototype.onScroll = function () {
        var element = this.myScrollContainer.nativeElement;
        var atBottom = element.scrollHeight - element.scrollTop === element.clientHeight;
        if (this.disableScrollDown && atBottom) {
            this.disableScrollDown = false;
        }
        else {
            this.disableScrollDown = true;
        }
    };
    ChatComponent.prototype.scrollToBottom = function () {
        if (this.disableScrollDown) {
            return;
        }
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    return ChatComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scrollMe'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ChatComponent.prototype, "myScrollContainer", void 0);
ChatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chat',
        template: __webpack_require__("../../../../../src/app/chat/chat.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_conversation_service__["a" /* ConversationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_conversation_service__["a" /* ConversationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_socket_service__["a" /* SocketService */]) === "function" && _d || Object])
], ChatComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template [ngxPermissionsExcept]=\"['ADMIN','EMPLOYEE','CUSTOMER']\">\r\n    <app-welcomeheader></app-welcomeheader>\r\n</ng-template>\r\n\r\n<ng-template [ngxPermissionsOnly]=\"['EMPLOYEE']\">\r\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n    <div class=\"container\">\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\r\n          aria-controls=\"navbar\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"#\">{{bedrijf.naam}}</a>\r\n      </div>\r\n      <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li [routerLinkActive]=\"['active']\">\r\n            <a [routerLink]=\"['/welcome']\">Welcome</a>\r\n          </li>\r\n          <li [routerLinkActive]=\"['active']\">\r\n            <a [routerLink]=\"['/home']\">Home</a>\r\n          </li>\r\n          <li [routerLinkActive]=\"['active']\">\r\n            <a [routerLink]=\"['/messenger']\">Chat</a>\r\n          </li>\r\n          <li [routerLinkActive]=\"['active']\" class=\"dropdown\">\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Mijn profiel\r\n              <span class=\"caret\"></span>\r\n            </a>\r\n            <ul class=\"dropdown-menu\">\r\n              <li [routerLinkActive]=\"['active']\">\r\n                <a [routerLink]=\"['/mijnprofiel']\">Mijn profiel</a>\r\n              </li>\r\n              <li [routerLinkActive]=\"['active']\">\r\n                <a href=\"#\">Iets anders</a>\r\n              </li>\r\n              <li role=\"separator\" class=\"divider\"></li>\r\n              <!-- <li class=\"dropdown-header\">Header</li> -->\r\n              <li>\r\n                <a [routerLink]=\"['/login']\">Afmelden</a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <!-- Notifications-->\r\n          <li class=\"dropdown\">\r\n            <a id=\"dLabel\" role=\"button\" data-toggle=\"dropdown\" href=\"#\" (click)=\"readNotifications()\">\r\n              <i class=\"glyphicon glyphicon-bell\"></i>\r\n              <p style=\"    position: absolute;\r\n              bottom: 12px;\r\n              right: 6px;\r\n              font-size: 12px;\">{{aantalNotificaties}}</p>\r\n            </a>\r\n            <ul class=\"dropdown-menu notifications\" role=\"menu\" aria-labelledby=\"dLabel\" style=\"min-width: 300px; width: 400px;\">\r\n\r\n              <div class=\"notification-heading\">\r\n                <h4 class=\"menu-title\">Notifications</h4>\r\n              </div>\r\n              <div class=\"notifications-wrapper\" style=\"background-color: white;\">\r\n                  <div class=\"notification-item\" *ngFor=\"let noti of notificaties\">\r\n                    <img src=\"http://www.leapcms.com/images/100pixels1.gif\">\r\n                    <h4 class=\"item-title\">New message from {{noti.from}}\r\n                      <small> 1 day ago</small>\r\n                    </h4>\r\n                    <p class=\"item-info\">{{noti.message}}</p>\r\n                  </div>\r\n              </div>\r\n            </ul>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <!--/.nav-collapse -->\r\n    </div>\r\n  </nav>\r\n</ng-template>\r\n\r\n<ng-template [ngxPermissionsOnly]=\"['ADMIN']\">\r\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n    <div class=\"container\">\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\r\n          aria-controls=\"navbar\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"#\">\r\n          {{bedrijf.naam}}\r\n        </a>\r\n      </div>\r\n      <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li [routerLinkActive]=\"['active']\">\r\n            <a [routerLink]=\"['/welcome']\">Welcome</a>\r\n          </li>\r\n          <li [routerLinkActive]=\"['active']\">\r\n            <a [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n          </li>\r\n          <li [routerLinkActive]=\"['active']\">\r\n            <a [routerLink]=\"['/messenger']\">Chat</a>\r\n          </li>\r\n          <li [routerLinkActive]=\"['active']\" class=\"dropdown\">\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Mijn profiel\r\n              <span class=\"caret\"></span>\r\n            </a>\r\n            <ul class=\"dropdown-menu\">\r\n              <li [routerLinkActive]=\"['active']\">\r\n                <a [routerLink]=\"['/mijnprofiel']\">Mijn profiel</a>\r\n              </li>\r\n              <li [routerLinkActive]=\"['active']\">\r\n                <a href=\"#\">Iets anders</a>\r\n              </li>\r\n              <li role=\"separator\" class=\"divider\"></li>\r\n              <!-- <li class=\"dropdown-header\">Header</li> -->\r\n              <li>\r\n                <a [routerLink]=\"['/login']\">Afmelden</a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <!-- Notifications-->\r\n          <li class=\"dropdown\">\r\n            <a id=\"dLabel\" role=\"button\" data-toggle=\"dropdown\" href=\"#\" (click)=\"readNotifications()\">\r\n              <i class=\"glyphicon glyphicon-bell\"></i>\r\n              <p style=\"    position: absolute;\r\n              bottom: 12px;\r\n              right: 6px;\r\n              font-size: 12px;\">{{aantalNotificaties}}</p>\r\n            </a>\r\n            <ul class=\"dropdown-menu notifications\" role=\"menu\" aria-labelledby=\"dLabel\" style=\"min-width: 300px; width: 400px;\">\r\n\r\n              <div class=\"notification-heading\">\r\n                <h4 class=\"menu-title\">Notifications</h4>\r\n              </div>\r\n              <div class=\"notifications-wrapper\" style=\"background-color: white;\">\r\n                  <div class=\"notification-item\" *ngFor=\"let noti of notificaties\">\r\n                    <img src=\"http://www.leapcms.com/images/100pixels1.gif\">\r\n                    <h4 class=\"item-title\">New message from {{noti.from}}\r\n                      <small> 1 day ago</small>\r\n                    </h4>\r\n                    <p class=\"item-info\">{{noti.message}}</p>\r\n                  </div>\r\n              </div>\r\n            </ul>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</ng-template>\r\n\r\n<ng-template [ngxPermissionsOnly]=\"['BESTELLING']\">\r\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n    <div class=\"container\">\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\r\n          aria-controls=\"navbar\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"#\">\r\n          {{bedrijf.naam}}\r\n        </a>\r\n      </div>\r\n      <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li [routerLinkActive]=\"['active']\">\r\n            <a [routerLink]=\"['/welcome']\">Welcome</a>\r\n          </li>\r\n          <li [routerLinkActive]=\"['active']\">\r\n            <a [routerLink]=\"['/afdeling/bestelling']\">Home</a>\r\n          </li>\r\n          <li [routerLinkActive]=\"['active']\">\r\n            <a [routerLink]=\"['/messenger']\">Chat</a>\r\n          </li>\r\n          <li [routerLinkActive]=\"['active']\" class=\"dropdown\">\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Mijn profiel\r\n              <span class=\"caret\"></span>\r\n            </a>\r\n            <ul class=\"dropdown-menu\">\r\n              <li [routerLinkActive]=\"['active']\">\r\n                <a [routerLink]=\"['/mijnprofiel']\">Mijn profiel</a>\r\n              </li>\r\n              <li [routerLinkActive]=\"['active']\">\r\n                <a href=\"#\">Iets anders</a>\r\n              </li>\r\n              <li role=\"separator\" class=\"divider\"></li>\r\n              <!-- <li class=\"dropdown-header\">Header</li> -->\r\n              <li>\r\n                <a [routerLink]=\"['/login']\">Afmelden</a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <!-- Notifications-->\r\n          <li class=\"dropdown\">\r\n            <a id=\"dLabel\" role=\"button\" data-toggle=\"dropdown\" href=\"#\" (click)=\"readNotifications()\">\r\n              <i class=\"glyphicon glyphicon-bell\"></i>\r\n              <p style=\"    position: absolute;\r\n              bottom: 12px;\r\n              right: 6px;\r\n              font-size: 12px;\">{{aantalNotificaties}}</p>\r\n            </a>\r\n            <ul class=\"dropdown-menu notifications\" role=\"menu\" aria-labelledby=\"dLabel\" style=\"min-width: 300px; width: 400px;\">\r\n\r\n              <div class=\"notification-heading\">\r\n                <h4 class=\"menu-title\">Notifications</h4>\r\n              </div>\r\n              <div class=\"notifications-wrapper\" style=\"background-color: white;\">\r\n                  <div class=\"notification-item\" *ngFor=\"let noti of notificaties\">\r\n                    <img src=\"http://www.leapcms.com/images/100pixels1.gif\">\r\n                    <h4 class=\"item-title\">New message from {{noti.from}}\r\n                      <small> 1 day ago</small>\r\n                    </h4>\r\n                    <p class=\"item-info\">{{noti.message}}</p>\r\n                  </div>\r\n              </div>\r\n            </ul>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</ng-template>\r\n\r\n<ng-template [ngxPermissionsOnly]=\"['VERPAKKING']\">\r\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n    <div class=\"container\">\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\r\n          aria-controls=\"navbar\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"#\">\r\n          {{bedrijf.naam}}\r\n        </a>\r\n      </div>\r\n      <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li [routerLinkActive]=\"['active']\">\r\n            <a [routerLink]=\"['/welcome']\">Welcome</a>\r\n          </li>\r\n          <li [routerLinkActive]=\"['active']\">\r\n            <a [routerLink]=\"['/afdeling/verpakking']\">Home</a>\r\n          </li>\r\n          <li [routerLinkActive]=\"['active']\">\r\n            <a [routerLink]=\"['/messenger']\">Chat</a>\r\n          </li>\r\n          <li [routerLinkActive]=\"['active']\" class=\"dropdown\">\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Mijn profiel\r\n              <span class=\"caret\"></span>\r\n            </a>\r\n            <ul class=\"dropdown-menu\">\r\n              <li [routerLinkActive]=\"['active']\">\r\n                <a [routerLink]=\"['/mijnprofiel']\">Mijn profiel</a>\r\n              </li>\r\n              <li [routerLinkActive]=\"['active']\">\r\n                <a href=\"#\">Iets anders</a>\r\n              </li>\r\n              <li role=\"separator\" class=\"divider\"></li>\r\n              <!-- <li class=\"dropdown-header\">Header</li> -->\r\n              <li>\r\n                <a [routerLink]=\"['/login']\">Afmelden</a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <!-- Notifications-->\r\n          <li class=\"dropdown\">\r\n            <a id=\"dLabel\" role=\"button\" data-toggle=\"dropdown\" href=\"#\" (click)=\"readNotifications()\">\r\n              <i class=\"glyphicon glyphicon-bell\"></i>\r\n              <p style=\"    position: absolute;\r\n              bottom: 12px;\r\n              right: 6px;\r\n              font-size: 12px;\">{{aantalNotificaties}}</p>\r\n            </a>\r\n            <ul class=\"dropdown-menu notifications\" role=\"menu\" aria-labelledby=\"dLabel\" style=\"min-width: 300px; width: 400px;\">\r\n\r\n              <div class=\"notification-heading\">\r\n                <h4 class=\"menu-title\">Notifications</h4>\r\n              </div>\r\n              <div class=\"notifications-wrapper\" style=\"background-color: white;\">\r\n                  <div class=\"notification-item\" *ngFor=\"let noti of notificaties\">\r\n                    <img src=\"http://www.leapcms.com/images/100pixels1.gif\">\r\n                    <h4 class=\"item-title\">New message from {{noti.from}}\r\n                      <small> 1 day ago</small>\r\n                    </h4>\r\n                    <p class=\"item-info\">{{noti.message}}</p>\r\n                  </div>\r\n              </div>\r\n            </ul>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</ng-template>\r\n\r\n<ng-template [ngxPermissionsOnly]=\"['LEVERING']\">\r\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n    <div class=\"container\">\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\r\n          aria-controls=\"navbar\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"#\">\r\n          {{bedrijf.naam}}\r\n        </a>\r\n      </div>\r\n      <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li [routerLinkActive]=\"['active']\">\r\n            <a [routerLink]=\"['/welcome']\">Welcome</a>\r\n          </li>\r\n          <li [routerLinkActive]=\"['active']\">\r\n            <a [routerLink]=\"['/afdeling/levering']\">Home</a>\r\n          </li>\r\n          <li [routerLinkActive]=\"['active']\">\r\n            <a [routerLink]=\"['/messenger']\">Chat</a>\r\n          </li>\r\n          <li [routerLinkActive]=\"['active']\" class=\"dropdown\">\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Mijn profiel\r\n              <span class=\"caret\"></span>\r\n            </a>\r\n            <ul class=\"dropdown-menu\">\r\n              <li [routerLinkActive]=\"['active']\">\r\n                <a [routerLink]=\"['/mijnprofiel']\">Mijn profiel</a>\r\n              </li>\r\n              <li [routerLinkActive]=\"['active']\">\r\n                <a href=\"#\">Iets anders</a>\r\n              </li>\r\n              <li role=\"separator\" class=\"divider\"></li>\r\n              <!-- <li class=\"dropdown-header\">Header</li> -->\r\n              <li>\r\n                <a [routerLink]=\"['/login']\">Afmelden</a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <!-- Notifications-->\r\n          <li class=\"dropdown\">\r\n            <a id=\"dLabel\" role=\"button\" data-toggle=\"dropdown\" href=\"#\" (click)=\"readNotifications()\">\r\n              <i class=\"glyphicon glyphicon-bell\"></i>\r\n              <p style=\"    position: absolute;\r\n              bottom: 12px;\r\n              right: 6px;\r\n              font-size: 12px;\">{{aantalNotificaties}}</p>\r\n            </a>\r\n            <ul class=\"dropdown-menu notifications\" role=\"menu\" aria-labelledby=\"dLabel\" style=\"min-width: 300px; width: 400px;\">\r\n\r\n              <div class=\"notification-heading\">\r\n                <h4 class=\"menu-title\">Notifications</h4>\r\n              </div>\r\n              <div class=\"notifications-wrapper\" style=\"background-color: white;\">\r\n                  <div class=\"notification-item\" *ngFor=\"let noti of notificaties\">\r\n                    <img src=\"http://www.leapcms.com/images/100pixels1.gif\">\r\n                    <h4 class=\"item-title\">New message from {{noti.from}}\r\n                      <small> 1 day ago</small>\r\n                    </h4>\r\n                    <p class=\"item-info\">{{noti.message}}</p>\r\n                  </div>\r\n              </div>\r\n            </ul>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</ng-template>\r\n\r\n<ng-template [ngxPermissionsOnly]=\"['CHAUFFEUR']\">\r\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n      <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\r\n            aria-controls=\"navbar\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n          </button>\r\n          <a class=\"navbar-brand\" href=\"#\">\r\n            {{bedrijf.naam}}\r\n          </a>\r\n        </div>\r\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n          <ul class=\"nav navbar-nav navbar-right\">\r\n            <li [routerLinkActive]=\"['active']\">\r\n              <a [routerLink]=\"['/welcome']\">Welcome</a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['active']\">\r\n              <a [routerLink]=\"['afdeling/chauffeur']\">Home</a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['active']\">\r\n              <a [routerLink]=\"['/messenger']\">Chat</a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['active']\" class=\"dropdown\">\r\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Mijn profiel\r\n                <span class=\"caret\"></span>\r\n              </a>\r\n              <ul class=\"dropdown-menu\">\r\n                <li [routerLinkActive]=\"['active']\">\r\n                  <a [routerLink]=\"['/mijnprofiel']\">Mijn profiel</a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['active']\">\r\n                  <a href=\"#\">Iets anders</a>\r\n                </li>\r\n                <li role=\"separator\" class=\"divider\"></li>\r\n                <!-- <li class=\"dropdown-header\">Header</li> -->\r\n                <li>\r\n                  <a [routerLink]=\"['/login']\">Afmelden</a>\r\n                </li>\r\n              </ul>\r\n            </li>\r\n            <!-- Notifications-->\r\n            <li class=\"dropdown\">\r\n              <a id=\"dLabel\" role=\"button\" data-toggle=\"dropdown\" href=\"#\" (click)=\"readNotifications()\">\r\n                <i class=\"glyphicon glyphicon-bell\"></i>\r\n                <p style=\"    position: absolute;\r\n                bottom: 12px;\r\n                right: 6px;\r\n                font-size: 12px;\">{{aantalNotificaties}}</p>\r\n              </a>\r\n              <ul class=\"dropdown-menu notifications\" role=\"menu\" aria-labelledby=\"dLabel\" style=\"min-width: 300px; width: 400px;\">\r\n  \r\n                <div class=\"notification-heading\">\r\n                  <h4 class=\"menu-title\">Notifications</h4>\r\n                </div>\r\n                <div class=\"notifications-wrapper\" style=\"background-color: white;\">\r\n                    <div class=\"notification-item\" *ngFor=\"let noti of notificaties\">\r\n                      <img src=\"http://www.leapcms.com/images/100pixels1.gif\">\r\n                      <h4 class=\"item-title\">New message from {{noti.from}}\r\n                        <small> 1 day ago</small>\r\n                      </h4>\r\n                      <p class=\"item-info\">{{noti.message}}</p>\r\n                    </div>\r\n                </div>\r\n              </ul>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n  </ng-template>\r\n\r\n<ng-template [ngxPermissionsOnly]=\"['CUSTOMER']\">\r\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n      <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\r\n            aria-controls=\"navbar\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n          </button>\r\n          <a class=\"navbar-brand\" href=\"#\">\r\n            {{bedrijf.naam}}\r\n          </a>\r\n        </div>\r\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n          <ul class=\"nav navbar-nav navbar-right\">\r\n            <li [routerLinkActive]=\"['active']\">\r\n              <a [routerLink]=\"['/welcome']\">Welcome</a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['active']\">\r\n              <a [routerLink]=\"['/home']\">Home</a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['active']\">\r\n              <a [routerLink]=\"['/messenger']\">Chat</a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['active']\" class=\"dropdown\">\r\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Mijn profiel\r\n                <span class=\"caret\"></span>\r\n              </a>\r\n              <ul class=\"dropdown-menu\">\r\n                <li [routerLinkActive]=\"['active']\">\r\n                  <a [routerLink]=\"['/mijnprofiel']\">Mijn profiel</a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['active']\">\r\n                  <a href=\"#\">Iets anders</a>\r\n                </li>\r\n                <li role=\"separator\" class=\"divider\"></li>\r\n                <!-- <li class=\"dropdown-header\">Header</li> -->\r\n                <li>\r\n                  <a [routerLink]=\"['/login']\">Afmelden</a>\r\n                </li>\r\n              </ul>\r\n            </li>\r\n            <!-- Notifications-->\r\n            <li class=\"dropdown\">\r\n              <a id=\"dLabel\" role=\"button\" data-toggle=\"dropdown\" href=\"#\" (click)=\"readNotifications()\">\r\n                <i class=\"glyphicon glyphicon-bell\"></i>\r\n                <p style=\"    position: absolute;\r\n                bottom: 12px;\r\n                right: 6px;\r\n                font-size: 12px;\">{{aantalNotificaties}}</p>\r\n              </a>\r\n              <ul class=\"dropdown-menu notifications\" role=\"menu\" aria-labelledby=\"dLabel\" style=\"min-width: 300px; width: 400px;\">\r\n  \r\n                <div class=\"notification-heading\">\r\n                  <h4 class=\"menu-title\">Notifications</h4>\r\n                </div>\r\n                <div class=\"notifications-wrapper\" style=\"background-color: white;\">\r\n                    <div class=\"notification-item\" *ngFor=\"let noti of notificaties\">\r\n                      <img src=\"http://www.leapcms.com/images/100pixels1.gif\">\r\n                      <h4 class=\"item-title\">New message from {{noti.from}}\r\n                        <small> 1 day ago</small>\r\n                      </h4>\r\n                      <p class=\"item-info\">{{noti.message}}</p>\r\n                    </div>\r\n                </div>\r\n              </ul>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n  </ng-template>\r\n\r\n  \r\n  <div class=\"banner\"></div>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_bedrijf__ = __webpack_require__("../../../../../src/app/_models/bedrijf.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_bedrijf_service__ = __webpack_require__("../../../../../src/app/_services/bedrijf.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_socket_service__ = __webpack_require__("../../../../../src/app/_services/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HeaderComponent = (function () {
    function HeaderComponent(userService, bedrijfService, alertService, authenticationService, pushNotification, socketService) {
        this.userService = userService;
        this.bedrijfService = bedrijfService;
        this.alertService = alertService;
        this.authenticationService = authenticationService;
        this.pushNotification = pushNotification;
        this.socketService = socketService;
        this.notificaties = [];
        this.users = [];
        this.bedrijf = new __WEBPACK_IMPORTED_MODULE_3__models_bedrijf__["a" /* Bedrijf */]("", "", undefined);
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pushNotification.requestPermission();
        this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        this.notificaties = JSON.parse(sessionStorage.getItem('notificaties'));
        if (this.notificaties === null)
            this.notificaties = [];
        this.aantalNotificaties = JSON.parse(sessionStorage.getItem('aantalNotificaties'));
        if (this.currentUser) {
            this.currentUser.online = true;
            this.socketService.emit("userOnline", this.currentUser);
            sessionStorage.setItem('currentUser', JSON.stringify(this.currentUser));
            this.userService.update(this.currentUser).subscribe();
            this.loadAllUsers();
        }
        this.socketService.on('message-received', function (msg) {
            if (_this.currentUser === undefined || _this.currentUser === null) {
                _this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
            }
            if (msg.naar === _this.currentUser._id) {
                var options = {
                    body: msg.message,
                    icon: "assets/user.png",
                    vibrate: [200, 100, 200]
                };
                var naam = _this.users.find(function (u) { return u._id === msg.van; }).firstName + _this.users.find(function (u) { return u._id === msg.van; }).lastName;
                if (_this.pushNotification.permission === "granted") {
                    _this.pushNotification.create('New message from ' + naam, options).subscribe();
                }
                if (_this.aantalNotificaties === undefined)
                    _this.aantalNotificaties = 0;
                _this.aantalNotificaties++;
                _this.notificaties.push({ message: msg.message, from: naam });
                localStorage.setItem('notificaties', JSON.stringify(_this.notificaties));
                localStorage.setItem('aantalNotificaties', JSON.stringify(_this.aantalNotificaties));
            }
        });
    };
    HeaderComponent.prototype.laadBedrijf = function () {
        var _this = this;
        /* this.bedrijfService.create(new Bedrijf("HoGent","Een omschrijving van deze bedrijf",new Locatie("","",9470,"",""))).subscribe(
            data => {
                this.alertService.success('Registration successful', true);
            },
            error => {
                this.alertService.error(error);
            }); */
        this.bedrijfService.getById("59d0096c0182fb29d177774f").subscribe(function (bedrijf) { _this.bedrijf = bedrijf; });
    };
    HeaderComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) {
            _this.users = users;
            _this.laadBedrijf();
        });
    };
    HeaderComponent.prototype.logout = function () {
        this.authenticationService.logout();
    };
    HeaderComponent.prototype.readNotifications = function () {
        this.aantalNotificaties = null;
        localStorage.setItem('aantalNotificaties', JSON.stringify(this.aantalNotificaties));
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_bedrijf_service__["a" /* BedrijfService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_bedrijf_service__["a" /* BedrijfService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["PushNotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["PushNotificationsService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__services_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_socket_service__["a" /* SocketService */]) === "function" && _f || Object])
], HeaderComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/welcomeheader.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\r\n        aria-controls=\"navbar\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\">HoGent</a>\r\n    </div>\r\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n\r\n      <!-- <ul class=\"nav navbar-nav\">\r\n        <li class=\"active\"><a href=\"#\">Home</a></li>\r\n      </ul> -->\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n\r\n        <li [routerLinkActive]=\"['active']\">\r\n          <a [routerLink]=\"['/welcome']\">Welcome</a>\r\n        </li>\r\n        <li [routerLinkActive]=\"['active']\">\r\n          <a [routerLink]=\"['/login']\">Aanmelden</a>\r\n        </li>\r\n        <li *ngIf=\"order\" class=\"dropdown\">\r\n          <a role=\"button\" data-toggle=\"dropdown\">\r\n            <i class=\"glyphicon glyphicon-shopping-cart\"></i>\r\n          </a>\r\n          <ul class=\"dropdown-menu\">\r\n            <app-shoppingbag></app-shoppingbag>\r\n          </ul>\r\n        </li>\r\n        <!-- \r\n        <li><a href=\"../navbar/\">Default</a></li>\r\n        <li><a href=\"../navbar-static-top/\">Static top</a></li>\r\n        <li class=\"active\"><a href=\"./\">Fixed top <span class=\"sr-only\">(current)</span></a></li> -->\r\n      </ul>\r\n    </div>\r\n    <!--/.nav-collapse -->\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/header/welcomeheader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeheaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_order_service__ = __webpack_require__("../../../../../src/app/_services/order.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeheaderComponent = (function () {
    function WelcomeheaderComponent(orderService) {
        this.orderService = orderService;
    }
    WelcomeheaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderService.order.subscribe(function (order) { return _this.order = order; });
    };
    return WelcomeheaderComponent;
}());
WelcomeheaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-welcomeheader',
        template: __webpack_require__("../../../../../src/app/header/welcomeheader.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */]) === "function" && _a || Object])
], WelcomeheaderComponent);

var _a;
//# sourceMappingURL=welcomeheader.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<div class=\"container\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                    Bestellingen\r\n                </div>\r\n                <!-- .panel-heading -->\r\n                <div class=\"panel-body\">\r\n                    <div class=\"panel-group\" id=\"accordion\">\r\n                        <div class=\"panel panel-default\" *ngFor=\"let order of currentUser.orders; let i = index\">\r\n                            <div class=\"panel-heading\">\r\n                                <div class=\"card text-white bg-primary mb-3\">\r\n                                    <div class=\"card-body\">\r\n                                        <h4 class=\"card-title\">Bestelling nr: {{order._id}}</h4>\r\n                                        <p>Status: {{order.statusDescription}}</p>\r\n                                        <p>Adress: {{order.locatie.straat}} {{order.locatie.nummer}}, {{order.locatie.postcode}} {{order.locatie.stad}}, {{order.locatie.land}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <a *ngIf=\"order.status != 'ORDER DELIVERED'\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse{{i}}\" aria-expanded=\"true\" class=\"ng-tns-c1-1\">Collapse</a>\r\n                            </div>\r\n                            <div *ngIf=\"order.status != 'ORDER DELIVERED'\" id=\"collapse{{i}}\" class=\"panel-collapse collapse in\" aria-expanded=\"true\" style=\"height: 331px;\">\r\n                                <div class=\"panel-body\">\r\n                                    <div class=\"map\">\r\n                                        <agm-map [latitude]=\"order.lat\" [longitude]=\"order.lng\" [zoom]=\"17\">\r\n                                            <agm-marker [latitude]=\"order.lat\" [longitude]=\"order.lng\" [iconUrl]=\"'assets/mapMarker.png'\"></agm-marker>\r\n                                        </agm-map>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- .panel-body -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n<style>\r\n    .btnCustom {\r\n        height: 100%;\r\n        right: 0;\r\n        position: absolute;\r\n        top: 0;\r\n        width: 10%;\r\n        min-width: 75px;\r\n    }\r\n\r\n    .map {\r\n        width: 100%;\r\n        height: 300px;\r\n        display: flex;\r\n    }\r\n\r\n    agm-map {\r\n        -ms-flex-align: center;\r\n        height: 100%;\r\n        width: 100%;\r\n    }\r\n</style>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_slide_in_out_animation__ = __webpack_require__("../../../../../src/app/_animations/slide-in-out.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_order_service__ = __webpack_require__("../../../../../src/app/_services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_socket_service__ = __webpack_require__("../../../../../src/app/_services/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(userService, orderService, socketService) {
        this.userService = userService;
        this.orderService = orderService;
        this.socketService = socketService;
        this.lat = 50.8944237;
        this.lng = 4.0711835999999995;
        this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        if (this.currentUser.ordersIds != undefined) {
            this.currentUser.ordersIds.forEach(function (oId) {
                if (_this.currentUser.orders === undefined)
                    _this.currentUser.orders = [];
                _this.orderService.getById(oId).subscribe(function (data) {
                    _this.currentUser.orders.push(data);
                });
            });
            console.log(this.currentUser);
            this.socketService.on('receive-location', function (data) {
                console.log("fkdjnfdskjbfndsbfjkdsbds");
                var ord = _this.currentUser.orders.find(function (o) { return o._id === data.orderId; });
                if (ord != undefined && ord != null) {
                    ord.lat = data.lat;
                    ord.lng = data.lng;
                }
            });
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        animations: [__WEBPACK_IMPORTED_MODULE_2__animations_slide_in_out_animation__["a" /* slideInOutAnimation */]],
        host: { '[@slideInOutAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_order_service__["a" /* OrderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_socket_service__["a" /* SocketService */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h1>Users</h1>\r\n<ul>\r\n  <li *ngFor=\"let user of users\">Naam: {{ user.name }} ------- Email: {{user.email}}</li>\r\n</ul>\r\n\r\n<div class=\"container\">\r\n  <div class=\"vertical-offset-100\"></div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"pr-wrap\">\r\n                <div class=\"pass-reset\">\r\n                    <label>\r\n                        Enter the email you signed up with</label>\r\n                    <input type=\"email\" placeholder=\"Email\" />\r\n                    <input type=\"submit\" value=\"Submit\" class=\"pass-reset-submit btn btn-success btn-sm\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"wrap\">\r\n                <p class=\"form-title\">\r\n                    Sign In</p>\r\n                <form class=\"login\">\r\n                <input type=\"text\" placeholder=\"Username\" />\r\n                <input type=\"password\" placeholder=\"Password\" />\r\n                <input type=\"submit\" value=\"Sign In\" class=\"btn btn-success btn-sm\" />\r\n                <div class=\"remember-forgot\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"checkbox\">\r\n                                <label>\r\n                                    <input type=\"checkbox\" />\r\n                                    Remember Me\r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6 forgot-pass-content\">\r\n                            <a href=\"javascription:void(0)\" class=\"forgot-pass\">Forgot Password</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    </div> -->\r\n<app-welcomeheader></app-welcomeheader>\r\n<div class=\"banner\"></div>\r\n\r\n<div class=\"container\">\r\n\r\n    <div class=\"col-sm-8 col-sm-offset-2\">\r\n        <div style=\"width:100%;\">\r\n            <div class=\"modal-content\">\r\n                <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n                    <div class=\"form-group\">\r\n                        <h2>Login</h2>\r\n                    </div>\r\n                    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n                        <label for=\"username\">Username</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\r\n                        <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\r\n                    </div>\r\n                    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n                        <label for=\"password\">Password</label>\r\n                        <input type=\"{{showPassword?'text':'password'}}\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n                        <input style=\"padding-top: 10px;display: inline-block;height: auto;margin-top: 6px;\" type=\"checkbox\" name=\"Toggle\" ng-model=\"showPassword\" ng-checked=\"showPassword\" (click)=\"toggleShowPassword()\">\r\n                        <label for=\"Toggle\" style=\"font-size: 10px;font-weight: normal;position: absolute;padding: 7px 0px 0px 5px;\">Show password</label>\r\n                        <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <button [disabled]=\"loading\" class=\"btn btn-primary\" style=\"width:100%;\">Login</button>\r\n\r\n                        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\r\n                        />\r\n                        <a [routerLink]=\"['/register']\" class=\"btn btn-secundary\" style=\"width:100%; margin-top:10px;\">Register</a>\r\n                        <a [routerLink]=\"['/passwordrecover']\" class=\"btn btn-secundary\" style=\"width:100%;\">Forgot password</a>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_permissions__ = __webpack_require__("../../../../ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_permissions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_permissions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animations_slide_in_out_animation__ = __webpack_require__("../../../../../src/app/_animations/slide-in-out.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_socket_service__ = __webpack_require__("../../../../../src/app/_services/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = (function () {
    function LoginComponent(permissionsService, route, router, authenticationService, socketService, alertService) {
        this.permissionsService = permissionsService;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.socketService = socketService;
        this.alertService = alertService;
        this.model = {};
        this.showPassword = false;
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // login resetten
        this.authenticationService.logout();
        // return url nemen
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        //als er geen retourn url is dan /home als standaard zetten
        if (this.returnUrl == "/")
            this.returnUrl = '/dashboard';
    };
    //inloggen en indien gelukt verder gaan naar de return url
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            console.log(data);
            _this.authenticationService.storeUserData(data.token, data);
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error(error._body);
            _this.loading = false;
        });
    };
    //methode om het wachtwoord te tonen/verbergen
    LoginComponent.prototype.toggleShowPassword = function () {
        this.showPassword = !this.showPassword;
        console.log(this.showPassword);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        animations: [__WEBPACK_IMPORTED_MODULE_5__animations_slide_in_out_animation__["a" /* slideInOutAnimation */]],
        host: { '[@slideInOutAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_permissions__["NgxPermissionsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_permissions__["NgxPermissionsService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_socket_service__["a" /* SocketService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _f || Object])
], LoginComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/mijnProfiel/mijnprofiel.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n   <div class=\"container\">\n    <div style=\"width:100%;\">\n        <div class=\"jumbotron\">\n\n            <h1>Hallo {{currentUser.firstName}}!</h1>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/mijnProfiel/mijnprofiel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MijnprofielComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_slide_in_out_animation__ = __webpack_require__("../../../../../src/app/_animations/slide-in-out.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MijnprofielComponent = (function () {
    function MijnprofielComponent(userService) {
        this.userService = userService;
        this.users = [];
        this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        this.currentUser.online = true;
        this.userService.update(this.currentUser).subscribe();
    }
    MijnprofielComponent.prototype.ngOnInit = function () {
    };
    return MijnprofielComponent;
}());
MijnprofielComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/mijnProfiel/mijnprofiel.component.html"),
        animations: [__WEBPACK_IMPORTED_MODULE_2__animations_slide_in_out_animation__["a" /* slideInOutAnimation */]],
        host: { '[@slideInOutAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], MijnprofielComponent);

var _a;
//# sourceMappingURL=mijnprofiel.component.js.map

/***/ }),

/***/ "../../../../../src/app/passwordrecover/passwordrecover.component.html":
/***/ (function(module, exports) {

module.exports = "<app-welcomeheader></app-welcomeheader>\n\n<div class=\"container\">\n\n    <div class=\"col-sm-8 col-sm-offset-2\">\n        <div style=\"width:100%;\">\n\n            <div class=\"jumbotron modal-content\" style=\"width: 100%\">\n                <div style=\"width:100%\">\n                    <h2 style=\"text-align:center; margin-left: 1.8em;margin-right: 1.8em;\">Password recovery</h2>\n                </div>\n                <div *ngIf=\"!securityAnswersIngediend\">\n                    <div *ngIf=\"!emailIngediend\">\n                        <form name=\"form\" (ngSubmit)=\"f.form.valid && sendEmail()\" #f=\"ngForm\" novalidate style=\"width: 80%;margin:0 10% 0% 10%;\">\n                            <div class=\"col-sm-12\">\n                                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n                                    <label for=\"username\">Username*</label>\n                                    <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n                                    <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <button [disabled]=\"loading\" class=\"btn btn-primary\">Continue</button>\n                                <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n                                />\n                                <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n                            </div>\n                        </form>\n                    </div>\n                    <div *ngIf=\"emailIngediend\">\n                        <form name=\"form\" (ngSubmit)=\"f.form.valid && sendSecurityAnswers()\" #f=\"ngForm\" novalidate style=\"width: 80%; margin:0 10% 0% 10%\">\n                            <div class=\"col-sm-12\">\n                                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !aantwoordVraag1.valid }\">\n                                    <label for=\"aantwoordVraag1\">{{model.veiligheidsVraag1}}*</label>\n                                    <input type=\"text\" class=\"form-control\" name=\"aantwoordVraag1\" [(ngModel)]=\"model.aantwoordVraag1\" #aantwoordVraag1=\"ngModel\" required />\n                                    <div *ngIf=\"f.submitted && !aantwoordVraag1.valid\" class=\"help-block\">Answer is required</div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-12\">\n                                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !aantwoordVraag2.valid }\">\n                                    <label for=\"aantwoordVraag2\">{{model.veiligheidsVraag2}}*</label>\n                                    <input type=\"text\" class=\"form-control\" name=\"aantwoordVraag2\" [(ngModel)]=\"model.aantwoordVraag2\" #aantwoordVraag2=\"ngModel\" required />\n                                    <div *ngIf=\"f.submitted && !aantwoordVraag2.valid\" class=\"help-block\">Answer is required</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <button [disabled]=\"loading\" class=\"btn btn-primary\">Continue</button>\n                                <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n                                />\n                                <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n\n                <div *ngIf=\"securityAnswersIngediend\">\n                    <form name=\"form\" (ngSubmit)=\"f.form.valid && resetPassword()\" #f=\"ngForm\" novalidate style=\"width: 80%;margin:0 10% 0% 10%;\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n                                <label for=\"password\">Enter your new password*</label>\n                                <input type=\"text\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n                                <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <button [disabled]=\"loading\" class=\"btn btn-primary\">Change password</button>\n                            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n                            />\n                            <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n                        </div>\n                    </form>\n\n                </div>\n                \n            </div>\n\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/passwordrecover/passwordrecover.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordrecoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__("../../../../../src/app/_models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animations_slide_in_out_animation__ = __webpack_require__("../../../../../src/app/_animations/slide-in-out.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PasswordrecoverComponent = (function () {
    function PasswordrecoverComponent(userService, alertService, route, router) {
        this.userService = userService;
        this.alertService = alertService;
        this.route = route;
        this.router = router;
        //nodig anders is user undefined..
        this.model = new __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* User */]("", "", "", "", "", "", "", "", "", undefined);
    }
    PasswordrecoverComponent.prototype.ngOnInit = function () {
    };
    //email sturen om te kijken of er een user bestaat met deze email
    //indien ja een aantal gegevens terug sturen zoals de beveiliginsvragen
    //verder gaan naar de volgonde stap -> beveiliginsvragen tonen
    PasswordrecoverComponent.prototype.sendEmail = function () {
        var _this = this;
        this.loading = true;
        this.userService.getByUsername(this.model).subscribe(function (data) {
            _this.model = data;
            _this.loading = false;
            _this.emailIngediend = true;
        }, function (error) {
            _this.alertService.error(error);
            _this.emailIngediend = false;
            _this.loading = false;
        });
    };
    //aantwoorden op de beveiliginsvragen sturen
    //indien juist verder gaan naar de volgonde stap -> wachtwoord resetten
    PasswordrecoverComponent.prototype.sendSecurityAnswers = function () {
        var _this = this;
        this.loading = true;
        this.userService.sendSecurityAnswers(this.model).subscribe(function (data) {
            _this.model = data;
            _this.loading = false;
            _this.securityAnswersIngediend = true;
        }, function (error) {
            _this.alertService.error(error);
            _this.securityAnswersIngediend = false;
            _this.loading = false;
        });
    };
    //wachtwoord resetten
    PasswordrecoverComponent.prototype.resetPassword = function () {
        var _this = this;
        this.loading = true;
        this.userService.resetPassword(this.model._id, this.model.password).subscribe(function (data) {
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    return PasswordrecoverComponent;
}());
PasswordrecoverComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-passwordrecover',
        template: __webpack_require__("../../../../../src/app/passwordrecover/passwordrecover.component.html"),
        animations: [__WEBPACK_IMPORTED_MODULE_5__animations_slide_in_out_animation__["a" /* slideInOutAnimation */]],
        host: { '[@slideInOutAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _d || Object])
], PasswordrecoverComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=passwordrecover.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<app-welcomeheader></app-welcomeheader>\r\n<div class=\"banner\"></div>\r\n<div class=\"container\">\r\n    <div class=\"col-sm-8 col-sm-offset-2\">\r\n        <div style=\"width:100%; height:100%;\">\r\n            <div class=\"jumbotron\" style=\"width:100%;\">\r\n                <div style=\"width:100%\">\r\n                    <h2 style=\"text-align:center; margin-left: 1.8em;margin-right: 1.8em;\">Register</h2>\r\n                </div>\r\n                <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate style=\"width: 80%; margin:0 10% 0% 10%\">\r\n                    <p style=\"border-bottom: 1px solid;\">Account gegevens</p>\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"form-group col-sm-6\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n                            <label for=\"firstName\">First Name*</label>\r\n                            <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" required />\r\n                            <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">First Name is required</div>\r\n                        </div>\r\n                        <div class=\"form-group col-sm-6\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n                            <label for=\"lastName\">Last Name*</label>\r\n                            <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" required />\r\n                            <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Last Name is required</div>\r\n                        </div>\r\n                        <div class=\"form-group col-sm-6\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n                            <label for=\"username\">Username*</label>\r\n                            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\r\n                            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\r\n                        </div>\r\n                        <div class=\"form-group col-sm-6\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\r\n                            <label for=\"email\">Email*</label>\r\n                            <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required />\r\n                            <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required</div>\r\n                        </div>\r\n                        <div class=\"form-group col-sm-7\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n                            <label for=\"password\">Password*</label>\r\n                            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n                            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n                        </div>\r\n                    </div>\r\n                    <p style=\"border-bottom: 1px solid\">Adress</p>\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"form-group col-sm-12\" [ngClass]=\"{ 'has-error': f.submitted && !straat.valid }\">\r\n                            <label for=\"straat\">Straat*</label>\r\n                            <input type=\"text\" class=\"form-control\" name=\"straat\" [(ngModel)]=\"model.locatie.straat\" #straat=\"ngModel\" required />\r\n                            <div *ngIf=\"f.submitted && !straat.valid\" class=\"help-block\">Straat is required</div>\r\n                        </div>\r\n                        <div class=\"form-group col-sm-3\" [ngClass]=\"{ 'has-error': f.submitted && !nummer.valid }\">\r\n                            <label for=\"nummer\">Nummer*</label>\r\n                            <input type=\"number\" class=\"form-control\" name=\"nummer\" [(ngModel)]=\"model.locatie.nummer\" #nummer=\"ngModel\" required />\r\n                            <div *ngIf=\"f.submitted && !nummer.valid\" class=\"help-block\">Nummer is required</div>\r\n                        </div>\r\n                        <div class=\"form-group col-sm-3\" [ngClass]=\"{ 'has-error': f.submitted && !postcode.valid }\">\r\n                            <label for=\"postcode\">Postcode*</label>\r\n                            <input type=\"number\" class=\"form-control\" name=\"postcode\" [(ngModel)]=\"model.locatie.postcode\" #postcode=\"ngModel\" required\r\n                            />\r\n                            <div *ngIf=\"f.submitted && !postcode.valid\" class=\"help-block\">Postcode is required</div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group col-sm-6\" [ngClass]=\"{ 'has-error': f.submitted && !stad.valid }\">\r\n                            <label for=\"stad\">Stad*</label>\r\n                            <input type=\"text\" class=\"form-control\" name=\"stad\" [(ngModel)]=\"model.locatie.stad\" #stad=\"ngModel\" required />\r\n                            <div *ngIf=\"f.submitted && !stad.valid\" class=\"help-block\">Stad is required</div>\r\n                        </div>\r\n                        <div class=\"form-group col-sm-7\" [ngClass]=\"{ 'has-error': f.submitted && !land.valid }\">\r\n                            <label for=\"land\">Land*</label>\r\n                            <input type=\"text\" class=\"form-control\" name=\"land\" [(ngModel)]=\"model.locatie.land\" #land=\"ngModel\" required />\r\n                            <div *ngIf=\"f.submitted && !land.valid\" class=\"help-block\">Land is required</div>\r\n                        </div>\r\n                    </div>\r\n                    <p style=\"border-bottom: 1px solid\">Beveiliginsvragen</p>\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"form-group col-sm-12\" [ngClass]=\"{ 'has-error': f.submitted && !veiligheidsVraag1.valid }\">\r\n                            <label for=\"veiligheidsVraag1\"> Beveiliginsvraag 1*</label>\r\n\r\n                            <select class=\"form-control\" name=\"veiligheidsVraag1\" id=\"veiligheidsVraag1\" [(ngModel)]=\"model.veiligheidsVraag1\" #veiligheidsVraag1=\"ngModel\"\r\n                                required>\r\n                                    <option>Wat was de eerste film die je in de bioscoop zag?</option>\r\n                                    <option>Waar ging je naartoe toen je voor het eerst vloog?</option>\r\n                                    <option>Hoe heette je favoriete leerkracht op de basisschool?</option>\r\n                                    <option>Wat is je droombaan?</option>\r\n                                    <option>Wat is je favoriete kinderboek?</option>\r\n                            </select>\r\n                            <div *ngIf=\"f.submitted && !veiligheidsVraag1.valid\" class=\"help-block\">Required</div>\r\n                        </div>\r\n                        <div class=\"form-group col-sm-12\" [ngClass]=\"{ 'has-error': f.submitted && !aantwoordVraag1.valid }\">\r\n                            <label for=\"aantwoordVraag1\">Aantwoord*</label>\r\n                            <input type=\"text\" class=\"form-control\" name=\"aantwoordVraag1\" [(ngModel)]=\"model.aantwoordVraag1\" #aantwoordVraag1=\"ngModel\"\r\n                                required />\r\n                            <div *ngIf=\"f.submitted && !aantwoordVraag1.valid\" class=\"help-block\">Aantwoord is required</div>\r\n                        </div>\r\n                        <div class=\"form-group col-sm-12\" [ngClass]=\"{ 'has-error': f.submitted && !veiligheidsVraag2.valid }\">\r\n                            <label for=\"veiligheidsVraag2\"> Beveiliginsvraag 1*</label>\r\n                            <select class=\"form-control\" name=\"veiligheidsVraag2\" id=\"veiligheidsVraag2\" [(ngModel)]=\"model.veiligheidsVraag2\" #veiligheidsVraag2=\"ngModel\"\r\n                                required>\r\n                                        <option>Wat was het model van je eerste auto?</option>\r\n                                        <option>Welke bijnaam had je als kind?</option>\r\n                                        <option>Wie was je favoriete acteur tijdens je schooltijd?</option>\r\n                                        <option>Wie was je favoriete zanger of band tijdens je schooltijd?</option>\r\n                                        <option>Wat was de naam van de straat waar je opgroeide?</option>\r\n                                </select>\r\n                            <div *ngIf=\"f.submitted && !veiligheidsVraag2.valid\" class=\"help-block\">Required</div>\r\n                        </div>\r\n                        <div class=\"form-group col-sm-12\" [ngClass]=\"{ 'has-error': f.submitted && !aantwoordVraag2.valid }\">\r\n                            <label for=\"aantwoordVraag2\">Aantwoord*</label>\r\n                            <input type=\"text\" class=\"form-control\" name=\"aantwoordVraag2\" [(ngModel)]=\"model.aantwoordVraag2\" #aantwoordVraag2=\"ngModel\"\r\n                                required />\r\n                            <div *ngIf=\"f.submitted && !aantwoordVraag2.valid\" class=\"help-block\">Aantwoord is required</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\r\n                        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\r\n                        />\r\n                        <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__("../../../../../src/app/_models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_locatie__ = __webpack_require__("../../../../../src/app/_models/locatie.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animations_slide_in_out_animation__ = __webpack_require__("../../../../../src/app/_animations/slide-in-out.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterComponent = (function () {
    function RegisterComponent(router, userService, alertService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]("", "", "", "", "", "", "", "", "", new __WEBPACK_IMPORTED_MODULE_3__models_locatie__["a" /* Locatie */]("", "", undefined, "", ""));
        this.loading = false;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        console.log(this.model);
        this.model.roles = ['EMPLOYEE'];
        this.userService.create(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        animations: [__WEBPACK_IMPORTED_MODULE_6__animations_slide_in_out_animation__["a" /* slideInOutAnimation */]],
        host: { '[@slideInOutAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/shop/placeorder/customerdetails/customerdetails.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n        <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"panel panel-info\">\n                        <div class=\"panel-heading\">\n                            <div class=\"panel-title\">\n                                <h4>We are almost there</h4>\n                            </div>\n                        </div>\n                        <div class=\"panel-body\">\n                            <h4 style=\"text-align: center\">Please enter the required personal information in order to finalize the order</h4>\n                            <form name=\"form\" (ngSubmit)=\"f.form.valid && placeOrder()\" #f=\"ngForm\" novalidate style=\"width: 80%; margin:0 10% 0% 10%\">\n                                    <p style=\"border-bottom: 1px solid;\">Account gegevens</p>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group col-sm-6\" [ngClass]=\"{ 'has-error': f.submitted && !firstName.valid }\">\n                                            <label for=\"firstName\">First Name*</label>\n                                            <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" required/>\n                                            <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">First Name is required</div>\n                                        </div>\n                                        <div class=\"form-group col-sm-6\" [ngClass]=\"{ 'has-error': f.submitted && !lastName.valid }\">\n                                            <label for=\"lastName\">Last Name*</label>\n                                            <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" required />\n                                            <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Last Name is required</div>\n                                        </div>\n                                        <div class=\"form-group col-sm-6\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\n                                            <label for=\"email\">Email*</label>\n                                            <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required />\n                                            <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required</div>\n                                        </div>\n                                    </div>\n                                    <p style=\"border-bottom: 1px solid\">Adress</p>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group col-sm-12\" [ngClass]=\"{ 'has-error': f.submitted && !straat.valid }\">\n                                            <label for=\"straat\">Straat*</label>\n                                            <input type=\"text\" class=\"form-control\" name=\"straat\" [(ngModel)]=\"model.locatie.straat\" #straat=\"ngModel\" required />\n                                            <div *ngIf=\"f.submitted && !straat.valid\" class=\"help-block\">Straat is required</div>\n                                        </div>\n                                        <div class=\"form-group col-sm-3\" [ngClass]=\"{ 'has-error': f.submitted && !nummer.valid }\">\n                                            <label for=\"nummer\">Nummer*</label>\n                                            <input type=\"number\" class=\"form-control\" name=\"nummer\" [(ngModel)]=\"model.locatie.nummer\" #nummer=\"ngModel\" required />\n                                            <div *ngIf=\"f.submitted && !nummer.valid\" class=\"help-block\">Nummer is required</div>\n                                        </div>\n                                        <div class=\"form-group col-sm-3\" [ngClass]=\"{ 'has-error': f.submitted && !postcode.valid }\">\n                                            <label for=\"postcode\">Postcode*</label>\n                                            <input type=\"number\" class=\"form-control\" name=\"postcode\" [(ngModel)]=\"model.locatie.postcode\" #postcode=\"ngModel\" required\n                                            />\n                                            <div *ngIf=\"f.submitted && !postcode.valid\" class=\"help-block\">Postcode is required</div>\n                                        </div>\n                \n                                        <div class=\"form-group col-sm-6\" [ngClass]=\"{ 'has-error': f.submitted && !stad.valid }\">\n                                            <label for=\"stad\">Stad*</label>\n                                            <input type=\"text\" class=\"form-control\" name=\"stad\" [(ngModel)]=\"model.locatie.stad\" #stad=\"ngModel\" required />\n                                            <div *ngIf=\"f.submitted && !stad.valid\" class=\"help-block\">Stad is required</div>\n                                        </div>\n                                        <div class=\"form-group col-sm-7\" [ngClass]=\"{ 'has-error': f.submitted && !land.valid }\">\n                                            <label for=\"land\">Land*</label>\n                                            <input type=\"text\" class=\"form-control\" name=\"land\" [(ngModel)]=\"model.locatie.land\" #land=\"ngModel\" required />\n                                            <div *ngIf=\"f.submitted && !land.valid\" class=\"help-block\">Land is required</div>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <button [disabled]=\"loading\" class=\"btn btn-primary\">Place order</button>\n                                        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n                                        />\n                                    </div>\n                                </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shop/placeorder/customerdetails/customerdetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_slide_right_left_animation__ = __webpack_require__("../../../../../src/app/_animations/slide-right-left.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_order_service__ = __webpack_require__("../../../../../src/app/_services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_locatie__ = __webpack_require__("../../../../../src/app/_models/locatie.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CustomerDetailsComponent = (function () {
    function CustomerDetailsComponent(router, userService, alertService, orderService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.orderService = orderService;
        this.loading = false;
    }
    CustomerDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model = JSON.parse(sessionStorage.getItem("currentUser"));
        if (this.model.locatie == undefined)
            this.model.locatie = new __WEBPACK_IMPORTED_MODULE_6__models_locatie__["a" /* Locatie */]("", "", undefined, "", "");
        this.orderService.order.subscribe(function (o) { return _this.order = o; });
    };
    CustomerDetailsComponent.prototype.placeOrder = function () {
        var _this = this;
        this.order.locatie = this.model.locatie;
        this.orderService.getLocation(this.order.locatie).subscribe(function (data) {
            _this.order.lat = data.results[0].geometry.location.lat;
            _this.order.lng = data.results[0].geometry.location.lng;
            _this.order.customerId = _this.model._id;
            _this.order.status = "NEW";
            _this.order.statusDescription = "Uw bestelling is geregistreerd en zal binnenkort verwerkt worden";
            _this.orderService.create(_this.order).subscribe(function (data) {
                if (_this.model.ordersIds == undefined)
                    _this.model.ordersIds = [];
                _this.model.ordersIds.push(data._id);
                sessionStorage.setItem("currentUser", JSON.stringify(_this.model));
                console.log(_this.model);
                _this.userService.update(_this.model).subscribe(function (data) {
                    _this.alertService.success(_this.order.statusDescription, true);
                    localStorage.removeItem("shoppingBag");
                    _this.orderService.setOrder(null);
                    _this.router.navigate(["/"]);
                });
            });
        });
    };
    return CustomerDetailsComponent;
}());
CustomerDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-customerdetails',
        template: __webpack_require__("../../../../../src/app/shop/placeorder/customerdetails/customerdetails.component.html"),
        animations: [__WEBPACK_IMPORTED_MODULE_1__animations_slide_right_left_animation__["a" /* slideRightLeftAnimation */]],
        host: { '[@slideRightLeftAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_order_service__["a" /* OrderService */]) === "function" && _d || Object])
], CustomerDetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=customerdetails.component.js.map

/***/ }),

/***/ "../../../../../src/app/shop/placeorder/loginregister/loginregister.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"panel panel-info\">\n                <div class=\"panel-heading\">\n                    <div class=\"panel-title\">\n                        <h4>Log in or register</h4>\n                    </div>\n                </div>\n                <div class=\"panel-body\" style=\"overflow-y: scroll; max-height: 400px;\">\n                    <div class=\"col-md-6\">\n                        <h3 style=\"text-align: center\">I'm a customer already</h3>\n                        <h6 style=\"text-align: center\">Log in with your e-mail adress and password</h6>\n                        <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n                            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n                                <label for=\"username\">Username</label>\n                                <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required aut/>\n                                <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n                            </div>\n                            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n                                <label for=\"password\">Password</label>\n                                <input type=\"{{showPassword?'text':'password'}}\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\"\n                                    required autocomplete=\"off\"/>\n                                <input style=\"padding-top: 10px;display: inline-block;height: auto;margin-top: 6px;\" type=\"checkbox\" name=\"Toggle\" ng-model=\"showPassword\"\n                                    ng-checked=\"showPassword\" (click)=\"toggleShowPassword()\">\n                                <label for=\"Toggle\" style=\"font-size: 10px;font-weight: normal;position: absolute;padding: 7px 0px 0px 5px;\">Show password</label>\n                                <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n                            </div>\n                            <div class=\"form-group\">\n                                <button [disabled]=\"lloading\" class=\"btn btn-primary\" style=\"width:100%;\">Login</button>\n\n                                <img *ngIf=\"lloading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n                                />\n                            </div>\n                        </form>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <h3 style=\"text-align: center\">I'm a new customer</h3>\n                        <h6 style=\"text-align: center\">Please register in order to be able to place your order and track it</h6>\n                        <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n                            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n                                <label for=\"username\">Username</label>\n                                <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"rmodel.username\" #username=\"ngModel\" required autocomplete=\"off\"/>\n                                <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n                            </div>\n                            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n                                <label for=\"password\">Password</label>\n                                <input type=\"{{rShowPassword?'text':'password'}}\" class=\"form-control\" name=\"password\" [(ngModel)]=\"rmodel.password\" #password=\"ngModel\"\n                                    required autocomplete=\"off\"/>\n                                <input style=\"padding-top: 10px;display: inline-block;height: auto;margin-top: 6px;\" type=\"checkbox\" name=\"Toggle\" ng-model=\"showPassword\"\n                                    ng-checked=\"rShowPassword\" (click)=\"rToggleShowPassword()\">\n                                <label for=\"Toggle\" style=\"font-size: 10px;font-weight: normal;position: absolute;padding: 7px 0px 0px 5px;\">Show password</label>\n                                <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n                            </div>\n                            <div class=\"form-group\">\n                                <button [disabled]=\"rloading\" class=\"btn btn-primary\" style=\"width:100%;\">Register</button>\n\n                                <img *ngIf=\"rloading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n                                />\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shop/placeorder/loginregister/loginregister.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_slide_right_left_animation__ = __webpack_require__("../../../../../src/app/_animations/slide-right-left.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_order_service__ = __webpack_require__("../../../../../src/app/_services/order.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginRegisterComponent = (function () {
    function LoginRegisterComponent(router, authenticationService, userService, alertService, orderService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.alertService = alertService;
        this.orderService = orderService;
        this.model = {};
        this.rmodel = {};
        this.showPassword = false;
        this.rShowPassword = false;
        this.rloading = false;
        this.lloading = false;
    }
    LoginRegisterComponent.prototype.ngOnInit = function () {
    };
    LoginRegisterComponent.prototype.register = function () {
        var _this = this;
        this.rloading = true;
        console.log(this.rmodel);
        this.rmodel.roles = ['CUSTOMER'];
        this.userService.create(this.rmodel)
            .subscribe(function (data) {
            _this.alertService.success('Registration successful. Now you can log in and complete your personal information and finish your order', true);
            _this.rloading = false;
            _this.model = _this.rmodel;
        }, function (error) {
            console.log(error);
            _this.alertService.error(error._body);
            _this.rloading = false;
        });
    };
    LoginRegisterComponent.prototype.login = function () {
        var _this = this;
        this.lloading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            _this.authenticationService.storeUserData(data.token, data);
            _this.lloading = false;
            _this.orderService.setLoggedIn();
        }, function (error) {
            _this.alertService.error(error._body);
            _this.lloading = false;
        });
    };
    //methode om het wachtwoord te tonen/verbergen
    LoginRegisterComponent.prototype.toggleShowPassword = function () {
        this.showPassword = !this.showPassword;
    };
    LoginRegisterComponent.prototype.rToggleShowPassword = function () {
        this.rShowPassword = !this.rShowPassword;
    };
    return LoginRegisterComponent;
}());
LoginRegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-loginregister',
        template: __webpack_require__("../../../../../src/app/shop/placeorder/loginregister/loginregister.component.html"),
        animations: [__WEBPACK_IMPORTED_MODULE_1__animations_slide_right_left_animation__["a" /* slideRightLeftAnimation */]],
        host: { '[@slideRightLeftAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_order_service__["a" /* OrderService */]) === "function" && _e || Object])
], LoginRegisterComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=loginregister.component.js.map

/***/ }),

/***/ "../../../../../src/app/shop/placeorder/placeorder.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n    <div class=\"row\" *ngIf=\"order?.producten != null\">\n        <div class=\"col-md-12\">\n\n            <div class=\"panel panel-info\">\n                <div class=\"panel-heading\">\n                    <div class=\"panel-title\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-6\">\n                                <h3>Order information</h3>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel-body\" style=\"overflow-y: scroll; max-height: 400px;\">\n                    <div *ngFor='let product of order.producten; let i = index' class=\"row\" style=\"vertical-align: middle\">\n                        <div class=\"col-xs-2\">\n                            <img class=\"img-responsive\" src=\"{{product.imgUrl}}\">\n                        </div>\n                        <div class=\"col-xs-4\" style=\"vertical-align: m\">\n                            <h4 class=\"product-name\">\n                                <strong>{{product.naam}}</strong>\n                            </h4>\n                            <h4>\n                                <small>{{product.omschrijving}}</small>\n                            </h4>\n                        </div>\n                        <div class=\"col-xs-6\">\n                            <div class=\"col-xs-6 text-right\">\n                                <h6>\n                                    <strong>{{product.prijs}}\n                                        <span class=\"text-muted\">x</span>\n                                    </strong>\n                                </h6>\n                            </div>\n                            <div class=\"col-xs-4\">\n                                <input type=\"text\" disabled class=\"form-control input-sm\" value=\"1\">\n                            </div>\n                            <div class=\"col-xs-2\" (click)=\"removeProduct(i)\">\n                                <button type=\"button\" class=\"btn btn-warning btn-xs\">\n                                    <span class=\"glyphicon glyphicon-trash\"> </span>\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel-footer\">\n                    <div class=\"row text-center\">\n                        <div class=\"col-xs-11\">\n                            <h4 class=\"text-right\">Total\n                                <strong>{{order.totaal | currency:'EUR':true:'1.2-2'}}</strong>\n                            </h4>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n    <app-loginregister *ngIf=\"loggedIn\"></app-loginregister>\n    <app-customerdetails *ngIf=\"!loggedIn\"></app-customerdetails>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shop/placeorder/placeorder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceOrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_order_service__ = __webpack_require__("../../../../../src/app/_services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_slide_right_left_animation__ = __webpack_require__("../../../../../src/app/_animations/slide-right-left.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PlaceOrderComponent = (function () {
    function PlaceOrderComponent(router, authService, orderService, userService, alertService) {
        var _this = this;
        this.router = router;
        this.authService = authService;
        this.orderService = orderService;
        this.userService = userService;
        this.alertService = alertService;
        this.loggedIn = false;
        this.orderService.loggedIn.subscribe(function (l) { return _this.loggedIn = l; });
    }
    PlaceOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedIn = !this.authService.loggedIn();
        this.orderService.order.subscribe(function (order) {
            _this.order = order;
        });
    };
    PlaceOrderComponent.prototype.removeProduct = function (i) {
        var prijs = this.order.producten[i].prijs;
        this.order.producten[i] = null;
        var producten = [];
        this.order.producten.forEach(function (p) {
            if (p != null)
                producten.push(p);
        });
        this.order.producten = producten;
        this.order.totaal -= prijs;
        this.order.totaal = parseFloat(this.order.totaal.toFixed(2));
        if (this.order.producten.length > 0) {
            localStorage.setItem("shoppingBag", JSON.stringify(this.order));
            this.orderService.setOrder(this.order);
        }
        else {
            localStorage.removeItem("shoppingBag");
            this.orderService.setOrder(null);
        }
    };
    return PlaceOrderComponent;
}());
PlaceOrderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/shop/placeorder/placeorder.component.html"),
        animations: [__WEBPACK_IMPORTED_MODULE_2__animations_slide_right_left_animation__["a" /* slideRightLeftAnimation */]],
        host: { '[@slideRightLeftAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */]) === "function" && _e || Object])
], PlaceOrderComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=placeorder.component.js.map

/***/ }),

/***/ "../../../../../src/app/shop/shoppingbag/shoppingbag.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"panel panel-info\">\n                <div class=\"panel-heading\">\n                    <div class=\"panel-title\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-6\">\n                                <h5>\n                                    <span class=\"glyphicon glyphicon-shopping-cart\"></span> Shopping Cart</h5>\n                            </div>\n                            <div class=\"col-xs-6\">\n                                <button type=\"button\" class=\"btn btn-primary btn-sm btn-block\">\n                                    <span class=\"glyphicon glyphicon-share-alt\"></span> Continue shopping\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel-body\" style=\"overflow-y: scroll; max-height: 400px;\">\n                    <div *ngFor='let product of order.producten; let i = index' class=\"row\">\n                        <div class=\"col-xs-2\">\n                            <img class=\"img-responsive\" src=\"{{product.imgUrl}}\">\n                        </div>\n                        <div class=\"col-xs-4\">\n                            <h4 class=\"product-name\">\n                                <strong>{{product.naam}}</strong>\n                            </h4>\n                            <h4>\n                                <small>{{product.omschrijving}}</small>\n                            </h4>\n                        </div>\n                        <div class=\"col-xs-6\">\n                            <div class=\"col-xs-6 text-right\">\n                                <h6>\n                                    <strong>{{product.prijs}}\n                                        <span class=\"text-muted\">x</span>\n                                    </strong>\n                                </h6>\n                            </div>\n                            <div class=\"col-xs-4\">\n                                <input type=\"text\" class=\"form-control input-sm\" value=\"1\">\n                            </div>\n                            <div class=\"col-xs-2\" (click)=\"removeProduct(i)\">\n                                <button type=\"button\" class=\"btn btn-warning btn-xs\">\n                                    <span class=\"glyphicon glyphicon-trash\"> </span>\n                                </button>\n                            </div>\n                        </div>\n                        <hr>\n                    </div>\n                </div>\n                <div class=\"panel-footer\">\n                    <div class=\"row text-center\">\n                        <div class=\"col-xs-9\">\n                            <h4 class=\"text-right\">Total\n                                <strong>{{order.totaal | currency:'EUR':true:'1.2-2'}}</strong>\n                            </h4>\n                        </div>\n                        <div class=\"col-xs-3\">\n                            <button [routerLinkActive]=\"['active']\" [routerLink]=\"['/placeorder']\" type=\"button\" class=\"btn btn-success btn-block\">\n                                Checkout\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/shop/shoppingbag/shoppingbag.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingbagComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_order_service__ = __webpack_require__("../../../../../src/app/_services/order.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingbagComponent = (function () {
    function ShoppingbagComponent(orderService) {
        this.orderService = orderService;
    }
    ShoppingbagComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderService.order.subscribe(function (order) { return _this.order = order; });
    };
    ShoppingbagComponent.prototype.removeProduct = function (i) {
        var prijs = this.order.producten[i].prijs;
        this.order.producten[i] = null;
        var producten = [];
        this.order.producten.forEach(function (p) {
            if (p != null)
                producten.push(p);
        });
        this.order.producten = producten;
        this.order.totaal -= prijs;
        if (this.order.producten.length > 0) {
            localStorage.setItem("shoppingBag", JSON.stringify(this.order));
            this.orderService.setOrder(this.order);
        }
        else {
            localStorage.removeItem("shoppingBag");
            this.orderService.setOrder(null);
        }
    };
    return ShoppingbagComponent;
}());
ShoppingbagComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-shoppingbag',
        template: __webpack_require__("../../../../../src/app/shop/shoppingbag/shoppingbag.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */]) === "function" && _a || Object])
], ShoppingbagComponent);

var _a;
//# sourceMappingURL=shoppingbag.component.js.map

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n\r\n    <!-- Jumbotron Header -->\r\n    <header class=\"modal-content jumbotron my-4\">\r\n        <h1 class=\"display-3\">A Warm Welcome!</h1>\r\n        <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt\r\n            odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>\r\n    </header>\r\n\r\n    <div class=\"row\">\r\n        <div *ngFor=\"let product of producten\" class=\"col-md-4\">\r\n            <div class=\"thumbnail\">\r\n                <img src=\"{{product.imgUrl}}\" alt=\"\" class=\"img-responsive\">\r\n                <div class=\"caption\">\r\n                    <h4 class=\"pull-right\">€{{product.prijs}}</h4>\r\n                    <h4>\r\n                        <a href=\"#\">{{product.naam}}</a>\r\n                    </h4>\r\n                    <p>{{product.omschrijving}}</p>\r\n                </div>\r\n                <div class=\"ratings\">\r\n                    <p>\r\n                        <span class=\"glyphicon glyphicon-star\"></span>\r\n                        <span class=\"glyphicon glyphicon-star\"></span>\r\n                        <span class=\"glyphicon glyphicon-star\"></span>\r\n                        <span class=\"glyphicon glyphicon-star\"></span>\r\n                        <span class=\"glyphicon glyphicon-star-empty\"></span>\r\n                        (15 reviews)\r\n                    </p>\r\n                </div>\r\n                <div class=\"space-ten\"></div>\r\n                <div class=\"btn-ground text-center\" (click)=\"addItem(product._id)\">\r\n                    <button type=\"button\" class=\"btn btn-primary\">\r\n                        <i class=\"fa fa-shopping-cart\"></i> Add To Cart</button>\r\n                </div>\r\n                <div class=\"space-ten\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_bestelling__ = __webpack_require__("../../../../../src/app/_models/bestelling.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_product_service__ = __webpack_require__("../../../../../src/app/_services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_order_service__ = __webpack_require__("../../../../../src/app/_services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animations_slide_in_out_animation__ = __webpack_require__("../../../../../src/app/_animations/slide-in-out.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_permissions__ = __webpack_require__("../../../../ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_permissions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ngx_permissions__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var WelcomeComponent = (function () {
    function WelcomeComponent(route, router, alertService, productService, permissionsService, orderService) {
        this.route = route;
        this.router = router;
        this.alertService = alertService;
        this.productService = productService;
        this.permissionsService = permissionsService;
        this.orderService = orderService;
        this.model = {};
        this.loading = false;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var artikelNrs = [
            "903.411.08",
            "303.411.06",
            "390.064.16",
            "303.529.15",
            "091.927.78"
        ];
        var naams = [
            "Chair EKEDALEN",
            "Chair EKEDALEN",
            "Corner desk right BEKANT",
            "Collage frame VÄXBO",
            "TV storage combination/glass doors BESTÅ"
        ];
        var omschrijvingen = [
            "Oak/ramna light grey",
            "Brown/ramna light grey",
            "Black-brown/white",
            "Collage frame for 8 photos. Holds 8 pictures so you can create your own personal collage.",
            "Black-brown/valviken grey-turquoise clear glass.\nThe drawers and doors have integrated push-openers, so you don’t need handles or knobs and can open them with just a light push."
        ];
        var prijzen = [
            45.00,
            45.00,
            190.00,
            4.95,
            545.00
        ];
        var imgUrls = [
            "http://www.ikea.com/gb/en/images/products/ekedalen-chair-oak-ramna-light-grey__0516608_pe640444_s3.jpg",
            "http://www.ikea.com/gb/en/images/products/ekedalen-chair-brown-ramna-light-grey__0516596_pe640434_s3.jpg",
            "http://www.ikea.com/gb/en/images/products/bekant-corner-desk-right-black-brown-white__0250498_pe388851_s3.jpg",
            "http://www.ikea.com/gb/en/images/products/växbo-collage-frame-for-8-photos-black__0473831_pe614779_s3.jpg",
            "http://www.ikea.com/gb/en/images/products/bestå-tv-storage-combination-glass-doors-black-brown-valviken-grey-turquoise-clear-glass__0413106_pe571696_s3.jpg"
        ];
        //for(let i =0;i<5;i++){
        //    let p: Product = new Product(artikelNrs[i],naams[i],omschrijvingen[i],imgUrls[i],prijzen[i]);
        //    this.productService.create(p).subscribe();
        //}
        this.productService.getAll().subscribe(function (data) { return _this.producten = data; });
        if (sessionStorage.getItem("currentUser")) {
            var user = JSON.parse(sessionStorage.getItem("currentUser"));
            if (user) {
                this.permissionsService.loadPermissions(user.roles);
            }
        }
    };
    WelcomeComponent.prototype.addItem = function (id) {
        this.order = JSON.parse(localStorage.getItem("shoppingBag"));
        if (this.order === undefined || this.order === null)
            this.order = new __WEBPACK_IMPORTED_MODULE_2__models_bestelling__["a" /* Bestelling */]("", []);
        var product = this.producten.find(function (p) { return p._id === id; });
        this.order.producten.push(product);
        this.order.totaal += product.prijs;
        this.order.totaal = parseFloat(this.order.totaal.toFixed(2));
        localStorage.setItem("shoppingBag", JSON.stringify(this.order));
        this.orderService.setOrder(this.order);
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/welcome/welcome.component.html"),
        animations: [__WEBPACK_IMPORTED_MODULE_6__animations_slide_in_out_animation__["a" /* slideInOutAnimation */]],
        host: { '[@slideInOutAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_product_service__["a" /* ProductService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7_ngx_permissions__["NgxPermissionsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ngx_permissions__["NgxPermissionsService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_order_service__["a" /* OrderService */]) === "function" && _f || Object])
], WelcomeComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map