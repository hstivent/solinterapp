(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-category-category-module"],{

/***/ "./src/app/pages/category/category.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/category/category.module.ts ***!
  \***************************************************/
/*! exports provided: CategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function() { return CategoryPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category.page */ "./src/app/pages/category/category.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _category_page__WEBPACK_IMPORTED_MODULE_5__["CategoryPage"]
    }
];
var CategoryPageModule = /** @class */ (function () {
    function CategoryPageModule() {
    }
    CategoryPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_category_page__WEBPACK_IMPORTED_MODULE_5__["CategoryPage"]]
        })
    ], CategoryPageModule);
    return CategoryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/category/category.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/category/category.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\"> \n          <ion-back-button defaultHref=\"/home\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Gestión de materiales</ion-title>\n\n      <ion-buttons slot=\"end\">\n          <ion-fab-button color=\"danger\" (click)=\"addCategory()\">\n          <ion-icon name=\"add\"></ion-icon>\n          </ion-fab-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <ion-searchbar\n  mode=\"ios\"\n  show-cancel-button=\"true\"\n  cancel-button-text=\"Cancelar\"\n  (ionChange)=\"onSearch($event)\"\n  autocomplete=\"off\"\n  autocorrect=\"on\"\n  animated=\"true\" \n  spellcheck=\"true\"\n  type=\"text\"\n  ionBlur=\"\"\n  placeholder=\"Buscar material\">\n</ion-searchbar>\n<div text-center *ngIf=\"showSpinner;\">\n  <ion-spinner name=\"lines\"></ion-spinner>\n</div>\n\n<div *ngIf=\"showListCategory;\">\n    <div *ngIf=\"listAllCategories && listAllCategories.length > 0\">\n        <ion-list *ngFor=\"let cat of listAllCategories\">\n          \n            <ion-item>\n              <ion-label>\n                {{ cat.category_name }} \n              </ion-label>\n                <ion-tab-button (click)=\"editCategory(cat)\">\n                <ion-icon name=\"md-create\" color=\"danger\"></ion-icon>\n                <ion-label color=\"dark\">Editar</ion-label>\n                </ion-tab-button>\n    \n                <ion-tab-button (click)=\"deleteCategory(cat.idcategory)\">\n                    <ion-icon name=\"md-trash\" color=\"danger\"></ion-icon>\n                    <ion-label color=\"dark\">Eliminar</ion-label>\n                </ion-tab-button>\n            </ion-item>\n        </ion-list>\n</div>\n </div>\n <form *ngIf=\"showFormCategory;\" [formGroup]=\"registerCategoryForm\" (ngSubmit)=\"registerCategory()\">\n\n  <ion-item>\n       <ion-icon name=\"md-document\"></ion-icon>\n       <ion-label>Nombre</ion-label>\n       <ion-input formControlName=\"categoryName\" autocomplete=\"off\" type=\"text\"></ion-input>\n       <input type=\"hidden\" formControlName=\"idCategory\" >\n  </ion-item>\n\n   <ion-item *ngIf=\"categoryName.hasError('required') && categoryName.touched\">\n     <p>* El nombre de la categoria es requerido!</p>\n   </ion-item>\n   \n   <ion-item>\n    <ion-icon name=\"md-document\"></ion-icon>\n    <ion-label>Estado</ion-label>\n    <ion-input formControlName=\"categoryState\" autocomplete=\"off\" type=\"text\"></ion-input>\n   \n</ion-item>\n\n<ion-item *ngIf=\"categoryState.hasError('required') && categoryState.touched\">\n  <p>* El estado de la categoria es requerido!</p>\n</ion-item>\n\n   <br><br>\n\n   <br><br>\n   <ion-button  *ngIf=\"btnRegister\" [disabled]=\"!registerCategoryForm.valid\" expand=\"block\" fill=\"solid\" color=\"danger\" type=\"submit\">\n         <ion-label class=\"textcapitalize\">Acceptar</ion-label>\n   </ion-button>\n   <ion-button *ngIf=\"btnUpdate\" expand=\"block\" fill=\"solid\" color=\"danger\" type=\"submit\">\n     <ion-label class=\"textcapitalize\">Editar</ion-label>\n   </ion-button>\n </form> \n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/category/category.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/category/category.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3J5L2NhdGVnb3J5LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/category/category.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/category/category.page.ts ***!
  \*************************************************/
/*! exports provided: CategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPage", function() { return CategoryPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryPage = /** @class */ (function () {
    function CategoryPage(categoryservices, formBuilder) {
        this.categoryservices = categoryservices;
        this.formBuilder = formBuilder;
        this.showFormCategory = false;
        this.showListCategory = false;
        this.btnRegister = false;
        this.btnUpdate = false;
        this.showSpinner = false;
        this.registerCategoryForm = this.formBuilder.group({
            idCategory: [''],
            categoryName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')])],
            categoryState: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')])],
        });
        this.categoryName = this.registerCategoryForm.controls['categoryName'];
        this.categoryState = this.registerCategoryForm.controls['categoryState'];
    }
    CategoryPage.prototype.ngOnInit = function () {
        this.listCategory();
    };
    CategoryPage.prototype.listCategory = function () {
        var _this = this;
        this.showSpinner = true;
        this.categoryservices.getCategories().subscribe(function (res) {
            _this.showListCategory = true;
            _this.listAllCategories = res;
            _this.showSpinner = false;
        });
    };
    /* registerCategory()
    {
      this.showSpinner = true
      if(this.registerCategoryForm.value.idCategory)
      {
        this.categoryservices.putCategory(this.registerCategoryForm.value)
         .subscribe( (res:any) => {
          this.listCategory()
          this.showListCategory = true
          this.showFormCategory = false
          this.showSpinner = false
          })
      }
      else
      {
       console.log(this.registerCategoryForm.value)
        this.createCategory(this.registerCategoryForm.value)
      }
    }
  
    async createCategory(data:any)
    {
      console.log(data);
      await this.categoryservices.registerCategories(data)
            .subscribe( (res:any) => {
            this.listCategory()
            this.showListCategory = true
            this.showFormCategory = false
            this.showSpinner = false
      })
    } */
    CategoryPage.prototype.addCategory = function () {
        this.resetForm(this.registerCategoryForm);
        this.btnRegister = true;
        if (this.showFormCategory === false) {
            this.showListCategory = false;
            this.showFormCategory = true;
            this.btnUpdate = false;
        }
        else {
            this.showListCategory = true;
            this.showFormCategory = false;
        }
    };
    CategoryPage.prototype.resetForm = function (form) {
        if (form) {
            form.reset();
        }
    };
    CategoryPage.prototype.editCategory = function (category) {
        this.showSpinner = true;
        this.showListCategory = false;
        this.showFormCategory = true;
        this.registerCategoryForm.setValue({
            idCategory: category.idcategory,
            categoryName: category.category_name,
            categoryState: category.category_state,
        });
        this.showSpinner = false;
        this.btnUpdate = true;
        this.btnRegister = false;
    };
    CategoryPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.page.html */ "./src/app/pages/category/category.page.html"),
            styles: [__webpack_require__(/*! ./category.page.scss */ "./src/app/pages/category/category.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CategoryPage);
    return CategoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-category-category-module.js.map