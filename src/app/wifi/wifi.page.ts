import { Component, OnInit } from '@angular/core';
import { WifiWizard2 } from '@awesome-cordova-plugins/wifi-wizard-2/ngx';
import { AlertController, LoadingController, ModalController, NavController, Platform, ToastController } from '@ionic/angular';
import { HomeService } from '../home.service';
import { MokapotService } from '../mokapot.service';
import { OpenNativeSettings } from '@awesome-cordova-plugins/open-native-settings/ngx';
import { Network } from '@awesome-cordova-plugins/network/ngx';

@Component({
  selector: 'app-wifi',
  templateUrl: './wifi.page.html',
  styleUrls: ['./wifi.page.scss'],
})
export class WifiPage implements OnInit {

  results = [];
  select_home_wifi;
  connected_wifi;
  wifi_interval;
  mac_interval;
  ip_interval;
  connected_interval;

  custom_device_name;
  wifi_password;
  esp_wifi_list = [];
  select_ssid;
  net: any;
  manuel_add_interval;
  network_success_interval;
  newdevice = '0';
  mac_try = 30;
  statusdone: any = "done";

  constructor(
    private alertController: AlertController,
    private navController: NavController,
    private homeService: HomeService,
    private mokapotService: MokapotService,
    private wifiWizard2: WifiWizard2,
    private openNativeSettings: OpenNativeSettings,
    private loadingController: LoadingController,
    private platform: Platform,
    private toastController: ToastController,
    private network: Network,
    private modalController: ModalController
  ) {
    let main = this;
    this.platform.resume.subscribe(async () => {
      console.log("resume wifi");
      setTimeout(() => {
        main.loadingController.getTop().then((load) => {
          console.log("load", load);
          if (load) {
            main.loadingController.dismiss().then(() => {
              console.log("dismiss");
            })
            if (main.esp_wifi_list.length == 0) {
              main.loadingConnected();
            }
          }
        })
      }, 1000)
    });
  }

  ngOnInit() {
    let main = this;
    main.ip_interval = setInterval(() => {
      main.wifiWizard2.getConnectedSSID().then((network) => {
        console.log(network);
        main.mokapotService.connected_network = network;
        if (
          main.mokapotService.connected_network.indexOf('mokapot-') > -1 ||
          main.mokapotService.connected_network.indexOf('hottle-') > -1 ||
          main.mokapotService.connected_network.indexOf('korkmaz_castron-') > -1 ||
          main.mokapotService.connected_network.indexOf('korkmaz_moderna-') > -1
        ) {
          clearInterval(main.ip_interval);
          main.loadingConnected();
          main.wifiStatusCenter();
          main.mac_try = 30;
        }
        else {
          main.connected_wifi = false;
          console.log("main.connected_wifi", main.connected_wifi);
        }
      }).catch((err) => {
        console.log('having trouble getting SSID ', err);
        if (main.network.type != 'wifi' && main.network.type != 'none') {
          main.connected_wifi = false;
          console.log("main.connected_wifi", main.connected_wifi);
        }
      });

    }, 1000)
  }

  wifiStatusCenter() {
    let main = this;
    main.connected_wifi = true;
    console.log("main.connected_wifi", main.connected_wifi);

    main.mokapotService.getMacAddress().subscribe((mac_data) => {
      console.log("mac address mac_data: ", mac_data);
      if (mac_data) {
        main.mokapotService.getWifiList().subscribe((wifi_data) => {
          console.log("getWifiList wifi_data ", wifi_data);
          if (wifi_data) {
            main.esp_wifi_list = main.mokapotService.esp_wifi_list;
            console.log("wifi list: ", main.esp_wifi_list);
            main.loadingController.dismiss().then(() => console.log("dismiss"))
          }
        })
      }
      else {
        if (main.mac_try > 0) {
          console.log("getMacAddress Data Gelmedi... Tekrar bakalım mı?");
          main.mac_try--;
          setTimeout(() => {
            main.wifiStatusCenter();
          }, 1000)
        }
        else {
          console.log("yok gelmiyor iste!");
          main.getWifiListErr();
        }
      }
    })
  }

  refreshList() {
    let main = this;
    main.loadingConnected();
    main.esp_wifi_list = [];
    main.mokapotService.getWifiList().subscribe(() => {
      main.esp_wifi_list = main.mokapotService.esp_wifi_list;
      console.log("wifi list: ", main.esp_wifi_list);
      if (main.esp_wifi_list.length > 0) {
        main.loadingController.dismiss().then(() => console.log("dismiss"))
      }
    })
  }

  goHome() {
    this.navController.navigateForward('tabs/tab1')
  }

