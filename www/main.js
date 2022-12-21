(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);





var routes = [{
  path: '',
  loadChildren: function loadChildren() {
    return Promise.all(/*! import() */[__webpack_require__.e("default-src_app_device-select_device-select_page_ts"), __webpack_require__.e("src_app_device-select_device-select_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./device-select/device-select.module */ 4142)).then(function (m) {
      return m.DeviceSelectPageModule;
    });
  }
}, // {
//   path: '',
//   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
// },
{
  path: 'tabs/tab1',
  loadChildren: function loadChildren() {
    return Promise.all(/*! import() */[__webpack_require__.e("default-src_app_device-select_device-select_page_ts"), __webpack_require__.e("src_app_tab1_tab1_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tab1/tab1.module */ 2168)).then(function (m) {
      return m.Tab1PageModule;
    });
  }
}, {
  path: 'tabs/tab2',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_tab2_tab2_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tab2/tab2.module */ 4608)).then(function (m) {
      return m.Tab2PageModule;
    });
  }
}, {
  path: 'wifi',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_wifi_wifi_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./wifi/wifi.module */ 5346)).then(function (m) {
      return m.WifiPageModule;
    });
  }
}, {
  path: 'device-select',
  loadChildren: function loadChildren() {
    return Promise.all(/*! import() */[__webpack_require__.e("default-src_app_device-select_device-select_page_ts"), __webpack_require__.e("src_app_device-select_device-select_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./device-select/device-select.module */ 4142)).then(function (m) {
      return m.DeviceSelectPageModule;
    });
  }
}, {
  path: 'wifi-pass-modal',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_wifi-pass-modal_wifi-pass-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./wifi-pass-modal/wifi-pass-modal.module */ 5294)).then(function (m) {
      return m.WifiPassModalPageModule;
    });
  }
}];

var AppRoutingModule = /*#__PURE__*/(0,_Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppRoutingModule() {
  (0,_Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppRoutingModule);
});

AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules
  })],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
})], AppRoutingModule);


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/ble/ngx */ 714);
/* harmony import */ var _awesome_cordova_plugins_wifi_wizard_2_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/wifi-wizard-2/ngx */ 5691);
/* harmony import */ var _mokapot_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mokapot.service */ 7952);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 6457);
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home.service */ 9516);



function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }












var AppComponent = /*#__PURE__*/(0,_Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppComponent(wifiWizard2, platform, ble, homeService, mokapotService, geolocation) {
  var _this = this;

  (0,_Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppComponent);

  this.wifiWizard2 = wifiWizard2;
  this.platform = platform;
  this.ble = ble;
  this.homeService = homeService;
  this.mokapotService = mokapotService;
  this.geolocation = geolocation;
  var main = this;
  this.platform.ready().then(function () {
    _this.homeService.getUserCheck();

    _this.geolocation.getCurrentPosition().then(function (resp) {
      console.log('got the location:', resp);
    }).catch(function (error) {
      console.log('error with the location:', error);
    });
    /*
    this.wifiWizard2.getConnectedSSID().then(function (network) {
      main.mokapotService.connected_network = network;
      main.homeService.internet_connection = "connected";
    }).catch(function (err) {
      console.log('first SSID error',err);
      main.homeService.internet_connection = "notconnected";
      //main.noInternetAlert();
    });
    */

  });
  this.platform.resume.subscribe(function () {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("resume");
              this.wifiWizard2.getConnectedSSID().then(function (network) {
                main.mokapotService.connected_network = network;
              }).catch(function (err) {
                console.log(err);
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
  });
});

AppComponent.ctorParameters = function () {
  return [{
    type: _awesome_cordova_plugins_wifi_wizard_2_ngx__WEBPACK_IMPORTED_MODULE_5__.WifiWizard2
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform
  }, {
    type: _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_4__.BLE
  }, {
    type: _home_service__WEBPACK_IMPORTED_MODULE_8__.HomeService
  }, {
    type: _mokapot_service__WEBPACK_IMPORTED_MODULE_6__.MokapotService
  }, {
    type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__.Geolocation
  }];
};

AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], AppComponent);


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/storage */ 7045);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/ble/ngx */ 714);
/* harmony import */ var _awesome_cordova_plugins_wifi_wizard_2_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/wifi-wizard-2/ngx */ 5691);
/* harmony import */ var _awesome_cordova_plugins_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/open-native-settings/ngx */ 8809);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 6457);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-socket-io */ 4935);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 2407);
/* harmony import */ var _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/deeplinks/ngx */ 5586);
/* harmony import */ var _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @awesome-cordova-plugins/barcode-scanner/ngx */ 8283);
/* harmony import */ var _awesome_cordova_plugins_network_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @awesome-cordova-plugins/network/ngx */ 9940);
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-circle-progress */ 8072);





















