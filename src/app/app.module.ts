import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { BLE } from '@ionic-native/ble/ngx';
import { WifiWizard2 } from '@awesome-cordova-plugins/wifi-wizard-2/ngx';
import { OpenNativeSettings } from '@awesome-cordova-plugins/open-native-settings/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { Network } from '@awesome-cordova-plugins/network/ngx';

import { NgCircleProgressModule } from 'ng-circle-progress';

const config: SocketIoConfig = { url: 'http://54.224.216.230:8080', options: { transports: ['websocket'] } };

@NgModule({
  declarations: [AppComponent],
  imports: [IonicStorageModule.forRoot(), BrowserModule, IonicModule.forRoot({ mode: 'ios', scrollAssist: false, scrollPadding: false }), HttpClientModule, AppRoutingModule, SocketIoModule.forRoot(config),
  NgCircleProgressModule.forRoot({
    radius: 100,
    outerStrokeWidth: 16,
    innerStrokeWidth: 8,
    outerStrokeColor: "#78C000",
    innerStrokeColor: "#C7E596",
    animationDuration: 300,
  })
  ],
  providers: [BLE, WifiWizard2, Network, Geolocation, OpenNativeSettings, InAppBrowser, Deeplinks, BarcodeScanner, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
