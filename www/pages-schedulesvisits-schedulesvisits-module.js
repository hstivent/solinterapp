(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-schedulesvisits-schedulesvisits-module"],{

/***/ "./src/app/pages/schedulesvisits/schedulesvisits.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/schedulesvisits/schedulesvisits.module.ts ***!
  \*****************************************************************/
/*! exports provided: SchedulesvisitsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulesvisitsPageModule", function() { return SchedulesvisitsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _configuration_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../configuration/configuration */ "./src/app/configuration/configuration.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _schedulesvisits_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./schedulesvisits.page */ "./src/app/pages/schedulesvisits/schedulesvisits.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var config = { url: _configuration_configuration__WEBPACK_IMPORTED_MODULE_4__["configuration"].bussinesServer.url, options: {} };
var routes = [
    {
        path: '',
        component: _schedulesvisits_page__WEBPACK_IMPORTED_MODULE_7__["SchedulesvisitsPage"]
    }
];
var SchedulesvisitsPageModule = /** @class */ (function () {
    function SchedulesvisitsPageModule() {
    }
    SchedulesvisitsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__["SocketIoModule"].forRoot(config),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_schedulesvisits_page__WEBPACK_IMPORTED_MODULE_7__["SchedulesvisitsPage"]]
        })
    ], SchedulesvisitsPageModule);
    return SchedulesvisitsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/schedulesvisits/schedulesvisits.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/schedulesvisits/schedulesvisits.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-menu side=\"start\" menuId=\"menu\">\n    <ion-header>\n        <ion-toolbar color=\"primary\">\n            <ion-title>Sol-interApp</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ng-container *ngIf=\"typeuser == 1; else elseTemplate\">\n            <ion-item class=\"pointer padding-text\" (click)=\"pageVisit()\">\n                <ion-icon name=\"gift\"></ion-icon>\n                <ion-label color=\"medium\">Gestion de Visitas</ion-label>\n            </ion-item>\n            <ion-item class=\"pointer padding-text\" (click)=\"pageUser()\">\n                <ion-icon name=\"person-add\"></ion-icon>\n                <ion-label color=\"medium\"> Usuarios </ion-label>\n            </ion-item>\n            <ion-item class=\"pointer padding-text\" (click)=\"pageClient()\">\n                <ion-icon name=\"business\"></ion-icon>\n                <ion-label color=\"medium\">Empresas</ion-label>\n            </ion-item>\n        </ng-container>\n        <ng-template #elseTemplate>\n            <ion-item class=\"pointer padding-text\" (click)=\"pageVisit()\">\n                <ion-icon name=\"gift\"></ion-icon>\n                <ion-label color=\"medium\">Gestion de Visitas</ion-label>\n            </ion-item>\n        </ng-template>       \n        <ion-item class=\"pointer padding-text\" (click)=\"logout()\">\n            <ion-icon name=\"md-log-out\"></ion-icon>\n            <ion-label color=\"medium\">Cerrar sesión</ion-label>\n        </ion-item>\n    </ion-content>\n</ion-menu>\n\n<ion-router-outlet main></ion-router-outlet>\n<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button>\n                <ion-icon class=\"size-menu\" name=\"menu\"></ion-icon>\n            </ion-menu-button>\n        </ion-buttons>\n        <ion-searchbar mode=\"ios\" show-cancel-button=\"true\" cancel-button-text=\"Cancelar\" (ionChange)=\"onSearch($event)\"\n            autocomplete=\"off\" autocorrect=\"on\" animated=\"true\" spellcheck=\"true\" type=\"text\" ionBlur=\"\" color=\"ligth\"\n            placeholder=\"Buscar Visita\">\n        </ion-searchbar>\n        <ion-buttons slot=\"end\">\n            <ion-fab-button color=\"light\" (click)=\"addSchedule()\">\n                <ion-icon color=\"primary\" name=\"add\"></ion-icon>\n            </ion-fab-button>\n        </ion-buttons>\n\n    </ion-toolbar>\n</ion-header>\n<ion-content padding>\n    <ion-spinner *ngIf=\"showSpiner\" name=\"crescent\" [ngClass]=\"{'spiner': showSpiner}\"></ion-spinner>\n    <div *ngIf=\"showListSchedules\" [ngClass]=\"{'blur': showSpiner}\">\n        <ion-card *ngFor=\"let vit of listAllSchedules\">\n            <ion-item (click)=\"orderes(vit)\">\n                <ion-grid style=\"margin-left: 0px\">\n                    <ion-row>\n                        <ion-col size=\"12\">\n                            <span>Empresa: {{vit.client_name}}</span>\n                        </ion-col>\n                        <ion-col size=\"12\">\n                            <span>Numero de visitas: <ion-badge color=\"warning\">{{vit.visits}}</ion-badge></span>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n                <ion-button fill=\"outline\" slot=\"end\">Ver</ion-button>\n            </ion-item>\n        </ion-card>\n        <ion-card *ngIf=\"listAllSchedules == 0\" style=\"margin-top: 60%;height: 100px;align-items: center;\" >\n            <ion-card-title style=\"top: 40%;left: 16%;\">No tiene visitas pendientes</ion-card-title>\n        </ion-card>\n    </div>\n    <ion-fab *ngIf=\"listPenSchedules && listPenSchedules.length > 0\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button (click)=\"openModal()\" *ngIf=\"typeuser == 3\">\n            <ion-badge color=\"primary\">{{listPenSchedules.length}}</ion-badge>\n            <ion-icon name=\"calendar\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/schedulesvisits/schedulesvisits.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/schedulesvisits/schedulesvisits.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  background-color: grey; }\n\n.blur {\n  -webkit-filter: blur(5px);\n          filter: blur(5px); }\n\n.spiner {\n  position: fixed;\n  top: 40%;\n  left: 40%;\n  height: 100px;\n  width: 100px;\n  z-index: 100;\n  opacity: 0.5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmR5Y2FpY2Vkby9Eb2N1bWVudHMvc29saW50ZXJhcHAvc3JjL2FwcC9wYWdlcy9zY2hlZHVsZXN2aXNpdHMvc2NoZWR1bGVzdmlzaXRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUNKLEVBQUE7O0FBRUE7RUFDSSx5QkFBZ0I7VUFBaEIsaUJBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2NoZWR1bGVzdmlzaXRzL3NjaGVkdWxlc3Zpc2l0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5XG59XG5cbi5ibHVye1xuICAgIGZpbHRlcjpibHVyKDVweCk7XG59XG5cbi5zcGluZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNDAlO1xuICAgIGxlZnQ6IDQwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgb3BhY2l0eTogMC41O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/schedulesvisits/schedulesvisits.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/schedulesvisits/schedulesvisits.page.ts ***!
  \***************************************************************/