var config = {
  url: 'http://54.224.216.230:8080',
  options: {
    transports: ['websocket']
  }
};

var AppModule = /*#__PURE__*/(0,_Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppModule() {
  (0,_Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppModule);
});

AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent],
  imports: [_ionic_storage__WEBPACK_IMPORTED_MODULE_14__.IonicStorageModule.forRoot(), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonicModule.forRoot({
    mode: 'ios',
    scrollAssist: false,
    scrollPadding: false
  }), _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, ngx_socket_io__WEBPACK_IMPORTED_MODULE_18__.SocketIoModule.forRoot(config), ng_circle_progress__WEBPACK_IMPORTED_MODULE_19__.NgCircleProgressModule.forRoot({
    radius: 100,
    outerStrokeWidth: 16,
    innerStrokeWidth: 8,
    outerStrokeColor: "#78C000",
    innerStrokeColor: "#C7E596",
    animationDuration: 300
  })],
  providers: [_ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_4__.BLE, _awesome_cordova_plugins_wifi_wizard_2_ngx__WEBPACK_IMPORTED_MODULE_5__.WifiWizard2, _awesome_cordova_plugins_network_ngx__WEBPACK_IMPORTED_MODULE_11__.Network, _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__.Geolocation, _awesome_cordova_plugins_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_6__.OpenNativeSettings, _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__.InAppBrowser, _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_9__.Deeplinks, _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_10__.BarcodeScanner, {
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouteReuseStrategy,
    useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonicRouteStrategy
  }],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
})], AppModule);


/***/ }),

/***/ 9516:
/*!*********************************!*\
  !*** ./src/app/home.service.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeService": function() { return /* binding */ HomeService; }
/* harmony export */ });
/* harmony import */ var _Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 7045);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-socket-io */ 4935);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ 2535);



function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }











var HomeService = /*#__PURE__*/function () {
  function HomeService(http, storage, navController, socket, loadingController) {
    (0,_Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomeService);

    this.http = http;
    this.storage = storage;
    this.navController = navController;
    this.socket = socket;
    this.loadingController = loadingController;
    this.link = "https://5tpxh1vxw1.execute-api.us-east-1.amazonaws.com/ScaleTrigger";
    this.link_cook = 'https://5tpxh1vxw1.execute-api.us-east-1.amazonaws.com/CookSomething';
    this.link_iot = 'https://5tpxh1vxw1.execute-api.us-east-1.amazonaws.com/triggerIoT';
    this.link_token = 'https://api.amazon.com/auth/o2/token';
    this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Content-Type', 'application/json');
    this.token_headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    this.api_headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("Access-Control-Allow-Origin", "*");
    this.grant_type = 'authorization_code';
    this.client_id = 'amzn1.application-oa2-client.fc31251f56d840399f8d167aff2fd4d3';
    this.client_secret = 'f39a8bd2023112a86c08e4f428a14994bda85f55082cddf38ccb68e0cdbd5931';
    this.redirect_uri = 'https://carv.ist/mokapot/return.php';
    this.isLoading = false;
    this.userData = new _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage({
      name: "scale_db",
      storeName: "user"
    });
    this.socket.connect();
    this.socket.on('connect', function () {
      console.log('connected');
    });
  }

  (0,_Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(HomeService, [{
    key: "addUserQuery",
    value: function addUserQuery(usermail) {
      return this.http.post(this.link, {
        "job": "add_user_query",
        usermail: usermail
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function (result) {//console.log(result) 
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('add user query')));
    }
  }, {
    key: "addAmazonQuery",
    value: function addAmazonQuery(usermail) {
      return this.http.post(this.link, {
        "job": "add_amazon_user_query",
        usermail: usermail
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function (result) {
        console.log("addAmazonQuery: ", result);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('add user query')));
    }
  }, {
    key: "addUserControl",
    value: function addUserControl(usname, username, usermail, userpass, userid) {
      var _this = this;

      return this.http.post(this.link, {
        "job": "add_user_control",
        usname: usname,
        username: username,
        usermail: usermail,
        userpass: userpass,
        userid: userid
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function (result) {
        _this.control_add_user = result.status; //console.log(result)
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('add user control')));
    }
  }, {
    key: "addAmazonControl",
    value: function addAmazonControl() {
      return this.http.post(this.link, {
        "job": "add_amazon_control"
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function (result) {
        console.log(result);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('add user control')));
    }
  }, {
    key: "addUser",
    value: function addUser(usname, username, usermail, userpass, userid) {
      return this.http.post(this.link, {
        "job": "add_user",
        usname: usname,
        username: username,
        usermail: usermail,
        userpass: userpass,
        userid: userid
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function (result) {//console.log(result) 
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('add user')));
    }
  }, {
    key: "addAmazonUser",
    value: function addAmazonUser(usname, username, usermail, userpass, userid, amazonstatus) {
      return this.http.post(this.link, {
        "job": "add_amazon_user",
        usname: usname,
        username: username,
        usermail: usermail,
        userpass: userpass,
        userid: userid,
        amazonstatus: amazonstatus
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function (result) {
        console.log(result);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('add amazon user')));
    }
  }, {
    key: "loginUserQuery",
    value: function loginUserQuery(usermail, userpass) {
      return this.http.post(this.link, {
        "job": "login_query",
        usermail: usermail,
        userpass: userpass
      }, {
        headers: this.api_headers
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function (result) {
        console.log("result loginUserQuery", result);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('login query')));
    }
  }, {
    key: "loginUser",
    value: function loginUser(usermail, userpass) {
      var _this2 = this;

      return this.http.post(this.link, {
        "job": "login_user",
        usermail: usermail,
        userpass: userpass
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function (result) {
        console.log("result loginUser", result);

        if (!result.status) {
          _this2.user_id = result[0].id.S;
          _this2.user_check = result;
          console.log("user_check", _this2.user_check);

          _this2.storage.set('user', _this2.user_check);
        } else {
          _this2.user_check = result.status;
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('login user')));
    }
  }, {
    key: "getUserId",
    value: function getUserId(usermail) {
      var _this3 = this;

      return this.http.post(this.link, {
        "job": "get_user_id",
        usermail: usermail
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function (result) {
        _this3.user_id = result.id[0].S;

        _this3.getUserCheck();

        console.log("result getUserID", result);
        console.log("result", result.id[0].S);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('login user')));
    }
  }, {
    key: "logout",
    value: function logout() {
      this.storage.set('user', '');
    }
  }, {
    key: "getDeviceCategory",
    value: function getDeviceCategory() {
      return this.http.post(this.link, {
        "job": "get_device_category"
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function (result) {
        console.log("result", result);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('get device category')));
    }
  }, {
    key: "getRecipe",
    value: function getRecipe() {
      return this.http.post(this.link, {
        "job": "get_recipe2"
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function (data) {}), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('get recipe')));
    }
  }, {
    key: "getRecipeQuery",
    value: function getRecipeQuery() {
      var _this4 = this;

      return this.http.post(this.link, {
        "job": "get_recipe_query2"
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function (data) {
        _this4.jsonList = data; //console.log("data", data) 
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('get recipe query')));
    }
  }, {
    key: "addUserDevices",
    value: function addUserDevices(devicetype, userid, device, newdevice, devicename, status) {
      return this.http.post(this.link, {
        "job": "add_user_devices",
        devicetype: devicetype,
        userid: userid,
        device: device,
        newdevice: newdevice,
        devicename: devicename,
        statu: status
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function (result) {
        console.log("add devices: ", result);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('add user devices')));
    }
  }, {
    key: "addUserNewDevices",
    value: function addUserNewDevices(id, devicetype, userid, device, newdevice, devicename) {
      return this.http.post(this.link, {
        "job": "add_newmokapot_devices",
        id: id,
        device: device,
        devicetype: devicetype,
        newdevice: newdevice,
        userid: userid,
        devicename: devicename
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function (result) {
        console.log("add devices: ", result);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('add user devices')));
    }
  }, {
    key: "updateUserDevices",
    value: function updateUserDevices(id, device, devicename, devicetype, newdevice, status, userid) {
      return this.http.post(this.link, {
        "job": "update_user_devices",
        id: id,
        device: device,
        devicename: devicename,
        devicetype: devicetype,
        newdevice: newdevice,
        status: status,
        userid: userid
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function (result) {
        console.log("add devices: ", result);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('add user devices')));
    }
  }, {
    key: "getUserDevices",
    value: function getUserDevices(userid) {
      console.log(userid);
      return this.http.post(this.link, {
        "job": "get_user_devices",
        userid: userid
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function (data) {}), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('get user devices query')));
    }
  }, {
    key: "getUserDevicesQuery",
    value: function getUserDevicesQuery() {
      return this.http.post(this.link, {
        "job": "get_devices_query"
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function (data) {}), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('get devices query')));
    }
  }, {
    key: "mobileCon",
    value: function mobileCon(localid, appid) {
      return this.http.post(this.link_cook, {
        "job": "mobile_con",
        localid: localid,
        appid: appid
      }, {
        headers: this.headers
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function (result) {
        console.log('result: ', result);
      }));
    }
  }, {
    key: "mobileControl",
    value: function mobileControl(localid, appid) {
      var _this5 = this;

      return this.http.post(this.link_cook, {
        "job": "mobile_control",
        localid: localid,
        appid: appid
      }, {
        headers: this.headers
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function (result) {
        console.log('result: ', result.status);
        _this5.controlCon = result.status;
      }));
    }
  }, {
    key: "addCon",
    value: function addCon(devicetype, userid, device, newdevice, devicename) {
      return this.http.post(this.link_cook, {
        "job": "add_fitchef_connection",
        userid: userid,
        device: device,
        devicetype: devicetype,
        newdevice: newdevice,
        devicename: devicename
      }, {
        headers: this.headers
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function (result) {
        console.log('result: ', result);
      }));
    }
  }, {
    key: "deviceAddTr",
    value: function deviceAddTr(id, appid) {
      return this.http.post(this.link_iot, {
        "job": "add_device_tr",
        id: id,
        appid: appid
      }, {
        headers: this.api_headers
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function (result) {
        console.log('result: ', result);
      }));
    }
  }, {
    key: "shortToAccessToken",
    value: function shortToAccessToken(code) {
      var body = "grant_type=" + this.grant_type + "&code=" + code + "&client_id=" + this.client_id + "&client_secret=" + this.client_secret + "&redirect_uri=" + this.redirect_uri;
      return this.http.post(this.link_token, body, {
        headers: this.token_headers
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function (res) {}));
    }
  }, {
    key: "deleteUser",
    value: function deleteUser(mail) {
      return this.http.post(this.link, {
        "job": "delete_user_account",
        mail: mail
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function (result) {
        console.log("delete user account: ", result);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('delete user account')));
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "getLoginStatus",
    value: function getLoginStatus() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var login_control;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.storage.get('login');

              case 2:
                login_control = _context.sent;
                this.login_control = login_control; //console.log("login_control", login_control)

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "getUserCheckProfile",
    value: function getUserCheckProfile() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this6 = this;

        var value_id, user_control;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.storage.get('localid');

              case 2:
                value_id = _context2.sent;
                this.localapp_id = value_id;
                console.log('local app id: ', this.localapp_id);

                if (this.localapp_id == '' || this.localapp_id == null || this.localapp_id == undefined) {
                  this.localapp_id = (0,uuid__WEBPACK_IMPORTED_MODULE_7__["default"])();
                  console.log(this.localapp_id);
                  this.storage.set('localid', this.localapp_id);
                } else {
                  console.log("id var");
                }

                console.log('This local app id', this.localapp_id);
                _context2.next = 9;
                return this.storage.get('user');

              case 9:
                user_control = _context2.sent;
                console.log("user_control:", user_control);

                if (user_control == null || user_control == '' || user_control == undefined) {
                  this.navController.navigateForward('login');
                } else if (user_control == 'usernotfound') {
                  this.navController.navigateForward('login');
                  console.log("ok", this.active_user);
                  this.active_user = user_control;
                  console.log(this.active_user);
                } else {
                  console.log("user found");
                  this.active_user = user_control;
                  console.log("active user: ", this.active_user);
                  this.activemail = this.active_user[0].email.S;
                  this.activeid = this.active_user[0].id.S;
                  console.log("active id: ", this.activeid);
                  console.log(this.activemail);
                  console.log(this.activeid);
                  this.getRecipe().subscribe(function () {
                    _this6.getRecipeQuery().subscribe(function () {//console.log("liste", this.jsonList)
                    });
                  });
                }

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "getUserCheck",
    value: function getUserCheck() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _this7 = this;

        var value_id, user_control;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.storage.get('localid');

              case 2:
                value_id = _context3.sent;
                this.localapp_id = value_id;
                console.log('local app id: ', this.localapp_id);

                if (this.localapp_id == '' || this.localapp_id == null || this.localapp_id == undefined) {
                  this.localapp_id = (0,uuid__WEBPACK_IMPORTED_MODULE_7__["default"])();
                  console.log(this.localapp_id);
                  this.storage.set('localid', this.localapp_id);
                } else {
                  console.log("id var");
                }

                console.log('This local app id', this.localapp_id);
                _context3.next = 9;
                return this.storage.get('user');

              case 9:
                user_control = _context3.sent;
                console.log("user_control:", user_control);

                if (user_control == null || user_control == '' || user_control == undefined) {
                  this.navController.navigateForward('device-select');
                } else if (user_control == 'usernotfound') {
                  this.navController.navigateForward('device-select');
                  console.log("ok", this.active_user);
                  this.active_user = user_control;
                  console.log(this.active_user);
                } else {
                  this.navController.navigateForward('device-select');
                  console.log("user found");
                  this.active_user = user_control;
                  console.log("active user: ", this.active_user);
                  this.activemail = this.active_user[0].email.S;
                  this.activeid = this.active_user[0].id.S;
                  console.log("active id: ", this.activeid);
                  console.log(this.activemail);
                  console.log(this.activeid);
                  this.getRecipe().subscribe(function () {
                    _this7.getRecipeQuery().subscribe(function () {//console.log("liste", this.jsonList)
                    });
                  });
                }

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "present",
    value: function present() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _this8 = this;

        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.isLoading = true;
                _context4.next = 3;
                return this.loadingController.create({}).then(function (a) {
                  a.present().then(function () {
                    if (!_this8.isLoading) {
                      a.dismiss().then(function () {
                        return console.log('');
                      });
                    }
                  });
                });

              case 3:
                return _context4.abrupt("return", _context4.sent);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "dismiss",
    value: function dismiss() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.isLoading = false;
                _context5.next = 3;
                return this.loadingController.dismiss().then(function () {
                  return console.log('');
                });

              case 3:
                return _context5.abrupt("return", _context5.sent);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    }
  }, {
    key: "handleError",
    value: function handleError() {
      var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
      var result = arguments.length > 1 ? arguments[1] : undefined;
      return function (error) {
        console.error(error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(result);
      };
    }
  }]);

  return HomeService;
}();

HomeService.ctorParameters = function () {
  return [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
  }, {
    type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController
  }, {
    type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__.Socket
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController
  }];
};

HomeService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
  providedIn: 'root'
})], HomeService);


/***/ }),

/***/ 7952:
/*!************************************!*\
  !*** ./src/app/mokapot.service.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MokapotService": function() { return /* binding */ MokapotService; }
/* harmony export */ });
/* harmony import */ var _Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4139);








var MokapotService = /*#__PURE__*/function () {
  function MokapotService(http) {
    (0,_Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MokapotService);

    this.http = http;
    this.link = "https://5tpxh1vxw1.execute-api.us-east-1.amazonaws.com/ScaleTrigger";
    this.api_headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("Access-Control-Allow-Origin", "*");
    this.url = 'http://192.168.4.1/wifi';
    this.network_status_url = 'http://192.168.4.1/network';
    this.mac_url = 'http://192.168.4.1/sendmac';
    this.set_url = 'http://192.168.4.1';
    this.connection_status = "close";
    this.set_keep_time = '00:00';
    this.moka_mode_is = "Normal";
    this.moka_warm_set = "OFF";
    this.moka_will_start = "Now";
    this.moka_keep_time = "0";
    this.moka_mode = "OFF";
    this.moka_keep_mode = false;
    this.moka_stronger_mode = false;
    this.moka_scedule_mode = false;
  }

  (0,_Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(MokapotService, [{
    key: "getIP",
    value: function getIP(mac) {
      var main = this;
      console.log(mac);
      console.log(mac.S);
      return main.http.post(main.link, {
        "job": "get_ip",
        mac: mac
      }, {
        headers: this.headers
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(function (result) {
        console.log("get ip result", result);
      }));
    }
  }, {
    key: "getIP2",
    value: function getIP2(mac) {
      var main = this;
      console.log(mac);
      console.log(mac.S);
      main.selected_device_mac_address = mac.S;
      return main.http.post(main.link, {
        "job": "get_ip",
        mac: mac.S
      }, {
        headers: this.headers
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(function (result) {
        console.log("get ip result", result);
      }));
    }
  }, {
    key: "sendIP",
    value: function sendIP() {
      var main = this;
      return main.http.post(main.link, {
        "job": "send_ip"
      }, {
        headers: this.headers
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(function (result) {
        console.log(result);
      }));
    }
  }, {
    key: "deleteDevices",
    value: function deleteDevices(id, deviceid) {
      var main = this;
      return main.http.post(main.link, {
        "job": "delete_moka_devices",
        id: id,
        deviceid: deviceid
      }, {
        headers: this.headers
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(function (result) {
        console.log(result);
      }));
    }
  }, {
    key: "setWifi",
    value: function setWifi(ssid, pass) {
      var main = this;
      return main.http.post(main.set_url + '/setwifi', {
        "ssid": ssid,
        "pass": pass
      }, {
        headers: main.headers
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(function (result) {
        console.log(result);
      }));
    } // setWifi(ssid, pass) {
    //   let main = this;
    //   return main.http.post<any>(main.set_url + '/setwifi?ssid=' + ssid + '&pass=' + pass, null, { headers: main.headers }).pipe(
    //     tap((result) =>{
    //       console.log(result);
    //     })
    //   )
    // }

  }, {
    key: "setWifiStatusDone",
    value: function setWifiStatusDone(statusDone) {
      var main = this;
      return main.http.post(main.set_url + '/statusdone?statusDone=' + statusDone, null, {
        headers: main.headers
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(function (result) {
        console.log("status done: ", result);
      }));
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
      this.headers.append('Accept', 'application/json');
      this.headers.append('Content-Type', 'application/json');
      this.headers.append('Access-Control-Allow-Origin', '*');
    }
  }, {
    key: "getMacAddress",
    value: function getMacAddress() {
      var main = this;
      var newStr = '';
      var str = '';

      if (str.length > 30) {} else {
        return this.http.post(this.mac_url, null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(function (data) {
          main.mokapot_mac_data = JSON.stringify(data);
          str = main.mokapot_mac_data;
          newStr = str.substring(11, 29);
          main.mokapot_mac_address = newStr; //console.log("mac adress: ", main.mokapot_mac_address);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError('get mac address')));
      }
    }
  }, {
    key: "getWifiList",
    value: function getWifiList() {
      var _this = this;

      return this.http.get(this.url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(function (data) {
        _this.esp_wifi = data;
        _this.esp_wifi_list = _this.esp_wifi.list;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError('get wifi')));
    }
  }, {
    key: "getWifiStatus",
    value: function getWifiStatus() {
      var _this2 = this;

      return this.http.get(this.network_status_url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(function (data) {
        console.log("get wifi status", data);
        _this2.esp_network_status = data;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError('get wifi status')));
    }
  }, {
    key: "addMokapotDevicesControlQuery",
    value: function addMokapotDevicesControlQuery(userid, device) {
      var main = this;
      return main.http.post(main.link, {
        "job": "add_moka_devices_control_query",
        userid: userid,
        device: device
      }, {
        headers: this.headers
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(function (result) {
        console.log(result);
      }, (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError('add_moka_devices_control_query control'))));
    }
  }, {
    key: "addMokapotDevicesControlQueryData",
    value: function addMokapotDevicesControlQueryData() {
      var main = this;
      return main.http.post(main.link, {
        "job": "add_moka_devices_control_query_data"
      }, {
        headers: this.headers
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(function (result) {
        console.log(result);
      }));
    }
  }, {
    key: "addMokapotDevicesControl",
    value: function addMokapotDevicesControl() {
      return this.http.post(this.link, {
        "job": "add_moka_devices_control"
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(function (result) {
        console.log("add_moka_devices_control", result);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError('add user mokapot devices control')));
    }
  }, {
    key: "setTemp",
    value: function setTemp(temp) {
      var main = this;
      main.http.post(main.set_temp_url + '/settemp?temp=' + 'SETTEMP' + temp + 'OK', null, {
        headers: main.headers
      }).subscribe(function (data) {
        console.log("data: ", data);
      }), function (err) {
        console.log("error: ", err);
      };
    }
  }, {
    key: "setTime",
    value: function setTime(times) {
      var main = this;
      main.http.post(main.set_temp_url + '/settime?times=' + 'SETTIME' + times + 'OK', null, {
        headers: main.headers
      }).subscribe(function (data) {
        console.log("data: ", data);
      }), function (err) {
        console.log("error: ", err);
      };
    }
  }, {
    key: "setRTC",
    value: function setRTC(rtc) {
      var main = this;
      main.http.post(main.set_temp_url + '/setrtc?rtc=' + 'SETRTC' + rtc + 'OK', null, {
        headers: main.headers
      }).subscribe(function (data) {
        console.log("data: ", data);
      }), function (err) {
        console.log("error: ", err);
      };
    }
  }, {
    key: "setKEEP",
    value: function setKEEP(min) {
      var main = this;
      main.http.post(main.set_temp_url + '/setkeep?keep=' + 'KEEPTIME' + min + 'OK', null, {
        headers: main.headers
      }).subscribe(function (data) {
        console.log("data: ", data);
      }), function (err) {
        console.log("error: ", err);
      };
    }
  }, {
    key: "setAuto",
    value: function setAuto() {
      var main = this;
      main.http.post(main.set_temp_url + '/setauto?aut=' + 'MOCAAUTOOK', null, {
        headers: main.headers
      }).subscribe(function (data) {
        console.log("data: ", data);
      }), function (err) {
        console.log("error: ", err);
      };
    }
  }, {
    key: "setManuel",
    value: function setManuel() {
      var main = this;
      main.http.post(main.set_temp_url + '/setmanuel?manuel=' + 'MOCAMANUELOK', null, {
        headers: main.headers
      }).subscribe(function (data) {
        console.log("data: ", data);
      }), function (err) {
        console.log("error: ", err);
      };
    }
  }, {
    key: "startMoka",
    value: function startMoka() {
      var main = this;
      main.http.post(main.set_temp_url + '/setstart?str=' + 'STARTMOCAOK', null, {
        headers: main.headers
      }).subscribe(function (data) {
        console.log("data: ", data);
      }), function (err) {
        console.log("error: ", err);
      };
    }
  }, {
    key: "stopMoka",
    value: function stopMoka() {
      var main = this;
      main.http.post(main.set_temp_url + '/setstop?stp=' + 'STOPMOCAOK', null, {
        headers: main.headers
      }).subscribe(function (data) {
        console.log("data: ", data);
      }), function (err) {
        console.log("error: ", err);
      };
    }
  }, {
    key: "deleteDevice",
    value: function deleteDevice() {
      var main = this;
      return main.http.post(main.set_temp_url + '/deletedevice', null, {
        headers: main.headers
      }).subscribe(function (data) {
        console.log("delete device: ", data);
        main.connected_network = '';
      }), function (err) {
        console.log("error", err);
      };
    }
  }, {
    key: "getStatus",
    value: function getStatus() {
      var main = this;
      return main.http.post(main.set_temp_url + '/status', null, {
        headers: main.headers
      }).subscribe(function (data) {
        console.log("cur temp data: ", data);
        main.device_status = data.status;
        main.status_data = data;
      }), function (err) {
        console.log("error", err);
      };
    }
  }, {
    key: "getStatusBasicMoka",
    value: function getStatusBasicMoka() {
      var main = this;
      return main.http.post(main.set_temp_url + '/status', null, {
        headers: main.headers
      }).subscribe(function (data) {
        console.log("data");
        main.device_status = data.status;
        main.status_data = data;
      }), function (err) {
        console.log("error", err);
      };
    }
  }, {
    key: "handleError",
    value: function handleError() {
      var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
      var result = arguments.length > 1 ? arguments[1] : undefined;
      return function (error) {
        console.log('Error on:', operation);
        console.error(error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(result);
      };
    }
  }]);

  return MokapotService;
}();

MokapotService.ctorParameters = function () {
  return [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
  }];
};

MokapotService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
  providedIn: 'root'
})], MokapotService);


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 8150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}

(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(function (err) {
  return console.log(err);
});

/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"default-node_modules_ionic_core_dist_esm_index-8bf9b0cd_js",
		"default-node_modules_ionic_core_dist_esm_framework-delegate-ce4f806c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"default-node_modules_ionic_core_dist_esm_index-8bf9b0cd_js",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"default-node_modules_ionic_core_dist_esm_index-8bf9b0cd_js",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"default-node_modules_ionic_core_dist_esm_index-8bf9b0cd_js",
		"default-node_modules_ionic_core_dist_esm_framework-delegate-ce4f806c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"default-node_modules_ionic_core_dist_esm_framework-delegate-ce4f806c_js",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"default-node_modules_ionic_core_dist_esm_framework-delegate-ce4f806c_js",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"default-node_modules_ionic_core_dist_esm_index-8bf9b0cd_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"default-node_modules_ionic_core_dist_esm_index-8bf9b0cd_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"default-node_modules_ionic_core_dist_esm_index-8bf9b0cd_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"default-node_modules_ionic_core_dist_esm_framework-delegate-ce4f806c_js",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ (function(module) {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map