(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tipo-obra-tipo-obra-module"],{

/***/ "./src/app/pages/tipo-obra/tipo-obra.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/tipo-obra/tipo-obra.module.ts ***!
  \*****************************************************/
/*! exports provided: TipoObraPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoObraPageModule", function() { return TipoObraPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tipo_obra_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tipo-obra.page */ "./src/app/pages/tipo-obra/tipo-obra.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _tipo_obra_page__WEBPACK_IMPORTED_MODULE_5__["TipoObraPage"]
    }
];
var TipoObraPageModule = /** @class */ (function () {
    function TipoObraPageModule() {
    }
    TipoObraPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_tipo_obra_page__WEBPACK_IMPORTED_MODULE_5__["TipoObraPage"]]
        })
    ], TipoObraPageModule);
    return TipoObraPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tipo-obra/tipo-obra.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/tipo-obra/tipo-obra.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/schedulesvisits\"></ion-back-button>\n    </ion-buttons>\n    <ion-searchbar\n          mode=\"ios\"\n          style=\"background:white;\"\n          show-cancel-button=\"true\"\n          cancel-button-text=\"Cancelar\"\n          (ionChange)=\"onSearch($event)\"\n          autocomplete=\"off\"\n          autocorrect=\"on\"\n          animated=\"true\" \n          spellcheck=\"true\"\n          type=\"text\"\n          ionBlur=\"\"\n          color=\"ligth\"\n          placeholder=\"Buscar Tipo de Obra\">\n    </ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <ion-fab-button color=\"primary\" (click)=\"addTipoObra()\">\n        <ion-icon name=\"add\" style=\"color:white\"></ion-icon>\n        <ion-badge  *ngIf=\"listAllObras && listAllObras.length > 0\">{{listAllObras.length}}\n        </ion-badge>\n      </ion-fab-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<div class=\"bodycontent\">\n  <div text-center *ngIf=\"showSpinner;\">\n    <ion-spinner name=\"lines\"></ion-spinner>\n  </div>\n\n  <div *ngIf=\"showListObras\">\n    <div *ngIf=\"listAllObras && listAllObras.length > 0\">\n      <ion-card class=\"card-schedules\" *ngFor=\"let obr of listAllObras\">\n        <ion-card-header>\n          <ion-card-title> {{obr.nombre.toUpperCase()}} </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          Estado: \n          <span *ngIf=\"obr.estado == 1\">\n            Activa\n          </span>\n          <div style=\"float:right\">\n            <ion-icon color=\"primary\" (click)=\"edit(obr)\" class=\"size\" mode=\"ios\" name=\"create\"></ion-icon>\n            <ion-icon color=\"primary\" (click)=\"delete(obr.idtipo)\" class=\"size\" mode=\"ios\" name=\"trash\"></ion-icon>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n\n\n\n  <form *ngIf=\"showFormObra;\" [formGroup]=\"formObra\" (ngSubmit)=\"register()\">\n    <ion-item class=\"item\">\n       <ion-icon name=\"paper\" color=\"primary\" mode=\"ios\"></ion-icon>\n       <ion-label>Obra</ion-label>\n       <ion-input formControlName=\"name\" autocomplete=\"off\" type=\"text\"></ion-input>\n       <input type=\"hidden\" formControlName=\"id\" >\n    </ion-item>\n\n    <div class=\"seperar\">\n        <ion-item mode=\"ios\" class='item'>\n            <ion-button style=\"margin-left:110px;\" shape=\"round\" mode=\"ios\" color=\"light\" type=\"submit\">\n            <ion-label class=\"textcapitalize\" style=\"color:#0d4690\">Registrar</ion-label>\n            <ion-icon style=\"margin-left:100px\" name=\"send\" mode=\"ios\" color=\"primary\"></ion-icon>\n          </ion-button>\n      </ion-item>\n      </div>\n\n </form> \n</div>"

/***/ }),

