(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-serviceorder-serviceorder-module"],{

/***/ "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js ***!
  \**************************************************************************/
/*! exports provided: CameraSource, CameraDirection, CameraResultType, FilesystemDirectory, FilesystemEncoding, HapticsImpactStyle, HapticsNotificationType, ActionSheetOptionStyle, PhotosAlbumType, StatusBarStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraSource", function() { return CameraSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraDirection", function() { return CameraDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraResultType", function() { return CameraResultType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesystemDirectory", function() { return FilesystemDirectory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesystemEncoding", function() { return FilesystemEncoding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HapticsImpactStyle", function() { return HapticsImpactStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HapticsNotificationType", function() { return HapticsNotificationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSheetOptionStyle", function() { return ActionSheetOptionStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosAlbumType", function() { return PhotosAlbumType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusBarStyle", function() { return StatusBarStyle; });
var CameraSource;
(function (CameraSource) {
    CameraSource["Prompt"] = "PROMPT";
    CameraSource["Camera"] = "CAMERA";
    CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function (CameraDirection) {
    CameraDirection["Rear"] = "REAR";
    CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function (CameraResultType) {
    CameraResultType["Uri"] = "uri";
    CameraResultType["Base64"] = "base64";
    CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));
var FilesystemDirectory;
(function (FilesystemDirectory) {
    /**
     * The Application directory
     */
    FilesystemDirectory["Application"] = "APPLICATION";
    /**
     * The Documents directory
     */
    FilesystemDirectory["Documents"] = "DOCUMENTS";
    /**
     * The Data directory
     */
    FilesystemDirectory["Data"] = "DATA";
    /**
     * The Cache directory
     */
    FilesystemDirectory["Cache"] = "CACHE";
    /**
     * The external directory (Android only)
     */
    FilesystemDirectory["External"] = "EXTERNAL";
    /**
     * The external storage directory (Android only)
     */
    FilesystemDirectory["ExternalStorage"] = "EXTERNAL_STORAGE";
})(FilesystemDirectory || (FilesystemDirectory = {}));
var FilesystemEncoding;
(function (FilesystemEncoding) {
    FilesystemEncoding["UTF8"] = "utf8";
    FilesystemEncoding["ASCII"] = "ascii";
    FilesystemEncoding["UTF16"] = "utf16";
})(FilesystemEncoding || (FilesystemEncoding = {}));
var HapticsImpactStyle;
(function (HapticsImpactStyle) {
    HapticsImpactStyle["Heavy"] = "HEAVY";
    HapticsImpactStyle["Medium"] = "MEDIUM";
    HapticsImpactStyle["Light"] = "LIGHT";
})(HapticsImpactStyle || (HapticsImpactStyle = {}));
var HapticsNotificationType;
(function (HapticsNotificationType) {
    HapticsNotificationType["SUCCESS"] = "SUCCESS";
    HapticsNotificationType["WARNING"] = "WARNING";
    HapticsNotificationType["ERROR"] = "ERROR";
})(HapticsNotificationType || (HapticsNotificationType = {}));
var ActionSheetOptionStyle;
(function (ActionSheetOptionStyle) {
    ActionSheetOptionStyle["Default"] = "DEFAULT";
    ActionSheetOptionStyle["Destructive"] = "DESTRUCTIVE";
    ActionSheetOptionStyle["Cancel"] = "CANCEL";
})(ActionSheetOptionStyle || (ActionSheetOptionStyle = {}));
var PhotosAlbumType;
(function (PhotosAlbumType) {
    /**
     * Album is a "smart" album (such as Favorites or Recently Added)
     */
    PhotosAlbumType["Smart"] = "smart";
    /**
     * Album is a cloud-shared album
     */
    PhotosAlbumType["Shared"] = "shared";
    /**
     * Album is a user-created album
     */
    PhotosAlbumType["User"] = "user";
})(PhotosAlbumType || (PhotosAlbumType = {}));
var StatusBarStyle;
(function (StatusBarStyle) {
    /**
     * Light text for dark backgrounds.
     */
    StatusBarStyle["Dark"] = "DARK";
    /**
     * Dark text for light backgrounds.
     */
    StatusBarStyle["Light"] = "LIGHT";
})(StatusBarStyle || (StatusBarStyle = {}));
//# sourceMappingURL=core-plugin-definitions.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/global.js":
/*!*********************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/global.js ***!
  \*********************************************************/
/*! exports provided: Capacitor, Plugins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Capacitor", function() { return Capacitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plugins", function() { return Plugins; });
/* harmony import */ var _web_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web-runtime */ "./node_modules/@capacitor/core/dist/esm/web-runtime.js");

// Create our default Capacitor instance, which will be
// overridden on native platforms
var Capacitor = new _web_runtime__WEBPACK_IMPORTED_MODULE_0__["CapacitorWeb"]();
Capacitor = window.Capacitor || Capacitor;
// Export window.Capacitor if not available already (ex: web)
if (!window.Capacitor) {
    window.Capacitor = Capacitor;
}
var Plugins = Capacitor.Plugins;

//# sourceMappingURL=global.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/index.js ***!
  \********************************************************/
/*! exports provided: CameraSource, CameraDirection, CameraResultType, FilesystemDirectory, FilesystemEncoding, HapticsImpactStyle, HapticsNotificationType, ActionSheetOptionStyle, PhotosAlbumType, StatusBarStyle, Capacitor, Plugins, registerWebPlugin, WebPluginRegistry, WebPlugins, WebPlugin, mergeWebPlugins, mergeWebPlugin, BrowserPluginWeb, Browser, CameraPluginWeb, Camera, ClipboardPluginWeb, Clipboard, FilesystemPluginWeb, Filesystem, GeolocationPluginWeb, Geolocation, DevicePluginWeb, Device, SharePluginWeb, Share, ModalsPluginWeb, Modals, MotionPluginWeb, Motion, StoragePluginWeb, Storage, ToastPluginWeb, Toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-plugin-definitions */ "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraSource", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraDirection", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraResultType", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraResultType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilesystemDirectory", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["FilesystemDirectory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilesystemEncoding", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["FilesystemEncoding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HapticsImpactStyle", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["HapticsImpactStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HapticsNotificationType", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["HapticsNotificationType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionSheetOptionStyle", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["ActionSheetOptionStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhotosAlbumType", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["PhotosAlbumType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatusBarStyle", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["StatusBarStyle"]; });

/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./node_modules/@capacitor/core/dist/esm/global.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Capacitor", function() { return _global__WEBPACK_IMPORTED_MODULE_1__["Capacitor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Plugins", function() { return _global__WEBPACK_IMPORTED_MODULE_1__["Plugins"]; });

