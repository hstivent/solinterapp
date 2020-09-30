(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-principal-menu-principal-menu-module"],{

/***/ "./src/app/pages/principal-menu/principal-menu.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/principal-menu/principal-menu.module.ts ***!
  \***************************************************************/
/*! exports provided: PrincipalMenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalMenuPageModule", function() { return PrincipalMenuPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _principal_menu_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./principal-menu.page */ "./src/app/pages/principal-menu/principal-menu.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _principal_menu_page__WEBPACK_IMPORTED_MODULE_5__["PrincipalMenuPage"]
    }
];
var PrincipalMenuPageModule = /** @class */ (function () {
    function PrincipalMenuPageModule() {
    }
    PrincipalMenuPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_principal_menu_page__WEBPACK_IMPORTED_MODULE_5__["PrincipalMenuPage"]]
        })
    ], PrincipalMenuPageModule);
    return PrincipalMenuPageModule;
}());



/***/ }),

/***/ "./src/app/pages/principal-menu/principal-menu.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/principal-menu/principal-menu.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button>\n            <ion-icon class=\"size-menu\" name=\"menu\"></ion-icon>\n        </ion-menu-button>\n      </ion-buttons>\n\n      <ion-searchbar\n            mode=\"ios\"\n            show-cancel-button=\"true\"\n            cancel-button-text=\"Cancelar \"\n            (ionChange)=\"onSearch($event)\"\n            autocomplete=\"off\"\n            autocorrect=\"on\"\n            animated=\"true\"\n            spellcheck=\"true\"\n            type=\"text\"\n            placeholder=\"Busca ventas\"\n          >\n          </ion-searchbar>\n\n     </ion-toolbar>\n\n\n  </ion-header>\n  <ion-menu side=\"start\" menuId=\"custom\">\n      <ion-header>\n        <ion-toolbar color=\"primary\">\n          <ion-title>QuickSales</ion-title>\n        </ion-toolbar>\n\n\n      </ion-header>\n      <ion-content>\n          <ion-item>\n            <ion-avatar slot=\"start\">\n           \n            </ion-avatar>\n            <ion-label>\n              <h2>Hol</h2>\n              <p color=\"primary\">\n                <ion-icon name=\"md-at\"></ion-icon>\n               WELCOMW\n              </p>\n            </ion-label>\n          </ion-item>\n\n          <ion-item class=\"pointer padding-text\" (click)=\"pageCompany()\">\n            <ion-icon name=\"business\"></ion-icon>\n            <ion-label color=\"medium\">Empresas</ion-label>\n          </ion-item>\n\n          <!-- <ion-item class=\"pointer padding-text\" (click)=\"pageBuzon()\">\n            <ion-icon name=\"md-chatboxes\"></ion-icon>\n            <ion-label color=\"medium\"> Buzón de sugerencia</ion-label>\n          </ion-item>\n         -->\n          <ion-item class=\"pointer padding-text\" (click)=\"pageProducts()\">\n            <ion-icon name=\"person-add\"></ion-icon>\n            <ion-label color=\"medium\"> Usuarios </ion-label>\n          </ion-item>\n\n          <ion-item class=\"pointer padding-text\" (click)=\"pagePromocions()\">\n            <ion-icon name=\"gift\"></ion-icon>\n            <ion-label color=\"medium\">Promociones</ion-label>\n          </ion-item>\n\n          <ion-item class=\"pointer padding-text\">\n            <ion-icon name=\"keypad\"></ion-icon>\n            <ion-label color=\"medium\">Sucursales</ion-label>\n          </ion-item>\n\n          <ion-item class=\"pointer padding-text\" (click)=\"closeSesion()\">\n            <ion-icon name=\"md-log-out\"></ion-icon>\n            <ion-label color=\"medium\">Cerrar sesión</ion-label>\n          </ion-item>\n      </ion-content>\n    </ion-menu>\n\n    <ion-router-outlet main></ion-router-outlet>\n\n    <ion-content>\n        <h2 class=\"text-center\">Ventas por puntos</h2>\n        \n      </ion-content>\n\n\n    <ion-footer no-border>\n        <ion-toolbar color=\"m3d\">\n          <ion-tabs>\n            <ion-tab-bar slot=\"bottom\">\n              <!-- <ion-tab-button (click)=\"goHomePage()\">\n                <ion-icon color=\"medium\" name=\"md-home\"></ion-icon>\n                <ion-label color=\"medium\">Inicio</ion-label>\n              </ion-tab-button> -->\n\n              <ion-tab-button (click)=\"pagePoints()\">\n                <ion-icon color=\"medium\" name=\"compass\"></ion-icon>\n                <ion-label color=\"medium\">Puntos de Ventas</ion-label>\n              </ion-tab-button>\n\n              <ion-tab-button (click)=\"pageProducts()\">\n                <ion-icon color=\"medium\" name=\"md-pizza\"></ion-icon>\n                <ion-label color=\"medium\">Productos</ion-label>\n              </ion-tab-button>\n              <ion-tab-button (click)=\"pageAdds()\">\n                <ion-icon color=\"medium\" name=\"add-circle-outline\"></ion-icon>\n                <ion-label color=\"medium\">Adiciones</ion-label>\n              </ion-tab-button>\n              <ion-tab-button (click)=\"pageOrderPoint()\">\n                <ion-icon color=\"medium\" name=\"md-basket\"></ion-icon>\n                <ion-label color=\"medium\">Pedidos</ion-label>\n              </ion-tab-button>\n            </ion-tab-bar>\n          </ion-tabs>\n        </ion-toolbar>\n      </ion-footer>"

/***/ }),

/***/ "./src/app/pages/principal-menu/principal-menu.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/principal-menu/principal-menu.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-custom-menu {\n  --width: 500px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmR5Y2FpY2Vkby9Eb2N1bWVudHMvc29saW50ZXJhcHAvc3JjL2FwcC9wYWdlcy9wcmluY2lwYWwtbWVudS9wcmluY2lwYWwtbWVudS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFRLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcmluY2lwYWwtbWVudS9wcmluY2lwYWwtbWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktY3VzdG9tLW1lbnUge1xuICAgIC0td2lkdGg6IDUwMHB4O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/principal-menu/principal-menu.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/principal-menu/principal-menu.page.ts ***!
  \*************************************************************/
/*! exports provided: PrincipalMenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalMenuPage", function() { return PrincipalMenuPage; });
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


var PrincipalMenuPage = /** @class */ (function () {
    function PrincipalMenuPage(menu) {
        this.menu = menu;
    }
    PrincipalMenuPage.prototype.ngOnInit = function () {
    };
    PrincipalMenuPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-principal-menu',
            template: __webpack_require__(/*! ./principal-menu.page.html */ "./src/app/pages/principal-menu/principal-menu.page.html"),
            styles: [__webpack_require__(/*! ./principal-menu.page.scss */ "./src/app/pages/principal-menu/principal-menu.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"]])
    ], PrincipalMenuPage);
    return PrincipalMenuPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-principal-menu-principal-menu-module.js.map