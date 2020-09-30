(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-product-module"],{

/***/ "./src/app/pages/product/product.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/product/product.module.ts ***!
  \*************************************************/
/*! exports provided: ProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageModule", function() { return ProductPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product.page */ "./src/app/pages/product/product.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _product_page__WEBPACK_IMPORTED_MODULE_5__["ProductPage"]
    }
];
var ProductPageModule = /** @class */ (function () {
    function ProductPageModule() {
    }
    ProductPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_product_page__WEBPACK_IMPORTED_MODULE_5__["ProductPage"]]
        })
    ], ProductPageModule);
    return ProductPageModule;
}());



/***/ }),

/***/ "./src/app/pages/product/product.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/product/product.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\"> \n          <ion-back-button defaultHref=\"/home\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Gestión de productos</ion-title>\n\n      <ion-buttons slot=\"end\">\n          <ion-fab-button color=\"danger\" (click)=\"addProduct()\">\n          <ion-icon name=\"add\"></ion-icon>\n          </ion-fab-button>\n      </ion-buttons>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-searchbar\n        mode=\"ios\"\n        show-cancel-button=\"true\"\n        cancel-button-text=\"Cancelar\"\n        (ionChange)=\"onSearch($event)\"\n        autocomplete=\"off\"\n        autocorrect=\"on\"\n        animated=\"true\" \n        spellcheck=\"true\"\n        type=\"text\"\n        ionBlur=\"\"\n        placeholder=\"Buscar producto\">\n   </ion-searchbar>\n\n   <div text-center *ngIf=\"showSpinner;\">\n     <ion-spinner name=\"lines\"></ion-spinner>\n   </div>\n\n  <div *ngIf=\"showListProduct;\">\n    <div *ngIf=\"listAllProducts && listAllProducts.length > 0\">\n            <ion-list *ngFor=\"let pro of listAllProducts\">\n                <ion-list-header>\n                    <ion-label>\n                      {{ pro.nombre }} <ion-badge color=\"danger\"> {{ pro.tipo }} </ion-badge>\n                    </ion-label>\n                </ion-list-header>\n                <ion-item>\n                    \n                    <ion-label>\n                          {{ pro.precio | currency:'$' }}\n                    </ion-label>\n                    <ion-tab-button (click)=\"editProduct(pro)\">\n                    <ion-icon name=\"md-create\" color=\"danger\"></ion-icon>\n                    <ion-label color=\"dark\">Editar</ion-label>\n                    </ion-tab-button>\n        \n                    <ion-tab-button (click)=\"deleteProduct(pro.idproducto)\">\n                        <ion-icon name=\"md-trash\" color=\"danger\"></ion-icon>\n                        <ion-label color=\"dark\">Eliminar</ion-label>\n                    </ion-tab-button>\n                </ion-item>\n            </ion-list>\n    </div>\n   </div>\n\n   <form *ngIf=\"showFormProduct;\" [formGroup]=\"registerProductForm\" (ngSubmit)=\"registerProduct()\">\n    <ion-item>\n         <ion-icon name=\"md-document\"></ion-icon>\n         <ion-label>Producto</ion-label>\n         <ion-input formControlName=\"name\" autocomplete=\"off\" type=\"text\"></ion-input>\n         <input type=\"hidden\" formControlName=\"idproducto\" >\n    </ion-item>\n\n     <ion-item *ngIf=\"name.hasError('required') && name.touched\">\n       <p>* El nombre del producto es requerido!</p>\n     </ion-item>\n\n     <br><br>\n       \n    <ion-item>\n       <ion-icon name=\"md-contact\"></ion-icon>\n       <ion-label>Precio</ion-label>\n       <ion-input formControlName=\"price\" autocomplete=\"off\" type=\"number\"></ion-input>\n     </ion-item>\n\n     <ion-item *ngIf=\"price.hasError('required') && price.touched\">\n      <p>* El precio es requerido!</p>\n    </ion-item>\n\n    <br><br>\n     \n     <ion-item>\n         <ion-icon name=\"md-people\"></ion-icon>\n         <ion-label>Catergoria</ion-label>\n         <ion-input formControlName=\"category\" autocomplete=\"off\" type=\"text\"></ion-input>\n     </ion-item>\n\n     <ion-item *ngIf=\"category.hasError('required') && category.touched\">\n       <p>*La categoria es requerida!</p>\n     </ion-item>\n\n     <br><br>\n     <ion-button  *ngIf=\"btnRegister\" [disabled]=\"!registerProductForm.valid\" expand=\"block\" fill=\"solid\" color=\"danger\" type=\"submit\">\n           <ion-label class=\"textcapitalize\">Acceptar</ion-label>\n     </ion-button>\n\n     <ion-button *ngIf=\"btnUpdate\" expand=\"block\" fill=\"solid\" color=\"danger\" type=\"submit\">\n       <ion-label class=\"textcapitalize\">Editar</ion-label>\n     </ion-button>\n   </form> \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/product/product.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/product/product.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvcHJvZHVjdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/product/product.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/product/product.page.ts ***!
  \***********************************************/
/*! exports provided: ProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPage", function() { return ProductPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/config-service */ "./src/app/services/config-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductPage = /** @class */ (function () {
    function ProductPage(productService, toastController, config, formBuilder, alertController) {
        this.productService = productService;
        this.toastController = toastController;
        this.config = config;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.showSpinner = false;
        this.showListProduct = false;
        this.btnRegister = false;
        this.btnUpdate = false;
        this.showFormProduct = false;
    }
    ProductPage.prototype.ngOnInit = function () {
    };
    ProductPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.page.html */ "./src/app/pages/product/product.page.html"),
            styles: [__webpack_require__(/*! ./product.page.scss */ "./src/app/pages/product/product.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], ProductPage);
    return ProductPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-product-product-module.js.map