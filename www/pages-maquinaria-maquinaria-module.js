(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-maquinaria-maquinaria-module"],{

/***/ "./src/app/pages/maquinaria/maquinaria.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/maquinaria/maquinaria.module.ts ***!
  \*******************************************************/
/*! exports provided: MaquinariaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaquinariaPageModule", function() { return MaquinariaPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _maquinaria_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maquinaria.page */ "./src/app/pages/maquinaria/maquinaria.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _maquinaria_page__WEBPACK_IMPORTED_MODULE_5__["MaquinariaPage"]
    }
];
var MaquinariaPageModule = /** @class */ (function () {
    function MaquinariaPageModule() {
    }
    MaquinariaPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_maquinaria_page__WEBPACK_IMPORTED_MODULE_5__["MaquinariaPage"]]
        })
    ], MaquinariaPageModule);
    return MaquinariaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/maquinaria/maquinaria.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/maquinaria/maquinaria.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/schedulesvisits\"></ion-back-button>\n        </ion-buttons>\n        <ion-searchbar mode=\"ios\" show-cancel-button=\"true\" cancel-button-text=\"Cancelar\" (ionChange)=\"onSearch($event)\" autocomplete=\"off\" autocorrect=\"on\" animated=\"true\" spellcheck=\"true\" type=\"text\" ionBlur=\"\" color=\"ligth\" placeholder=\"Buscar Maquina\">\n        </ion-searchbar>\n        <ion-buttons slot=\"end\">\n            <ion-fab-button color=\"light\" (click)=\"addTipoObra()\">\n                <ion-icon name=\"add\" color=\"primary\"></ion-icon>\n            </ion-fab-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div text-center *ngIf=\"showSpinner;\">\n        <ion-spinner name=\"lines\"></ion-spinner>\n    </div>\n\n    <div *ngIf=\"showListObras\">\n        <div *ngIf=\"listAllObras && listAllObras.length > 0\">\n            <ion-card class=\"card-schedules\" *ngFor=\"let obr of listAllObras\">\n                <ion-card-header>\n                    <ion-card-title> {{obr.name.toUpperCase()}} </ion-card-title>\n                    <ion-card-title> Precio: {{ obr.price | currency:'$' }} </ion-card-title>\n                </ion-card-header>\n                <ion-card-content>\n                    <div style=\"float:right\">\n                        <ion-chip>\n                            <ion-icon mode=\"ios\" (click)=\"edit(obr)\" name=\"create\" color=\"primary\" class=\"icon-circle-small-e\">\n                            </ion-icon>\n                            <ion-icon mode=\"ios\" (click)=\"delete(obr.idmachinary)\" name=\"trash\" color=\"primary\" class=\"icon-circle-small-d\"></ion-icon>\n                        </ion-chip>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n        </div>\n    </div>\n    <div *ngIf=\"Smessage\" style=\"margin-top: 250px;text-align: center;\">\n        {{message}}\n    </div>\n    <form *ngIf=\"showForm2;\" [formGroup]=\"formMaquinaria\" (ngSubmit)=\"register()\">\n        <ion-item class=\"item\">\n            <ion-icon name=\"paper\" color=\"primary\" mode=\"ios\"></ion-icon>\n            <ion-label>Maquina</ion-label>\n            <ion-input formControlName=\"name\" autocomplete=\"off\" type=\"text\"></ion-input>\n            <input type=\"hidden\" formControlName=\"id\">\n        </ion-item>\n\n        <ion-item class=\"item\">\n            <ion-icon name=\"logo-usd\" color=\"primary\" mode=\"ios\"></ion-icon>\n            <ion-label>Precio</ion-label>\n            <ion-input formControlName=\"price\" autocomplete=\"off\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <div class=\"seperar\">\n            <ion-item mode=\"ios\" class='item'>\n                <ion-button style=\"margin-left:110px;\" shape=\"round\" mode=\"ios\" color=\"light\" type=\"submit\">\n                    <ion-label class=\"textcapitalize\" style=\"color:#0d4690\">Registrar</ion-label>\n                    <ion-icon style=\"margin-left:100px\" name=\"send\" mode=\"ios\" color=\"primary\"></ion-icon>\n                </ion-button>\n            </ion-item>\n        </div>\n\n    </form>\n    <h4 *ngIf=\"showForm\" style=\"margin-top: 250px;margin-left: 20px;margin-right: 20px;\">\n        Esta seccion es para subir el archivo de registro para maquinaria.\n    </h4>\n    <ion-button *ngIf=\"showForm\" class=\"btnsub\" (click)=\"upload()\" color=\"warning\" expand=\"block\" fill=\"solid\">\n        <ion-label class=\"colorText\">Subir archivo</ion-label>\n    </ion-button>\n</ion-content>\n<ion-footer *ngIf=\"showForm\">\n    <ion-button (click)=\"SendUri()\" color=\"primary\" expand=\"block\" fill=\"solid\">\n        <ion-label class=\"colorText\">Aceptar</ion-label>\n    </ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/maquinaria/maquinaria.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/maquinaria/maquinaria.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-schedules {\n  border-radius: 5px;\n  border-left-style: solid;\n  border-left-color: #e0e0e0;\n  border-left-width: thick;\n  background: white; }\n\n.item {\n  --border-radius:30px;\n  padding: 5%; }\n\n.btnsub {\n  margin-top: 50px;\n  margin-left: 10px;\n  margin-right: 10px; }\n\n.size {\n  zoom: 1.5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmR5Y2FpY2Vkby9Eb2N1bWVudHMvc29saW50ZXJhcHAvc3JjL2FwcC9wYWdlcy9tYXF1aW5hcmlhL21hcXVpbmFyaWEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsd0JBQXdCO0VBQ3hCLGlCQUFpQixFQUFBOztBQUdyQjtFQUVFLG9CQUFnQjtFQUNoQixXQUFXLEVBQUE7O0FBR2I7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUNGLEVBQUE7O0FBQ0E7RUFFQyxTQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYXF1aW5hcmlhL21hcXVpbmFyaWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtc2NoZWR1bGVzXG57XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogI2UwZTBlMDtcbiAgICBib3JkZXItbGVmdC13aWR0aDogdGhpY2s7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5pdGVtXG57XG4gIC0tYm9yZGVyLXJhZGl1czozMHB4O1xuICBwYWRkaW5nOiA1JTtcbn1cblxuLmJ0bnN1YntcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweFxufVxuLnNpemVcbntcbiB6b29tOiAxLjU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/maquinaria/maquinaria.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/maquinaria/maquinaria.page.ts ***!
  \*****************************************************/
