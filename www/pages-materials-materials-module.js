(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-materials-materials-module"],{

/***/ "./src/app/pages/materials/materials.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/materials/materials.module.ts ***!
  \*****************************************************/
/*! exports provided: MaterialsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialsPageModule", function() { return MaterialsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _materials_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./materials.page */ "./src/app/pages/materials/materials.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _materials_page__WEBPACK_IMPORTED_MODULE_5__["MaterialsPage"]
    }
];
var MaterialsPageModule = /** @class */ (function () {
    function MaterialsPageModule() {
    }
    MaterialsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_materials_page__WEBPACK_IMPORTED_MODULE_5__["MaterialsPage"]]
        })
    ], MaterialsPageModule);
    return MaterialsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/materials/materials.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/materials/materials.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/schedulesvisits\"></ion-back-button>\n        </ion-buttons>\n\n        <ion-searchbar mode=\"ios\" show-cancel-button=\"true\" cancel-button-text=\"Cancelar\" (ionChange)=\"onSearch($event)\" autocomplete=\"off\" autocorrect=\"on\" animated=\"true\" spellcheck=\"true\" type=\"text\" ionBlur=\"\" color=\"ligth\" placeholder=\"Buscar Materiales\">\n        </ion-searchbar>\n        <ion-buttons slot=\"end\">\n            <ion-fab-button color=\"light\" (click)=\"addMaterial()\">\n                <ion-icon name=\"add\" color=\"primary\"></ion-icon>\n            </ion-fab-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<div class=\"bodycontent\">\n    <div *ngIf=\"showListMaterials;\">\n        <ion-infinite-scroll threshold=\"100px\">\n            <ion-infinite-scroll-content>\n                <ion-card class=\"card-schedules\" *ngFor=\"let mat of listAllMaterials\">\n                    <ion-card-header>\n                        <ion-card-title>Material: {{ mat.name }} </ion-card-title>\n                        <ion-card-title>Precio: {{ mat.price | currency:'$' }}</ion-card-title>\n                    </ion-card-header>\n                    <ion-card-content>\n                        <div style=\"float:right\">\n                            <ion-chip>\n                                <ion-icon mode=\"ios\" (click)=\"editMaterial(mat)\" name=\"create\" color=\"primary\" class=\"icon-circle-small-e\"></ion-icon>\n                                <ion-icon mode=\"ios\" (click)=\"confirm(mat.idmaterial)\" name=\"trash\" color=\"primary\" class=\"icon-circle-small-d\"></ion-icon>\n                            </ion-chip>\n                        </div>\n                    </ion-card-content>\n                </ion-card>\n            </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n    </div>\n    <h4 *ngIf=\"showFormMaterial\" style=\"margin-top: 250px;margin-left: 20px;margin-right: 20px;\">\n        Esta seccion es para subir el archivo de registro para materiales.\n    </h4>\n    <ion-button *ngIf=\"showFormMaterial\" class=\"btnsub\" (click)=\"upload()\" color=\"warning\" expand=\"block\" fill=\"solid\">\n        <ion-label class=\"colorText\">Subir archivo</ion-label>\n    </ion-button>\n    <div *ngIf=\"Smessage\" style=\"margin-top: 250px;text-align: center;\">\n        {{message}}\n    </div>\n    <form *ngIf=\"showForm2;\" [formGroup]=\"registerMaterialForm\" (ngSubmit)=\"registerMaterial()\">\n        <ion-item class=\"item\">\n            <ion-icon name=\"paper\" color=\"primary\" mode=\"ios\"></ion-icon>\n            <ion-label>Nombre</ion-label>\n            <ion-input formControlName=\"name\" autocomplete=\"off\" type=\"text\"></ion-input>\n            <input type=\"hidden\" formControlName=\"id\">\n        </ion-item>\n\n        <ion-item class=\"item\">\n            <ion-icon name=\"logo-usd\" color=\"primary\" mode=\"ios\"></ion-icon>\n            <ion-label>Precio</ion-label>\n            <ion-input formControlName=\"price\" autocomplete=\"off\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <div class=\"seperar\">\n            <ion-item mode=\"ios\" class='item'>\n                <ion-button style=\"margin-left:110px;\" shape=\"round\" mode=\"ios\" color=\"light\" type=\"submit\">\n                    <ion-label class=\"textcapitalize\" style=\"color:#0d4690\">Registrar</ion-label>\n                    <ion-icon style=\"margin-left:100px\" name=\"send\" mode=\"ios\" color=\"primary\"></ion-icon>\n                </ion-button>\n            </ion-item>\n        </div>\n\n    </form>\n</div>\n<ion-footer *ngIf=\"showFormMaterial\">\n    <ion-button (click)=\"SendUri()\" color=\"primary\" expand=\"block\" fill=\"solid\">\n        <ion-label class=\"colorText\">Aceptar</ion-label>\n    </ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/materials/materials.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/materials/materials.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-schedules {\n  border-radius: 5px;\n  border-left-style: solid;\n  border-left-color: #e0e0e0;\n  border-left-width: thick;\n  background: white; }\n\n.item {\n  --border-radius:30px;\n  padding: 5%; }\n\n.btnsub {\n  margin-top: 50px;\n  margin-left: 10px;\n  margin-right: 10px; }\n\n.bodycontent {\n  background: white;\n  background-repeat: no-repeat;\n  height: 100%;\n  width: 100%;\n  overflow: auto; }\n\n.size {\n  zoom: 1.5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmR5Y2FpY2Vkby9Eb2N1bWVudHMvc29saW50ZXJhcHAvc3JjL2FwcC9wYWdlcy9tYXRlcmlhbHMvbWF0ZXJpYWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QixpQkFBaUIsRUFBQTs7QUFHckI7RUFFRSxvQkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFDRixFQUFBOztBQUVBO0VBRUcsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osV0FBVztFQUNYLGNBQWMsRUFBQTs7QUFHakI7RUFFQyxTQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYXRlcmlhbHMvbWF0ZXJpYWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXNjaGVkdWxlc1xue1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICNlMGUwZTA7XG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IHRoaWNrO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uaXRlbVxue1xuICAtLWJvcmRlci1yYWRpdXM6MzBweDtcbiAgcGFkZGluZzogNSU7XG59XG5cbi5idG5zdWJ7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHhcbn1cblxuLmJvZHljb250ZW50XG57XG4gICBiYWNrZ3JvdW5kOiB3aGl0ZTsgXG4gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgaGVpZ2h0OiAxMDAlO1xuICAgd2lkdGg6IDEwMCU7XG4gICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnNpemVcbntcbiB6b29tOiAxLjU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/materials/materials.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/materials/materials.page.ts ***!
  \***************************************************/
