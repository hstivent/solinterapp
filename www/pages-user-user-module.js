(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-user-module"],{

/***/ "./src/app/pages/user/user.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/user/user.module.ts ***!
  \*******************************************/
/*! exports provided: UserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageModule", function() { return UserPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.page */ "./src/app/pages/user/user.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _user_page__WEBPACK_IMPORTED_MODULE_5__["UserPage"]
    }
];
var UserPageModule = /** @class */ (function () {
    function UserPageModule() {
    }
    UserPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_user_page__WEBPACK_IMPORTED_MODULE_5__["UserPage"]]
        })
    ], UserPageModule);
    return UserPageModule;
}());



/***/ }),

/***/ "./src/app/pages/user/user.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/user/user.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/schedulesvisits\"></ion-back-button>\n        </ion-buttons>\n\n        <ion-searchbar mode=\"ios\" show-cancel-button=\"true\" cancel-button-text=\"Cancelar\" (ionChange)=\"onSearch($event)\" autocomplete=\"off\" autocorrect=\"on\" animated=\"true\" spellcheck=\"true\" type=\"text\" ionBlur=\"\" color=\"ligth\" placeholder=\"Buscar Usuario\">\n        </ion-searchbar>\n    </ion-toolbar>\n</ion-header>\n\n\n\n\n<ion-content padding>\n    <ion-spinner *ngIf=\"showSpinner\" name=\"crescent\" [ngClass]=\"{'spiner': showSpinner}\"></ion-spinner>\n    <div *ngIf=\"showListUsers;\" [ngClass]=\"{'blur': showSpinner}\">\n        <div *ngIf=\"listAllUsers && listAllUsers.length > 0\">\n            <ion-card class=\"card-schedules\" *ngFor=\"let usr of listAllUsers\">\n                <ion-card-header>\n                    <ion-card-title>Nombre: {{ usr.user_name }} </ion-card-title>\n                    <ion-card-subtitle>Correo: {{ usr.user_email }} </ion-card-subtitle>\n                </ion-card-header>\n                <ion-card-content>\n                    Telefono: {{ usr.user_phone}}\n                    <div style=\"float:right\">\n                        <ion-chip>\n                            <ion-icon mode=\"ios\" (click)=\"addUsers(2, usr)\" name=\"create\" color=\"primary\" class=\"icon-circle-small-e\"></ion-icon>\n                            <ion-icon mode=\"ios\" (click)=\"presentAlertConfirm(usr.iduser)\" name=\"trash\" color=\"primary\" class=\"icon-circle-small-d\"></ion-icon>\n                        </ion-chip>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n        </div>\n    </div>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"addUsers(1, '')\">\n        <ion-fab-button>\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/user/user.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/user/user.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-schedules {\n  border-radius: 5px;\n  border-left-style: solid;\n  border-left-color: #e0e0e0;\n  border-left-width: thick;\n  background: white; }\n\n.item {\n  --border-radius:30px; }\n\n.bodycontent {\n  background: white;\n  background-repeat: no-repeat;\n  height: 100%;\n  width: 100%;\n  overflow: auto; }\n\n.size {\n  zoom: 1.5; }\n\n.blur {\n  -webkit-filter: blur(5px);\n          filter: blur(5px); }\n\n.spiner {\n  position: fixed;\n  top: 40%;\n  left: 40%;\n  height: 100px;\n  width: 100px;\n  z-index: 100;\n  opacity: 0.5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmR5Y2FpY2Vkby9Eb2N1bWVudHMvc29saW50ZXJhcHAvc3JjL2FwcC9wYWdlcy91c2VyL3VzZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsd0JBQXdCO0VBQ3hCLGlCQUFpQixFQUFBOztBQUdyQjtFQUVFLG9CQUFnQixFQUFBOztBQUdsQjtFQUVHLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjLEVBQUE7O0FBR2pCO0VBRUMsU0FBUyxFQUFBOztBQUdWO0VBQ0UseUJBQWdCO1VBQWhCLGlCQUFnQixFQUFBOztBQUdsQjtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvdXNlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1zY2hlZHVsZXNcbntcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjZTBlMGUwO1xuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiB0aGljaztcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLml0ZW1cbntcbiAgLS1ib3JkZXItcmFkaXVzOjMwcHg7XG59XG5cbi5ib2R5Y29udGVudFxue1xuICAgYmFja2dyb3VuZDogd2hpdGU7IFxuICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgIGhlaWdodDogMTAwJTtcbiAgIHdpZHRoOiAxMDAlO1xuICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5zaXplXG57XG4gem9vbTogMS41O1xufVxuXG4uYmx1cntcbiAgZmlsdGVyOmJsdXIoNXB4KTtcbn1cblxuLnNwaW5lcntcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDQwJTtcbiAgbGVmdDogNDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgb3BhY2l0eTogMC41O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/user/user.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/user/user.page.ts ***!
  \*****************************************/