/* harmony import */ var _web_plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-plugins */ "./node_modules/@capacitor/core/dist/esm/web-plugins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerWebPlugin", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["registerWebPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["BrowserPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Browser", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Browser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["CameraPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Camera"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ClipboardPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Clipboard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilesystemPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["FilesystemPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Filesystem", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Filesystem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["GeolocationPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Geolocation", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["DevicePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Device", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Device"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["SharePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Share", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Share"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ModalsPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modals", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Modals"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["MotionPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Motion", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Motion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["StoragePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Storage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ToastPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Toast"]; });

/* harmony import */ var _web_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web/index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebPluginRegistry", function() { return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPluginRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebPlugins", function() { return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPlugins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebPlugin", function() { return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeWebPlugins", function() { return _web_index__WEBPACK_IMPORTED_MODULE_3__["mergeWebPlugins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeWebPlugin", function() { return _web_index__WEBPACK_IMPORTED_MODULE_3__["mergeWebPlugin"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/util.js":
/*!*******************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/util.js ***!
  \*******************************************************/
/*! exports provided: extend, uuid4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuid4", function() { return uuid4; });
var extend = function (target) {
    var objs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        objs[_i - 1] = arguments[_i];
    }
    objs.forEach(function (o) {
        if (o && typeof (o) === 'object') {
            for (var k in o) {
                if (o.hasOwnProperty(k)) {
                    target[k] = o[k];
                }
            }
        }
    });
    return target;
};
var uuid4 = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web-plugins.js":
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web-plugins.js ***!
  \**************************************************************/
/*! exports provided: registerWebPlugin, BrowserPluginWeb, Browser, CameraPluginWeb, Camera, ClipboardPluginWeb, Clipboard, FilesystemPluginWeb, Filesystem, GeolocationPluginWeb, Geolocation, DevicePluginWeb, Device, SharePluginWeb, Share, ModalsPluginWeb, Modals, MotionPluginWeb, Motion, StoragePluginWeb, Storage, ToastPluginWeb, Toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerWebPlugin", function() { return registerWebPlugin; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./node_modules/@capacitor/core/dist/esm/global.js");
/* harmony import */ var _web_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web/index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");
/* harmony import */ var _web_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web/browser */ "./node_modules/@capacitor/core/dist/esm/web/browser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function() { return _web_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Browser", function() { return _web_browser__WEBPACK_IMPORTED_MODULE_2__["Browser"]; });

/* harmony import */ var _web_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web/camera */ "./node_modules/@capacitor/core/dist/esm/web/camera.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function() { return _web_camera__WEBPACK_IMPORTED_MODULE_3__["CameraPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return _web_camera__WEBPACK_IMPORTED_MODULE_3__["Camera"]; });

/* harmony import */ var _web_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web/clipboard */ "./node_modules/@capacitor/core/dist/esm/web/clipboard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function() { return _web_clipboard__WEBPACK_IMPORTED_MODULE_4__["ClipboardPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return _web_clipboard__WEBPACK_IMPORTED_MODULE_4__["Clipboard"]; });

/* harmony import */ var _web_filesystem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./web/filesystem */ "./node_modules/@capacitor/core/dist/esm/web/filesystem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilesystemPluginWeb", function() { return _web_filesystem__WEBPACK_IMPORTED_MODULE_5__["FilesystemPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Filesystem", function() { return _web_filesystem__WEBPACK_IMPORTED_MODULE_5__["Filesystem"]; });

/* harmony import */ var _web_geolocation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./web/geolocation */ "./node_modules/@capacitor/core/dist/esm/web/geolocation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function() { return _web_geolocation__WEBPACK_IMPORTED_MODULE_6__["GeolocationPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Geolocation", function() { return _web_geolocation__WEBPACK_IMPORTED_MODULE_6__["Geolocation"]; });

/* harmony import */ var _web_device__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./web/device */ "./node_modules/@capacitor/core/dist/esm/web/device.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function() { return _web_device__WEBPACK_IMPORTED_MODULE_7__["DevicePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Device", function() { return _web_device__WEBPACK_IMPORTED_MODULE_7__["Device"]; });

/* harmony import */ var _web_share__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./web/share */ "./node_modules/@capacitor/core/dist/esm/web/share.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function() { return _web_share__WEBPACK_IMPORTED_MODULE_8__["SharePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Share", function() { return _web_share__WEBPACK_IMPORTED_MODULE_8__["Share"]; });

/* harmony import */ var _web_modals__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./web/modals */ "./node_modules/@capacitor/core/dist/esm/web/modals.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function() { return _web_modals__WEBPACK_IMPORTED_MODULE_9__["ModalsPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modals", function() { return _web_modals__WEBPACK_IMPORTED_MODULE_9__["Modals"]; });

/* harmony import */ var _web_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./web/motion */ "./node_modules/@capacitor/core/dist/esm/web/motion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function() { return _web_motion__WEBPACK_IMPORTED_MODULE_10__["MotionPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Motion", function() { return _web_motion__WEBPACK_IMPORTED_MODULE_10__["Motion"]; });

/* harmony import */ var _web_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./web/storage */ "./node_modules/@capacitor/core/dist/esm/web/storage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function() { return _web_storage__WEBPACK_IMPORTED_MODULE_11__["StoragePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return _web_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"]; });

/* harmony import */ var _web_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./web/toast */ "./node_modules/@capacitor/core/dist/esm/web/toast.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function() { return _web_toast__WEBPACK_IMPORTED_MODULE_12__["ToastPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return _web_toast__WEBPACK_IMPORTED_MODULE_12__["Toast"]; });














Object(_web_index__WEBPACK_IMPORTED_MODULE_1__["mergeWebPlugins"])(_global__WEBPACK_IMPORTED_MODULE_0__["Plugins"]);
var registerWebPlugin = function (plugin) {
    Object(_web_index__WEBPACK_IMPORTED_MODULE_1__["mergeWebPlugin"])(_global__WEBPACK_IMPORTED_MODULE_0__["Plugins"], plugin);
};
//# sourceMappingURL=web-plugins.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web-runtime.js":
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web-runtime.js ***!
  \**************************************************************/
/*! exports provided: CapacitorWeb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapacitorWeb", function() { return CapacitorWeb; });
var CapacitorWeb = /** @class */ (function () {
    function CapacitorWeb() {
        var _this = this;
        this.Plugins = {};
        this.platform = 'web';
        this.isNative = false;
        // Build a proxy for the Plugins object that returns the "Noop Plugin"
        // if a plugin isn't available
        this.Plugins = new Proxy(this.Plugins, {
            get: function (target, prop) {
                if (typeof target[prop] === 'undefined') {
                    var thisRef_1 = _this;
                    return new Proxy({}, {
                        get: function (_target, _prop) {
                            if (typeof _target[_prop] === 'undefined') {
                                return thisRef_1.pluginMethodNoop.bind(thisRef_1, _target, _prop, prop);
                            }
                            else {
                                return _target[_prop];
                            }
                        }
                    });
                }
                else {
                    return target[prop];
                }
            }
        });
    }
    CapacitorWeb.prototype.pluginMethodNoop = function (_target, _prop, pluginName) {
        return Promise.reject(pluginName + " does not have web implementation.");
    };
    CapacitorWeb.prototype.getPlatform = function () {
        return this.platform;
    };
    CapacitorWeb.prototype.isPluginAvailable = function (name) {
        return this.Plugins.hasOwnProperty(name);
    };
    CapacitorWeb.prototype.convertFileSrc = function (filePath) {
        return filePath;
    };
    CapacitorWeb.prototype.handleError = function (e) {
        console.error(e);
    };
    return CapacitorWeb;
}());

//# sourceMappingURL=web-runtime.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/browser.js":
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/browser.js ***!
  \**************************************************************/
/*! exports provided: BrowserPluginWeb, Browser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function() { return BrowserPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Browser", function() { return Browser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var BrowserPluginWeb = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BrowserPluginWeb, _super);
    function BrowserPluginWeb() {
        return _super.call(this, {
            name: 'Browser',
            platforms: ['web']
        }) || this;
    }
    BrowserPluginWeb.prototype.open = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this._lastWindow = window.open(options.url, options.windowName || "_blank");
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    BrowserPluginWeb.prototype.prefetch = function (_options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // Does nothing
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    BrowserPluginWeb.prototype.close = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this._lastWindow && this._lastWindow.close();
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    return BrowserPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Browser = new BrowserPluginWeb();

//# sourceMappingURL=browser.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/camera.js":
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/camera.js ***!
  \*************************************************************/
/*! exports provided: CameraPluginWeb, Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function() { return CameraPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");
/* harmony import */ var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core-plugin-definitions */ "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");



//import '@ionic/pwa-elements';
var CameraPluginWeb = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CameraPluginWeb, _super);
    function CameraPluginWeb() {
        return _super.call(this, {
            name: 'Camera',
            platforms: ['web']
        }) || this;
    }
    CameraPluginWeb.prototype.getPhoto = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                options;
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var cameraModal;
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    cameraModal = document.createElement('ion-pwa-camera-modal');
                                    document.body.appendChild(cameraModal);
                                    return [4 /*yield*/, cameraModal.componentOnReady()];
                                case 1:
                                    _a.sent();
                                    cameraModal.addEventListener('onPhoto', function (e) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                        var photo, _a;
                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    photo = e.detail;
                                                    if (!(photo === null)) return [3 /*break*/, 1];
                                                    reject('User cancelled photos app');
                                                    return [3 /*break*/, 3];
                                                case 1:
                                                    _a = resolve;
                                                    return [4 /*yield*/, this._getCameraPhoto(photo, options)];
                                                case 2:
                                                    _a.apply(void 0, [_b.sent()]);
                                                    _b.label = 3;
                                                case 3:
                                                    cameraModal.dismiss();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                    cameraModal.present();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    CameraPluginWeb.prototype._getCameraPhoto = function (photo, options) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            var format = photo.type.split('/')[1];
            if (options.resultType == _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri) {
                resolve({
                    webPath: URL.createObjectURL(photo),
                    format: format
                });
            }
            else {
                reader.readAsDataURL(photo);
                reader.onloadend = function () {
                    var r = reader.result;
                    if (options.resultType == _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].DataUrl) {
                        resolve({
                            dataUrl: r,
                            format: format
                        });
                    }
                    else {
                        resolve({
                            base64String: r.split(',')[1],
                            format: format
                        });
                    }
                };
                reader.onerror = function (e) {
                    reject(e);
                };
            }
        });
    };
    return CameraPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Camera = new CameraPluginWeb();

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/clipboard.js":
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/clipboard.js ***!
  \****************************************************************/
/*! exports provided: ClipboardPluginWeb, Clipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function() { return ClipboardPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return Clipboard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var ClipboardPluginWeb = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ClipboardPluginWeb, _super);
    function ClipboardPluginWeb() {
        return _super.call(this, {
            name: 'Clipboard',
            platforms: ['web']
        }) || this;
    }
    ClipboardPluginWeb.prototype.write = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!navigator.clipboard) {
                            return [2 /*return*/, Promise.reject('Clipboard API not available in this browser')];
                        }
                        if (!(options.string || options.url)) return [3 /*break*/, 2];
                        return [4 /*yield*/, navigator.clipboard.writeText(options.string || options.url)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        if (options.image) {
                            return [2 /*return*/, Promise.reject("Setting images not supported on the web")];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, Promise.resolve()];
                }
            });
        });
    };
    ClipboardPluginWeb.prototype.read = function (_options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var text, data, _i, _a, item;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!navigator.clipboard) {
                            return [2 /*return*/, Promise.reject('Clipboard API not available in this browser')];
                        }
                        if (!(_options.type === 'string' || _options.type === 'url')) return [3 /*break*/, 2];
                        return [4 /*yield*/, navigator.clipboard.readText()];
                    case 1:
                        text = _b.sent();
                        return [2 /*return*/, Promise.resolve({ value: text })];
                    case 2: return [4 /*yield*/, navigator.clipboard.read()];
                    case 3:
                        data = _b.sent();
                        for (_i = 0, _a = data.items; _i < _a.length; _i++) {
                            item = _a[_i];
                            if (item.type === 'text/plain') {
                                return [2 /*return*/, Promise.resolve({ value: item.getAs('text/plain') })];
                            }
                        }
                        _b.label = 4;
                    case 4: return [2 /*return*/, Promise.reject('Unable to get data from clipboard')];
                }
            });
        });
    };
    return ClipboardPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Clipboard = new ClipboardPluginWeb();

//# sourceMappingURL=clipboard.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/device.js":
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/device.js ***!
  \*************************************************************/
/*! exports provided: DevicePluginWeb, Device */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function() { return DevicePluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Device", function() { return Device; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./node_modules/@capacitor/core/dist/esm/util.js");



var DevicePluginWeb = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DevicePluginWeb, _super);
    function DevicePluginWeb() {
        return _super.call(this, {
            name: 'Device',
            platforms: ['web']
        }) || this;
    }
    DevicePluginWeb.prototype.getInfo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var ua, uaFields, battery, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ua = navigator.userAgent;
                        uaFields = this.parseUa(ua);
                        battery = {};
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, navigator.getBattery()];
                    case 2:
                        battery = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, Promise.resolve({
                            model: uaFields.model,
                            platform: 'web',
                            appVersion: '',
                            osVersion: uaFields.osVersion,
                            manufacturer: navigator.vendor,
                            isVirtual: false,
                            batteryLevel: battery.level,
                            isCharging: battery.charging,
                            uuid: this.getUid()
                        })];
                }
            });
        });
    };
    DevicePluginWeb.prototype.getLanguageCode = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, {
                        value: navigator.language
                    }];
            });
        });
    };
    DevicePluginWeb.prototype.parseUa = function (_ua) {
        var uaFields = {};
        var start = _ua.indexOf('(') + 1;
        var end = _ua.indexOf(') AppleWebKit');
        if (_ua.indexOf(') Gecko') !== -1) {
            end = _ua.indexOf(') Gecko');
        }
        var fields = _ua.substring(start, end);
        if (_ua.indexOf('Android') !== -1) {
            uaFields.model = fields.replace("; wv", "").split("; ").pop().split(' Build')[0];
            uaFields.osVersion = fields.split('; ')[1];
        }
        else {
            uaFields.model = fields.split('; ')[0];
            if (navigator.oscpu) {
                uaFields.osVersion = navigator.oscpu;
            }
            else {
                if (_ua.indexOf('Windows') !== -1) {
                    uaFields.osVersion = fields;
                }
                else {
                    var lastParts = fields.split('; ').pop().replace(" like Mac OS X", "").split(" ");
                    uaFields.osVersion = lastParts[lastParts.length - 1].replace(/_/g, ".");
                }
            }
        }
        return uaFields;
    };
    DevicePluginWeb.prototype.getUid = function () {
        var uid = window.localStorage.getItem('_capuid');
        if (uid) {
            return uid;
        }
        uid = Object(_util__WEBPACK_IMPORTED_MODULE_2__["uuid4"])();
        window.localStorage.setItem('_capuid', uid);
        return uid;
    };
    return DevicePluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Device = new DevicePluginWeb();