  async connectAlert() {
    let main = this;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: main.select_home_wifi,
      inputs: [
        {
          name: 'pass',
          type: 'password',
          id: 'pass',
          placeholder: 'Password',
          value: main.wifi_password
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Connect',
          handler: datas => {
            main.wifi_password = datas.pass
            main.connectHomeWifi(main.select_home_wifi, main.wifi_password, 5);
          }
        }
      ]
    });

    await alert.present();
  }

  selectHomeWifi(wifi) {
    let main = this;
    main.select_home_wifi = wifi;
    main.connectAlert();
  }

  connectHomeWifiCenter(ssid, pass, set_try) {
    let main = this;
    main.mokapotService.getWifiStatus().subscribe((wifi_status_data: any) => {
      if (wifi_status_data) {
        console.log("data", wifi_status_data);
        main.manuel_add_interval = setInterval(() => {
          main.wifiWizard2.getConnectedSSID().then((network) => {
            main.net = network;
            console.log("main.net: ", main.net);
            if (main.net.indexOf('mokapot-') > -1 || main.net.indexOf('hottle-') > -1 || main.net.indexOf('korkmaz_moderna-') > -1 || main.net.indexOf('korkmaz_castron-') > -1) {
              console.log("mokapota bağlı");
              clearInterval(main.manuel_add_interval);

              if (main.mokapotService.esp_network_status.network_status == 'connected') {
                if (wifi_status_data.network_status == "connected") {
                  main.mokapotService.setWifiStatusDone(main.statusdone).subscribe((data) => {
                    console.log("status done", data);
                    console.log("network status", main.mokapotService.esp_network_status.network_status)
                    //smain.wifiWizard2.connect(ssid, false, pass, "WPA");
                    main.loadingController.dismiss().then(() => { main.loadingConnected40() })
                    main.network_success_interval = setInterval(() => {
                      main.wifiWizard2.getConnectedSSID().then((network) => {
                        console.log('network', network);
                        if (main.network.type == 'wifi') {
                          if (network.indexOf('mokapot-') <= -1 || network.indexOf('hottle-') <= -1 || network.indexOf('korkmaz_moderna-') <= -1 || network.indexOf('korkmaz_castron-') <= -1) {
                            clearInterval(main.network_success_interval);
                            console.log("stop interval");
                            console.log("activeid", main.homeService.activeid);
                            console.log("macaddress", main.mokapotService.mokapot_mac_address);
                            main.deviceAddCenter(ssid, 30);
                          }
                        }
                        else if (main.network.type != 'wifi' && main.network.type != 'none') {
                          clearInterval(main.network_success_interval);
                          console.log("stop interval");
                          console.log("activeid", main.homeService.activeid);
                          console.log("macaddress", main.mokapotService.mokapot_mac_address);
                          main.deviceAddCenter(ssid, 30);
                        }
                      })
                    }, 500)
                  })
                }
              }
              else {
                main.loadingController.dismiss().then(() => console.log("dismissed"));
                console.log("bağlantı hatası ");
                main.passwordErr();
              }
            }
            else {
              set_try--;
              if (set_try < 0) {
                clearInterval(main.manuel_add_interval);
                main.mokapotNetworkErr();
              }
            }
          })
        }, 1000)
      }
      else {
        console.log('wifi status gelmiyordu');
        if (set_try > 0) {
          set_try--;
          main.connectHomeWifiCenter(ssid, pass, set_try);
        }

      }
    }, (error) => { console.log('sanırım burada', error); })
  }

  connectHomeWifi(ssid, pass, connect_try) {
    let main = this;
    main.loadingConnected20();
    setTimeout(() => {
      main.mokapotService.setWifi(ssid, pass).subscribe((data) => {
        if (data) {
          console.log("data", data);
          main.mokapotService.connect_mode = "auto";
          main.connectHomeWifiCenter(ssid, pass, 5);
        }
        else {
          if (connect_try > 0) {
            connect_try--;
            main.connectHomeWifi(ssid, pass, connect_try);
          }
        }
      });
    }, 10000)

  }

  deviceAddCenter(ssid: any, try_count) {
    let main = this;
    if (try_count > 0) {
      main.mokapotService.addMokapotDevicesControlQuery(main.homeService.activeid, main.mokapotService.mokapot_mac_address).subscribe((data) => {
        main.loadingController.dismiss().then(() => { main.loadingConnected60(); })

        console.log("kontrol query başarılı: ", data);

        main.mokapotService.addMokapotDevicesControlQueryData().subscribe((data) => {
          console.log("data", data);
          console.log("data status", data.status);
          if (data.status == "devicesnotfound") {
            main.loadingController.dismiss().then(() => { main.loadingConnected80(); });
            setTimeout(() => {
              console.log(main.homeService.deviceName);
              main.homeService.addUserDevices(main.homeService.select_device_type, main.homeService.activeid, main.mokapotService.mokapot_mac_address, main.newdevice, main.homeService.deviceName,"stop").subscribe((res) => {
                console.log("cihaz eklendi mi: ", res);
                setTimeout(() => {
                  if (res.status == 'ok') {
                    main.loadingController.dismiss().then(() => { main.loadingConnected100() });
                    setTimeout(() => {
                      main.loadingController.dismiss().then(() => { console.log("dismissed") });
                      main.navController.navigateForward('tabs/tab1');
                      main.mokapotService.connected_network = ssid;
                    }, 1000)
                  }
                  else {
                    main.loadingController.dismiss().then(() => console.log("dismissed"));
                    console.log("ekleme başarısız");
                  }
                }, 500)
              })
            }, 500)
          }
          else {
            main.loadingController.dismiss().then(() => console.log("dismissed"));
            console.log("status devicesok")
            main.registeredDeviceAlert();
          }
        })

      },
        error => {
          console.log('addMokapotDevicesControlQuery first try error', error);
          try_count--;
          setTimeout(() => {
            main.deviceAddCenter(ssid, try_count);
          }, 500);
        })
    }
    else {
      console.log('30 kere denedim olmadi sıra alertte');
      main.loadingController.dismiss().then(() => { console.log("dismiss") });
      main.connectedErr();
      main.navController.navigateForward('device-select');
    }
  }

  async loadingConnected() {
    const loading = await this.loadingController.create({
      duration: 90000,
      spinner: null,
      message: '<img src="assets/coffee-loading-1.gif" class="b-rad-20 w-150">',
      translucent: true,
      cssClass: 'custom-class custom-loading',
    });
    return await loading.present();
  }

  async loadingConnected20() {
    const loading = await this.loadingController.create({
      duration: 90000,
      spinner: 'bubbles',
      message: 'Wifi information sent. Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading-white',
    });
    return await loading.present();
  }
  async loadingConnected40() {
    const loading = await this.loadingController.create({
      duration: 90000,
      spinner: 'bubbles',
      message: 'Mokapot internet connection completed. Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading-white',
    });
    return await loading.present();
  }
  async loadingConnected60() {
    const loading = await this.loadingController.create({
      duration: 90000,
      spinner: 'bubbles',
      message: 'Device information is checked. Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading-white',
    });
    return await loading.present();
  }
  async loadingConnected80() {
    const loading = await this.loadingController.create({
      duration: 90000,
      spinner: 'bubbles',
      message: 'Device is being registered. Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading-white',
    });
    return await loading.present();
  }
  async loadingConnected100() {
    const loading = await this.loadingController.create({
      duration: 90000,
      spinner: 'bubbles',
      message: 'Device registration is complete. You are being redirected to the home page.',
      translucent: true,
      cssClass: 'custom-class custom-loading-white',
    });
    return await loading.present();
  }

  getStatus() {
    let main = this;
    console.log("get status")
    main.mokapotService.getStatus();
  }

  setTemp(temp) {
    let main = this;
    console.log("set temp data")
    main.mokapotService.setTemp(temp);
  }

  back() {
    let main = this;
    this.navController.back();
    clearInterval(main.wifi_interval);
  }

  phoneSetting() {
    let main = this;
    main.openNativeSettings.open("wifi");
  }

  async registeredDeviceAlert() {
    const alert = await this.alertController.create({
      header: 'registered device',
      subHeader: 'The device you are trying to register is already registered to your account.',
      message: 'Check your information and try again.',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => { this.navController.navigateForward('tabs/tab1') }
        }
      ]
    });

    await alert.present();
  }

  async getWifiListErr() {
    const toast = await this.toastController.create({
      message: 'Wifi listesi alınamadı. Tekrar deneyin.',
      duration: 4000
    });
    toast.present();
  }

  async mokapotNetworkErr() {
    const toast = await this.toastController.create({
      message: '"mokapot" ağına bağlı değilsiniz.',
      duration: 4000
    });
    toast.present();
  }

  async passwordErr() {
    const toast = await this.toastController.create({
      message: 'Girdiğiniz şifre eksik veya hatalı. Kontrol edip tekrar deneyin.',
      duration: 4000
    });
    toast.present();
  }

  async connectedErr() {
    const toast = await this.toastController.create({
      message: 'Bağlantı kurulamadı. Tekrar deneyin.',
      duration: 4000
    });
    toast.present();
  }
}