/*! exports provided: UserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPage", function() { return UserPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-modal/user-modal.component */ "./src/app/pages/user-modal/user-modal.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/config-service */ "./src/app/services/config-service.ts");
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






var UserPage = /** @class */ (function () {
    function UserPage(alertController, userservices, toastController, Modalctrl, config, router) {
        this.alertController = alertController;
        this.userservices = userservices;
        this.toastController = toastController;
        this.Modalctrl = Modalctrl;
        this.config = config;
        this.router = router;
        this.showSpinner = false;
        this.showListUsers = false;
    }
    UserPage.prototype.ngOnInit = function () {
        this.listUsers();
    };
    UserPage.prototype.addUsers = function (type, user) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Modalctrl.create({
                            component: _user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_3__["UserModalComponent"],
                            componentProps: {
                                'user': user,
                                "type": type
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (res) {
                            if (res.data !== null) {
                                _this.listUsers();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserPage.prototype.listUsers = function () {
        var _this = this;
        this.showSpinner = true;
        this.userservices.getUsers().subscribe(function (res) {
            _this.listAllUsers = res;
            _this.showListUsers = true;
            _this.showSpinner = false;
        });
    };
    UserPage.prototype.presentAlertConfirm = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Seguro?',
                            message: '¿Desea eliminar este usario?',
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                }, {
                                    text: 'Si',
                                    handler: function () {
                                        _this.deleteUser(user);
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
    UserPage.prototype.deleteUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.showSpinner = true;
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Hubo un error',
                                message: 'Algo pasó!',
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, this.userservices.deleteUser(user).subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!res.status) return [3 /*break*/, 1];
                                            this.showSpinner = false;
                                            this.listUsers();
                                            return [3 /*break*/, 3];
                                        case 1: return [4 /*yield*/, alert.present()];
                                        case 2:
                                            _a.sent();
                                            _a.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserPage.prototype.resetForm = function (form) {
        if (form) {
            form.reset();
        }
    };
    UserPage.prototype.onSearch = function (event) {
        var _this = this;
        this.showSpinner = true;
        this.showListUsers = true;
        var data = {
            name: event.target.value
        };
        this.userservices.searchsUsers(data).subscribe(function (res) {
            if (res.status == true) {
                if (res.users.length > 0) {
                    _this.listAllUsers = res.users;
                    _this.showSpinner = false;
                }
                else {
                    _this.listAllUsers = [];
                    _this.presentToast(_this.config.getMessage().searchsUser.message);
                    _this.showSpinner = false;
                }
            }
        });
    };
    UserPage.prototype.presentToast = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserPage.prototype.pageClient = function () {
        this.router.navigate(['/clients']);
    };
    UserPage.prototype.pageMaterial = function () {
        this.router.navigate(['/materials']);
    };
    UserPage.prototype.pageUser = function () {
        this.router.navigate(['/user']);
    };
    UserPage.prototype.pageVisit = function () {
        this.router.navigate(['/schedulesvisits']);
    };
    UserPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.page.html */ "./src/app/pages/user/user.page.html"),
            styles: [__webpack_require__(/*! ./user.page.scss */ "./src/app/pages/user/user.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserPage);
    return UserPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-user-user-module.js.map