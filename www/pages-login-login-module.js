(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"] }])
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bodycontent\" > \n\n\n    <ion-text>\n        <img class=\"img-login\" src=\"http://sigma7.com.co/assets/img/clients/logo-solinter_gris.png\">    \n    </ion-text>\n      \n\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"loginUser()\">\n      <div class=\"seperar\">\n        <ion-item mode=\"ios\" class='item'>\n          <ion-icon name=\"person\" color=\"primary\"></ion-icon>\n          <ion-input type=\"text\" class=\"textlowercase\" autofocus formControlName=\"username\" placeholder=\"{{loginComponentText.placeholderUser}}\"\n            autocomplete=\"off\"></ion-input>\n        </ion-item>\n      </div>\n\n      <div class=\"seperar\">\n        <ion-item mode=\"ios\" class='item'>\n          <ion-icon name=\"key\" color=\"primary\"></ion-icon>\n          <ion-input type=\"password\"  formControlName=\"password\" placeholder=\"{{loginComponentText.placeholderPassword}}\"\n            autocomplete=\"off\"></ion-input>\n        </ion-item>\n      </div>\n\n       <div class=\"seperar\">\n          <ion-item mode=\"ios\" class='item'>\n              <ion-button style=\"margin-left:110px;\"  \n              shape=\"round\" mode=\"ios\" color=\"light\" type=\"submit\">\n              <ion-label class=\"textcapitalize\" style=\"color:#0d4690\">Entrar</ion-label>\n              <!-- <ion-icon style=\"margin-right:100px\" name=\"unlock\" color=\"primary\"></ion-icon>\n                  -->\n              <ion-icon style=\"margin-left:100px\" name=\"unlock\" color=\"primary\"></ion-icon>\n            </ion-button>\n           <!-- <div style=\"margin-left:110px\" >\n              <ion-input type=\"submit\"></ion-input>\n            </div>\n            Login<ion-icon name=\"send\" color=\"primary\"></ion-icon>\n          -->\n        </ion-item>\n        </div>\n\n      <div class=\"seperar\">\n         <div class=\"recoveryPassword\">\n            <ion-label style=\"color:white\">\n              <a (click)=\"resetpass()\">\n                 <span style=\"color:white;\">\n                    <br>\n                    Olvido su contraseña?\n                 </span>\n                </a>\n              </ion-label>\n          </div>\n        </div>\n       <br>\n       <br>\n       <br>\n       <br>\n       <br>\n       <br>\n       <br>\n        <div class=\"seperar\">\n        <div class=\"text-login\">\n           <ion-label style=\"color:white\">\n                © {{ dateNow | date:'yyyy' }} Sigma7 S.A.S \n           </ion-label>\n           <br>\n           <ion-label style=\"color:white\">\n            Todos los derechos reservados.\n           </ion-label>\n          </div>\n       </div>\n    </form>\n  </div>\n\n  \n\n"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item {\n  --border-radius:30px;\n  padding: 5%; }\n\n.bodycontent {\n  background: #1971d1;\n  background: linear-gradient(to right, #08377b, #1971d1);\n  background-repeat: no-repeat;\n  height: 100%;\n  width: 100%;\n  background-size: 100%; }\n\n.img-login {\n  display: block;\n  max-width: 50%;\n  max-height: 250px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 50px;\n  margin-bottom: 25px; }\n\n.text-login {\n  text-align: center;\n  color: #ffff;\n  font-size: 18px;\n  margin-top: 10px; }\n\n.textcapitalize {\n  text-transform: capitalize;\n  font-size: 20px; }\n\n.textlowercase {\n  text-transform: lowercase; }\n\n.seperar {\n  margin-top: 8px;\n  margin-left: auto;\n  margin-right: auto; }\n\n.centerlogin {\n  margin-left: auto;\n  margin-right: auto;\n  text-transform: capitalize; }\n\n.recoveryPassword {\n  text-align: center;\n  margin-top: 30px;\n  color: #ffff; }\n\n.recoveryPassword a {\n  cursor: pointer;\n  color: #ffff;\n  text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmR5Y2FpY2Vkby9Eb2N1bWVudHMvc29saW50ZXJhcHAvc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxvQkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQUliO0VBRUcsbUJBQW1CO0VBRW5CLHVEQUF1RDtFQUN2RCw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLFdBQVc7RUFDWCxxQkFBcUIsRUFBQTs7QUFHeEI7RUFFRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHckI7RUFFRSxrQkFBa0I7RUFDbEIsWUFBVztFQUNYLGVBQWM7RUFDZCxnQkFBZSxFQUFBOztBQUdqQjtFQUVFLDBCQUF5QjtFQUN6QixlQUFjLEVBQUE7O0FBR2hCO0VBRUUseUJBQXdCLEVBQUE7O0FBRzFCO0VBRUUsZUFBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFFRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDBCQUEwQixFQUFBOztBQUc1QjtFQUVFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUdkO0VBRUUsZUFBZTtFQUNmLFlBQVk7RUFDWixxQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtXG57XG4gIC0tYm9yZGVyLXJhZGl1czozMHB4O1xuICBwYWRkaW5nOiA1JTtcbn1cblxuXG4uYm9keWNvbnRlbnRcbntcbiAgIGJhY2tncm91bmQ6ICMxOTcxZDE7IFxuICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQgIzA4Mzc3YiwgIzE5NzFkMSk7IFxuICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDgzNzdiLCAjMTk3MWQxKTsgXG4gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgaGVpZ2h0OiAxMDAlO1xuICAgd2lkdGg6IDEwMCU7XG4gICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG59XG5cbi5pbWctbG9naW5cbntcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogNTAlO1xuICBtYXgtaGVpZ2h0OiAyNTBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLnRleHQtbG9naW5cbntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjojZmZmZjtcbiAgZm9udC1zaXplOjE4cHg7XG4gIG1hcmdpbi10b3A6MTBweDtcbn1cblxuLnRleHRjYXBpdGFsaXplXG57XG4gIHRleHQtdHJhbnNmb3JtOmNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZToyMHB4O1xufVxuXG4udGV4dGxvd2VyY2FzZVxue1xuICB0ZXh0LXRyYW5zZm9ybTpsb3dlcmNhc2U7XG59XG5cbi5zZXBlcmFyXG57XG4gIG1hcmdpbi10b3A6OHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bzsgXG4gIG1hcmdpbi1yaWdodDogYXV0bzsgXG59XG5cbi5jZW50ZXJsb2dpblxue1xuICBtYXJnaW4tbGVmdDogYXV0bzsgXG4gIG1hcmdpbi1yaWdodDogYXV0bzsgXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ucmVjb3ZlcnlQYXNzd29yZFxue1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGNvbG9yOiAjZmZmZjtcbn1cblxuLnJlY292ZXJ5UGFzc3dvcmQgYVxue1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/config-service */ "./src/app/services/config-service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var LoginPage = /** @class */ (function () {
    function LoginPage(formBuilder, config, messageService, storage, loginService, data, router, route, loadingController, navCtrl) {
        this.formBuilder = formBuilder;
        this.config = config;
        this.messageService = messageService;
        this.storage = storage;
        this.loginService = loginService;
        this.data = data;
        this.router = router;
        this.route = route;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.dateNow = new Date();
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    LoginPage.prototype.ngOnInit = function () {
        this.loginComponentText = this.getTextLogin();
    };
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        if (this.loginForm.value) {
            this.presentLoading();
            this.loginService.loginUser(this.loginForm.value).subscribe(function (res) {
                if (res.status == true) {
                    _this.storage.remove('user');
                    _this.storage.set('user', res.userInfo);
                    _this.resetForm(_this.loginForm);
                    _this.pushClientPage(res.userInfo);
                }
                else {
                    _this.resetForm(_this.loginForm);
                    return _this.messageService.presentAlert("Iniciando sesión", "", res.message);
                }
            });
        }
    };
    LoginPage.prototype.pushClientPage = function (usuario) {
        if (usuario != null) {
            this.data.storage = {
                "name": usuario.user_name,
                "address": usuario.user_address,
                "id": usuario.iduser,
                "phone": usuario.user_phone,
                "email": usuario.user_email,
                "estado": usuario.user_state,
                "role": usuario.user_usertype
            };
            switch (usuario.user_usertype) {
                case this.config.getConfig().typerolvalidate.admin:
                    this.router.navigate(['/schedulesvisits']);
                    break;
                case this.config.getConfig().typerolvalidate.secretaria:
                    this.router.navigate(['/schedulesvisits']);
                    break;
                case this.config.getConfig().typerolvalidate.trabajador:
                    this.router.navigate(['/schedulesvisits']);
                    break;
            }
        }
        else {
            console.log("No exite");
        }
    };
    LoginPage.prototype.goHomePage = function () {
        this.router.navigate(['/']);
    };
    LoginPage.prototype.goAboutPage = function () {
        this.router.navigate(['/about']);
    };
    LoginPage.prototype.pageHelp = function () {
        this.router.navigate(['/help']);
    };
    LoginPage.prototype.resetForm = function (form) {
        if (form) {
            form.reset();
        }
    };
    LoginPage.prototype.clearForm = function () {
        this.resetForm(this.loginForm);
    };
    LoginPage.prototype.getTextLogin = function () {
        return this.config.getConfig().loginComponent;
    };
    LoginPage.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: '',
                            duration: 1000
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoginPage.prototype.recoveryPassword = function () {
        this.messageService.presentAlertPrompt();
    };
    LoginPage.prototype.createAccount = function () {
        this.navCtrl.navigateForward('registeruser');
    };
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var MessageService = /** @class */ (function () {
    function MessageService(alertController) {
        this.alertController = alertController;
    }
    MessageService.prototype.presentAlert = function (header, subtitle, message) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: header,
                            subHeader: subtitle,
                            message: message,
                            buttons: ['Cerrar']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MessageService.prototype.presentAlertPrompt = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Recuperar contraseña',
                            inputs: [
                                {
                                    name: 'email',
                                    type: 'email',
                                    placeholder: 'Ingrese el correo'
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Enviar',
                                    handler: function () {
                                        console.log('Confirm Ok ', name);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]])
    ], MessageService);
    return MessageService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map