//# sourceMappingURL=device.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/filesystem.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/filesystem.js ***!
  \*****************************************************************/
/*! exports provided: FilesystemPluginWeb, Filesystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesystemPluginWeb", function() { return FilesystemPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filesystem", function() { return Filesystem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");
/* harmony import */ var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core-plugin-definitions */ "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");



var FilesystemPluginWeb = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FilesystemPluginWeb, _super);
    function FilesystemPluginWeb() {
        var _this = _super.call(this, {
            name: 'Filesystem',
            platforms: ['web']
        }) || this;
        _this.DEFAULT_DIRECTORY = _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data;
        _this.DB_VERSION = 1;
        _this.DB_NAME = 'Disc';
        _this._writeCmds = ['add', 'put', 'delete'];
        return _this;
    }
    FilesystemPluginWeb.prototype.initDb = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this._db !== undefined) {
                    return [2 /*return*/, this._db];
                }
                if (!('indexedDB' in window)) {
                    throw new Error('This browser doesn\'t support IndexedDB');
                }
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var request = indexedDB.open(_this.DB_NAME, _this.DB_VERSION);
                        request.onupgradeneeded = FilesystemPluginWeb.doUpgrade;
                        request.onsuccess = function () {
                            _this._db = request.result;
                            resolve(request.result);
                        };
                        request.onerror = function () { return reject(request.error); };
                        request.onblocked = function () {
                            console.warn('db blocked');
                        };
                    })];
            });
        });
    };
    FilesystemPluginWeb.doUpgrade = function (event) {
        var eventTarget = event.target;
        var db = eventTarget.result;
        switch (event.oldVersion) {
            case 0:
            case 1:
            default:
                if (db.objectStoreNames.contains('FileStorage')) {
                    db.deleteObjectStore('FileStorage');
                }
                var store = db.createObjectStore('FileStorage', { keyPath: 'path' });
                store.createIndex('by_folder', 'folder');
        }
    };
    FilesystemPluginWeb.prototype.dbRequest = function (cmd, args) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var readFlag;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                readFlag = this._writeCmds.indexOf(cmd) !== -1 ? 'readwrite' : 'readonly';
                return [2 /*return*/, this.initDb()
                        .then(function (conn) {
                        return new Promise(function (resolve, reject) {
                            var tx = conn.transaction(['FileStorage'], readFlag);
                            var store = tx.objectStore('FileStorage');
                            var req = store[cmd].apply(store, args);
                            req.onsuccess = function () { return resolve(req.result); };
                            req.onerror = function () { return reject(req.error); };
                        });
                    })];
            });
        });
    };
    FilesystemPluginWeb.prototype.dbIndexRequest = function (indexName, cmd, args) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var readFlag;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                readFlag = this._writeCmds.indexOf(cmd) !== -1 ? 'readwrite' : 'readonly';
                return [2 /*return*/, this.initDb()
                        .then(function (conn) {
                        return new Promise(function (resolve, reject) {
                            var tx = conn.transaction(['FileStorage'], readFlag);
                            var store = tx.objectStore('FileStorage');
                            var index = store.index(indexName);
                            var req = index[cmd].apply(index, args);
                            req.onsuccess = function () { return resolve(req.result); };
                            req.onerror = function () { return reject(req.error); };
                        });
                    })];
            });
        });
    };
    FilesystemPluginWeb.prototype.getPath = function (directory, uriPath) {
        directory = directory || this.DEFAULT_DIRECTORY;
        var cleanedUriPath = uriPath !== undefined ? uriPath.replace(/^[/]+|[/]+$/g, '') : '';
        return '/' + directory + '/' + cleanedUriPath;
    };
    FilesystemPluginWeb.prototype.clear = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var conn, tx, store;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initDb()];
                    case 1:
                        conn = _a.sent();
                        tx = conn.transaction(['FileStorage'], 'readwrite');
                        store = tx.objectStore('FileStorage');
                        store.clear();
                        return [2 /*return*/, {}];
                }
            });
        });
    };
    /**
     * Read a file from disk
     * @param options options for the file read
     * @return a promise that resolves with the read file data result
     */
    FilesystemPluginWeb.prototype.readFile = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var path, entry;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        entry = _a.sent();
                        if (entry === undefined)
                            throw Error('File does not exist.');
                        return [2 /*return*/, { data: entry.content }];
                }
            });
        });
    };
    /**
     * Write a file to disk in the specified location on device
     * @param options options for the file write
     * @return a promise that resolves with the file write result
     */
    FilesystemPluginWeb.prototype.writeFile = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var path, data, parentPath, parentEntry, subDirIndex, parentArgPath, now, pathObj;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        data = options.data;
                        parentPath = path.substr(0, path.lastIndexOf('/'));
                        return [4 /*yield*/, this.dbRequest('get', [parentPath])];
                    case 1:
                        parentEntry = _a.sent();
                        if (!(parentEntry === undefined)) return [3 /*break*/, 3];
                        subDirIndex = parentPath.indexOf('/', 1);
                        if (!(subDirIndex !== -1)) return [3 /*break*/, 3];
                        parentArgPath = parentPath.substr(subDirIndex);
                        return [4 /*yield*/, this.mkdir({ path: parentArgPath, directory: options.directory, createIntermediateDirectories: true })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        now = Date.now();
                        pathObj = {
                            path: path,
                            folder: parentPath,
                            type: 'file',
                            size: data.length,
                            ctime: now,
                            mtime: now,
                            content: data
                        };
                        return [4 /*yield*/, this.dbRequest('put', [pathObj])];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, {}];
                }
            });
        });
    };
    /**
     * Append to a file on disk in the specified location on device
     * @param options options for the file append
     * @return a promise that resolves with the file write result
     */
    FilesystemPluginWeb.prototype.appendFile = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var path, data, parentPath, now, ctime, parentEntry, parentArgPath, occupiedEntry, pathObj;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        data = options.data;
                        parentPath = path.substr(0, path.lastIndexOf('/'));
                        now = Date.now();
                        ctime = now;
                        return [4 /*yield*/, this.dbRequest('get', [parentPath])];
                    case 1:
                        parentEntry = _a.sent();
                        if (!(parentEntry === undefined)) return [3 /*break*/, 3];
                        parentArgPath = parentPath.substr(parentPath.indexOf('/', 1));
                        return [4 /*yield*/, this.mkdir({ path: parentArgPath, directory: options.directory, createIntermediateDirectories: true })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 4:
                        occupiedEntry = _a.sent();
                        if (occupiedEntry !== undefined) {
                            data = occupiedEntry.content + data;
                            ctime = occupiedEntry.ctime;
                        }
                        pathObj = {
                            path: path,
                            folder: parentPath,
                            type: 'file',
                            size: data.length,
                            ctime: ctime,
                            mtime: now,
                            content: data
                        };
                        return [4 /*yield*/, this.dbRequest('put', [pathObj])];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, {}];
                }
            });
        });
    };
    /**
     * Delete a file from disk
     * @param options options for the file delete
     * @return a promise that resolves with the deleted file data result
     */
    FilesystemPluginWeb.prototype.deleteFile = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var path, entry, entries;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        entry = _a.sent();
                        if (entry === undefined)
                            throw Error('File does not exist.');
                        return [4 /*yield*/, this.dbIndexRequest('by_folder', 'getAllKeys', [IDBKeyRange.only(path)])];
                    case 2:
                        entries = _a.sent();
                        if (entries.length !== 0)
                            throw Error('Folder is not empty.');
                        return [4 /*yield*/, this.dbRequest('delete', [path])];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, {}];
                }
            });
        });
    };
    /**
     * Create a directory.
     * @param options options for the mkdir
     * @return a promise that resolves with the mkdir result
     */
    FilesystemPluginWeb.prototype.mkdir = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var path, createIntermediateDirectories, parentPath, depth, parentEntry, occupiedEntry, parentArgPath, now, pathObj;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        createIntermediateDirectories = options.createIntermediateDirectories;
                        parentPath = path.substr(0, path.lastIndexOf('/'));
                        depth = (path.match(/\//g) || []).length;
                        return [4 /*yield*/, this.dbRequest('get', [parentPath])];
                    case 1:
                        parentEntry = _a.sent();
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 2:
                        occupiedEntry = _a.sent();
                        if (depth === 1)
                            throw Error('Cannot create Root directory');
                        if (occupiedEntry !== undefined)
                            throw Error('Current directory does already exist.');
                        if (!createIntermediateDirectories && depth !== 2 && parentEntry === undefined)
                            throw Error('Parent directory must exist');
                        if (!(createIntermediateDirectories && depth !== 2 && parentEntry === undefined)) return [3 /*break*/, 4];
                        parentArgPath = parentPath.substr(parentPath.indexOf('/', 1));
                        return [4 /*yield*/, this.mkdir({
                                path: parentArgPath,
                                directory: options.directory,
                                createIntermediateDirectories: createIntermediateDirectories
                            })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        now = Date.now();
                        pathObj = { path: path, folder: parentPath, type: 'directory', size: 0, ctime: now, mtime: now };
                        return [4 /*yield*/, this.dbRequest('put', [pathObj])];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, {}];
                }
            });
        });
    };
    /**
     * Remove a directory
     * @param options the options for the directory remove
     */
    FilesystemPluginWeb.prototype.rmdir = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var path, entry, entries;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        entry = _a.sent();
                        if (entry === undefined)
                            throw Error('Folder does not exist.');
                        return [4 /*yield*/, this.dbIndexRequest('by_folder', 'getAllKeys', [IDBKeyRange.only(path)])];
                    case 2:
                        entries = _a.sent();
                        if (entries.length !== 0)
                            throw Error('Folder is not empty.');
                        return [4 /*yield*/, this.dbRequest('delete', [path])];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, {}];
                }
            });
        });
    };
    /**
     * Return a list of files from the directory (not recursive)
     * @param options the options for the readdir operation
     * @return a promise that resolves with the readdir directory listing result
     */
    FilesystemPluginWeb.prototype.readdir = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var path, entry, entries, names;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        entry = _a.sent();
                        if (entry === undefined)
                            throw Error('Folder does not exist.');
                        return [4 /*yield*/, this.dbIndexRequest('by_folder', 'getAllKeys', [IDBKeyRange.only(path)])];
                    case 2:
                        entries = _a.sent();
                        names = entries.map(function (e) {
                            return e.substring(entry.path.length + 1);
                        });
                        return [2 /*return*/, { files: names }];
                }
            });
        });
    };
    /**
     * Return full File URI for a path and directory
     * @param options the options for the stat operation
     * @return a promise that resolves with the file stat result
     */
    FilesystemPluginWeb.prototype.getUri = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var path, entry;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        entry = _a.sent();
                        if (!(entry === undefined)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.dbRequest('get', [path + '/'])];
                    case 2:
                        entry = (_a.sent());
                        _a.label = 3;
                    case 3:
                        if (entry === undefined)
                            throw Error('Entry does not exist.');
                        return [2 /*return*/, {
                                uri: entry.path
                            }];
                }
            });
        });
    };
    /**
     * Return data about a file
     * @param options the options for the stat operation
     * @return a promise that resolves with the file stat result
     */
    FilesystemPluginWeb.prototype.stat = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var path, entry;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        entry = _a.sent();
                        if (!(entry === undefined)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.dbRequest('get', [path + '/'])];
                    case 2:
                        entry = (_a.sent());
                        _a.label = 3;
                    case 3:
                        if (entry === undefined)
                            throw Error('Entry does not exist.');
                        return [2 /*return*/, {
                                type: entry.type,
                                size: entry.size,
                                ctime: entry.ctime,
                                mtime: entry.mtime,
                                uri: entry.path
                            }];
                }
            });
        });
    };
    FilesystemPluginWeb._debug = true;
    return FilesystemPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Filesystem = new FilesystemPluginWeb();

