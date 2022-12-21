import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BLE } from '@ionic-native/ble/ngx';
import { WifiWizard2 } from '@awesome-cordova-plugins/wifi-wizard-2/ngx';
import { MokapotService } from './mokapot.service';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { HomeService } from './home.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private wifiWizard2: WifiWizard2,
    private platform: Platform,
    private ble: BLE,
    private homeService: HomeService,
    private mokapotService: MokapotService,
    private geolocation: Geolocation,
  ) {
    let main = this;

    this.platform.ready().then(() => {
      this.homeService.getUserCheck();
      this.geolocation.getCurrentPosition().then((resp) => {
        console.log('got the location:', resp);
      }).catch((error) => {
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
    })

    this.platform.resume.subscribe(async () => {
      console.log("resume");
      this.wifiWizard2.getConnectedSSID().then(function (network) {
        main.mokapotService.connected_network = network;
      }).catch(function (err) {
        console.log(err);
      });
    });
  }

}
