(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"]
                    }
                ])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <!-- <ion-menu-button>\n          <ion-icon class=\"icon-size\" color=\"medium\" name=\"md-contact\"></ion-icon>\n        </ion-menu-button> -->\n\n        <ion-buttons slot=\"start\">\n          <ion-tab-button (click)=\"closeSesion()\">\n            <ion-icon name=\"md-log-out\"></ion-icon>\n            <ion-label color=\"danger\">Cerrar sesión</ion-label>\n          </ion-tab-button>\n        </ion-buttons>\n\n\n        <ion-label>\n           Total Ventas \n           <ion-badge color=\"danger\"> <h2>{{ totalVenta + totaAdicional | currency:'$' }}</h2> </ion-badge>\n        </ion-label>\n      </ion-buttons>\n  \n      <ion-buttons slot=\"end\">\n        <ion-tab-button (click)=\"cargarVentas()\">\n          <ion-badge color=\"danger\" *ngIf=\"showListVentasByDay && showListVentasByDay.length > 0\">{{showListVentasByDay.length}}</ion-badge>\n          <ion-icon class=\"icon-size2\" color=\"medium\" name=\"md-calculator\"></ion-icon>\n        </ion-tab-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-menu>\n    <ion-text class=\"padding-text\" text-center color=\"danger\">Gestion de Poyectos</ion-text>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <ion-icon class=\"icon-user\" color=\"danger\" name=\"person\"></ion-icon>\n      </ion-avatar>\n      <ion-label>\n        <h2>{{ nombre }} </h2>\n        <p color=\"primary\">\n            <ion-icon name=\"md-at\"></ion-icon>\n             {{ nombrecompleto }}\n        </p>\n      </ion-label>\n    </ion-item>\n  \n   \n    <ion-item class=\"pointer\" (click)=\"pageProfile()\">\n        <ion-icon name=\"md-cog\"></ion-icon>\n        <ion-label color=\"danger\">Ajustes de mi cuenta</ion-label>\n    </ion-item>\n  \n    <ion-item class=\"pointer\" (click)=\"pageBuzon()\">\n        <ion-icon name=\"md-chatboxes\"></ion-icon>\n        <ion-label color=\"danger\"> Buzón de sugerencia</ion-label>\n    </ion-item>\n  \n    <ion-item class=\"pointer\" (click)=\"pageHelp()\">\n      <ion-icon name=\"md-help-buoy\"></ion-icon>\n      <ion-label color=\"danger\"> Centro de ayuda</ion-label>\n    </ion-item>\n  \n    <ion-item class=\"pointer\" (click)=\"pageProveedores()\">\n        <ion-icon name=\"md-star-outline\"></ion-icon>\n        <ion-label color=\"danger\">Proveedores</ion-label>\n    </ion-item>\n  \n    <ion-item class=\"pointer\" (click)=\"pageTermConditions()\">\n      <ion-icon name=\"md-lock\"></ion-icon>\n      <ion-label color=\"danger\"> Terminos y condiciones</ion-label>\n    </ion-item>\n  \n    <ion-item class=\"pointer\" (click)=\"closeSesion()\">\n      <ion-icon name=\"md-log-out\"></ion-icon>\n      <ion-label color=\"danger\">Cerrar sesión</ion-label>\n    </ion-item>\n  </ion-menu>\n  \n  <ion-router-outlet main></ion-router-outlet>\n  \n  <ion-content>\n\n      <div text-center *ngIf=\"showSpinner;\">\n          <ion-spinner name=\"lines\"></ion-spinner>\n      </div>\n\n      <div *ngIf=\"showListPtv;\">\n          <div *ngIf=\"listAllPtvs && listAllPtvs.length > 0\">\n                  <ion-list *ngFor=\"let ptv of listAllPtvs\">\n                      <ion-list-header>\n                        <ion-label>{{ ptv.nombre }}</ion-label>\n                      </ion-list-header>\n                      <ion-item>\n                          <!-- <ion-label>\n                            {{ ptv.nombre }}\n                          </ion-label> -->\n                          <ion-label>\n                               <ion-badge color=\"danger\"> {{ ptv.estado }} </ion-badge>\n                          </ion-label> \n\n                          <ion-tab-button (click)=\"getUsuarioByPoint(ptv)\">\n                              <ion-icon color=\"medium\" name=\"people\"></ion-icon>\n                              <ion-label>Encargado</ion-label>\n                          </ion-tab-button>\n\n                          <ion-tab-button (click)=\"verPtv(ptv)\">\n                            <ion-icon color=\"medium\" name=\"search\"></ion-icon>\n                            <ion-label>Ver Ventas </ion-label>\n                          </ion-tab-button>\n\n                          <!-- <ion-tab-button (click)=\"verPtv(ptv)\">\n                              <ion-icon color=\"medium\" name=\"bicycle\"></ion-icon>\n                              <ion-label>Domicilios</ion-label>\n                          </ion-tab-button> -->\n                       </ion-item>\n                  </ion-list>\n          </div>\n      </div>\n\n      <div *ngIf=\"showUserPoint;\">\n        <ion-tab-button (click)=\"regresar()\">\n          <ion-icon name=\"return-left\" color=\"medium\"></ion-icon>\n          <ion-label>Regresar</ion-label>\n        </ion-tab-button>\n        \n        <ion-list>\n              <ion-list-header>\n                <ion-label>Punto de venta: {{ nmPtv }}</ion-label>\n              </ion-list-header>\n              <ion-item>\n                  <ion-label>Nombre: {{ listDataUserPoint.nombrecompleto }}</ion-label>\n              </ion-item>\n              <ion-item>\n                  <ion-label>\n                     Usuario: {{ listDataUserPoint.nombre }}\n                  </ion-label> \n              </ion-item>\n\n              <ion-item>\n                  <ion-label>\n                    Documento: {{ listDataUserPoint.identificacion }}\n                  </ion-label> \n              </ion-item>\n              <ion-item>\n                  <ion-label>\n                      Celular: {{ listDataUserPoint.telefono }}\n                  </ion-label> \n              </ion-item>\n              <ion-item>\n                  <ion-label>\n                     Rol: <ion-badge color=\"danger\"> {{ listDataUserPoint.rol }} </ion-badge>\n                  </ion-label> \n              </ion-item>\n          </ion-list>\n     </div>\n\n      <div *ngIf=\"showViewVentasByPuntoByDay\">\n          <ion-tab-button (click)=\"regresar()\">\n              <ion-icon name=\"return-left\" color=\"medium\"></ion-icon>\n              <ion-label>Regresar</ion-label>\n          </ion-tab-button>\n\n          <ion-searchbar\n          mode=\"ios\"\n          show-cancel-button=\"true\"\n          cancel-button-text=\"Cancelar\"\n          (ionChange)=\"onSearchProductoVenta($event)\"\n          autocomplete=\"off\"\n          autocorrect=\"on\"\n          animated=\"true\" \n          spellcheck=\"true\"\n          type=\"text\"\n          ionBlur=\"\"\n          placeholder=\"Buscar producto\">\n        </ion-searchbar>\n\n        <div text-center *ngIf=\"showSpinner;\">\n            <ion-spinner name=\"lines\"></ion-spinner>\n        </div>\n\n          <div *ngIf=\"showListVentasByPuntoByDay && showListVentasByPuntoByDay.length > 0\">\n              <ion-item>\n                  <ion-label>Punto de Venta: {{nombrePuntoVenta}}</ion-label>\n              </ion-item>\n\n              <ion-item>\n                  <ion-label> \n                    Total Venta: \n                    <ion-badge color=\"danger\"> {{ totalVentaProductosPunto | currency:'$' }} </ion-badge> \n                  </ion-label>\n              </ion-item>\n\n              <ion-list *ngFor=\"let vt of showListVentasByPuntoByDay; index as i\">\n                 <ion-list-header>\n                     <ion-label>\n                        <!-- <ion-badge color=\"info\">{{ i+1 }}</ion-badge> -->\n                         {{ vt.nombre }}\n                        <!-- <ion-badge color=\"danger\">{{ vt.cantidad }}</ion-badge> -->\n                      </ion-label>\n                   </ion-list-header>\n                 <ion-item>\n                      <ion-label>\n                        Cnt: <ion-badge color=\"danger\">{{ vt.cantidad }}</ion-badge> \n                      </ion-label>\n                      \n                      <ion-label>\n                          {{ vt.total | currency:'$'}}\n                      </ion-label>\n\n                        <ion-tab-button (click)=\"viewDetalle(vt)\">\n                           <ion-icon name=\"md-search\" color=\"medium\"></ion-icon>\n                           <ion-label>Detalle</ion-label>\n                       </ion-tab-button>\n                       <!--ion-tab-button (click)=\"viewPreparacion(vt)\">\n                           <ion-icon name=\"md-search\" color=\"medium\"></ion-icon>\n                           <ion-label>Detalle</ion-label>\n                       </ion-tab-button-->\n                 </ion-item>\n               </ion-list>\n\n               \n           </div>\n      </div> \n\n      <div *ngIf=\"showDetalle;\">\n          <ion-tab-button (click)=\"regresarAllVentas()\">\n            <ion-icon name=\"return-left\" color=\"medium\"></ion-icon>\n            <ion-label>Regresar</ion-label>\n          </ion-tab-button>\n  \n          <ion-list>\n                <ion-list-header>\n                  <ion-label>Producto: {{ getVentaDetalle.nombre }}</ion-label>\n                </ion-list-header>\n                <ion-item>\n                    <ion-label>Cantidad: {{ getVentaDetalle.cantidad }}</ion-label>\n                </ion-item>\n                <ion-item>\n                    <ion-label>\n                       Precio: {{ getVentaDetalle.precio | currency:'$' }}\n                    </ion-label> \n                </ion-item>\n  \n                <ion-item>\n                    <ion-label>\n                      Total: {{ getVentaDetalle.total | currency:'$' }}\n                    </ion-label> \n                </ion-item>\n\n                <ion-item>\n                    <ion-label>\n                      Fecha: {{ getVentaDetalle.fregistro }}\n                    </ion-label> \n                </ion-item>\n\n                <ion-item>\n                    <ion-label>\n                      Hora: {{ getVentaDetalle.hora }}\n                    </ion-label> \n                </ion-item>\n                <ion-item>\n                    <ion-label>\n                      Responsable: {{ getVentaDetalle.usuario }}\n                    </ion-label> \n                </ion-item>\n                <ion-item>\n                    <ion-label>\n                       Vendido en: <ion-badge color=\"danger\"> {{ getVentaDetalle.ptv }} </ion-badge>\n                    </ion-label> \n                </ion-item>\n            </ion-list>\n       </div>\n\n  </ion-content>\n  \n  <ion-footer no-border>\n      <ion-toolbar color=\"m3d\">\n        <ion-tabs>\n            <ion-tab-bar slot=\"bottom\">\n              <ion-tab-button (click)=\"goHomePage()\">\n                <ion-icon color=\"danger\" name=\"md-home\"></ion-icon>\n                <ion-label color=\"medium\">Inicio</ion-label>\n              </ion-tab-button>\n  \n              <ion-tab-button (click)=\"pagePuntos()\">\n                <ion-icon color=\"danger\" name=\"pin\"></ion-icon>\n                <ion-label color=\"medium\">Puntos</ion-label>\n              </ion-tab-button>\n  \n              <ion-tab-button (click)=\"pagePromociones()\">\n                <ion-icon color=\"danger\" name=\"md-cart\"></ion-icon>\n                <ion-label color=\"medium\">Promociones</ion-label>\n             </ion-tab-button>\n          \n              <ion-tab-button (click)=\"pageProducts()\">\n                  <ion-icon color=\"danger\" name=\"md-pizza\"></ion-icon>\n                  <ion-label color=\"medium\">Productos</ion-label>\n              </ion-tab-button>\n  \n  \n              <ion-tab-button (click)=\"pageUsers()\">\n                <ion-icon color=\"danger\" name=\"md-contacts\"></ion-icon>\n                <ion-label color=\"medium\">Usuarios</ion-label>\n              </ion-tab-button>\n            </ion-tab-bar>\n          </ion-tabs>\n      </ion-toolbar>\n  </ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.icon-size {\n  zoom: 1.8; }\n\n.icon-size2 {\n  zoom: 1.3; }\n\n.icon-user {\n  zoom: 3; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmR5Y2FpY2Vkby9Eb2N1bWVudHMvc29saW50ZXJhcHAvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFNBQVEsRUFBQTs7QUFHVjtFQUNFLFNBQVEsRUFBQTs7QUFHVjtFQUNFLE9BQU0sRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaWNvbi1zaXple1xuICB6b29tOjEuODsgXG59XG5cbi5pY29uLXNpemUye1xuICB6b29tOjEuMzsgXG59XG5cbi5pY29uLXVzZXJ7XG4gIHpvb206MzsgXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/config-service */ "./src/app/services/config-service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_ventas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/ventas-service */ "./src/app/services/ventas-service.ts");