//# sourceMappingURL=filesystem.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/geolocation.js":
/*!******************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/geolocation.js ***!
  \******************************************************************/
/*! exports provided: GeolocationPluginWeb, Geolocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function() { return GeolocationPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geolocation", function() { return Geolocation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./node_modules/@capacitor/core/dist/esm/util.js");



var GeolocationPluginWeb = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GeolocationPluginWeb, _super);
    function GeolocationPluginWeb() {
        return _super.call(this, {
            name: 'Geolocation',
            platforms: ['web']
        }) || this;
    }
    GeolocationPluginWeb.prototype.getCurrentPosition = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.requestPermissions().then(function (_result) {
                window.navigator.geolocation.getCurrentPosition(function (pos) {
                    resolve(pos);
                }, function (err) {
                    reject(err);
                }, Object(_util__WEBPACK_IMPORTED_MODULE_2__["extend"])({
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 0
                }, options));
            });
        });
    };
    GeolocationPluginWeb.prototype.watchPosition = function (options, callback) {
        var id = window.navigator.geolocation.watchPosition(function (pos) {
            callback(pos);
        }, function (err) {
            callback(null, err);
        }, Object(_util__WEBPACK_IMPORTED_MODULE_2__["extend"])({
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }, options));
        return "" + id;
    };
    GeolocationPluginWeb.prototype.clearWatch = function (options) {
        window.navigator.geolocation.clearWatch(parseInt(options.id, 10));
        return Promise.resolve();
    };
    return GeolocationPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Geolocation = new GeolocationPluginWeb();

//# sourceMappingURL=geolocation.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/index.js ***!
  \************************************************************/
/*! exports provided: WebPluginRegistry, WebPlugins, WebPlugin, mergeWebPlugins, mergeWebPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPluginRegistry", function() { return WebPluginRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPlugins", function() { return WebPlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPlugin", function() { return WebPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeWebPlugins", function() { return mergeWebPlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeWebPlugin", function() { return mergeWebPlugin; });
var WebPluginRegistry = /** @class */ (function () {
    function WebPluginRegistry() {
        this.plugins = {};
        this.loadedPlugins = {};
    }
    WebPluginRegistry.prototype.addPlugin = function (plugin) {
        this.plugins[plugin.config.name] = plugin;
    };
    WebPluginRegistry.prototype.getPlugin = function (name) {
        return this.plugins[name];
    };
    WebPluginRegistry.prototype.loadPlugin = function (name) {
        var plugin = this.getPlugin(name);
        if (!plugin) {
            console.error("Unable to load web plugin " + name + ", no such plugin found.");
            return;
        }
        plugin.load();
    };
    WebPluginRegistry.prototype.getPlugins = function () {
        var p = [];
        for (var name_1 in this.plugins) {
            p.push(this.plugins[name_1]);
        }
        return p;
    };
    return WebPluginRegistry;
}());

var WebPlugins = new WebPluginRegistry();

var WebPlugin = /** @class */ (function () {
    function WebPlugin(config, pluginRegistry) {
        this.config = config;
        this.loaded = false;
        this.listeners = {};
        this.windowListeners = {};
        if (!pluginRegistry) {
            WebPlugins.addPlugin(this);
        }
        else {
            pluginRegistry.addPlugin(this);
        }
    }
    WebPlugin.prototype.addWindowListener = function (handle) {
        window.addEventListener(handle.windowEventName, handle.handler);
        handle.registered = true;
    };
    WebPlugin.prototype.removeWindowListener = function (handle) {
        if (!handle) {
            return;
        }
        window.removeEventListener(handle.windowEventName, handle.handler);
        handle.registered = false;
    };
    WebPlugin.prototype.addListener = function (eventName, listenerFunc) {
        var _this = this;
        var listeners = this.listeners[eventName];
        if (!listeners) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(listenerFunc);
        // If we haven't added a window listener for this event and it requires one,
        // go ahead and add it
        var windowListener = this.windowListeners[eventName];
        if (windowListener && !windowListener.registered) {
            this.addWindowListener(windowListener);
        }
        return {
            remove: function () {
                _this.removeListener(eventName, listenerFunc);
            }
        };
    };
    WebPlugin.prototype.removeListener = function (eventName, listenerFunc) {
        var listeners = this.listeners[eventName];
        if (!listeners) {
            return;
        }
        var index = listeners.indexOf(listenerFunc);
        this.listeners[eventName].splice(index, 1);
        // If there are no more listeners for this type of event,
        // remove the window listener
        if (!this.listeners[eventName].length) {
            this.removeWindowListener(this.windowListeners[eventName]);
        }
    };
    WebPlugin.prototype.notifyListeners = function (eventName, data) {
        var listeners = this.listeners[eventName];
        if (listeners) {
            listeners.forEach(function (listener) { return listener(data); });
        }
    };
    WebPlugin.prototype.hasListeners = function (eventName) {
        return !!this.listeners[eventName].length;
    };
    WebPlugin.prototype.registerWindowListener = function (windowEventName, pluginEventName) {
        var _this = this;
        this.windowListeners[pluginEventName] = {
            registered: false,
            windowEventName: windowEventName,
            pluginEventName: pluginEventName,
            handler: function (event) {
                _this.notifyListeners(pluginEventName, event);
            }
        };
    };
    WebPlugin.prototype.requestPermissions = function () {
        if (Capacitor.isNative) {
            return Capacitor.nativePromise(this.config.name, 'requestPermissions', {});
        }
        else {
            return Promise.resolve({ results: [] });
        }
    };
    WebPlugin.prototype.load = function () {
        this.loaded = true;
    };
    return WebPlugin;
}());

var shouldMergeWebPlugin = function (plugin) {
    return plugin.config.platforms && plugin.config.platforms.indexOf(Capacitor.platform) >= 0;
};
/**
 * For all our known web plugins, merge them into the global plugins
 * registry if they aren't already existing. If they don't exist, that
 * means there's no existing native implementation for it.
 * @param knownPlugins the Capacitor.Plugins global registry.
 */
var mergeWebPlugins = function (knownPlugins) {
    var plugins = WebPlugins.getPlugins();
    for (var _i = 0, plugins_1 = plugins; _i < plugins_1.length; _i++) {
        var plugin = plugins_1[_i];
        mergeWebPlugin(knownPlugins, plugin);
    }
};
var mergeWebPlugin = function (knownPlugins, plugin) {
    // If we already have a plugin registered (meaning it was defined in the native layer),
    // then we should only overwrite it if the corresponding web plugin activates on
    // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
    if (knownPlugins.hasOwnProperty(plugin.config.name) && !shouldMergeWebPlugin(plugin)) {
        return;
    }
    knownPlugins[plugin.config.name] = plugin;
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/modals.js":
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/modals.js ***!
  \*************************************************************/
/*! exports provided: ModalsPluginWeb, Modals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function() { return ModalsPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modals", function() { return Modals; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var ModalsPluginWeb = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ModalsPluginWeb, _super);
    function ModalsPluginWeb() {
        return _super.call(this, {
            name: 'Modals',
            platforms: ['web']
        }) || this;
    }
    ModalsPluginWeb.prototype.alert = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                window.alert(options.message);
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    ModalsPluginWeb.prototype.prompt = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var val;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                val = window.prompt(options.message, options.inputPlaceholder || '');
                return [2 /*return*/, Promise.resolve({
                        value: val,
                        cancelled: val === null
                    })];
            });
        });
    };
    ModalsPluginWeb.prototype.confirm = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var val;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                val = window.confirm(options.message);
                return [2 /*return*/, Promise.resolve({
                        value: val
                    })];
            });
        });
    };
    ModalsPluginWeb.prototype.showActions = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, _reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var controller, items, actionSheetElement;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    controller = document.querySelector('ion-action-sheet-controller');
                                    if (!controller) {
                                        controller = document.createElement('ion-action-sheet-controller');
                                        document.body.appendChild(controller);
                                    }
                                    return [4 /*yield*/, controller.componentOnReady()];
                                case 1:
                                    _a.sent();
                                    items = options.options.map(function (o, i) {
                                        return {
                                            text: o.title,
                                            role: o.style && o.style.toLowerCase() || '',
                                            icon: o.icon || '',
                                            handler: function () {
                                                resolve({
                                                    index: i
                                                });
                                            }
                                        };
                                    });
                                    return [4 /*yield*/, controller.create({
                                            title: options.title,
                                            buttons: items
                                        })];
                                case 2:
                                    actionSheetElement = _a.sent();
                                    return [4 /*yield*/, actionSheetElement.present()];
                                case 3:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    return ModalsPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Modals = new ModalsPluginWeb();