/*! exports provided: MaquinariaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaquinariaPage", function() { return MaquinariaPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/config-service */ "./src/app/services/config-service.ts");
/* harmony import */ var _services_maquinaria_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/maquinaria.service */ "./src/app/services/maquinaria.service.ts");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _services_workforce_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/workforce.service */ "./src/app/services/workforce.service.ts");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/upload.service */ "./src/app/services/upload.service.ts");
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










var MaquinariaPage = /** @class */ (function () {
    function MaquinariaPage(servicesMaquinaria, formBuilder, toastController, uploadS, fileChooser, config, transfer, file, workforceS, alertController) {
        this.servicesMaquinaria = servicesMaquinaria;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.uploadS = uploadS;
        this.fileChooser = fileChooser;
        this.config = config;
        this.transfer = transfer;
        this.file = file;
        this.workforceS = workforceS;
        this.alertController = alertController;
        this.showListObras = false;
        this.showSpinner = false;
        this.showForm = false;
        this.showForm2 = false;
        this.Smessage = false;
        this.formMaquinaria = this.formBuilder.group({
            id: [''],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.name = this.formMaquinaria.controls['name'];
        this.id = this.formMaquinaria.controls['id'];
        this.price = this.formMaquinaria.controls['price'];
    }
    MaquinariaPage.prototype.ngOnInit = function () {
        this.getMaquinaria();
    };
    MaquinariaPage.prototype.getMaquinaria = function () {
        var _this = this;
        this.showSpinner = true;
        this.servicesMaquinaria.get().subscribe(function (res) {
            if (res.length > 0) {
                _this.showListObras = true;
                _this.listAllObras = res;
                _this.showSpinner = false;
            }
            else {
                _this.showSpinner = false;
                _this.Smessage = true;
                _this.message = 'No hay maquinaria registrada';
            }
        });
    };
    MaquinariaPage.prototype.edit = function (obra) {
        this.showListObras = false;
        this.showForm2 = true;
        this.formMaquinaria.setValue({
            id: obra.idmachinary,
            name: obra.name,
            price: obra.price,
        });
        this.showSpinner = false;
    };
    MaquinariaPage.prototype.delete = function (_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (_id) {
                    this.idProductDelete = _id;
                    this.confirm();
                }
                return [2 /*return*/];
            });
        });
    };
    MaquinariaPage.prototype.confirm = function () {
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
                                    cssClass: 'primary',
                                    handler: function (blah) { }
                                }, {
                                    text: 'Si',
                                    handler: function () {
                                        _this.servicesMaquinaria.delete(_this.idProductDelete)
                                            .subscribe(function (res) {
                                            _this.getMaquinaria();
                                            _this.showListObras = true;
                                            _this.showForm = false;
                                            _this.showSpinner = false;
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
    MaquinariaPage.prototype.addTipoObra = function () {
        this.resetForm(this.formMaquinaria);
        if (this.showForm === false) {
            this.showListObras = false;
            this.showForm = true;
        }
        else {
            this.showListObras = true;
            this.showForm = false;
        }
    };
    MaquinariaPage.prototype.resetForm = function (form) {
        if (form) {
            form.reset();
        }
    };
    MaquinariaPage.prototype.register = function () {
        var _this = this;
        this.showSpinner = true;
        if (this.formMaquinaria.value.id) {
            this.servicesMaquinaria.put(this.formMaquinaria.value)
                .subscribe(function (res) {
                _this.getMaquinaria();
                _this.showListObras = true;
                _this.showForm2 = false;
                _this.showSpinner = false;
            });
        }
        else {
            this.createTypeObra(this.formMaquinaria.value);
        }
    };
    MaquinariaPage.prototype.createTypeObra = function (data) {
        var _this = this;
        this.servicesMaquinaria.register(data)
            .subscribe(function (res) {
            _this.getMaquinaria();
            _this.showListObras = true;
            _this.showForm = false;
            _this.showSpinner = false;
        });
    };
    MaquinariaPage.prototype.onSearch = function (event) {
        var _this = this;
        this.showSpinner = true;
        this.showListObras = true;
        var data = {
            name: event.target.value
        };
        this.servicesMaquinaria.searchs(data)
            .subscribe(function (res) {
            if (res.length > 0) {
                _this.listAllObras = res;
                _this.showSpinner = false;
            }
            else {
                _this.showSpinner = false;
                _this.presentToast("Tipo de contrato no existe!");
            }
        });
    };
    MaquinariaPage.prototype.upload = function () {
        var _this = this;
        this.fileChooser.open()
            .then(function (uri) {
            _this.file.resolveLocalFilesystemUrl(uri).then(function (res) {
                _this.upload2(res);
            });
        }).catch(function (e) {
            console.error(e);
        });
    };
    MaquinariaPage.prototype.presentAlert = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alert',
                            message: data,
                            buttons: ['OK']
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
    MaquinariaPage.prototype.upload2 = function (data) {
        var _this = this;
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: 'file',
            fileName: data.name,
            headers: {}
        };
        fileTransfer.upload(data.nativeURL, this.config.getConfig().bussinesServer.url + "/upload", options)
            .then(function (res) {
            _this.formMaquinaria.setValue({
                id: '',
                name: res.response,
                price: 'sig_workforce'
            });
        }, function (err) {
            console.error(err);
        });
    };
    MaquinariaPage.prototype.SendUri = function () {
        var _this = this;
        this.uploadS.SendUri(this.formMaquinaria.value).subscribe(function (res) {
            _this.presentAlert(res.status);
        });
    };
    MaquinariaPage.prototype.presentToast = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            position: 'top',
                            duration: 2000,
                            animated: true,
                            color: "primary"
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    MaquinariaPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-maquinaria',
            template: __webpack_require__(/*! ./maquinaria.page.html */ "./src/app/pages/maquinaria/maquinaria.page.html"),
            styles: [__webpack_require__(/*! ./maquinaria.page.scss */ "./src/app/pages/maquinaria/maquinaria.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_maquinaria_service__WEBPACK_IMPORTED_MODULE_4__["MaquinariaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _services_upload_service__WEBPACK_IMPORTED_MODULE_9__["UploadService"], _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_8__["FileChooser"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"], _services_workforce_service__WEBPACK_IMPORTED_MODULE_7__["WorkforceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], MaquinariaPage);
    return MaquinariaPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-maquinaria-maquinaria-module.js.map