/* harmony import */ var _services_puntoventa_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/puntoventa.service */ "./src/app/services/puntoventa.service.ts");
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/usuarios.service */ "./src/app/services/usuarios.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = /** @class */ (function () {
    function HomePage(formBuilder, data, ventasService, usuarioService, puntoVentaService, config, router, toastController, loadingController) {
        this.formBuilder = formBuilder;
        this.data = data;
        this.ventasService = ventasService;
        this.usuarioService = usuarioService;
        this.puntoVentaService = puntoVentaService;
        this.config = config;
        this.router = router;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.dateNow = new Date();
        this.showSpinner = false;
        this.showListPtv = false;
        this.showUserPoint = false;
        this.showDetalle = false;
        this.showBack = true;
        this.showViewVentasByPuntoByDay = false;
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _services_ventas_service__WEBPACK_IMPORTED_MODULE_6__["VentasService"],
            _services_usuarios_service__WEBPACK_IMPORTED_MODULE_8__["UsuariosService"],
            _services_puntoventa_service__WEBPACK_IMPORTED_MODULE_7__["PuntoventaService"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/services/puntoventa.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/puntoventa.service.ts ***!
  \************************************************/
/*! exports provided: PuntoventaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuntoventaService", function() { return PuntoventaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-service */ "./src/app/services/config-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PuntoventaService = /** @class */ (function () {
    function PuntoventaService(http, config) {
        this.http = http;
        this.config = config;
        this.URL_API = this.config.getConfig().bussinesServer.url;
    }
    PuntoventaService.prototype.getPtvs = function () {
        return this.http.get(this.URL_API + "/ptv");
    };
    PuntoventaService.prototype.searchsPtv = function (nameProduct) {
        return this.http.post(this.URL_API + "/ptv/search", nameProduct);
    };
    PuntoventaService.prototype.registerPtvs = function (nameProduct) {
        return this.http.post(this.URL_API + "/ptv/create", nameProduct);
    };
    PuntoventaService.prototype.putPtvs = function (product) {
        return this.http.put(this.URL_API + ("/ptv/" + product._id), product);
    };
    PuntoventaService.prototype.deletePtvs = function (_id) {
        return this.http.delete(this.URL_API + "/ptv" + ("/" + _id));
    };
    PuntoventaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], PuntoventaService);
    return PuntoventaService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map