//# sourceMappingURL=modals.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/motion.js":
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/motion.js ***!
  \*************************************************************/
/*! exports provided: MotionPluginWeb, Motion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function() { return MotionPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Motion", function() { return Motion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var MotionPluginWeb = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MotionPluginWeb, _super);
    function MotionPluginWeb() {
        var _this = _super.call(this, {
            name: 'Motion'
        }) || this;
        _this.registerWindowListener('devicemotion', 'accel');
        _this.registerWindowListener('deviceorientation', 'orientation');
        return _this;
    }
    return MotionPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Motion = new MotionPluginWeb();

//# sourceMappingURL=motion.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/share.js":
/*!************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/share.js ***!
  \************************************************************/
/*! exports provided: SharePluginWeb, Share */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function() { return SharePluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Share", function() { return Share; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var SharePluginWeb = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SharePluginWeb, _super);
    function SharePluginWeb() {
        return _super.call(this, {
            name: 'Share',
            platforms: ['web']
        }) || this;
    }
    SharePluginWeb.prototype.share = function (options) {
        if (!navigator.share) {
            return Promise.reject("Web Share API not available");
        }
        return navigator.share({
            title: options.title,
            text: options.text,
            url: options.url
        });
    };
    return SharePluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Share = new SharePluginWeb();

//# sourceMappingURL=share.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/storage.js":
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/storage.js ***!
  \**************************************************************/
/*! exports provided: StoragePluginWeb, Storage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function() { return StoragePluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return Storage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var StoragePluginWeb = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StoragePluginWeb, _super);
    function StoragePluginWeb() {
        var _this = _super.call(this, {
            name: 'Storage',
            platforms: ['web']
        }) || this;
        _this.KEY_PREFIX = "_cap_";
        return _this;
    }
    StoragePluginWeb.prototype.get = function (options) {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            resolve({
                value: window.localStorage.getItem(_this.makeKey(options.key))
            });
        });
    };
    StoragePluginWeb.prototype.set = function (options) {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            window.localStorage.setItem(_this.makeKey(options.key), options.value);
            resolve();
        });
    };
    StoragePluginWeb.prototype.remove = function (options) {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            window.localStorage.removeItem(_this.makeKey(options.key));
            resolve();
        });
    };
    StoragePluginWeb.prototype.keys = function () {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            resolve({
                keys: Object.keys(localStorage).filter(function (k) { return _this.isKey(k); }).map(function (k) { return _this.getKey(k); })
            });
        });
    };
    StoragePluginWeb.prototype.clear = function () {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            Object.keys(localStorage)
                .filter(function (k) { return _this.isKey(k); })
                .forEach(function (k) { return window.localStorage.removeItem(k); });
            resolve();
        });
    };
    StoragePluginWeb.prototype.makeKey = function (key) {
        return this.KEY_PREFIX + key;
    };
    StoragePluginWeb.prototype.isKey = function (key) {
        return key.indexOf(this.KEY_PREFIX) === 0;
    };
    StoragePluginWeb.prototype.getKey = function (key) {
        return key.substr(this.KEY_PREFIX.length);
    };
    return StoragePluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Storage = new StoragePluginWeb();

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/toast.js":
/*!************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/toast.js ***!
  \************************************************************/
/*! exports provided: ToastPluginWeb, Toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function() { return ToastPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return Toast; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var ToastPluginWeb = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ToastPluginWeb, _super);
    function ToastPluginWeb() {
        return _super.call(this, {
            name: 'Toast',
            platforms: ['web']
        }) || this;
    }
    ToastPluginWeb.prototype.show = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var controller, duration, toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        controller = document.querySelector('ion-toast-controller');
                        if (!controller) {
                            controller = document.createElement('ion-toast-controller');
                            document.body.appendChild(controller);
                        }
                        return [4 /*yield*/, controller.componentOnReady()];
                    case 1:
                        _a.sent();
                        duration = 3000;
                        if (options.duration) {
                            duration = options.duration === 'long' ? 5000 : 3000;
                        }
                        return [4 /*yield*/, controller.create({
                                position: 'bottom',
                                message: options.text,
                                duration: duration,
                            })];
                    case 2:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ToastPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Toast = new ToastPluginWeb();

//# sourceMappingURL=toast.js.map

/***/ }),

/***/ "./src/app/pages/serviceorder/serviceorder.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/serviceorder/serviceorder.module.ts ***!
  \***********************************************************/
/*! exports provided: ServiceorderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceorderPageModule", function() { return ServiceorderPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _serviceorder_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serviceorder.page */ "./src/app/pages/serviceorder/serviceorder.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _serviceorder_page__WEBPACK_IMPORTED_MODULE_5__["ServiceorderPage"]
    }
];
var ServiceorderPageModule = /** @class */ (function () {
    function ServiceorderPageModule() {
    }
    ServiceorderPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_serviceorder_page__WEBPACK_IMPORTED_MODULE_5__["ServiceorderPage"]],
            providers: [
            //   CameraOriginal
            ]
        })
    ], ServiceorderPageModule);
    return ServiceorderPageModule;
}());



/***/ }),