/*! exports provided: MaterialsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialsPage", function() { return MaterialsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_materials_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/materials.service */ "./src/app/services/materials.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/config-service */ "./src/app/services/config-service.ts");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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










var MaterialsPage = /** @class */ (function () {
    function MaterialsPage(alertController, uploadS, fileChooser, config, transfer, file, materialservices, categoryservices, formBuilder) {
        this.alertController = alertController;
        this.uploadS = uploadS;
        this.fileChooser = fileChooser;
        this.config = config;
        this.transfer = transfer;
        this.file = file;
        this.materialservices = materialservices;
        this.categoryservices = categoryservices;
        this.formBuilder = formBuilder;
        this.showSpinner = false;
        this.showListMaterials = false;
        this.showFormMaterial = false;
        this.showForm2 = false;
        this.btnRegister = false;
        this.btnUpdate = false;
        this.Smessage = false;
        {
            this.registerMaterialForm = this.formBuilder.group({
                id: [''],
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
            });
            this.name = this.registerMaterialForm.controls['name'];
            this.id = this.registerMaterialForm.controls['id'];
            this.price = this.registerMaterialForm.controls['price'];
        }
    }
    MaterialsPage.prototype.ngOnInit = function () {
        this.listMaterial();
        this.getCategory();
    };
    MaterialsPage.prototype.listMaterial = function () {
        var _this = this;
        this.showSpinner = true;
        this.materialservices.getMaterials().subscribe(function (res) {
            if (res.length > 0) {
                _this.showListMaterials = true;
                _this.listAllMaterials = res;
                _this.showSpinner = false;
            }
            else {
                _this.showSpinner = false;
                _this.Smessage = true;
                _this.message = 'No hay materiales registrados';
            }
        });
    };
    MaterialsPage.prototype.registerMaterial = function () {
        var _this = this;
        this.showSpinner = true;
        if (this.registerMaterialForm.value.id) {
            this.materialservices.putMaterial(this.registerMaterialForm.value)
                .subscribe(function (res) {
                _this.listMaterial();
                _this.showListMaterials = true;
                _this.showFormMaterial = false;
                _this.showSpinner = false;
            });
        }
        else {
            this.createMaterial(this.registerMaterialForm.value);
        }
    };
    MaterialsPage.prototype.getCategory = function () {
        var _this = this;
        var type = 1;
        this.categoryservices.getCategoriesM(type).subscribe(function (res) {
            _this.listAllCategories = res;
        });
    };
    MaterialsPage.prototype.createMaterial = function (data) {
        var _this = this;
        this.materialservices.registerMaterials(data)
            .subscribe(function (res) {
            _this.listMaterial();
            _this.showListMaterials = true;
            _this.showFormMaterial = false;
            _this.showSpinner = false;
        });
    };
    MaterialsPage.prototype.upload = function () {
        var _this = this;
        this.fileChooser.open()
            .then(function (uri) {
            _this.file.resolveLocalFilesystemUrl(uri).then(function (res) {
                _this.upload2(res);
            });
        }).catch(function (e) {
            console.log(e);
        });
    };
    MaterialsPage.prototype.presentAlert = function (data) {
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
    MaterialsPage.prototype.upload2 = function (data) {
        var _this = this;
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: 'file',
            fileName: data.name,
            headers: {}
        };
        fileTransfer.upload(data.nativeURL, this.config.getConfig().bussinesServer.url + "/upload", options)
            .then(function (res) {
            _this.registerMaterialForm.setValue({
                id: '',
                name: res.response,
                price: 'sig_materials'
            });
        }, function (err) {
            console.error(err);
        });
    };
    MaterialsPage.prototype.SendUri = function () {
        var _this = this;
        this.uploadS.SendUri(this.registerMaterialForm.value).subscribe(function (res) {
            _this.presentAlert(res.status);
        });
    };
    MaterialsPage.prototype.addMaterial = function () {
        this.resetForm(this.registerMaterialForm);
        this.btnRegister = true;
        if (this.showFormMaterial === false) {
            this.showListMaterials = false;
            this.showFormMaterial = true;
            this.btnUpdate = false;
        }
        else {
            this.showListMaterials = true;
            this.showFormMaterial = false;
        }
    };
    MaterialsPage.prototype.resetForm = function (form) {
        if (form) {
            form.reset();
        }
    };
    MaterialsPage.prototype.editMaterial = function (material) {
        this.showSpinner = true;
        this.showListMaterials = false;
        this.showForm2 = true;
        this.registerMaterialForm.setValue({
            id: material.idmaterial,
            name: material.name,
            price: material.price
        });
        this.showSpinner = false;
        this.btnUpdate = true;
        this.btnRegister = false;
    };
    MaterialsPage.prototype.confirm = function (material) {
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
                                        _this.delete(material);
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
    MaterialsPage.prototype.delete = function (material) {
        var _this = this;
        this.showSpinner = true;
        this.materialservices.deleteMaterial(material).subscribe(function (res) {
            _this.listMaterial();
            if (res.status) {
                _this.showSpinner = false;
            }
        });
    };
    MaterialsPage.prototype.onSearch = function (event) {
        var _this = this;
        this.showSpinner = true;
        this.showFormMaterial = false;
        this.showListMaterials = true;
        var data = {
            name: event.target.value
        };
        this.materialservices.searchsMaterials(data)
            .subscribe(function (res) {
            if (res.status == true) {
                if (res.materials.length > 0) {
                    _this.listAllMaterials = res.materials;
                    _this.showSpinner = false;
                }
                else {
                    /*this.presentToast(this.config.getMessage().searchsClient.message)
                    this.showSpinner = false*/
                }
            }
        });
    };
    MaterialsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-materials',
            template: __webpack_require__(/*! ./materials.page.html */ "./src/app/pages/materials/materials.page.html"),
            styles: [__webpack_require__(/*! ./materials.page.scss */ "./src/app/pages/materials/materials.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"], _services_upload_service__WEBPACK_IMPORTED_MODULE_8__["UploadService"], _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_3__["FileChooser"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"],
            _services_materials_service__WEBPACK_IMPORTED_MODULE_1__["MaterialsService"], _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], MaterialsPage);
    return MaterialsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-materials-materials-module.js.map