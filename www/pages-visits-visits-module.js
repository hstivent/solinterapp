(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-visits-visits-module"],{

/***/ "./src/app/pages/visits/visits.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/visits/visits.module.ts ***!
  \***********************************************/
/*! exports provided: VisitsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitsPageModule", function() { return VisitsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _visits_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visits.page */ "./src/app/pages/visits/visits.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _visits_page__WEBPACK_IMPORTED_MODULE_5__["VisitsPage"]
    }
];
var VisitsPageModule = /** @class */ (function () {
    function VisitsPageModule() {
    }
    VisitsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_visits_page__WEBPACK_IMPORTED_MODULE_5__["VisitsPage"]]
        })
    ], VisitsPageModule);
    return VisitsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/visits/visits.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/visits/visits.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-menu side=\"start\" menuId=\"custom\">\n  <ion-header>\n      <ion-toolbar color=\"primary\">\n          <ion-title>Sol-interApp</ion-title>\n      </ion-toolbar>\n  </ion-header>\n  <ion-content>\n      <ng-container *ngIf=\"typeuser == 1; else elseTemplate\">\n          <ion-item class=\"pointer padding-text\" (click)=\"pageVisit()\">\n              <ion-icon name=\"gift\"></ion-icon>\n              <ion-label color=\"medium\">Gestion de Visitas</ion-label>\n          </ion-item>\n          <ion-item class=\"pointer padding-text\" (click)=\"pageUser()\">\n              <ion-icon name=\"person-add\"></ion-icon>\n              <ion-label color=\"medium\"> Usuarios </ion-label>\n          </ion-item>\n          <ion-item class=\"pointer padding-text\" (click)=\"pageClient()\">\n              <ion-icon name=\"business\"></ion-icon>\n              <ion-label color=\"medium\">Empresas</ion-label>\n          </ion-item>\n      </ng-container>\n      <ng-template #elseTemplate>\n          <ion-item class=\"pointer padding-text\" (click)=\"pageVisit()\">\n              <ion-icon name=\"gift\"></ion-icon>\n              <ion-label color=\"medium\">Gestion de Visitas</ion-label>\n          </ion-item>\n      </ng-template>       \n      <ion-item class=\"pointer padding-text\" (click)=\"logout()\">\n          <ion-icon name=\"md-log-out\"></ion-icon>\n          <ion-label color=\"medium\">Cerrar sesión</ion-label>\n      </ion-item>\n  </ion-content>\n</ion-menu>\n\n<ion-router-outlet main></ion-router-outlet>\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/schedulesvisits\"></ion-back-button>\n    </ion-buttons>\n    <ion-title> {{ clientName }} </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <ion-spinner *ngIf=\"showSpiner\" name=\"crescent\" [ngClass]=\"{'spiner': showSpiner}\"></ion-spinner>\n  <div *ngIf=\"showListSchedules\" [ngClass]=\"{'blur': showSpiner}\">\n      <ion-card *ngFor=\"let vit of listAllSchedules\">\n          <ion-item >\n              <ion-grid style=\"margin-left: 0px\">\n                  <ion-row>\n                      <ion-col size=\"12\">\n                          <label><strong>{{vit.descrioption}}</strong></label>\n                          <ion-badge *ngIf=\"vit.schedule_status === 'activo'\" color=\"warning\">{{vit.schedule_status}}</ion-badge>\n                          <ion-badge *ngIf=\"vit.schedule_status === 'pendiente'\" color=\"danger\">{{vit.schedule_status}}</ion-badge>\n                          <ion-badge *ngIf=\"vit.schedule_status === 'terminado'\" color=\"success\">{{vit.schedule_status}}</ion-badge>\n                      </ion-col>\n                      <ion-col size=\"12\">\n                          <span>Empresa: {{vit.client_name}}</span>\n                      </ion-col>\n                      <ion-col size=\"12\" *ngIf=\"typeuser==1\">\n                          <span>Encargado: {{vit.user_name}}</span>\n                      </ion-col>\n                      <ion-col size=\"12\">\n                          <span>Fecha: {{vit.datevisit}}</span>\n                      </ion-col>\n                  </ion-row>\n              </ion-grid>\n              <ion-button fill=\"outline\" (click)=\"orderes(vit)\" slot=\"end\">Ver</ion-button>\n          </ion-item>\n      </ion-card>\n      <ion-card *ngIf=\"listAllSchedules == 0\" style=\"margin-top: 60%;height: 100px;align-items: center;\" >\n          <ion-card-title style=\"top: 40%;left: 16%;\">No tiene visitas pendientes</ion-card-title>\n      </ion-card>\n  </div>\n  <ion-fab *ngIf=\"listPenSchedules && listPenSchedules.length > 0\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button (click)=\"openModal()\" *ngIf=\"typeuser == 3\">\n          <ion-badge color=\"primary\">{{listPenSchedules.length}}</ion-badge>\n          <ion-icon name=\"calendar\"></ion-icon>\n      </ion-fab-button>\n  </ion-fab>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/visits/visits.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/visits/visits.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  background-color: grey; }\n\n.blur {\n  -webkit-filter: blur(5px);\n          filter: blur(5px); }\n\n.spiner {\n  position: fixed;\n  top: 40%;\n  left: 40%;\n  height: 100px;\n  width: 100px;\n  z-index: 100;\n  opacity: 0.5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmR5Y2FpY2Vkby9Eb2N1bWVudHMvc29saW50ZXJhcHAvc3JjL2FwcC9wYWdlcy92aXNpdHMvdmlzaXRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUNKLEVBQUE7O0FBRUE7RUFDSSx5QkFBZ0I7VUFBaEIsaUJBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdmlzaXRzL3Zpc2l0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5XG59XG5cbi5ibHVye1xuICAgIGZpbHRlcjpibHVyKDVweCk7XG59XG5cbi5zcGluZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNDAlO1xuICAgIGxlZnQ6IDQwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgb3BhY2l0eTogMC41O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/visits/visits.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/visits/visits.page.ts ***!
  \*********************************************/