/***/ "./src/app/pages/serviceorder/serviceorder.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/serviceorder/serviceorder.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/schedulesvisits\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Reg {{ clientNam }} </ion-title>\n    </ion-toolbar>\n</ion-header>\n<div class=\"bodycontent\">\n<ion-content>\n    <ion-spinner *ngIf=\"showSpiner\" name=\"crescent\" [ngClass]=\"{'spiner': showSpiner}\"></ion-spinner>\n    <ion-slides pager=\"true\" [options]=\"slideOpts\">\n        <ion-slide [ngClass]=\"{'blur': showSpiner}\">\n            <div>\n                <ion-list>\n                    <ion-item>\n                        <ion-icon name=\"md-camera\"></ion-icon>\n                        <ion-label>Registro de Fotos</ion-label>\n                        <ion-button color=\"primary\" (click)=\"takePicture()\">\n                            <ion-icon name=\"camera\"></ion-icon>\n                            <ion-label>Photo</ion-label>\n                        </ion-button>\n                    </ion-item>\n                    <ion-item>\n                        <ion-icon name=\"md-attach\"></ion-icon>\n                        <ion-label>Cargar Bosquejo</ion-label>\n                        <ion-button color=\"primary\" (click)=\"takePicture2()\">\n                            <ion-icon name=\"camera\"></ion-icon>\n                            <ion-label>Photo</ion-label>\n                        </ion-button>\n                    </ion-item>\n                    <ion-grid fixed *ngIf=\"showIm2\">\n                        <ion-row>\n                            <ion-col>\n                                <ion-card class=\"ion-bsq\">\n                                    <img [src]=\"imageBosq\"/>\n                                    <div class=\"card-title\">Bosquejo</div>\n                                </ion-card>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                    <h1 *ngIf=\"showIm1\">Fotos</h1>\n                    <ion-grid fixed *ngIf=\"showIm1\">\n                        <ion-row>\n                            <ion-col size=\"6\" *ngFor=\"let item of arrayImage\">\n                                <ion-card class=\"ion-img\">\n                                    <img [src]=\"item.photo_uri\"/>\n                                </ion-card>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </ion-list>\n            </div>\n        </ion-slide>\n        <ion-slide>\n            <form [formGroup]=\"selectedMaterialForm\">\n                <h2>Materiales</h2>\n                <ion-item class=\"item\">\n                    <ion-icon name=\"keypad\"></ion-icon>\n                    <ion-label>Categoría Materiales</ion-label>\n                    <ion-select formControlName=\"loadCategories\" cancelText=\"Cancel\"\n                        (ionChange)=\"listaMaterials($event)\">\n                        <ion-select-option *ngFor=\"let category of listCategories\" value={{category.id_category}}>\n                            {{category.category_name}}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n\n                <ion-item class=\"item\">\n                    <ion-icon name=\"keypad\"></ion-icon>\n                    <ion-label>Escoger Materiales</ion-label>\n                    <ion-select [disabled]=\"!loadCategories.valid\" multiple=\"true\" formControlName=\"loadMaterials\"\n                        cancelText=\"Cancel\" (ionChange)=\"registerSelectedMaterials($event)\">\n                        <ion-select-option *ngFor=\"let material of listMaterials\" value={{material.idmaterial}}>\n                            {{material.name}}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n            </form>\n        </ion-slide>\n        <ion-slide>\n            <form (ngSubmit)=\"registerCountMaterials()\">\n                <ion-label>Cantidad de Materiales</ion-label>\n                <div *ngIf=\"listVisits && listVisits.length > 0\">\n                    <ion-card class=\"card-schedules\" *ngFor=\"let listVisits of listVisits\">\n                        <ion-card-content>\n                            <ion-card-title> {{ listVisits.name }}</ion-card-title>\n                            <div style=\"float:right\">\n                                <ion-chip>\n                                    <ion-label>cantidad</ion-label>\n                                    <ion-input id=\"countMaterial{{listVisits.id_material}}\" value=\"{{listVisits.count}}\" autocomplete=\"off\"\n                                        type=\"text\"></ion-input>\n                                </ion-chip>\n                            </div>\n                        </ion-card-content>\n                    </ion-card>\n                </div>\n                <ion-button class=\"button-end\" shape=\"round\" expand=\"block\" fill=\"solid\" color=\"primary\" type=\"submit\">\n                    <ion-label class=\"textcapitalize\">Aceptar</ion-label>\n                </ion-button>\n                <br/>\n            </form>\n        </ion-slide>\n        <ion-slide>\n            <form [formGroup]=\"selectedWorkFoceForm\">\n                <h2>Mano de obra</h2>\n                <ion-item class=\"item\">\n                    <ion-icon name=\"keypad\"></ion-icon>\n                    <ion-label>Categoría Mano de Obra</ion-label>\n                    <ion-select formControlName=\"loadCategories\" cancelText=\"Cancel\"\n                        (ionChange)=\"listaWorkForces($event)\">\n                        <ion-select-option *ngFor=\"let category of listCategories2\" value={{category.id_category}}>\n                            {{category.category_name}}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item class=\"item\">\n                    <ion-icon name=\"keypad\"></ion-icon>\n                    <ion-label>Escoger Mano de Obra</ion-label>\n                    <ion-select [disabled]=\"!loadCategories.valid\" multiple=\"true\" formControlName=\"loadMaterials\"\n                        cancelText=\"Cancel\" (ionChange)=\"registerSelectedWorkforce($event)\">\n                        <ion-select-option *ngFor=\"let manoObra of listWorkForces\" value={{manoObra.idmaterial}}>\n                            {{manoObra.name}}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n            </form>\n        </ion-slide>\n        <ion-slide>\n            <form (ngSubmit)=\"registerCountWorkf()\">\n                <ion-label>Cantidad de Mano de obra</ion-label>\n                <div *ngIf=\"listWf && listWf.length > 0\">\n                    <ion-card class=\"card-schedules\" *ngFor=\"let listWf of listWf\">\n                        <ion-card-content>\n                            <ion-card-title>{{listWf.name}}</ion-card-title>\n                            <div style=\"float:right\">\n                                <ion-chip>\n                                    <ion-label>cantidad</ion-label>\n                                    <ion-input id=\"countWork{{listWf.id_material}}\" value=\"{{listWf.count}}\" autocomplete=\"off\"\n                                        type=\"text\"></ion-input>\n                                </ion-chip>\n                            </div>\n                        </ion-card-content>\n                    </ion-card>\n                </div>\n               <ion-button class=\"button-end\" shape=\"round\" expand=\"block\" fill=\"solid\" color=\"primary\" type=\"submit\">\n                <ion-label class=\"textcapitalize\">Aceptar</ion-label>\n            </ion-button>\n            </form>\n        </ion-slide>\n        <ion-slide>\n            <form [formGroup]=\"selectedToolForm\">\n                <h2>Herramientas</h2>\n                <ion-item class=\"item\">\n                    <ion-icon name=\"keypad\"></ion-icon>\n                    <ion-label>Categoría herramienta</ion-label>\n                    <ion-select formControlName=\"loadCategories\" cancelText=\"Cancel\" (ionChange)=\"listaTools($event)\">\n                        <ion-select-option *ngFor=\"let category of listCategories3\" value={{category.id_category}}>\n                            {{category.category_name}}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item class=\"item\">\n                    <ion-icon name=\"keypad\"></ion-icon>\n                    <ion-label>Escoger herramienta</ion-label>\n                    <ion-select [disabled]=\"!loadCategories.valid\" multiple=\"true\" formControlName=\"loadMaterials\"\n                        cancelText=\"Cancel\" (ionChange)=\"registerSelectedTools($event)\">\n                        <ion-select-option *ngFor=\"let tool of listTools\" value={{tool.idmaterial}}>\n                            {{tool.name}}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n            </form>\n        </ion-slide>\n        <ion-slide>\n            <form (ngSubmit)=\"registerCountTools()\">\n                <ion-label>Cantidad de heramientas</ion-label>\n\n                <div *ngIf=\"listTool && listTool.length > 0\">\n                    <ion-card class=\"card-schedules\" *ngFor=\"let listTool of listTool\">\n                        <ion-card-content>\n                            <ion-card-title> {{listTool.name}}</ion-card-title>\n                            <div style=\"float:right\">\n                                <ion-chip>\n                                    <ion-label>cantidad</ion-label>\n                                    <ion-input id=\"countTool{{listTool.id_material}}\" value=\"{{listTool.count}}\" autocomplete=\"off\"\n                                        type=\"text\"></ion-input>\n                                    </ion-chip>\n                                </div>\n                            </ion-card-content>\n                        </ion-card>\n                    </div>\n                <ion-button *ngIf=\"btnRegister\" shape=\"round\" expand=\"block\" fill=\"solid\" color=\"primary\" type=\"submit\">\n                    <ion-label class=\"textcapitalize\">Aceptar</ion-label>\n                </ion-button>\n            </form>\n        </ion-slide>\n        <ion-slide>\n            <form [formGroup]=\"selectedMachinaryForm\" (ngSubmit)=\"registerSelectedMachinaries()\">\n                <h2>Maquinarias</h2>\n                <ion-item class=\"item\">\n                    <ion-icon name=\"keypad\"></ion-icon>\n                    <ion-label>Categoría maquinaria</ion-label>\n                    <ion-select formControlName=\"loadCategories\" cancelText=\"Cancel\" (ionChange)=\"listaMachinary($event)\">\n                        <ion-select-option *ngFor=\"let category of listCategories4\" value={{category.id_category}}>\n                            {{category.category_name}}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item class=\"item\">\n                    <ion-icon name=\"keypad\"></ion-icon>\n                    <ion-label>Escoger maquinaria</ion-label>\n                    <ion-select [disabled]=\"!loadCategories.valid\" multiple=\"true\" formControlName=\"loadMaterials\"\n                        cancelText=\"Cancel\" (ionChange)=\"registerSelectedMachinaries($event)\">\n                        <ion-select-option *ngFor=\"let machinary of listmachinarys\" value={{machinary.idmaterial}}>\n                            {{machinary.name}}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n            </form>\n        </ion-slide>\n        <ion-slide>\n            <form (ngSubmit)=\"registerCountMachinary()\">\n                <ion-label>Cantidad de Maquinaria</ion-label>\n                <div *ngIf=\"listmachinarys && listmachinarys.length > 0\">\n                    <ion-card class=\"card-schedules\" *ngFor=\"let listmachinarys of listmachinarys\">\n                        <ion-card-content>\n                            <ion-card-title> {{ listmachinarys.name }}</ion-card-title>\n                            <div style=\"float:right\">\n                                <ion-chip>\n                                    <ion-label>cantidad</ion-label>\n                                    <ion-input id=\"countMachinary{{listmachinarys.id_material}}\" value=\"{{ listmachinarys.count }}\"\n                                        autocomplete=\"off\" type=\"text\"></ion-input>\n                                </ion-chip>\n                            </div>\n                        </ion-card-content>\n                    </ion-card>\n                </div>\n                <ion-button class=\"button-end\" shape=\"round\" expand=\"block\" fill=\"solid\" color=\"primary\" type=\"submit\">\n                     <ion-label class=\"textcapitalize\">Aceptar</ion-label>\n                 </ion-button>\n            </form>\n        </ion-slide>\n      </ion-slides>      \n    </ion-content>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/serviceorder/serviceorder.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/serviceorder/serviceorder.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-schedules {\n  border-radius: 5px;\n  border-left-style: solid;\n  border-left-color: #e0e0e0;\n  border-left-width: thick;\n  background: white; }\n\n.item {\n  --border-radius:30px;\n  padding: 5%; }\n\n.button-end {\n  margin-top: 30px; }\n\nion-content ion-slides ion-slide form {\n  max-width: 400px;\n  height: 650px; }\n\n.bodycontent {\n  background: white;\n  height: 100%;\n  width: 100%;\n  overflow: auto; }\n\n.size {\n  zoom: 1.5; }\n\n.ion-bsq {\n  position: relative;\n  text-align: center;\n  width: auto;\n  height: 300px; }\n\n.ion-bsq img {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content; }\n\n.card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2.0em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff; }\n\n.card-subtitle {\n  font-size: 1.0em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff; }\n\n.ion-img {\n  position: relative;\n  text-align: center;\n  width: auto;\n  height: 200px; }\n\n.ion-img img {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content; }\n\n.card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2.0em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff; }\n\n.card-subtitle {\n  font-size: 1.0em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff; }\n\n.blur {\n  -webkit-filter: blur(5px);\n          filter: blur(5px); }\n\n.spiner {\n  position: fixed;\n  top: 40%;\n  left: 40%;\n  height: 100px;\n  width: 100px;\n  z-index: 100;\n  opacity: 0.5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmR5Y2FpY2Vkby9Eb2N1bWVudHMvc29saW50ZXJhcHAvc3JjL2FwcC9wYWdlcy9zZXJ2aWNlb3JkZXIvc2VydmljZW9yZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QixpQkFBaUIsRUFBQTs7QUFHckI7RUFFRSxvQkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQUliO0VBQ0UsZ0JBQ0YsRUFBQTs7QUFFQTtFQUlRLGdCQUFnQjtFQUNoQixhQUFhLEVBQUE7O0FBTXJCO0VBRUcsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYyxFQUFBOztBQUdqQjtFQUVDLFNBQVMsRUFBQTs7QUFFVjtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWEsRUFBQTs7QUFKakI7SUFPTSwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQixFQUFBOztBQUl0QjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWEsRUFBQTs7QUFKakI7SUFPTSwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQixFQUFBOztBQUl0QjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFJZjtFQUNJLHlCQUFnQjtVQUFoQixpQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZXJ2aWNlb3JkZXIvc2VydmljZW9yZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXNjaGVkdWxlc1xue1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICNlMGUwZTA7XG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IHRoaWNrO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uaXRlbVxue1xuICAtLWJvcmRlci1yYWRpdXM6MzBweDtcbiAgcGFkZGluZzogNSU7XG4gIFxufVxuXG4uYnV0dG9uLWVuZHtcbiAgbWFyZ2luLXRvcDogMzBweFxufVxuXG5pb24tY29udGVudHtcbiAgaW9uLXNsaWRlc3tcbiAgICBpb24tc2xpZGV7XG4gICAgICBmb3Jte1xuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICBoZWlnaHQ6IDY1MHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uYm9keWNvbnRlbnRcbntcbiAgIGJhY2tncm91bmQ6IHdoaXRlOyBcbiAgIGhlaWdodDogMTAwJTtcbiAgIHdpZHRoOiAxMDAlO1xuICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5zaXplXG57XG4gem9vbTogMS41O1xufVxuLmlvbi1ic3Ege1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiAzMDBweDtcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgfVxuICB9XG5cbiAgLmNhcmQtdGl0bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDM2JTtcbiAgICBmb250LXNpemU6IDIuMGVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbiAgLmNhcmQtc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4wZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTIlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbi5pb24taW1nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogMjAwcHg7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIH1cbiAgfVxuXG4gIC5jYXJkLXRpdGxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzNiU7XG4gICAgZm9udC1zaXplOiAyLjBlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gIC5jYXJkLXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMGVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUyJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG5cbi5ibHVye1xuICAgIGZpbHRlcjpibHVyKDVweCk7XG59XG5cbi5zcGluZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNDAlO1xuICAgIGxlZnQ6IDQwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgb3BhY2l0eTogMC41O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/serviceorder/serviceorder.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/serviceorder/serviceorder.page.ts ***!
  \*********************************************************/
