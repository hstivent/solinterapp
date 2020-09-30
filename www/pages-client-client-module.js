(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-client-client-module"],{

/***/ "./src/app/pages/client/client.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/client/client.module.ts ***!
  \***********************************************/
/*! exports provided: ClientPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPageModule", function() { return ClientPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _client_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client.page */ "./src/app/pages/client/client.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _client_page__WEBPACK_IMPORTED_MODULE_5__["ClientPage"]
    }
];
var ClientPageModule = /** @class */ (function () {
    function ClientPageModule() {
    }
    ClientPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_client_page__WEBPACK_IMPORTED_MODULE_5__["ClientPage"]]
        })
    ], ClientPageModule);
    return ClientPageModule;
}());



/***/ }),

/***/ "./src/app/pages/client/client.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/client/client.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/schedulesvisits\"></ion-back-button>\n    </ion-buttons>\n    \n    <ion-searchbar\n      mode=\"ios\"\n      show-cancel-button=\"true\"\n      cancel-button-text=\"Cancelar\"\n      (ionChange)=\"onSearch($event)\"\n      autocomplete=\"off\"\n      autocorrect=\"on\"\n      animated=\"true\" \n      spellcheck=\"true\"\n      type=\"text\"\n      ionBlur=\"\"\n      color=\"ligth\"\n      placeholder=\"Buscar cliente\">\n    </ion-searchbar>\n  \n    <ion-buttons slot=\"end\">\n      <ion-fab-button color=\"light\" (click)=\"addClient()\">\n        <ion-icon name=\"add\" color=\"primary\"></ion-icon>\n      </ion-fab-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    \n    \n    <div text-center *ngIf=\"showSpinner;\">\n        <ion-spinner name=\"lines\"></ion-spinner>\n    </div>\n\n    <div *ngIf=\"showListClient;\">\n        <div *ngIf=\"listAllClient && listAllClient.length > 0\">\n            <ion-card class=\"card-schedules\" *ngFor=\"let client of listAllClient\">\n                <ion-card-header>\n                   <ion-card-title>Cliente: {{ client.client_name }}</ion-card-title>\n                    <ion-card-subtitle>Nit: {{ client.client_nit }}\n                        <div style=\"float:right\">\n                            <ion-chip>\n                              <ion-icon mode=\"ios\" (click)=\"editClient(client)\" name=\"create\" color=\"primary\" class=\"icon-circle-small-e\"></ion-icon>\n                              <ion-icon mode=\"ios\" (click)=\"deleteClient(client.idclient)\"  name=\"trash\" color=\"primary\" class=\"icon-circle-small-d\"></ion-icon>\n                            </ion-chip>\n                        </div>\n                    </ion-card-subtitle>\n                </ion-card-header>\n                <ion-card-content>\n                    Contacto: {{ client.client_contact }} <br> \n                    Celular: {{ client.client_phone }} \n                    <div style=\"float:right\">\n                        <ion-chip>\n                            <ion-label>Detalle</ion-label>\n                            <ion-icon (click)=\"verClient(client)\"  color=\"primary\" mode=\"ios\" name=\"search\"></ion-icon>\n                        </ion-chip>\n                    </div>\n                </ion-card-content>\n              </ion-card>\n        </div>\n    </div>\n\n      <div *ngIf=\"showClient;\">\n        <ion-card>\n            <ion-card-header>\n                  <ion-card-subtitle>Nit: {{listClient.client_nit}}</ion-card-subtitle>\n                  <ion-card-title>Empresa: {{listClient.client_name}}</ion-card-title>\n              </ion-card-header>\n              <ion-card-content>\n                 Dirección: {{listClient.client_address}} <br>\n                 Telefono: {{listClient.client_phone}} <br>\n                 Correo: {{listClient.client_email}}  <br> \n                 Contacto: {{listClient.client_contact}}  <br> \n               </ion-card-content>\n          </ion-card>\n       </div>\n      </ion-content>\n"

/***/ }),

/***/ "./src/app/pages/client/client.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/client/client.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsaWVudC9jbGllbnQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/client/client.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/client/client.page.ts ***!
  \*********************************************/