/***/ "./src/app/pages/tipo-obra/tipo-obra.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/tipo-obra/tipo-obra.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-schedules {\n  border-radius: 5px;\n  border-left-style: solid;\n  border-left-color: #e0e0e0;\n  border-left-width: thick;\n  background: white; }\n\n.item {\n  --border-radius:30px;\n  padding: 5%; }\n\n.bodycontent {\n  background: #1971d1;\n  background: linear-gradient(to right, #08377b, #1971d1);\n  background-repeat: no-repeat;\n  height: 100%;\n  width: 100%;\n  overflow: auto; }\n\n.size {\n  zoom: 1.5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmR5Y2FpY2Vkby9Eb2N1bWVudHMvc29saW50ZXJhcHAvc3JjL2FwcC9wYWdlcy90aXBvLW9icmEvdGlwby1vYnJhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QixpQkFBaUIsRUFBQTs7QUFHckI7RUFFRSxvQkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQUdiO0VBRUcsbUJBQW1CO0VBRW5CLHVEQUF1RDtFQUN2RCw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjLEVBQUE7O0FBR2pCO0VBRUMsU0FBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGlwby1vYnJhL3RpcG8tb2JyYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1zY2hlZHVsZXNcbntcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjZTBlMGUwO1xuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiB0aGljaztcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLml0ZW1cbntcbiAgLS1ib3JkZXItcmFkaXVzOjMwcHg7XG4gIHBhZGRpbmc6IDUlO1xufVxuXG4uYm9keWNvbnRlbnRcbntcbiAgIGJhY2tncm91bmQ6ICMxOTcxZDE7IFxuICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQgIzA4Mzc3YiwgIzE5NzFkMSk7IFxuICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDgzNzdiLCAjMTk3MWQxKTsgXG4gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgaGVpZ2h0OiAxMDAlO1xuICAgd2lkdGg6IDEwMCU7XG4gICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnNpemVcbntcbiB6b29tOiAxLjU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tipo-obra/tipo-obra.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/tipo-obra/tipo-obra.page.ts ***!
  \***************************************************/
/*! exports provided: TipoObraPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoObraPage", function() { return TipoObraPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tipo_obra_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/tipo-obra.service */ "./src/app/services/tipo-obra.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/config-service */ "./src/app/services/config-service.ts");
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





var TipoObraPage = /** @class */ (function () {
    function TipoObraPage(servicesTipoObra, formBuilder, toastController, config, alertController) {
        this.servicesTipoObra = servicesTipoObra;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.config = config;
        this.alertController = alertController;
        this.showListObras = false;
        this.showSpinner = false;
        this.showFormObra = false;
        this.formObra = this.formBuilder.group({
            id: [''],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.name = this.formObra.controls['name'];
    }
    TipoObraPage.prototype.ngOnInit = function () {
        this.getTyPeObras();
    };
    TipoObraPage.prototype.getTyPeObras = function () {
        var _this = this;
        this.showSpinner = true;
        this.servicesTipoObra.getTypeObras().subscribe(function (res) {
            _this.showListObras = true;
            _this.listAllObras = res;
            _this.showSpinner = false;
        });
    };
    TipoObraPage.prototype.edit = function (obra) {
        this.showListObras = false;
        this.showFormObra = true;
        this.formObra.setValue({
            id: obra.idtipo,
            name: obra.nombre
        });
        this.showSpinner = false;
    };
    TipoObraPage.prototype.delete = function (_id) {
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
    TipoObraPage.prototype.confirm = function () {
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
                                        _this.servicesTipoObra.deleteTypeObra(_this.idProductDelete)
                                            .subscribe(function (res) {
                                            _this.getTyPeObras();
                                            _this.showListObras = true;
                                            _this.showFormObra = false;
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
    TipoObraPage.prototype.addTipoObra = function () {
        this.resetForm(this.formObra);
        if (this.showFormObra === false) {
            this.showListObras = false;
            this.showFormObra = true;
        }
        else {
            this.showListObras = true;
            this.showFormObra = false;
        }
    };
    TipoObraPage.prototype.resetForm = function (form) {
        if (form) {
            form.reset();
        }
    };
    TipoObraPage.prototype.register = function () {
        var _this = this;
        this.showSpinner = true;
        if (this.formObra.value.id) {
            this.servicesTipoObra.putTypeObra(this.formObra.value)
                .subscribe(function (res) {
                _this.getTyPeObras();
                _this.showListObras = true;
                _this.showFormObra = false;
                _this.showSpinner = false;
            });
        }
        else {
            this.createTypeObra(this.formObra.value);
        }
    };
    TipoObraPage.prototype.createTypeObra = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.servicesTipoObra.registerTypeObras(data)
                            .subscribe(function (res) {
                            _this.getTyPeObras();
                            _this.showListObras = true;
                            _this.showFormObra = false;
                            _this.showSpinner = false;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TipoObraPage.prototype.onSearch = function (event) {
        var _this = this;
        this.showSpinner = true;
        this.showListObras = true;
        var data = {
            name: event.target.value
        };
        this.servicesTipoObra.searchsTypeObras(data).subscribe(function (res) {
            if (res.length > 0) {
                _this.listAllObras = res;
                _this.showSpinner = false;
            }
            else {
                _this.showSpinner = false;
                _this.presentToast("Tipo de obra no existe!");
            }
        });
    };
    TipoObraPage.prototype.presentToast = function (message) {
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
    TipoObraPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tipo-obra',
            template: __webpack_require__(/*! ./tipo-obra.page.html */ "./src/app/pages/tipo-obra/tipo-obra.page.html"),
            styles: [__webpack_require__(/*! ./tipo-obra.page.scss */ "./src/app/pages/tipo-obra/tipo-obra.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_tipo_obra_service__WEBPACK_IMPORTED_MODULE_1__["TipoObraService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], TipoObraPage);
    return TipoObraPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tipo-obra-tipo-obra-module.js.map