/*! exports provided: ServiceorderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceorderPage", function() { return ServiceorderPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _services_materials_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/materials.service */ "./src/app/services/materials.service.ts");
/* harmony import */ var _services_serviceorder_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/serviceorder.service */ "./src/app/services/serviceorder.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _services_porcentage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/porcentage.service */ "./src/app/services/porcentage.service.ts");
/* harmony import */ var _services_workforce_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/workforce.service */ "./src/app/services/workforce.service.ts");
/* harmony import */ var _services_herramienta_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/herramienta.service */ "./src/app/services/herramienta.service.ts");
/* harmony import */ var _services_maquinaria_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/maquinaria.service */ "./src/app/services/maquinaria.service.ts");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/config-service */ "./src/app/services/config-service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_section_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/services/section.service */ "./src/app/services/section.service.ts");
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

















var ServiceorderPage = /** @class */ (function () {
    function ServiceorderPage(dataService, router, formBuilder, sanitizer, materialService, orderService, sectionService, categoryName, serviceOrder, transfer, config, loadingCtrl, servicePorcentage, workForceService, toolService, MachinaryService) {
        this.dataService = dataService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.sanitizer = sanitizer;
        this.materialService = materialService;
        this.orderService = orderService;
        this.sectionService = sectionService;
        this.categoryName = categoryName;
        this.serviceOrder = serviceOrder;
        this.transfer = transfer;
        this.config = config;
        this.loadingCtrl = loadingCtrl;
        this.servicePorcentage = servicePorcentage;
        this.workForceService = workForceService;
        this.toolService = toolService;
        this.MachinaryService = MachinaryService;
        this.arrayImage = [];
        this.btnRegister = true;
        this.btnAsigned = false;
        this.btnUpdate = false;
        this.showIm1 = false;
        this.showIm2 = false;
        this.showSpinner = true;
        this.showFormOrder = true;
        this.showFormListMaterials = false;
        this.showFormCountMaterials = false;
        this.registerVisitForm = this.formBuilder.group({
            id: [''],
            loadImage: ['',],
            loadBosq: ['',],
        });
        this.selectedMaterialForm = this.formBuilder.group({
            id: [''],
            loadCategories: [''],
            loadMaterials: ['',]
        });
        this.selectedWorkFoceForm = this.formBuilder.group({
            id: [''],
            loadCategories: [''],
            loadMaterials: ['',]
        });
        this.selectedMachinaryForm = this.formBuilder.group({
            id: [''],
            loadCategories: [''],
            loadMaterials: ['',]
        });
        this.selectedToolForm = this.formBuilder.group({
            id: [''],
            loadCategories: [''],
            loadMaterials: ['',]
        });
        this.selectedMaterialForm = this.formBuilder.group({
            id: [''],
            loadCategories: [''],
            loadMaterials: ['',],
            porcentage: ['',]
        });
        this.countMaterialForm = this.formBuilder.group({
            id: [''],
            countMaterial: [''],
            id_section: ['']
        });
        this.loadImage = this.registerVisitForm.controls['loadImage'];
        this.loadBosq = this.registerVisitForm.controls['loadBosq'];
        this.visitDescription = this.registerVisitForm.controls['visitDescription'];
        this.loadCategories = this.selectedMaterialForm.controls['loadCategories'];
        this.loadMaterials = this.selectedMaterialForm.controls['loadMaterials'];
    }
    ServiceorderPage.prototype.registerOrder = function () {
        var _this = this;
        var r;
        for (r = 0; r < this.arrayImage.length; r++) {
            this.arrayImage[r] = this.arrayImage[r].replace("SafeValue must use [property]=binding: data:image/jpeg;base64,", "");
            this.arrayImage[r] = this.arrayImage[r].replace("(see http://g.co/ng/security#xss)", "");
        }
        this.registerVisitForm.value.loadImage = this.arrayImage;
        this.registerVisitForm.value.loadBosq = this.photo2.toString();
        this.registerVisitForm.value.id = this.id_section;
        this.registerVisitForm.value.loadBosq = this.registerVisitForm.value.loadBosq.replace("SafeValue must use [property]=binding: data:image/jpeg;base64,", "");
        this.registerVisitForm.value.loadBosq = this.registerVisitForm.value.loadBosq.replace("(see http://g.co/ng/security#xss)", "");
        this.orderService.registerOrder(this.registerVisitForm.value)
            .subscribe(function (res) {
            _this.showSpinner = false;
        });
    };
    ServiceorderPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.clientNam = this.dataService.sorder.clientNam;
                this.id_visit = this.dataService.sorder.id_visit;
                this.id_section = this.dataService.sorder.id_section;
                this.getSection();
                this.getCategoriesName();
                this.cantidadMateriales();
                this.cantidadWorkforce();
                this.cantidadTools();
                this.cantidadMachinaries();
                return [2 /*return*/];
            });
        });
    };
    ServiceorderPage.prototype.takePicture = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, Camera;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create()];
                    case 1:
                        _a.loading = _b.sent();
                        this.loading.present();
                        Camera = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Camera;
                        this.showSpinner = true;
                        Camera.getPhoto({
                            quality: 50,
                            allowEditing: false,
                            resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["CameraResultType"].DataUrl,
                            source: _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["CameraSource"].Camera || _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["CameraSource"].Photos
                        }).then(function (res) {
                            _this.uploadImage(res.dataUrl, _this.id_section, 2).then(function (resUp) {
                                if (resUp.responseCode == 200) {
                                    _this.arrayImage.push(resUp.response.replace(/['"]+/g, ''));
                                    _this.showIm1 = true;
                                    _this.loading.dismiss();
                                }
                                else {
                                    console.log(resUp.response);
                                    _this.loading.dismiss();
                                }
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ServiceorderPage.prototype.takePicture2 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, Camera;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create()];
                    case 1:
                        _a.loading = _b.sent();
                        this.loading.present();
                        Camera = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Camera;
                        Camera.getPhoto({
                            quality: 50,
                            allowEditing: false,
                            resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["CameraResultType"].DataUrl,
                            source: _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["CameraSource"].Camera || _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["CameraSource"].Photos
                        }).then(function (res) {
                            _this.uploadImage(res.dataUrl, _this.id_section, 1).then(function (resUp) {
                                if (resUp.responseCode == 200) {
                                    _this.imageBosq = resUp.response.replace(/['"]+/g, '');
                                    _this.showIm2 = true;
                                    _this.loading.dismiss();
                                }
                                else {
                                    console.log(resUp.response);
                                    _this.loading.dismiss();
                                }
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ServiceorderPage.prototype.uploadImage = function (img, id, type) {
        // Destination URL
        var url = this.config.getConfig().bussinesServer.url + '/section/photos';
        // File for Upload
        var targetPath = img;
        var options = {
            fileKey: 'image',
            chunkedMode: false,
            mimeType: 'multipart/form-data',
            params: { 'id': id, 'type': type }
        };
        var fileTransfer = this.transfer.create();
        // Use the FileTransfer to upload the image
        return fileTransfer.upload(targetPath, url, options);
    };
    ServiceorderPage.prototype.getSection = function () {
        var _this = this;
        this.sectionService.getSection(this.id_section).subscribe(function (res) {
            _this.arrayImage = res.photos;
            if (_this.arrayImage.length > 0)
                _this.showIm1 = true;
            _this.section = res.section;
            if (_this.section[0].mockup_picture_uri != null) {
                _this.imageBosq = _this.section[0].mockup_picture_uri;
                _this.showIm2 = true;
            }
        });
    };
    ServiceorderPage.prototype.getCategoriesName = function () {
        var _this = this;
        this.showSpinner = true;
        this.categoryName.getCategories().subscribe(function (res) {
            _this.listCategories = res.filter(function (category) { return category.category_type == 1; });
            _this.listCategories2 = res.filter(function (category) { return category.category_type == 4; });
            _this.listCategories3 = res.filter(function (category) { return category.category_type == 2; });
            _this.listCategories4 = res.filter(function (category) { return category.category_type == 3; });
        });
        this.showSpinner = false;
    };
    ServiceorderPage.prototype.listaMateriales = function () {
        this.showFormOrder = false;
        this.showFormListMaterials = true;
        this.showFormCountMaterials = false;
        this.idCategoria = this.getCategoriesName();
        this.listaPorcentages();
    };
    ServiceorderPage.prototype.listaMaterials = function (e) {
        var _this = this;
        this.materialService.getMaterialsId(e.target.value).subscribe(function (res) {
            _this.listMaterials = res;
        });
    };
    ServiceorderPage.prototype.listaWorkForces = function (e) {
        var _this = this;
        this.workForceService.getWorkForceId(e.target.value).subscribe(function (res) {
            _this.listWorkForces = res;
        });
    };
    ServiceorderPage.prototype.listaTools = function (e) {
        var _this = this;
        this.toolService.getToolId(e.target.value).subscribe(function (res) {
            _this.listTools = res;
        });
    };
    ServiceorderPage.prototype.listaMachinary = function (e) {
        var _this = this;
        this.MachinaryService.getMachinaryId(e.target.value).subscribe(function (res) {
            _this.listmachinarys = res;
        });
    };
    ServiceorderPage.prototype.listaPorcentages = function () {
        var _this = this;
        this.servicePorcentage.getPorcentageMaterials().subscribe(function (res) {
            _this.listPorcentages = res;
        });
    };
    ServiceorderPage.prototype.cantidadMateriales = function () {
        var _this = this;
        this.countMaterialForm.value.id = this.id_visit;
        this.countMaterialForm.value.id_section = this.id_section;
        this.materialService.getSelectedMaterials(this.countMaterialForm.value)
            .subscribe(function (res) {
            _this.listVisits = res.visits;
            _this.showFormOrder = false;
            _this.showFormListMaterials = false;
            _this.showFormCountMaterials = true;
        });
    };
    ServiceorderPage.prototype.cantidadWorkforce = function () {
        var _this = this;
        this.countMaterialForm.value.id = this.id_visit;
        this.countMaterialForm.value.id_section = this.id_section;
        this.workForceService.getSelectedWorkforce(this.countMaterialForm.value.id)
            .subscribe(function (res) {
            _this.listWf = res.visits;
            _this.showFormOrder = false;
            _this.showFormListMaterials = false;
            _this.showFormCountMaterials = true;
        });
    };
    ServiceorderPage.prototype.cantidadTools = function () {
        var _this = this;
        this.countMaterialForm.value.id = this.id_visit;
        this.countMaterialForm.value.id_section = this.id_section;
        this.toolService.getSelectedTools(this.countMaterialForm.value.id)
            .subscribe(function (res) {
            _this.listTool = res.visits;
            _this.showFormOrder = false;
            _this.showFormListMaterials = false;
            _this.showFormCountMaterials = true;
        });
    };
    ServiceorderPage.prototype.cantidadMachinaries = function () {
        var _this = this;
        this.countMaterialForm.value.id = this.id_visit;
        this.countMaterialForm.value.id_section = this.id_section;
        this.MachinaryService.getSelectedMachinary(this.countMaterialForm.value.id)
            .subscribe(function (res) {
            _this.listmachinarys = res.visits;
            _this.showFormOrder = false;
            _this.showFormListMaterials = false;
            _this.showFormCountMaterials = true;
        });
    };
    ServiceorderPage.prototype.registerSelectedMaterials = function (e) {
        var _this = this;
        this.showSpinner = true;
        var matSelcted = {
            id: this.id_visit,
            id_section: this.id_section,
            loadMaterials: e.target.value
        };
        this.serviceOrder.postmaterialSelected(matSelcted)
            .subscribe(function (res) {
            _this.showSpinner = false;
            if (res.status) {
                _this.cantidadMateriales();
            }
        });
    };
    ServiceorderPage.prototype.registerSelectedWorkforce = function (e) {
        var _this = this;
        this.showSpinner = true;
        var workSelcted = {
            id: this.id_visit,
            id_section: this.id_section,
            loadWorkforces: e.target.value
        };
        this.serviceOrder.postworkforceSelected(workSelcted)
            .subscribe(function (res) {
            _this.showSpinner = false;
            if (res.status) {
                _this.cantidadWorkforce();
            }
        });
    };
    ServiceorderPage.prototype.registerSelectedTools = function (e) {
        var _this = this;
        this.showSpinner = true;
        var toolSelcted = {
            id: this.id_visit,
            id_section: this.id_section,
            loadTools: e.target.value
        };
        this.serviceOrder.posttoolSelected(toolSelcted)
            .subscribe(function (res) {
            _this.showSpinner = false;
            if (res.status) {
                _this.cantidadTools();
            }
        });
    };
    ServiceorderPage.prototype.registerSelectedMachinaries = function (e) {
        var _this = this;
        this.showSpinner = true;
        var machSelcted = {
            id: this.id_visit,
            id_section: this.id_section,
            loadMachinarys: e.target.value
        };
        this.serviceOrder.postmachinarySelected(machSelcted)
            .subscribe(function (res) {
            _this.showSpinner = false;
            if (res.status) {
                _this.cantidadMachinaries();
            }
        });
    };
    ServiceorderPage.prototype.registerCountMaterials = function () {
        this.showSpinner = true;
        for (var i = 0; i < this.listVisits.length; i++) {
            var e = this.listVisits[i];
            var material = {
                count: document.getElementById("countMaterial" + e.id_material).value,
                id_material: e.id_material,
                cod_visit: e.cod_visit,
                id_section: this.id_section
            };
            this.serviceOrder.putmaterialSelectedCount(material).subscribe();
        }
    };
    ServiceorderPage.prototype.registerCountWorkf = function () {
        this.showSpinner = true;
        for (var i = 0; i < this.listWf.length; i++) {
            var e = this.listWf[i];
            var workforce = {
                count: document.getElementById("countWork" + e.id_material).value,
                id_Workf: e.id_material,
                cod_visit: e.cod_visit,
                id_section: this.id_section
            };
            this.serviceOrder.putworkForceSelectedCount(workforce).subscribe();
        }
    };
    ServiceorderPage.prototype.registerCountTools = function () {
        this.showSpinner = true;
        for (var i = 0; i < this.listTool.length; i++) {
            var e = this.listTool[i];
            var tool = {
                count: document.getElementById("countTool" + e.id_material).value,
                id_tool: e.id_material,
                cod_visit: e.cod_visit,
                id_section: this.id_section
            };
            this.serviceOrder.putToolSelectedCount(tool)
                .subscribe(function (res) {
            });
        }
    };
    ServiceorderPage.prototype.registerCountMachinary = function () {
        this.showSpinner = true;
        for (var i = 0; i < this.listmachinarys.length; i++) {
            var e = this.listmachinarys[i];
            var machinary = {
                count: document.getElementById("countMachinary" + e.id_material).value,
                id_machinary: e.id_material,
                cod_visit: e.cod_visit,
                id_section: this.id_section
            };
            this.serviceOrder.putMachinarySelectedCount(machinary)
                .subscribe(function (res) {
            });
        }
    };
    ServiceorderPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-serviceorder',
            template: __webpack_require__(/*! ./serviceorder.page.html */ "./src/app/pages/serviceorder/serviceorder.page.html"),
            styles: [__webpack_require__(/*! ./serviceorder.page.scss */ "./src/app/pages/serviceorder/serviceorder.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
            _services_materials_service__WEBPACK_IMPORTED_MODULE_6__["MaterialsService"], _services_serviceorder_service__WEBPACK_IMPORTED_MODULE_7__["ServiceorderService"],
            src_app_services_section_service__WEBPACK_IMPORTED_MODULE_16__["SectionService"],
            _services_category_service__WEBPACK_IMPORTED_MODULE_8__["CategoryService"], _services_serviceorder_service__WEBPACK_IMPORTED_MODULE_7__["ServiceorderService"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_13__["FileTransfer"], src_app_services_config_service__WEBPACK_IMPORTED_MODULE_14__["ConfigService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["LoadingController"],
            _services_porcentage_service__WEBPACK_IMPORTED_MODULE_9__["PorcentageService"], _services_workforce_service__WEBPACK_IMPORTED_MODULE_10__["WorkforceService"],
            _services_herramienta_service__WEBPACK_IMPORTED_MODULE_11__["HerramientaService"], _services_maquinaria_service__WEBPACK_IMPORTED_MODULE_12__["MaquinariaService"]])
    ], ServiceorderPage);
    return ServiceorderPage;
}());



/***/ }),

/***/ "./src/app/services/porcentage.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/porcentage.service.ts ***!
  \************************************************/
/*! exports provided: PorcentageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PorcentageService", function() { return PorcentageService; });
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



var PorcentageService = /** @class */ (function () {
    function PorcentageService(http, config) {
        this.http = http;
        this.config = config;
        this.URL_API = this.config.getConfig().bussinesServer.url;
    }
    PorcentageService.prototype.ngOnInit = function () {
    };
    PorcentageService.prototype.getPorcentageMaterials = function () {
        return this.http.get(this.URL_API + "/porcentages");
    };
    PorcentageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], PorcentageService);
    return PorcentageService;
}());



/***/ }),

/***/ "./src/app/services/serviceorder.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/serviceorder.service.ts ***!
  \**************************************************/
/*! exports provided: ServiceorderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceorderService", function() { return ServiceorderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-service */ "./src/app/services/config-service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServiceorderService = /** @class */ (function () {
    function ServiceorderService(http, config) {
        this.http = http;
        this.config = config;
        this.URL_API = this.config.getConfig().bussinesServer.url;
    }
    ServiceorderService.prototype.ngOnInit = function () {
    };
    ServiceorderService.prototype.getClients = function () {
        return this.http.get(this.URL_API + "/clients");
    };
    ServiceorderService.prototype.searchsClients = function (client) {
        return this.http.post(this.URL_API + "/clients/search", client);
    };
    ServiceorderService.prototype.postmaterialSelected = function (selectedMaterial) {
        return this.http.post(this.URL_API + "/serviceorder/materialS", selectedMaterial);
    };
    ServiceorderService.prototype.postworkforceSelected = function (selectedWorkforce) {
        return this.http.post(this.URL_API + "/serviceorder/workforceS", selectedWorkforce);
    };
    ServiceorderService.prototype.posttoolSelected = function (selectedTool) {
        return this.http.post(this.URL_API + "/serviceorder/toolS", selectedTool);
    };
    ServiceorderService.prototype.postmachinarySelected = function (selectedMachinary) {
        return this.http.post(this.URL_API + "/serviceorder/machinaryS", selectedMachinary);
    };
    ServiceorderService.prototype.putmaterialSelectedCount = function (countMaterial) {
        return this.http.put(this.URL_API + ("/serviceorder/materialS/" + countMaterial.cod_visit), countMaterial);
    };
    ServiceorderService.prototype.putworkForceSelectedCount = function (countWorkForce) {
        return this.http.put(this.URL_API + ("/serviceorder/workForceS/" + countWorkForce.cod_visit), countWorkForce);
    };
    ServiceorderService.prototype.putToolSelectedCount = function (countTool) {
        return this.http.put(this.URL_API + ("/serviceorder/toolS/" + countTool.cod_visit), countTool);
    };
    ServiceorderService.prototype.putMachinarySelectedCount = function (countMachinary) {
        return this.http.put(this.URL_API + ("/serviceorder/machinaryS/" + countMachinary.cod_visit), countMachinary);
    };
    ServiceorderService.prototype.registerOrder = function (order) {
        return this.http.put(this.URL_API + "/section/photos", order);
    };
    ServiceorderService.prototype.putClient = function (client) {
        return this.http.put(this.URL_API + ("/clients/" + client._id), client);
    };
    ServiceorderService.prototype.deleteClient = function (_id) {
        return this.http.delete(this.URL_API + "/clients" + ("/" + _id));
    };
    ServiceorderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], ServiceorderService);
    return ServiceorderService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-serviceorder-serviceorder-module.js.map