/*! exports provided: SchedulesvisitsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulesvisitsPage", function() { return SchedulesvisitsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_schedulesvisits_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/schedulesvisits.service */ "./src/app/services/schedulesvisits.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _schedule_modal_schedule_modal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../schedule-modal/schedule-modal.page */ "./src/app/pages/schedule-modal/schedule-modal.page.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _modal_section_modal_section_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../modal-section/modal-section.component */ "./src/app/pages/modal-section/modal-section.component.ts");
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














var SchedulesvisitsPage = /** @class */ (function () {
    function SchedulesvisitsPage(Scheduleservices, Modalctrl, Sc, formBuilder, router, dataService, storage, localNotifications, clientService, userService) {
        var _this = this;
        this.Scheduleservices = Scheduleservices;
        this.Modalctrl = Modalctrl;
        this.Sc = Sc;
        this.formBuilder = formBuilder;
        this.router = router;
        this.dataService = dataService;
        this.storage = storage;
        this.localNotifications = localNotifications;
        this.clientService = clientService;
        this.userService = userService;
        this.showSpiner = false;
        this.showListSchedules = false;
        this.showListScheduleso = false;
        this.showListClients = false;
        this.showFormSchedule = false;
        this.showFormSchedule2 = false;
        this.showFormScheduleo = false;
        this.btnRegister = false;
        this.btnAsigned = false;
        this.btnUpdate = false;
        this.show = false;
        this.newschedule().subscribe(function (schedule) {
            _this.storage.get("user").then(function (res) {
                if (res.user_usertype == 3) {
                    if (res.iduser == schedule.UserName2) {
                        _this.getClientNot(schedule);
                        var user = {
                            iduser: schedule.UserName2,
                            typeUser: schedule.type
                        };
                        _this.Scheduleservices.getSchedulesPen(user).subscribe(function (res) {
                            _this.listPenSchedules = res;
                        });
                    }
                }
            });
        });
        this.observe().subscribe(function (schedule) {
            _this.listSchedules();
        });
    }
    SchedulesvisitsPage.prototype.ngOnInit = function () {
        this.listClients();
        this.listUsers();
        this.listSchedules();
    };
    SchedulesvisitsPage.prototype.openModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Modalctrl.create({
                            component: _schedule_modal_schedule_modal_page__WEBPACK_IMPORTED_MODULE_9__["ScheduleModalPage"],
                            componentProps: {
                                visits: this.listPenSchedules
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SchedulesvisitsPage.prototype.getClientNot = function (client) {
        var _this = this;
        this.clientService.getClient(client.ClientName2).subscribe(function (res) {
            var data = { client: client, res: res };
            _this.newNotification(data);
        });
    };
    SchedulesvisitsPage.prototype.newNotification = function (data) {
        for (var i = 0; i < data.res.length; i++) {
            var e = data.res[i];
            this.localNotifications.schedule({
                id: 1,
                title: "nueva visita a " + e.client_name + "",
                text: data.client.DescSchedule2,
                sound: "file://sound.mp3",
                data: data
            });
        }
    };
    SchedulesvisitsPage.prototype.listSchedules = function () {
        var _this = this;
        this.storage.get("user").then(function (res) {
            if (res != null) {
                _this.typeuser = res.user_usertype;
                _this.user = { iduser: res.iduser, typeUser: res.user_usertype };
            }
            else {
                _this.typeuser = _this.dataService.storage.user_usertype;
                _this.user = {
                    iduser: _this.dataService.storage.iduser,
                    typeUser: _this.dataService.storage.role
                };
            }
            _this.showSpiner = true;
            _this.Scheduleservices.getSchedules(_this.user).subscribe(function (res) {
                _this.listAllSchedules = res;
                _this.showListSchedules = true;
                _this.showSpiner = false;
            });
            if (_this.typeuser == 3) {
                _this.Scheduleservices.getSchedulesPen(_this.user).subscribe(function (res) {
                    _this.listPenSchedules = res;
                });
            }
        });
    };
    SchedulesvisitsPage.prototype.listClients = function () {
        var _this = this;
        this.clientService.getClients().subscribe(function (res) {
            _this.showListSchedules = true;
            _this.listAllClients = res;
        });
    };
    SchedulesvisitsPage.prototype.listUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (res) {
            _this.showListSchedules = true;
            _this.listAllUsers = res;
        });
    };
    SchedulesvisitsPage.prototype.newschedule = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Observable"](function (observer) {
            _this.Sc.on("newschedule", function (schedule) {
                observer.next(schedule);
            });
        });
        return observable;
    };
    SchedulesvisitsPage.prototype.observe = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Observable"](function (observer) {
            _this.Sc.on("schedule", function (schedule) {
                observer.next(schedule);
            });
        });
        return observable;
    };
    SchedulesvisitsPage.prototype.addSchedule = function () {
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
                                component: _modal_section_modal_section_component__WEBPACK_IMPORTED_MODULE_13__["ModalSectionComponent"],
                                componentProps: {
                                    typeuser: this.typeuser,
                                    type: 1
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (res) {
                            if (res.data !== null) {
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SchedulesvisitsPage.prototype.resetForm = function (form) {
        if (form) {
            form.reset();
        }
    };
    SchedulesvisitsPage.prototype.editSchedule = function (schedule) {
        this.showSpiner = true;
        this.showListSchedules = false;
        this.showFormSchedule = true;
        this.registerScheduleForm.setValue({
            idSchedule: schedule.schedule_id,
            ClientName: schedule.client_clientid,
            DescSchedule: schedule.descrioption,
            //   UserName:schedule.user_userid,
            ScheduleDate: schedule.datevisit,
            ScheduleTime: schedule.timevisit
        });
        this.showSpiner = false;
        this.btnUpdate = true;
        this.btnRegister = false;
        this.btnAsigned = false;
    };
    SchedulesvisitsPage.prototype.pageClient = function () {
        this.router.navigate(["/clients"]);
    };
    SchedulesvisitsPage.prototype.pageMaterial = function () {
        this.router.navigate(["/materials"]);
    };
    SchedulesvisitsPage.prototype.pageUser = function () {
        this.router.navigate(["/user"]);
    };
    SchedulesvisitsPage.prototype.pageVisit = function () {
        this.router.navigate(["/schedulesvisits"]);
    };
    SchedulesvisitsPage.prototype.orderes = function (data) {
        this.showSpiner = true;
        this.dataService.schedules = {
            client: data.idclient,
            clientName: data.client_name,
            id: data.schedule_id
        };
        this.showListScheduleso = true;
        this.showSpiner = false;
        this.router.navigate(["/visits"]);
    };
    SchedulesvisitsPage.prototype.logout = function () {
        var _this = this;
        this.storage.remove("user").then(function (res) {
            _this.router.navigate(["/login"]);
        });
    };
    SchedulesvisitsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-schedulesvisits",
            template: __webpack_require__(/*! ./schedulesvisits.page.html */ "./src/app/pages/schedulesvisits/schedulesvisits.page.html"),
            styles: [__webpack_require__(/*! ./schedulesvisits.page.scss */ "./src/app/pages/schedulesvisits/schedulesvisits.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_schedulesvisits_service__WEBPACK_IMPORTED_MODULE_1__["SchedulesvisitsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"],
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_12__["LocalNotifications"],
            _services_client_service__WEBPACK_IMPORTED_MODULE_6__["ClientService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
    ], SchedulesvisitsPage);
    return SchedulesvisitsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-schedulesvisits-schedulesvisits-module.js.map