/*! exports provided: VisitsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitsPage", function() { return VisitsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_schedulesvisits_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/schedulesvisits.service */ "./src/app/services/schedulesvisits.service.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var VisitsPage = /** @class */ (function () {
    function VisitsPage(storage, Scheduleservices, Modalctrl, router, dataServiceSchedule, clientService, userService) {
        this.storage = storage;
        this.Scheduleservices = Scheduleservices;
        this.Modalctrl = Modalctrl;
        this.router = router;
        this.dataServiceSchedule = dataServiceSchedule;
        this.clientService = clientService;
        this.userService = userService;
        this.showSpiner = false;
        this.showListScheduleso = false;
        this.showListSchedules = false;
    }
    VisitsPage.prototype.ngOnInit = function () {
        this.listSchedules();
        this.clientName = this.dataServiceSchedule.schedules.clientName;
    };
    VisitsPage.prototype.listSchedules = function () {
        var _this = this;
        this.storage.get("user").then(function (res) {
            if (res != null) {
                _this.typeuser = res.user_usertype;
                _this.query = {
                    iduser: res.iduser,
                    typeUser: res.user_usertype,
                    clientid: _this.dataServiceSchedule.schedules.client
                };
            }
            else {
                _this.typeuser = _this.dataServiceSchedule.storage.user_usertype;
                _this.query = {
                    iduser: _this.dataServiceSchedule.storage.iduser,
                    typeUser: _this.dataServiceSchedule.storage.role,
                    clientid: _this.dataServiceSchedule.schedules.client
                };
            }
            _this.showSpiner = true;
            _this.Scheduleservices.getSchedulesClient(_this.query).subscribe(function (res) {
                _this.listAllSchedules = res;
                _this.showListSchedules = true;
                _this.showSpiner = false;
            });
        });
    };
    VisitsPage.prototype.orderes = function (data) {
        this.showSpiner = true;
        this.dataServiceSchedule.schedules = {
            client: data.idclient,
            clientName: data.client_name,
            id: data.schedule_id
        };
        this.showSpiner = false;
        this.router.navigate(["/listschedule"]);
    };
    VisitsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-visits",
            template: __webpack_require__(/*! ./visits.page.html */ "./src/app/pages/visits/visits.page.html"),
            styles: [__webpack_require__(/*! ./visits.page.scss */ "./src/app/pages/visits/visits.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            src_app_services_schedulesvisits_service__WEBPACK_IMPORTED_MODULE_1__["SchedulesvisitsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            src_app_services_client_service__WEBPACK_IMPORTED_MODULE_6__["ClientService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
    ], VisitsPage);
    return VisitsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-visits-visits-module.js.map