"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_wifi_wifi_module_ts"],{

/***/ 8551:
/*!*********************************************!*\
  !*** ./src/app/wifi/wifi-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WifiPageRoutingModule": function() { return /* binding */ WifiPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var _Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _wifi_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wifi.page */ 5927);






var routes = [{
  path: '',
  component: _wifi_page__WEBPACK_IMPORTED_MODULE_2__.WifiPage
}];

var WifiPageRoutingModule = /*#__PURE__*/(0,_Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function WifiPageRoutingModule() {
  (0,_Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, WifiPageRoutingModule);
});

WifiPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], WifiPageRoutingModule);


/***/ }),

/***/ 5346:
/*!*************************************!*\
  !*** ./src/app/wifi/wifi.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WifiPageModule": function() { return /* binding */ WifiPageModule; }
/* harmony export */ });
/* harmony import */ var _Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _wifi_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wifi-routing.module */ 8551);
/* harmony import */ var _wifi_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wifi.page */ 5927);










var WifiPageModule = /*#__PURE__*/(0,_Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function WifiPageModule() {
  (0,_Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, WifiPageModule);
});

WifiPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _wifi_routing_module__WEBPACK_IMPORTED_MODULE_2__.WifiPageRoutingModule],
  declarations: [_wifi_page__WEBPACK_IMPORTED_MODULE_3__.WifiPage]
})], WifiPageModule);


/***/ }),

/***/ 5927:
/*!***********************************!*\
  !*** ./src/app/wifi/wifi.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WifiPage": function() { return /* binding */ WifiPage; }
/* harmony export */ });
/* harmony import */ var _Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _wifi_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wifi.page.html?ngResource */ 5910);
/* harmony import */ var _wifi_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wifi.page.scss?ngResource */ 833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _awesome_cordova_plugins_wifi_wizard_2_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/wifi-wizard-2/ngx */ 5691);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home.service */ 9516);
/* harmony import */ var _mokapot_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mokapot.service */ 7952);
/* harmony import */ var _awesome_cordova_plugins_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/open-native-settings/ngx */ 8809);
/* harmony import */ var _awesome_cordova_plugins_network_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/network/ngx */ 9940);



function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }












var WifiPage = /*#__PURE__*/function () {
  function WifiPage(alertController, navController, homeService, mokapotService, wifiWizard2, openNativeSettings, loadingController, platform, toastController, network, modalController) {
    var _this = this;

    (0,_Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WifiPage);

    this.alertController = alertController;
    this.navController = navController;
    this.homeService = homeService;
    this.mokapotService = mokapotService;
    this.wifiWizard2 = wifiWizard2;
    this.openNativeSettings = openNativeSettings;
    this.loadingController = loadingController;
    this.platform = platform;
    this.toastController = toastController;
    this.network = network;
    this.modalController = modalController;
    this.results = [];
    this.esp_wifi_list = [];
    this.newdevice = '0';
    this.mac_try = 30;
    this.statusdone = "done";
    var main = this;
    this.platform.resume.subscribe(function () {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("resume wifi");
                setTimeout(function () {
                  main.loadingController.getTop().then(function (load) {
                    console.log("load", load);

                    if (load) {
                      main.loadingController.dismiss().then(function () {
                        console.log("dismiss");
                      });

                      if (main.esp_wifi_list.length == 0) {
                        main.loadingConnected();
                      }
                    }
                  });
                }, 1000);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    });
  }

  (0,_Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(WifiPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var main = this;
      main.ip_interval = setInterval(function () {
        main.wifiWizard2.getConnectedSSID().then(function (network) {
          console.log(network);
          main.mokapotService.connected_network = network;

          if (main.mokapotService.connected_network.indexOf('mokapot-') > -1 || main.mokapotService.connected_network.indexOf('hottle-') > -1 || main.mokapotService.connected_network.indexOf('korkmaz_castron-') > -1 || main.mokapotService.connected_network.indexOf('korkmaz_moderna-') > -1) {
            clearInterval(main.ip_interval);
            main.loadingConnected();
            main.wifiStatusCenter();
            main.mac_try = 30;
          } else {
            main.connected_wifi = false;
            console.log("main.connected_wifi", main.connected_wifi);
          }
        }).catch(function (err) {
          console.log('having trouble getting SSID ', err);

          if (main.network.type != 'wifi' && main.network.type != 'none') {
            main.connected_wifi = false;
            console.log("main.connected_wifi", main.connected_wifi);
          }
        });
      }, 1000);
    }
  }, {
    key: "wifiStatusCenter",
    value: function wifiStatusCenter() {
      var main = this;
      main.connected_wifi = true;
      console.log("main.connected_wifi", main.connected_wifi);
      main.mokapotService.getMacAddress().subscribe(function (mac_data) {
        console.log("mac address mac_data: ", mac_data);

        if (mac_data) {
          main.mokapotService.getWifiList().subscribe(function (wifi_data) {
            console.log("getWifiList wifi_data ", wifi_data);

            if (wifi_data) {
              main.esp_wifi_list = main.mokapotService.esp_wifi_list;
              console.log("wifi list: ", main.esp_wifi_list);
              main.loadingController.dismiss().then(function () {
                return console.log("dismiss");
              });
            }
          });
        } else {
          if (main.mac_try > 0) {
            console.log("getMacAddress Data Gelmedi... Tekrar bakalım mı?");
            main.mac_try--;
            setTimeout(function () {
              main.wifiStatusCenter();
            }, 1000);
          } else {
            console.log("yok gelmiyor iste!");
            main.getWifiListErr();
          }
        }
      });
    }
  }, {
    key: "refreshList",
    value: function refreshList() {
      var main = this;
      main.loadingConnected();
      main.esp_wifi_list = [];
      main.mokapotService.getWifiList().subscribe(function () {
        main.esp_wifi_list = main.mokapotService.esp_wifi_list;
        console.log("wifi list: ", main.esp_wifi_list);

        if (main.esp_wifi_list.length > 0) {
          main.loadingController.dismiss().then(function () {
            return console.log("dismiss");
          });
        }
      });
    }
  }, {
    key: "goHome",
    value: function goHome() {
      this.navController.navigateForward('tabs/tab1');
    }
  }, {
    key: "connectAlert",
    value: function connectAlert() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var main, alert;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                main = this;
                _context2.next = 3;
                return this.alertController.create({
                  cssClass: 'my-custom-class',
                  header: main.select_home_wifi,
                  inputs: [{
                    name: 'pass',
                    type: 'password',
                    id: 'pass',
                    placeholder: 'Password',
                    value: main.wifi_password
                  }],
                  buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: function handler() {
                      console.log('Confirm Cancel');
                    }
                  }, {
                    text: 'Connect',
                    handler: function handler(datas) {
                      main.wifi_password = datas.pass;
                      main.connectHomeWifi(main.select_home_wifi, main.wifi_password, 5);
                    }
                  }]
                });

              case 3:
                alert = _context2.sent;
                _context2.next = 6;
                return alert.present();

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "selectHomeWifi",
    value: function selectHomeWifi(wifi) {
      var main = this;
      main.select_home_wifi = wifi;
      main.connectAlert();
    }
  }, {
    key: "connectHomeWifiCenter",
    value: function connectHomeWifiCenter(ssid, pass, set_try) {
      var main = this;
      main.mokapotService.getWifiStatus().subscribe(function (wifi_status_data) {
        if (wifi_status_data) {
          console.log("data", wifi_status_data);
          main.manuel_add_interval = setInterval(function () {
            main.wifiWizard2.getConnectedSSID().then(function (network) {
              main.net = network;
              console.log("main.net: ", main.net);

              if (main.net.indexOf('mokapot-') > -1 || main.net.indexOf('hottle-') > -1 || main.net.indexOf('korkmaz_moderna-') > -1 || main.net.indexOf('korkmaz_castron-') > -1) {
                console.log("mokapota bağlı");
                clearInterval(main.manuel_add_interval);

                if (main.mokapotService.esp_network_status.network_status == 'connected') {
                  if (wifi_status_data.network_status == "connected") {
                    main.mokapotService.setWifiStatusDone(main.statusdone).subscribe(function (data) {
                      console.log("status done", data);
                      console.log("network status", main.mokapotService.esp_network_status.network_status); //smain.wifiWizard2.connect(ssid, false, pass, "WPA");

                      main.loadingController.dismiss().then(function () {
                        main.loadingConnected40();
                      });
                      main.network_success_interval = setInterval(function () {
                        main.wifiWizard2.getConnectedSSID().then(function (network) {
                          console.log('network', network);

                          if (main.network.type == 'wifi') {
                            if (network.indexOf('mokapot-') <= -1 || network.indexOf('hottle-') <= -1 || network.indexOf('korkmaz_moderna-') <= -1 || network.indexOf('korkmaz_castron-') <= -1) {
                              clearInterval(main.network_success_interval);
                              console.log("stop interval");
                              console.log("activeid", main.homeService.activeid);
                              console.log("macaddress", main.mokapotService.mokapot_mac_address);
                              main.deviceAddCenter(ssid, 30);
                            }
                          } else if (main.network.type != 'wifi' && main.network.type != 'none') {
                            clearInterval(main.network_success_interval);
                            console.log("stop interval");
                            console.log("activeid", main.homeService.activeid);
                            console.log("macaddress", main.mokapotService.mokapot_mac_address);
                            main.deviceAddCenter(ssid, 30);
                          }
                        });
                      }, 500);
                    });
                  }
                } else {
                  main.loadingController.dismiss().then(function () {
                    return console.log("dismissed");
                  });
                  console.log("bağlantı hatası ");
                  main.passwordErr();
                }
              } else {
                set_try--;

                if (set_try < 0) {
                  clearInterval(main.manuel_add_interval);
                  main.mokapotNetworkErr();
                }
              }
            });
          }, 1000);
        } else {
          console.log('wifi status gelmiyordu');

          if (set_try > 0) {
            set_try--;
            main.connectHomeWifiCenter(ssid, pass, set_try);
          }
        }
      }, function (error) {
        console.log('sanırım burada', error);
      });
    }
  }, {
    key: "connectHomeWifi",
    value: function connectHomeWifi(ssid, pass, connect_try) {
      var main = this;
      main.loadingConnected20();
      setTimeout(function () {
        main.mokapotService.setWifi(ssid, pass).subscribe(function (data) {
          if (data) {
            console.log("data", data);
            main.mokapotService.connect_mode = "auto";
            main.connectHomeWifiCenter(ssid, pass, 5);
          } else {
            if (connect_try > 0) {
              connect_try--;
              main.connectHomeWifi(ssid, pass, connect_try);
            }
          }
        });
      }, 10000);
    }
  }, {
    key: "deviceAddCenter",
    value: function deviceAddCenter(ssid, try_count) {
      var main = this;

      if (try_count > 0) {
        main.mokapotService.addMokapotDevicesControlQuery(main.homeService.activeid, main.mokapotService.mokapot_mac_address).subscribe(function (data) {
          main.loadingController.dismiss().then(function () {
            main.loadingConnected60();
          });
          console.log("kontrol query başarılı: ", data);
          main.mokapotService.addMokapotDevicesControlQueryData().subscribe(function (data) {
            console.log("data", data);
            console.log("data status", data.status);

            if (data.status == "devicesnotfound") {
              main.loadingController.dismiss().then(function () {
                main.loadingConnected80();
              });
              setTimeout(function () {
                console.log(main.homeService.deviceName);
                main.homeService.addUserDevices(main.homeService.select_device_type, main.homeService.activeid, main.mokapotService.mokapot_mac_address, main.newdevice, main.homeService.deviceName, "stop").subscribe(function (res) {
                  console.log("cihaz eklendi mi: ", res);
                  setTimeout(function () {
                    if (res.status == 'ok') {
                      main.loadingController.dismiss().then(function () {
                        main.loadingConnected100();
                      });
                      setTimeout(function () {
                        main.loadingController.dismiss().then(function () {
                          console.log("dismissed");
                        });
                        main.navController.navigateForward('tabs/tab1');
                        main.mokapotService.connected_network = ssid;
                      }, 1000);
                    } else {
                      main.loadingController.dismiss().then(function () {
                        return console.log("dismissed");
                      });
                      console.log("ekleme başarısız");
                    }
                  }, 500);
                });
              }, 500);
            } else {
              main.loadingController.dismiss().then(function () {
                return console.log("dismissed");
              });
              console.log("status devicesok");
              main.registeredDeviceAlert();
            }
          });
        }, function (error) {
          console.log('addMokapotDevicesControlQuery first try error', error);
          try_count--;
          setTimeout(function () {
            main.deviceAddCenter(ssid, try_count);
          }, 500);
        });
      } else {
        console.log('30 kere denedim olmadi sıra alertte');
        main.loadingController.dismiss().then(function () {
          console.log("dismiss");
        });
        main.connectedErr();
        main.navController.navigateForward('device-select');
      }
    }
  }, {
    key: "loadingConnected",
    value: function loadingConnected() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var loading;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.loadingController.create({
                  duration: 90000,
                  spinner: null,
                  message: '<img src="assets/coffee-loading-1.gif" class="b-rad-20 w-150">',
                  translucent: true,
                  cssClass: 'custom-class custom-loading'
                });

              case 2:
                loading = _context3.sent;
                _context3.next = 5;
                return loading.present();

              case 5:
                return _context3.abrupt("return", _context3.sent);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "loadingConnected20",
    value: function loadingConnected20() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var loading;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.loadingController.create({
                  duration: 90000,
                  spinner: 'bubbles',
                  message: 'Wifi information sent. Please wait...',
                  translucent: true,
                  cssClass: 'custom-class custom-loading-white'
                });

              case 2:
                loading = _context4.sent;
                _context4.next = 5;
                return loading.present();

              case 5:
                return _context4.abrupt("return", _context4.sent);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "loadingConnected40",
    value: function loadingConnected40() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var loading;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.loadingController.create({
                  duration: 90000,
                  spinner: 'bubbles',
                  message: 'Mokapot internet connection completed. Please wait...',
                  translucent: true,
                  cssClass: 'custom-class custom-loading-white'
                });

              case 2:
                loading = _context5.sent;
                _context5.next = 5;
                return loading.present();

              case 5:
                return _context5.abrupt("return", _context5.sent);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    }
  }, {
    key: "loadingConnected60",
    value: function loadingConnected60() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var loading;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.loadingController.create({
                  duration: 90000,
                  spinner: 'bubbles',
                  message: 'Device information is checked. Please wait...',
                  translucent: true,
                  cssClass: 'custom-class custom-loading-white'
                });

              case 2:
                loading = _context6.sent;
                _context6.next = 5;
                return loading.present();

              case 5:
                return _context6.abrupt("return", _context6.sent);

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
    }
  }, {
    key: "loadingConnected80",
    value: function loadingConnected80() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var loading;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.loadingController.create({
                  duration: 90000,
                  spinner: 'bubbles',
                  message: 'Device is being registered. Please wait...',
                  translucent: true,
                  cssClass: 'custom-class custom-loading-white'
                });

              case 2:
                loading = _context7.sent;
                _context7.next = 5;
                return loading.present();

              case 5:
                return _context7.abrupt("return", _context7.sent);

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
    }
  }, {
    key: "loadingConnected100",
    value: function loadingConnected100() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var loading;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.loadingController.create({
                  duration: 90000,
                  spinner: 'bubbles',
                  message: 'Device registration is complete. You are being redirected to the home page.',
                  translucent: true,
                  cssClass: 'custom-class custom-loading-white'
                });

              case 2:
                loading = _context8.sent;
                _context8.next = 5;
                return loading.present();

              case 5:
                return _context8.abrupt("return", _context8.sent);

              case 6:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
    }
  }, {
    key: "getStatus",
    value: function getStatus() {
      var main = this;
      console.log("get status");
      main.mokapotService.getStatus();
    }
  }, {
    key: "setTemp",
    value: function setTemp(temp) {
      var main = this;
      console.log("set temp data");
      main.mokapotService.setTemp(temp);
    }
  }, {
    key: "back",
    value: function back() {
      var main = this;
      this.navController.back();
      clearInterval(main.wifi_interval);
    }
  }, {
    key: "phoneSetting",
    value: function phoneSetting() {
      var main = this;
      main.openNativeSettings.open("wifi");
    }
  }, {
    key: "registeredDeviceAlert",
    value: function registeredDeviceAlert() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var _this2 = this;

        var alert;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.alertController.create({
                  header: 'registered device',
                  subHeader: 'The device you are trying to register is already registered to your account.',
                  message: 'Check your information and try again.',
                  buttons: [{
                    text: 'OK',
                    role: 'confirm',
                    handler: function handler() {
                      _this2.navController.navigateForward('tabs/tab1');
                    }
                  }]
                });

              case 2:
                alert = _context9.sent;
                _context9.next = 5;
                return alert.present();

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));
    }
  }, {
    key: "getWifiListErr",
    value: function getWifiListErr() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        var toast;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.toastController.create({
                  message: 'Wifi listesi alınamadı. Tekrar deneyin.',
                  duration: 4000
                });

              case 2:
                toast = _context10.sent;
                toast.present();

              case 4:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));
    }
  }, {
    key: "mokapotNetworkErr",
    value: function mokapotNetworkErr() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        var toast;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this.toastController.create({
                  message: '"mokapot" ağına bağlı değilsiniz.',
                  duration: 4000
                });

              case 2:
                toast = _context11.sent;
                toast.present();

              case 4:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));
    }
  }, {
    key: "passwordErr",
    value: function passwordErr() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
        var toast;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this.toastController.create({
                  message: 'Girdiğiniz şifre eksik veya hatalı. Kontrol edip tekrar deneyin.',
                  duration: 4000
                });

              case 2:
                toast = _context12.sent;
                toast.present();

              case 4:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));
    }
  }, {
    key: "connectedErr",
    value: function connectedErr() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
        var toast;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this.toastController.create({
                  message: 'Bağlantı kurulamadı. Tekrar deneyin.',
                  duration: 4000
                });

              case 2:
                toast = _context13.sent;
                toast.present();

              case 4:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));
    }
  }]);

  return WifiPage;
}();