/*! exports provided: ClientPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPage", function() { return ClientPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _services_typeclient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/typeclient.service */ "./src/app/services/typeclient.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/config-service */ "./src/app/services/config-service.ts");
/* harmony import */ var _client_modal_client_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../client-modal/client-modal.component */ "./src/app/pages/client-modal/client-modal.component.ts");
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






var ClientPage = /** @class */ (function () {
    function ClientPage(Modalctrl, clientService, typeclientService, alertController, toastController, config) {
        this.Modalctrl = Modalctrl;
        this.clientService = clientService;
        this.typeclientService = typeclientService;
        this.alertController = alertController;
        this.toastController = toastController;
        this.config = config;
        this.showSpinner = false;
        this.showListClient = false;
        this.showFormClient = false;
        this.showFormClientV = false;
        this.btnRegister = false;
        this.btnUpdate = false;
        this.showUpdateImg = false;
        this.showClient = false;
    }
    ClientPage.prototype.ngOnInit = function () {
        this.getClients();
        this.getTypeClients();
    };
    ClientPage.prototype.getTypeClients = function () {
        var _this = this;
        this.typeclientService.getTypeClients().subscribe(function (res) {
            _this.listTypeClient = res;
        });
    };
    ClientPage.prototype.getClients = function () {
        var _this = this;
        this.showSpinner = true;
        this.clientService.getClients().subscribe(function (res) {
            _this.showListClient = true;
            _this.listAllClient = res;
            _this.showSpinner = false;
        });
    };
    ClientPage.prototype.addClient = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Modalctrl.create({
                            component: _client_modal_client_modal_component__WEBPACK_IMPORTED_MODULE_5__["ClientModalComponent"],
                            componentProps: {}
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (res) {
                            if (res.data !== null) {
                                _this.getClients();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ClientPage.prototype.editClient = function (client) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Modalctrl.create({
                            component: _client_modal_client_modal_component__WEBPACK_IMPORTED_MODULE_5__["ClientModalComponent"],
                            componentProps: {
                                id: client.idclient,
                                nit: client.client_nit,
                                name: client.client_name,
                                address: client.client_address,
                                phone: client.client_phone,
                                email: client.client_email,
                                contact: client.client_contact,
                                typeclient: client.clientype_clientypeid,
                                imageclient: client.client_image,
                                imagetype: client.imagetype
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (res) {
                            if (res.data !== null) {
                                _this.getClients();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ClientPage.prototype.verClient = function (client) {
        this.showSpinner = true;
        this.showUpdateImg = false;
        this.showListClient = false;
        this.showClient = true;
        this.listClient = client;
        this.showSpinner = false;
        this.btnUpdate = false;
        this.btnRegister = false;
    };
    ClientPage.prototype.resetForm = function (form) {
        if (form) {
            form.reset();
        }
    };
    ClientPage.prototype.onSearch = function (event) {
        var _this = this;
        this.showSpinner = true;
        this.showFormClient = false;
        this.showListClient = true;
        var data = {
            name: event.target.value
        };
        this.clientService.searchsClients(data)
            .subscribe(function (res) {
            if (res.status == true) {
                if (res.clients.length > 0) {
                    _this.listAllClient = res.clients;
                    _this.showSpinner = false;
                }
                else {
                    _this.presentToast(_this.config.getMessage().searchsClient.message);
                    _this.showSpinner = false;
                }
            }
        });
    };
    ClientPage.prototype.deleteClient = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Está seguro de eliminar?',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) { }
                                }, {
                                    text: 'Si',
                                    handler: function () {
                                        _this.clientService.deleteClient(id)
                                            .subscribe(function (res) {
                                            _this.getClients();
                                        });
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
    ClientPage.prototype.presentToast = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            position: 'top',
                            duration: 2000,
                            animated: true,
                            color: "danger"
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ClientPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client',
            template: __webpack_require__(/*! ./client.page.html */ "./src/app/pages/client/client.page.html"),
            styles: [__webpack_require__(/*! ./client.page.scss */ "./src/app/pages/client/client.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _services_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"],
            _services_typeclient_service__WEBPACK_IMPORTED_MODULE_2__["TypeclientService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])
    ], ClientPage);
    return ClientPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-client-client-module.js.map