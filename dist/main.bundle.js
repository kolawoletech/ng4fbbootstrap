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

/***/ "../../../../../src/app/app-navbar/app-navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg-dark {\n    background-color: #009688 !important;\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-navbar/app-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n    <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Go To An Event</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Go On A Road Trip</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n        </li>\n<!--         <li class=\"nav-item dropdown\" ngbDropdown>\n          <a class=\"nav-link dropdown-toggle\" id=\"dropdown01\" ngbDropdownToggle>Category</a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\" ngbDropdownMenu>\n            <a class=\"dropdown-item\" href=\"#\">Angular</a>\n            <a class=\"dropdown-item\" href=\"#\">React</a>\n            <a class=\"dropdown-item\" href=\"#\">Vue.js</a>\n          </div>\n        </li> -->\n      </ul>\n\n    </div>\n  </nav>"

/***/ }),

/***/ "../../../../../src/app/app-navbar/app-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppNavbarComponent; });
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

var AppNavbarComponent = /** @class */ (function () {
    function AppNavbarComponent() {
    }
    AppNavbarComponent.prototype.ngOnInit = function () {
    };
    AppNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/app-navbar/app-navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app-navbar/app-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppNavbarComponent);
    return AppNavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n    \n}\n.starter-template {\n    padding: 3rem 1.5rem;\n    text-align: center;\n}\n/* GLOBAL STYLES\n-------------------------------------------------- */\n/* Padding below the footer and lighter body text */\nbody {\n    \n    padding-bottom: 3rem;\n    color: #009688;;\n  }\n/* CUSTOMIZE THE CAROUSEL\n  -------------------------------------------------- */\n/* Carousel base class */\n.carousel {\n    margin-bottom: 4rem;\n  }\n/* Since positioning the image, we need to help out the caption */\n.carousel-caption {\n    bottom: 3rem;\n    z-index: 10;\n    background-color: #009688;\n  }\n.second-slide{\n    width: 1920px;\n    height: 1280px;\n  }\n.carousel-inner {\n  \n    background-color: #009688 !important;\n  }\n.theme{\n    background-color: #009688 !important; \n  }\n/* Declare heights because of positioning of img element */\n.carousel-item {\n    height: 100vh;\n    min-height: 300px;\n    background: no-repeat center center scroll;\n    background-size: cover;\n  }\n/* MARKETING CONTENT\n  -------------------------------------------------- */\n/* Center align the text within the three columns below the carousel */\n.marketing .col-lg-4 {\n    margin-bottom: 1.5rem;\n    text-align: center;\n  }\n.marketing h2 {\n    font-weight: 400;\n  }\n.marketing .col-lg-4 p {\n    margin-right: .75rem;\n    margin-left: .75rem;\n  }\n/* Featurettes\n  ------------------------- */\n.featurette-divider {\n    margin: 5rem 0; /* Space out the Bootstrap <hr> more */\n  }\n/* Thin out the marketing headings */\n.featurette-heading {\n    font-weight: 300;\n    line-height: 1;\n    letter-spacing: -.05rem;\n  }\n/* RESPONSIVE CSS\n  -------------------------------------------------- */\n@media (min-width: 40em) {\n    /* Bump up size of carousel content */\n    .carousel-caption p {\n      margin-bottom: 1.25rem;\n      font-size: 1.25rem;\n      line-height: 1.4;\n    }\n  \n    .featurette-heading {\n      font-size: 50px;\n    }\n  }\n@media (min-width: 62em) {\n    .featurette-heading {\n      margin-top: 7rem;\n    }\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar> \n<header>\n  <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\" role=\"listbox\">\n      <!-- Slide One - Set the background image for this slide in the line below -->\n      <div class=\"carousel-item active\" style=\"background-image: url('../assets/img/slide-1.jpg')\">\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h3>FerryMe</h3>\n          <p>FerryMe will be a transportation app that helps you to instantly find a traveling partner for short and long\n            distance trips as well as connect passengers and drivers for events related trips. The application will allow drivers\n            to be able to share ride space within the cars as well as number of spots available while passengers will have\n            access to be able to book spots thus making their traveling experience convenient and easy.\n          </p>\n        </div>\n      </div>\n      <!-- Slide Two - Set the background image for this slide in the line below -->\n      <div class=\"carousel-item\" style=\"background-image: url('http://placehold.it/1900x1080')\">\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h3>Second Slide</h3>\n          <p>This is a description for the second slide.</p>\n        </div>\n      </div>\n      <!-- Slide Three - Set the background image for this slide in the line below -->\n      <div class=\"carousel-item\" style=\"background-image: url('http://placehold.it/1900x1080')\">\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h1>Ferry Me.</h1>\n              <p>FerryMe will be a transportation app that helps you to instantly find a traveling partner for short and long\n                distance trips as well as connect passengers and drivers for events related trips. The application will allow drivers\n                to be able to share ride space within the cars as well as number of spots available while passengers will have\n                access to be able to book spots thus making their traveling experience convenient and easy.</p>\n              <p><a class=\"btn btn-lg btn-light\" href=\"#\" role=\"button\">Sign up today</a></p>\n        </div>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n</header>\n\n  \n      <!-- Marketing messaging and featurettes\n      ================================================== -->\n      <!-- Wrap the rest of the page in another container to center all the content. -->\n\n      <div class=\"container marketing\">\n\n            <!-- Three columns of text below the carousel -->\n            <div class=\"row\">\n              <div class=\"col-lg-3\">\n                <img class=\"rounded-circle\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n                <h2>Cost Saving</h2>\n                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>\n                <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n              </div><!-- /.col-lg-4 -->\n              <div class=\"col-lg-3\">\n                <img class=\"rounded-circle\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n                <h2>Easy Traveling</h2>\n                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>\n                <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n              </div><!-- /.col-lg-4 -->\n              <div class=\"col-lg-3\">\n                <img class=\"rounded-circle\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n                <h2>No More Traffic</h2>\n                <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n                <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n              </div><!-- /.col-lg-4 -->\n              <div class=\"col-lg-3\">\n                <img class=\"rounded-circle\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n                <h2>Just Use Your Smartphone</h2>\n                <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n                <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n              </div><!-- /.col-lg-4 -->\n            </div><!-- /.row -->\n    \n    \n            <!-- START THE FEATURETTES -->\n    \n            <hr class=\"featurette-divider\">\n    \n            <div class=\"row featurette\">\n              <div class=\"col-md-7\">\n                <h2 class=\"featurette-heading\">PROBLEM. <span class=\"text-muted\">we are solving.</span></h2>\n                <p class=\"lead\">Lack of infrastructure, constant increase of\n                  traffic, Increased fuel consumption and costs\n                  remain some of the main challenges that South\n                  African cities are constantly facing on an on\n                  going basis.\n                  It is expected that the number of cars traveling\n                  through South African roads will double by 2017\n                  and thus adding to list of challenges that are\n                  currently being faced by the country.\n                  There is an increased growth of passengers\n                  traveling to various Southern African\n                  destinations and thus lack of proper\n                  transportation remain a challenge.\n                  Passengers traveling through to various\n                  destinations within Southern Africa are mostly\n                  self-dependent and constantly face various\n                  traveling challenges</p>\n              </div>\n              <div class=\"col-md-5\">\n                <img class=\"featurette-image img-fluid mx-auto\" data-src=\"holder.js/500x500/auto\" alt=\"Generic placeholder image\">\n              </div>\n            </div>\n    \n            <hr class=\"featurette-divider\">\n    \n            <div class=\"row featurette\">\n              <div class=\"col-md-7 order-md-2\">\n                <h2 class=\"featurette-heading\">Solution <span class=\"text-muted\">FerryMe.</span></h2>\n                <p class=\"lead\">We want to use technology to stimulate traveling, communication, cooperation, reciprocity and social cohesion between citizens in\n                  order to make the experience of traveling through the region a more pleasant and useful activity for our communities and region at\n                  large.</p>\n              </div>\n              <div class=\"col-md-5 order-md-1\">\n                <img class=\"featurette-image img-fluid mx-auto\" data-src=\"holder.js/500x500/auto\" alt=\"Generic placeholder image\">\n              </div>\n            </div>\n    \n            <hr class=\"featurette-divider\">\n    \n            <div class=\"row featurette\">\n              <div class=\"col-md-7\">\n                <h2 class=\"featurette-heading\">How Does FerryMe Work?. <span class=\"text-muted\">Checkmate.</span></h2>\n                <p class=\"lead\">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>\n              </div>\n              <div class=\"col-md-5\">\n                <img class=\"featurette-image img-fluid mx-auto\" data-src=\"holder.js/500x500/auto\" alt=\"Generic placeholder image\">\n              </div>\n            </div>\n    \n            <hr class=\"featurette-divider\">\n    \n            <!-- /END THE FEATURETTES -->\n    \n          </div><!-- /.container -->  \n\n          \n\n          \n\n      <!-- FOOTER -->\n<footer class=\"container\">\n<p class=\"float-right\"><a href=\"#\">Back to top</a></p>\n<p>&copy; 2017-2018 FerryMe, Inc. &middot; <a href=\"#\">Privacy</a> &middot; <a href=\"#\">Terms</a></p>\n</footer>\n<!-- Bootstrap core JavaScript -->\n<script src=\"../assets/vendor/jquery/jquery.min.js\"></script>\n<script src=\"../assets/vendor/bootstrap/js/bootstrap.bundle.min.js\"></script>"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_navbar_app_navbar_component__ = __webpack_require__("../../../../../src/app/app-navbar/app-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__courses_list_courses_list_component__ = __webpack_require__("../../../../../src/app/courses-list/courses-list.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__app_navbar_app_navbar_component__["a" /* AppNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__courses_list_courses_list_component__["a" /* CoursesListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/courses-list/courses-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n    <div *ngFor=\"let course of coursesObservable | async\">\n        <ngb-alert type=\"info\" [dismissible]=\"false\">\n            <h3><a href=\"#\">{{course.title}}</a> </h3>\n            <p>{{course.description}}</p>\n            <div>\n                <a href=\"{{course.url}}\" target=\"_blank\" class=\"btn btn-danger\">Go To Course</a>\n            </div>\n        </ngb-alert> \n    </div>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/courses-list/courses-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoursesListComponent = /** @class */ (function () {
    function CoursesListComponent(db) {
        this.db = db;
    }
    CoursesListComponent.prototype.ngOnInit = function () {
        this.coursesObservable = this.getCourses('/courses');
    };
    CoursesListComponent.prototype.getCourses = function (listPath) {
        return this.db.list(listPath).valueChanges();
    };
    CoursesListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'courses-list',
            template: __webpack_require__("../../../../../src/app/courses-list/courses-list.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], CoursesListComponent);
    return CoursesListComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyC3ycvv0pUOXRdctTWg0-k6zWdrLxln2A8",
        authDomain: "expenses-app-e5e94.firebaseapp.com",
        databaseURL: "https://expenses-app-e5e94.firebaseio.com",
        projectId: "expenses-app-e5e94",
        storageBucket: "expenses-app-e5e94.appspot.com",
        messagingSenderId: "135975553882"
    }
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* enableProdMode */])();
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