WifiPage.ctorParameters = function () {
  return [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController
  }, {
    type: _home_service__WEBPACK_IMPORTED_MODULE_5__.HomeService
  }, {
    type: _mokapot_service__WEBPACK_IMPORTED_MODULE_6__.MokapotService
  }, {
    type: _awesome_cordova_plugins_wifi_wizard_2_ngx__WEBPACK_IMPORTED_MODULE_4__.WifiWizard2
  }, {
    type: _awesome_cordova_plugins_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_7__.OpenNativeSettings
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController
  }, {
    type: _awesome_cordova_plugins_network_ngx__WEBPACK_IMPORTED_MODULE_8__.Network
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
  }];
};

WifiPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-wifi',
  template: _wifi_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_wifi_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], WifiPage);


/***/ }),

/***/ 833:
/*!************************************************!*\
  !*** ./src/app/wifi/wifi.page.scss?ngResource ***!
  \************************************************/
/***/ (function(module) {

module.exports = "ion-content {\n  --background: #fff url('bg-main.png') no-repeat center center / cover;\n}\n\nion-toolbar {\n  --background: url('bg-header.png') no-repeat center center / cover;\n  --border-width: 0px!important;\n}\n\n.connect-btn {\n  --background:linear-gradient(to right, #ffbf57, #f68d2c);\n  --background-activated:linear-gradient(to right, #ffbf57, #f68d2c);\n  --background-focused: linear-gradient(to right, #ffbf57, #f68d2c);\n  --background-hover: linear-gradient(to right, #ffbf57, #f68d2c);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpZmkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUVBQUE7QUFDSjs7QUFDQTtFQUNJLGtFQUFBO0VBQ0EsNkJBQUE7QUFFSjs7QUFBQTtFQUNJLHdEQUFBO0VBQ0Esa0VBQUE7RUFDQSxpRUFBQTtFQUNBLCtEQUFBO0FBR0oiLCJmaWxlIjoid2lmaS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmIHVybChcIi4uLy4uL2Fzc2V0cy9iZy1tYWluLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xufVxuaW9uLXRvb2xiYXJ7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvYmctaGVhZGVyLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHghaW1wb3J0YW50O1xufVxuLmNvbm5lY3QtYnRue1xuICAgIC0tYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmJmNTcsICNmNjhkMmMpO1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZiZjU3LCAjZjY4ZDJjKTtcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZiZjU3LCAjZjY4ZDJjKTtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmYmY1NywgI2Y2OGQyYyk7XG59Il19 */";

/***/ }),

