(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-listschedule-listschedule-module"],{

/***/ "./src/app/pages/listschedule/listschedule.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/listschedule/listschedule.module.ts ***!
  \***********************************************************/
/*! exports provided: ListschedulePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListschedulePageModule", function() { return ListschedulePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _listschedule_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listschedule.page */ "./src/app/pages/listschedule/listschedule.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _listschedule_page__WEBPACK_IMPORTED_MODULE_5__["ListschedulePage"]
    }
];
var ListschedulePageModule = /** @class */ (function () {
    function ListschedulePageModule() {
    }
    ListschedulePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_listschedule_page__WEBPACK_IMPORTED_MODULE_5__["ListschedulePage"]]
        })
    ], ListschedulePageModule);
    return ListschedulePageModule;
}());



/***/ }),

/***/ "./src/app/pages/listschedule/listschedule.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/listschedule/listschedule.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/schedulesvisits\"></ion-back-button>\n    </ion-buttons>\n    <ion-title> {{ clientName }} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-fab-button color=\"light\" (click)=\"addSection()\">\n        <ion-icon color=\"primary\" name=\"add\" style=\"color:white\"></ion-icon>\n      </ion-fab-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card *ngFor=\"let item of listshowClient\">\n    <ion-card-header>\n      <ion-card-subtitle>{{item.client_nit}}</ion-card-subtitle>\n      <ion-card-title>{{item.client_name}}</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n  <div *ngIf=\"listAllScheduleso && listAllScheduleso.length > 0\">\n    <ion-card>\n      <ion-card-header>\n        Secciones\n      </ion-card-header>\n      <ion-list>\n        <ion-item *ngFor=\"let so of listAllScheduleso\" (click)=\"serviceorder(so)\">\n          <ion-grid style=\"margin-left: 0px\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <label><strong>{{so.section_name.toUpperCase()}}</strong></label>\n              </ion-col>\n              <ion-col size=\"12\">\n                <span>{{ so.section_descrip }}</span>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-list>\n    </ion-card>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/listschedule/listschedule.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/listschedule/listschedule.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imgclient {\n  display: block;\n  width: 100%;\n  max-height: 180px;\n  padding-left: 50px;\n  padding-right: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmR5Y2FpY2Vkby9Eb2N1bWVudHMvc29saW50ZXJhcHAvc3JjL2FwcC9wYWdlcy9saXN0c2NoZWR1bGUvbGlzdHNjaGVkdWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpc3RzY2hlZHVsZS9saXN0c2NoZWR1bGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZ2NsaWVudCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTgwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/listschedule/listschedule.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/listschedule/listschedule.page.ts ***!
  \*********************************************************/
/*! exports provided: ListschedulePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListschedulePage", function() { return ListschedulePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_schedulesvisits_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/schedulesvisits.service */ "./src/app/services/schedulesvisits.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _section_modal_section_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../section-modal/section-modal.component */ "./src/app/pages/section-modal/section-modal.component.ts");
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







var ListschedulePage = /** @class */ (function () {
    function ListschedulePage(Scheduleservices, dataServiceSchedule, Modalctrl, storage, router) {
        this.Scheduleservices = Scheduleservices;
        this.dataServiceSchedule = dataServiceSchedule;
        this.Modalctrl = Modalctrl;
        this.storage = storage;
        this.router = router;
        this.showSpinner = false;
        this.showListScheduleso = false;
        this.showFormSchedule = false;
        this.showFormScheduleo = false;
        this.showClient = false;
        this.showClientImg = false;
    }
    ListschedulePage.prototype.ngOnInit = function () {
        this.getOrders();
        this.clientName = this.dataServiceSchedule.schedules.clientName;
    };
    ListschedulePage.prototype.getOrders = function () {
        var _this = this;
        this.showSpinner = true;
        this.Scheduleservices.getSection(this.dataServiceSchedule.schedules.id).subscribe(function (res) {
            _this.showListScheduleso = true;
            _this.listAllScheduleso = res;
            _this.showSpinner = false;
        });
    };
    ListschedulePage.prototype.serviceorder = function (data) {
        this.showSpinner = true;
        this.dataServiceSchedule.sorder = {
            client: this.dataServiceSchedule.schedules.client,
            clientNam: this.dataServiceSchedule.schedules.clientName,
            id_visit: data.id_schedule,
            id_section: data.idsection
        };
        this.showSpinner = false;
        this.router.navigate(["/serviceorder"]);
    };
    ListschedulePage.prototype.addSection = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.storage.get("user").then(function (res) {
                            _this.typeuser = res.user_usertype;
                        });
                        return [4 /*yield*/, this.Modalctrl.create({
                                component: _section_modal_section_modal_component__WEBPACK_IMPORTED_MODULE_6__["SectionModalComponent"],
                                componentProps: {
                                    id: this.dataServiceSchedule.schedules.id,
                                    typeuser: this.typeuser,
                                    type: 1
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (res) {
                            if (res.data !== null) {
                                _this.getOrders();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ListschedulePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-listschedule",
            template: __webpack_require__(/*! ./listschedule.page.html */ "./src/app/pages/listschedule/listschedule.page.html"),
            styles: [__webpack_require__(/*! ./listschedule.page.scss */ "./src/app/pages/listschedule/listschedule.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_schedulesvisits_service__WEBPACK_IMPORTED_MODULE_1__["SchedulesvisitsService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListschedulePage);
    return ListschedulePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-listschedule-listschedule-module.js.map