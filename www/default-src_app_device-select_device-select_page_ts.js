"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_device-select_device-select_page_ts"],{

/***/ 1753:
/*!*****************************************************!*\
  !*** ./src/app/device-select/device-select.page.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceSelectPage": function() { return /* binding */ DeviceSelectPage; }
/* harmony export */ });
/* harmony import */ var _Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _device_select_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./device-select.page.html?ngResource */ 4524);
/* harmony import */ var _device_select_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./device-select.page.scss?ngResource */ 1039);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home.service */ 9516);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 6457);
/* harmony import */ var _awesome_cordova_plugins_wifi_wizard_2_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/wifi-wizard-2/ngx */ 5691);
/* harmony import */ var _mokapot_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mokapot.service */ 7952);
/* harmony import */ var _awesome_cordova_plugins_network_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/network/ngx */ 9940);
/* harmony import */ var _awesome_cordova_plugins_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/open-native-settings/ngx */ 8809);
/* harmony import */ var _wifi_pass_modal_wifi_pass_modal_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../wifi-pass-modal/wifi-pass-modal.page */ 7133);
/* harmony import */ var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/ble/ngx */ 714);



function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }















var DeviceSelectPage = /*#__PURE__*/function () {
  function DeviceSelectPage(homeService, navController, modalController, geolocation, loadingController, wifiWizard2, mokapotService, network, toastController, openNativeSettings, alertController, ble, ngZone) {
    (0,_Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DeviceSelectPage);

    this.homeService = homeService;
    this.navController = navController;
    this.modalController = modalController;
    this.geolocation = geolocation;
    this.loadingController = loadingController;
    this.wifiWizard2 = wifiWizard2;
    this.mokapotService = mokapotService;
    this.network = network;
    this.toastController = toastController;
    this.openNativeSettings = openNativeSettings;
    this.alertController = alertController;
    this.ble = ble;
    this.ngZone = ngZone;
    this.progress_value = 0;
    this.progress_text = '';
    this.results = [];
    this.newdevice = '0';
    this.statusdone = "done";
    this.status = 2;
    this.slideOpts = {
      initialSlide: 0,
      speed: 1500,
      slidesPerView: 1.7,
      centeredSlides: false,
      centeredSlidesBounds: true,
      slidesOffsetBefore: 10,
      slidesOffsetAfter: 10
    };
    this.deviceNamePlaceholder = "User's Mokapot";
    this.deviceNameText = '';
    this.mac_try = 30;
    this.esp_wifi_list = [];
    this.selectDeviceControl = true;
    this.scale_list = [];
    this.coffee_makers_list = [];
    this.kitchen_tools_list = [];
    this.ordered_list = [];
    this.add_machine = true;
    this.mokapot_ble_devices = [];
  }

  (0,_Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DeviceSelectPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "select",
    value: function select(device) {
      var main = this;
      this.coffee_makers_list.forEach(function (item) {
        item.select = false;
      });
      this.kitchen_tools_list.forEach(function (item) {
        item.select = false;
      });
      this.scale_list.forEach(function (item) {
        item.select = false;
      });
      device.select = true;
      this.selectDeviceControl = true;
      console.log("selected device: ", device);
      main.homeService.select_device_type = device.type.S;
      console.log("selected device: ", main.homeService.select_device_type);

      if (device.type.S == 'mokapotA') {
        main.deviceNamePlaceholder = "User's Caferesso";
      } else if (device.type.S == 'mokapotB') {
        main.deviceNamePlaceholder = "User's Caferesso";
      } else if (device.type.S == 'mokapotC1') {
        main.deviceNamePlaceholder = "User's Caferesso";
      }
    }
  }, {
    key: "openModal",
    value: function openModal() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this = this;

        var main, modal;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                main = this;
                _context.next = 3;
                return this.modalController.create({
                  component: _wifi_pass_modal_wifi_pass_modal_page__WEBPACK_IMPORTED_MODULE_10__.WifiPassModalPage,
                  backdropDismiss: false,
                  showBackdrop: true,
                  cssClass: 'wifi-password-modal-class'
                });

              case 3:
                modal = _context.sent;
                modal.onDidDismiss().then(function (res) {
                  console.log("res", res.data);
                  main.wifi_password = res.data;
                  _this.status = 4;
                  console.log("wifi_password: ", main.wifi_password);
                  main.connectHomeWifi(main.select_home_wifi, main.wifi_password, 5);
                });
                _context.next = 7;
                return modal.present();

              case 7:
                return _context.abrupt("return", _context.sent);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "connectAlert",
    value: function connectAlert() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var main, alert;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                main = this;
                _context2.next = 3;
                return this.alertController.create({
                  cssClass: 'wifi-password-alert-class',
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
                      main.status = 4;
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
      main.openModal();
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
    key: "connectHomeWifiCenter",
    value: function connectHomeWifiCenter(ssid, pass, set_try) {
      var _this2 = this;

      var main = this;
      main.mokapotService.getWifiStatus().subscribe(function (wifi_status_data) {
        if (wifi_status_data) {
          console.log("getWifiStatus data", wifi_status_data);
          main.manuel_add_interval = setInterval(function () {
            main.wifiWizard2.getConnectedSSID().then(function (network) {
              main.net = network;
              console.log("main.net: ", main.net);

              if (main.net.indexOf('mokapot-') > -1) {
                console.log("mokapota bağlı");
                clearInterval(main.manuel_add_interval);

                if (main.mokapotService.esp_network_status.network_status == 'connected') {
                  if (wifi_status_data.network_status == "connected") {
                    main.mokapotService.setWifiStatusDone(main.statusdone).subscribe(function (data) {
                      console.log("status done", data);
                      console.log("network status", main.mokapotService.esp_network_status.network_status);
                      main.loadingConnected100();
                      main.network_success_interval = setInterval(function () {
                        main.wifiWizard2.getConnectedSSID().then(function (network) {
                          console.log('network', network);

                          if (main.network.type == 'wifi') {
                            if (network.indexOf('mokapot-') <= -1) {
                              clearInterval(main.network_success_interval);
                              console.log("stop interval");
                              console.log("activeid", main.homeService.activeid);
                              console.log("macaddress", main.mokapotService.mokapot_mac_address);
                            }
                          } else if (main.network.type != 'wifi' && main.network.type != 'none') {
                            clearInterval(main.network_success_interval);
                            console.log("stop interval");
                            console.log("activeid", main.homeService.activeid);
                            console.log("macaddress", main.mokapotService.mokapot_mac_address);
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
                  _this2.status = 3;
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
          console.log('wifi status gelmiyor');

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
    key: "deviceName",
    value: function deviceName() {
      this.status = 2;
    }
  }, {
    key: "phoneSetting",
    value: function phoneSetting() {
      var main = this;
      main.homeService.deviceName = main.deviceNameText;
      main.openNativeSettings.open("wifi");
      main.status = 3;
      console.log("status code: ", main.status);
      main.ip_interval = setInterval(function () {
        main.wifiWizard2.getConnectedSSID().then(function (network) {
          console.log(network);
          main.mokapotService.connected_network = network;

          if (main.mokapotService.connected_network.indexOf('mokapot-') > -1) {
            console.log("interval stopped wifi status center");
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
    key: "connectMokaBLE",
    value: function connectMokaBLE(device) {
      var main = this;
      main.loadingConnected();
      main.ble.connect(device.id).subscribe(function (peripheral) {
        return main.onConnected(peripheral);
      });
    }
  }, {
    key: "BleConnectID",
    value: function BleConnectID(device) {
      var main = this;
      main.ble.connect(device).subscribe(function (peripheral) {
        return main.onConnected(peripheral);
      });
    }
  }, {
    key: "BleDisconnect",
    value: function BleDisconnect() {
      var main = this;
      main.ble.disconnect(main.peripheral.id).then(function () {
        return console.log('Disconnected ' + JSON.stringify(main.peripheral));
      }, function () {
        return console.log('ERROR disconnecting ' + JSON.stringify(main.peripheral));
      });
    }
  }, {
    key: "onConnected",
    value: function onConnected(peripheral) {
      var main = this;
      console.log("peripheral ", peripheral);
      main.mokapot_ble_devices.forEach(function (element) {
        if (element.id == peripheral.id && peripheral.state == "connected") {
          element.state = "connected";
          console.log("element connected", element);
          main.loadingController.dismiss().then(function () {});
        }
      });
      main.ngZone.run(function () {
        main.peripheral = peripheral;
        console.log("main peripheral ", JSON.stringify(main.peripheral));
      });
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
            }

            main.loadingController.dismiss().then(function () {
              return console.log("dismiss");
            });
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
    key: "back",
    value: function back() {
      this.navController.back();
    }
  }, {
    key: "close",
    value: function close() {
      this.modalController.dismiss().then(function () {
        console.log("dismiss");
      });
    }
  }, {
    key: "goHome",
    value: function goHome() {
      this.navController.navigateForward('tabs/tab1');
    }
  }, {
    key: "loadingConnected",
    value: function loadingConnected() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
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
    key: "getWifiListErr",
    value: function getWifiListErr() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var toast;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.toastController.create({
                  message: 'Wifi listesi alınamadı. Tekrar deneyin.',
                  duration: 4000
                });

              case 2:
                toast = _context4.sent;
                toast.present();

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "loadingConnected20",
    value: function loadingConnected20() {
      this.progress_text = 'Wifi information sent. Please wait...';
      this.progress_value = 20;
    }
  }, {
    key: "loadingConnected40",
    value: function loadingConnected40() {
      this.progress_text = 'Mokapot internet connection completed. Please wait...';
      this.progress_value = 40;
    }
  }, {
    key: "loadingConnected60",
    value: function loadingConnected60() {
      this.progress_text = 'Device information is checked. Please wait...';
      this.progress_value = 60;
    }
  }, {
    key: "loadingConnected80",
    value: function loadingConnected80() {
      this.progress_text = 'Device is being registered. Please wait...';
      this.progress_value = 80;
    }
  }, {
    key: "loadingConnected100",
    value: function loadingConnected100() {
      this.progress_text = 'Device registration is complete. You are being redirected to the home page.';
      this.progress_value = 100;
    }
  }, {
    key: "mokapotNetworkErr",
    value: function mokapotNetworkErr() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var toast;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.toastController.create({
                  message: '"mokapot" ağına bağlı değilsiniz.',
                  duration: 4000
                });

              case 2:
                toast = _context5.sent;
                toast.present();

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    }
  }, {
    key: "passwordErr",
    value: function passwordErr() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var toast;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.toastController.create({
                  message: 'Girdiğiniz şifre eksik veya hatalı. Kontrol edip tekrar deneyin.',
                  duration: 4000
                });

              case 2:
                toast = _context6.sent;
                toast.present();

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
    }
  }, {
    key: "registeredDeviceAlert",
    value: function registeredDeviceAlert() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var _this3 = this;

        var alert;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.alertController.create({
                  header: 'registered device',
                  subHeader: 'The device you are trying to register is already registered to your account.',
                  message: 'Check your information and try again.',
                  buttons: [{
                    text: 'OK',
                    role: 'confirm',
                    handler: function handler() {
                      _this3.modalController.dismiss().then(function () {
                        console.log("modal dismiss");
                      });

                      _this3.navController.navigateForward('tabs/tab1');
                    }
                  }]
                });

              case 2:
                alert = _context7.sent;
                _context7.next = 5;
                return alert.present();

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
    }
  }, {
    key: "connectedErr",
    value: function connectedErr() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var toast;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.toastController.create({
                  message: 'Bağlantı kurulamadı. Tekrar deneyin.',
                  duration: 4000
                });

              case 2:
                toast = _context8.sent;
                toast.present();

              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
    }
  }]);

  return DeviceSelectPage;
}();

DeviceSelectPage.ctorParameters = function () {
  return [{
    type: _home_service__WEBPACK_IMPORTED_MODULE_4__.HomeService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.NavController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController
  }, {
    type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.LoadingController
  }, {
    type: _awesome_cordova_plugins_wifi_wizard_2_ngx__WEBPACK_IMPORTED_MODULE_6__.WifiWizard2
  }, {
    type: _mokapot_service__WEBPACK_IMPORTED_MODULE_7__.MokapotService
  }, {
    type: _awesome_cordova_plugins_network_ngx__WEBPACK_IMPORTED_MODULE_8__.Network
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ToastController
  }, {
    type: _awesome_cordova_plugins_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_9__.OpenNativeSettings
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController
  }, {
    type: _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_11__.BLE
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.NgZone
  }];
};

DeviceSelectPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-device-select',
  template: _device_select_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_device_select_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], DeviceSelectPage);


/***/ }),

/***/ 7133:
/*!*********************************************************!*\
  !*** ./src/app/wifi-pass-modal/wifi-pass-modal.page.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WifiPassModalPage": function() { return /* binding */ WifiPassModalPage; }
/* harmony export */ });
/* harmony import */ var _Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _wifi_pass_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wifi-pass-modal.page.html?ngResource */ 452);
/* harmony import */ var _wifi_pass_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wifi-pass-modal.page.scss?ngResource */ 4556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);








var WifiPassModalPage = /*#__PURE__*/function () {
  function WifiPassModalPage(modalController) {
    (0,_Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WifiPassModalPage);

    this.modalController = modalController;
  }

  (0,_Users_osmanakbas_Desktop_homeappnew_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(WifiPassModalPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "close",
    value: function close() {
      this.modalController.dismiss(this.wifi_password).then(function () {
        console.log("dismiss");
      });
    }
  }]);

  return WifiPassModalPage;
}();

WifiPassModalPage.ctorParameters = function () {
  return [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
  }];
};

WifiPassModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-wifi-pass-modal',
  template: _wifi_pass_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_wifi_pass_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], WifiPassModalPage);


/***/ }),

/***/ 1039:
/*!******************************************************************!*\
  !*** ./src/app/device-select/device-select.page.scss?ngResource ***!
  \******************************************************************/
/***/ (function(module) {

module.exports = "ion-content {\n  --background: #fff url('bg-main.png') no-repeat center center / cover;\n}\n\nion-toolbar {\n  --background: url('bg-header.png') no-repeat center center / cover;\n  --border-width: 0px!important;\n}\n\n.footer-toolbar {\n  --background: url('bg-footer.png') no-repeat center center / cover;\n  --border-width: 0px !important;\n  --padding-top: 0!important;\n  padding-top: 0 !important;\n}\n\n.wifi-box {\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\n.device-box {\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);\n  height: 140px;\n}\n\n.add-box {\n  background: #f6f6f6;\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);\n  height: 140px;\n}\n\n.add-icon {\n  color: #F74B4B;\n}\n\n.btn, .add-btn {\n  --background:#F74B4B;\n  --background-activated:#F74B4B;\n  --background-focused: #F74B4B;\n  --background-hover: #F74B4B;\n  color: #fff;\n  font-family: \"SFProMedium\";\n  font-size: 17px;\n}\n\n.my-device-box {\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldmljZS1zZWxlY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kscUVBQUE7QUFBSjs7QUFFQTtFQUNJLGtFQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFDQTtFQUNJLGtFQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FBRUo7O0FBMEJBO0VBQ0ksMENBQUE7QUF2Qko7O0FBMEJBO0VBQ0ksMENBQUE7RUFDQSxhQUFBO0FBdkJKOztBQTBCQTtFQUNJLG1CQUFBO0VBQ0EsMENBQUE7RUFFQSxhQUFBO0FBeEJKOztBQTJCQTtFQUNJLGNBQUE7QUF4Qko7O0FBMkJBO0VBQ0ksb0JBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBeEJKOztBQTJCQTtFQUNJLDRHQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQXhCSiIsImZpbGUiOiJkZXZpY2Utc2VsZWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vICoqKioqKioqKiBPTEQgQ1NTICoqKioqKioqKiAvL1xuaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZiB1cmwoXCIuLi8uLi9hc3NldHMvYmctbWFpbi5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3Zlcjtcbn1cbmlvbi10b29sYmFye1xuICAgIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2JnLWhlYWRlci5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4IWltcG9ydGFudDtcbn1cbi5mb290ZXItdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvYmctZm9vdGVyLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctdG9wOiAwIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogMCFpbXBvcnRhbnQ7XG59XG4vLyAuYmdyIHtcbi8vICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgdG9wOiAwO1xuLy8gICAgIHBvc2l0aW9uOiBmaXhlZDtcbi8vICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbi8vICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuLy8gICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuLy8gfVxuLy8gOjotd2Via2l0LXNjcm9sbGJhcixcbi8vICo6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbi8vICAgICBkaXNwbGF5OiBub25lO1xuLy8gfVxuLy8gaW9uLXRvb2xiYXIge1xuLy8gICAgIC0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4vLyB9XG5cbi8vICoqKioqKioqKiBORVcgQ1NTICoqKioqKioqKiAvL1xuLy8gaW9uLWNvbnRlbnQge1xuLy8gICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcbi8vIH1cbi8vIGlvbi10b29sYmFye1xuLy8gICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcbi8vICAgICAtLWJvcmRlci13aWR0aDogMHB4IWltcG9ydGFudDtcbi8vIH1cblxuLndpZmktYm94e1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmRldmljZS1ib3h7XG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGhlaWdodDogMTQwcHg7XG59XG5cbi5hZGQtYm94e1xuICAgIGJhY2tncm91bmQ6ICNmNmY2ZjY7XG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIC8vYm9yZGVyOjFweCBkYXNoZWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGhlaWdodDogMTQwcHg7XG59XG5cbi5hZGQtaWNvbntcbiAgICBjb2xvcjogI0Y3NEI0Qjtcbn1cblxuLmJ0biwgLmFkZC1idG4ge1xuICAgIC0tYmFja2dyb3VuZDojRjc0QjRCO1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6I0Y3NEI0QjtcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogI0Y3NEI0QjtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNGNzRCNEI7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBmb250LWZhbWlseTogXCJTRlByb01lZGl1bVwiO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLm15LWRldmljZS1ib3h7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5cbiJdfQ== */";

/***/ }),

/***/ 4556:
/*!**********************************************************************!*\
  !*** ./src/app/wifi-pass-modal/wifi-pass-modal.page.scss?ngResource ***!
  \**********************************************************************/
/***/ (function(module) {

module.exports = "ion-content {\n  --background: #fff;\n}\n\nion-toolbar {\n  --background: #fff;\n  --border-width: 0px!important;\n  padding-top: 0 !important;\n}\n\n.btn {\n  --background:#F74B4B;\n  --background-activated:#F74B4B;\n  --background-focused: #F74B4B;\n  --background-hover: #F74B4B;\n  color: #fff;\n  font-family: \"SFProMedium\";\n  font-size: 17px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpZmktcGFzcy1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJ3aWZpLXBhc3MtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuaW9uLXRvb2xiYXJ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHghaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiAwIWltcG9ydGFudDtcbn1cblxuLmJ0bntcbiAgICAtLWJhY2tncm91bmQ6I0Y3NEI0QjtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiNGNzRCNEI7XG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNGNzRCNEI7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjRjc0QjRCO1xuICAgIGNvbG9yOiNmZmY7XG4gICAgZm9udC1mYW1pbHk6IFwiU0ZQcm9NZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDE3cHg7XG59Il19 */";

/***/ }),

/***/ 4524:
/*!******************************************************************!*\
  !*** ./src/app/device-select/device-select.page.html?ngResource ***!
  \******************************************************************/
/***/ (function(module) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"px-20i\">\n    <ion-row class=\"h-10\">\n      <ion-col size=\"10\" class=\"sf-pro-bold d-flex align-items-center\">\n        <div>\n          <h4 class=\"text-dark fs-24 my-5 text-underline underline-offset-5\" *ngIf=\"status == 2\">\n            Name your device\n          </h4>\n\n          <h4 class=\"text-dark fs-24 my-5 text-underline underline-offset-5\" *ngIf=\"status == 3\">\n            Find wifi\n          </h4>\n\n          <h4 class=\"text-dark fs-24 my-5 text-underline underline-offset-5\" *ngIf=\"status == 4\">\n            Connecting\n          </h4>\n        </div>\n      </ion-col>\n      <ion-col size=\"2\" class=\"d-flex align-items-center justify-end\" (click)=\"close()\">\n        <ion-icon name=\"close-outline\" class=\"fs-38 text-dark-gray\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content scrollY=\"false\">\n  <ion-grid *ngIf=\"status == 2\" class=\"h-15\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"px-25\">\n        <p class=\"sf-pro-regular fs-18 text-dark\">\n          How do you want to call you device? It can be named like “My home pot” or “Joe’s pot”\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"status == 3\" class=\"h-15\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"px-25\">\n        <p class=\"sf-pro-regular fs-18 text-dark\">\n          Please find the wifi that you want to connect with and insert password\n        </p> \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"status == 4\" class=\"h-15\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"px-25\">\n        <p class=\"sf-pro-regular fs-18 text-dark\">\n          We are setting up your device. Once it’s done you will be directed to main screen\n          Please do not close your app\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"status == 2\" class=\"h-85 w-100 d-flex align-items-center\">\n    <ion-row class=\"w-100\">\n      <ion-col size=\"1\">\n\n      </ion-col>\n      <ion-col size=\"10\" class=\"text-center px-20\">\n        <ion-input placeholder=\"{{deviceNamePlaceholder}}\" [(ngModel)]=\"deviceNameText\"\n          class=\"border-bottom-1 border-gray fs-26 sf-pro-bold\">\n\n        </ion-input>\n      </ion-col>\n      <ion-col size=\"1\">\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"status == 3\" class=\"h-85 overflow-scroll\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"px-25\">\n        <p *ngFor=\"let item of esp_wifi_list\"\n          class=\"sf-pro-regular fs-18 text-dark py-15 m-0 border-bottom-1 border-gray d-flex align-items-center justify-space-between\"\n          (click)=\"selectHomeWifi(item.ssid)\">\n          {{item.ssid }}\n          <span class=\"d-flex align-items-center\">\n            <ion-icon name=\"reorder-two-outline\"></ion-icon>\n          </span>\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"status == 4\" class=\"h-85\">\n    <ion-row class=\"h-100\">\n      <ion-col size=\"12\" class=\"h-100 px-25 text-center\">\n        <circle-progress\n        class=\"mt-20\"\n        [percent]=\"progress_value\"\n        [radius]=\"100\"\n        [outerStrokeWidth]=\"10\"\n        [innerStrokeWidth]=\"0\"\n        [outerStrokeColor]=\"'#F74B4B'\"\n        [showBackground]=\"true\"\n        [showBackground]=\"true\"\n        [showInnerStroke]=\"true\"\n        [backgroundStroke]=\"'#ccc'\"\n        [backgroundStrokeWidth]=\"10\"\n        [backgroundPadding]=\"-5\"\n        [animation]=\"true\"\n        [startFromZero] = false\n        [showZeroOuterStroke] = true\n        [showTitle]=\"true\"\n        [showSubtitle]=\"false\"\n        [showUnits]=\"true\"\n        [unitsFontSize]=\"20\"\n        [titleFontSize]=\"30\"\n        [titleFontWeight]=\"500\">\n      </circle-progress>\n      <p>\n        {{progress_text}}\n      </p>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n  <ion-grid\n    style=\"width: 100%; height: 200px; position: fixed; bottom: 0; z-index: 1; background: linear-gradient(180deg, rgba(246, 246, 246, 0) 3.63%, rgba(255, 255, 255, 0) 3.63%, #fff 70%);\">\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar class=\"footer-toolbar\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"text-center sf-pro-regular fs-12 text-dark-gray\" *ngIf=\"status == 2\">\n        <p *ngIf=\"selectDeviceControl == true\">\n          <ion-icon name=\"ellipse\" style=\"color: #F74B4B\" class=\"pe-5\"></ion-icon>\n          <ion-icon name=\"ellipse\" style=\"color: #D9D9D9\" class=\"pe-5\"></ion-icon>\n          <ion-icon name=\"ellipse\" style=\"color: #D9D9D9\"></ion-icon>\n        </p>\n      </ion-col>\n\n      <ion-col size=\"12\" class=\"text-center sf-pro-regular fs-12 text-dark-gray\" *ngIf=\"status == 3\">\n        <p *ngIf=\"selectDeviceControl == true\">\n          <ion-icon name=\"ellipse\" style=\"color: #F74B4B\" class=\"pe-5\"></ion-icon>\n          <ion-icon name=\"ellipse\" style=\"color: #F74B4B\" class=\"pe-5\"></ion-icon>\n          <ion-icon name=\"ellipse\" style=\"color: #D9D9D9\"></ion-icon>\n        </p>\n      </ion-col>\n\n      <ion-col size=\"12\" class=\"text-center sf-pro-regular fs-12 text-dark-gray\" *ngIf=\"status == 4\">\n        <p *ngIf=\"selectDeviceControl == true\">\n          <ion-icon name=\"ellipse\" style=\"color: #F74B4B\" class=\"pe-5\"></ion-icon>\n          <ion-icon name=\"ellipse\" style=\"color: #F74B4B\" class=\"pe-5\"></ion-icon>\n          <ion-icon name=\"ellipse\" style=\"color: #F74B4B\"></ion-icon>\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" class=\"px-10\" *ngIf=\"selectDeviceControl == false\">\n        <ion-button expand=\"block\" class=\"btn sf-pro-bold fs-17\" disabled>\n          Add new device\n        </ion-button>\n      </ion-col>\n\n      <ion-col size=\"12\" class=\"px-10\" *ngIf=\"selectDeviceControl == true && status == 2\">\n        <ion-button expand=\"block\" class=\"btn sf-pro-bold fs-17\" (click)=\"phoneSetting()\">\n          Proceed\n        </ion-button>\n      </ion-col>\n\n      <ion-col size=\"12\" class=\"px-10\" *ngIf=\"selectDeviceControl == true && status == 3\">\n        <ion-button expand=\"block\" class=\"btn sf-pro-bold fs-17\" (click)=\"goWifiList()\">\n          Connect\n        </ion-button>\n      </ion-col>\n\n      <ion-col size=\"12\" class=\"px-10\" *ngIf=\"selectDeviceControl == true && status == 4\">\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>";

/***/ }),

/***/ 452:
/*!**********************************************************************!*\
  !*** ./src/app/wifi-pass-modal/wifi-pass-modal.page.html?ngResource ***!
  \**********************************************************************/
/***/ (function(module) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"10\" class=\"d-flex align-items-start justify-content-start\">\n          <div>\n            <h4 class=\"text-dark fs-24 my-5 sf-pro-bold\">\n              Wifi password\n            </h4>\n            <p class=\"text-dark fs-12 sf-pro-regular\">\n              Type the password of the wifi \n            </p>\n          </div>\n        </ion-col>\n        <ion-col size=\"2\" class=\"d-flex align-items-start justify-end\">\n          <ion-icon name=\"close-outline\" class=\"fs-38 text-dark-gray p-5\" (click)=\"close()\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content scrollY=\"false\">\n  <ion-grid class=\"h-100\">\n    <ion-row class=\"h-100\">\n      <ion-col size=\"1\">\n      </ion-col>\n\n      <ion-col size=\"10\" class=\"text-center px-20 d-flex align-items-center mt-n-25\">\n        <ion-input placeholder=\"Password\" type=\"password\" [(ngModel)]=\"wifi_password\" class=\"border-bottom-1 border-gray fs-26 sf-pro-bold\">\n\n        </ion-input>\n      </ion-col>\n\n      <ion-col size=\"1\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer class=\"pt-0 ps-15 pe-15 pb-15\">\n  <ion-button class=\"btn\" expand=\"block\" (click)=\"close()\">\n    Connect\n  </ion-button>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_device-select_device-select_page_ts.js.map