/***/ 5910:
/*!************************************************!*\
  !*** ./src/app/wifi/wifi.page.html?ngResource ***!
  \************************************************/
/***/ (function(module) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"p-10\">\n    <ion-buttons slot=\"secondary\">\n      <ion-icon name=\"chevron-back-outline\" class=\"bg-white b-rad-50 fs-24 p-5\" (click)=\"back()\"></ion-icon>\n    </ion-buttons>\n    <ion-title>\n      <img src=\"assets/arikusu-logo-2.png\" class=\"w-80\" (click)=\"goHome()\">\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"refresh-outline\" class=\"bg-white b-rad-50 fs-24 p-5\" (click)=\"refreshList()\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"h-100\">\n    <ion-row class=\"h-100 px-20 mt-20\">\n      <ion-col size=\"12\" class=\"bg-transparent-io text-center\" *ngIf=\"connected_wifi == false\">\n        <img src=\"assets/wifi-setting.png\" class=\"pt-15\">\n        <h4 class=\"montserrat fs-14 text-left\">\n          1- Push \"Wifi Settings\" button\n        </h4>\n\n        <h4 class=\"montserrat fs-14 text-left\">\n          2- Then choose \"mokapot-xxx\" on the net\n        </h4>\n\n        <h4 class=\"montserrat fs-14 text-left\">\n          3- Push \"back\" button\n        </h4>\n\n        <h4 class=\"montserrat fs-14 text-left\">\n          4- Choose your home network\n        </h4>\n        <ion-button (click)=\"phoneSetting()\" class=\"connect-btn mt-20\">\n          <ion-icon name=\"wifi\" class=\"text-white pe-10\"></ion-icon> Wifi Settings\n        </ion-button>\n      </ion-col>\n\n      <ion-col size=\"12\" class=\"bg-transparent-io\" *ngIf=\"connected_wifi == true\">\n        <h4 class=\"montserrat fs-14 text-center\">\n          Select your home network\n        </h4>\n        <ion-item *ngFor=\"let item of esp_wifi_list\" lines=\"none\" class=\"b-rad-50 mb-10 mode-box\">\n          <ion-label (click)=\"selectHomeWifi(item.ssid)\">\n            <ion-icon name=\"wifi\" class=\"pe-10\"></ion-icon> {{item.ssid}}\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_wifi_wifi_module_ts.js.map