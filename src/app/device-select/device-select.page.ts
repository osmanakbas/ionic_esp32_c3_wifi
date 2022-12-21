import { Component, OnInit, NgZone } from '@angular/core';
import { AlertController, LoadingController, ModalController, NavController, ToastController } from '@ionic/angular';
import { HomeService } from '../home.service';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { WifiWizard2 } from '@awesome-cordova-plugins/wifi-wizard-2/ngx';
import { MokapotService } from '../mokapot.service';
import { Network } from '@awesome-cordova-plugins/network/ngx';
import { OpenNativeSettings } from '@awesome-cordova-plugins/open-native-settings/ngx';
import { WifiPassModalPage } from '../wifi-pass-modal/wifi-pass-modal.page';
import { BLE } from '@ionic-native/ble/ngx';

@Component({
  selector: 'app-device-select',
  templateUrl: './device-select.page.html',
  styleUrls: ['./device-select.page.scss'],
})
export class DeviceSelectPage implements OnInit {

  progress_value = 0;
  progress_text = '';

  results = [];
  wifi_interval;
  mac_interval;
  connected_interval;

  custom_device_name;
  select_ssid;
  net: any;
  manuel_add_interval;
  network_success_interval;
  newdevice = '0';
  statusdone: any = "done";

  status: any = 2;

  slideOpts = {
    initialSlide: 0,
    speed: 1500,
    slidesPerView: 1.7,
    centeredSlides: false,
    centeredSlidesBounds: true,
    slidesOffsetBefore: 10,
    slidesOffsetAfter: 10
  };

  deviceNamePlaceholder = "User's Mokapot";
  deviceNameText = '';

  connected_wifi: any;
  ip_interval: any;
  mac_try = 30;
  esp_wifi_list = [];
  select_home_wifi: any;
  wifi_password;

  selectDeviceControl = true;
  list: any;
  scale_list = [];
  coffee_makers_list = [];
  kitchen_tools_list = [];
  ordered_list = []
  scan_code: any;
  options: any;
  add_machine = true;
  mokapot_ble_devices: any = [];
  peripheral:any;

  constructor(
    private homeService: HomeService,
    private navController: NavController,
    private modalController: ModalController,
    private loadingController: LoadingController,
    private wifiWizard2: WifiWizard2,
    private mokapotService: MokapotService,
    private network: Network,
    private toastController: ToastController,
    private openNativeSettings: OpenNativeSettings,
    private alertController: AlertController,
    private ble: BLE,
    private ngZone: NgZone,
  ) { }

  ngOnInit() {
  }

  select(device) {
    let main = this;
    this.coffee_makers_list.forEach(item => {
      item.select = false;
    })
    this.kitchen_tools_list.forEach(item => {
      item.select = false;
    })
    this.scale_list.forEach(item => {
      item.select = false;
    })
    device.select = true;
    this.selectDeviceControl = true;
    console.log("selected device: ", device);
    main.homeService.select_device_type = device.type.S;
    console.log("selected device: ", main.homeService.select_device_type);

    if (device.type.S == 'mokapotA') {
      main.deviceNamePlaceholder = "User's Caferesso"
    }
    else if (device.type.S == 'mokapotB') {
      main.deviceNamePlaceholder = "User's Caferesso"
    }
    else if (device.type.S == 'mokapotC1') {
      main.deviceNamePlaceholder = "User's Caferesso"
    }
  }

  async openModal() {
    let main = this;
    const modal = await this.modalController.create({
      component: WifiPassModalPage,
      backdropDismiss: false,
      showBackdrop: true,
      cssClass: 'wifi-password-modal-class'
    });
    modal.onDidDismiss().then((res) => {
      console.log("res", res.data);
      main.wifi_password = res.data;
      this.status = 4;
      console.log("wifi_password: ", main.wifi_password);
      main.connectHomeWifi(main.select_home_wifi, main.wifi_password, 5);
    })
    return await modal.present();
  }

  async connectAlert() {
    let main = this;
    const alert = await this.alertController.create({
      cssClass: 'wifi-password-alert-class',
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
            main.wifi_password = datas.pass;
            main.connectHomeWifi(main.select_home_wifi, main.wifi_password, 5);
            main.status = 4;
          }
        }
      ]
    });

    await alert.present();
  }

  selectHomeWifi(wifi) {
    let main = this;
    main.select_home_wifi = wifi;
    main.openModal();
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

  connectHomeWifiCenter(ssid, pass, set_try) {
    let main = this;
    main.mokapotService.getWifiStatus().subscribe((wifi_status_data: any) => {
      if (wifi_status_data) {
        console.log("getWifiStatus data", wifi_status_data);
        main.manuel_add_interval = setInterval(() => {
          main.wifiWizard2.getConnectedSSID().then((network) => {
            main.net = network;
            console.log("main.net: ", main.net);
            if (main.net.indexOf('mokapot-') > -1) {
              console.log("mokapota bağlı");
              clearInterval(main.manuel_add_interval);

              if (main.mokapotService.esp_network_status.network_status == 'connected') {
                if (wifi_status_data.network_status == "connected") {
                  main.mokapotService.setWifiStatusDone(main.statusdone).subscribe((data) => {
                    console.log("status done", data);
                    console.log("network status", main.mokapotService.esp_network_status.network_status)
                    main.loadingConnected100()
                    main.network_success_interval = setInterval(() => {
                      main.wifiWizard2.getConnectedSSID().then((network) => {
                        console.log('network', network);
                        if (main.network.type == 'wifi') {
                          if (network.indexOf('mokapot-') <= -1) {
                            clearInterval(main.network_success_interval);
                            console.log("stop interval");
                            console.log("activeid", main.homeService.activeid);
                            console.log("macaddress", main.mokapotService.mokapot_mac_address);
                          }
                        }
                        else if (main.network.type != 'wifi' && main.network.type != 'none') {
                          clearInterval(main.network_success_interval);
                          console.log("stop interval");
                          console.log("activeid", main.homeService.activeid);
                          console.log("macaddress", main.mokapotService.mokapot_mac_address);
                        }
                      })
                    }, 500)
                  })
                }
              }
              else {
                main.loadingController.dismiss().then(() => console.log("dismissed"));
                console.log("bağlantı hatası ");
                this.status = 3;
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
        console.log('wifi status gelmiyor');
        if (set_try > 0) {
          set_try--;
          main.connectHomeWifiCenter(ssid, pass, set_try);
        }

      }
    }, (error) => { console.log('sanırım burada', error); })
  }

  deviceName() {
    this.status = 2;
  }

  phoneSetting() {
    let main = this;
    main.homeService.deviceName = main.deviceNameText;
    main.openNativeSettings.open("wifi");
    main.status = 3;
    console.log("status code: ", main.status);

    main.ip_interval = setInterval(() => {
      main.wifiWizard2.getConnectedSSID().then((network) => {
        console.log(network);
        main.mokapotService.connected_network = network;
        if (main.mokapotService.connected_network.indexOf('mokapot-') > -1) {
          console.log("interval stopped wifi status center")
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

  connectMokaBLE(device) {
    let main = this;
    main.loadingConnected();
    main.ble.connect(device.id).subscribe(
      peripheral => main.onConnected(peripheral)
    );
  }

  BleConnectID(device) {
    let main = this;
    main.ble.connect(device).subscribe(
      peripheral => main.onConnected(peripheral)
    );
  }

  BleDisconnect() {
    let main = this;
    main.ble.disconnect(main.peripheral.id).then(
      () => console.log('Disconnected ' + JSON.stringify(main.peripheral)),
      () => console.log('ERROR disconnecting ' + JSON.stringify(main.peripheral)));
  }

  onConnected(peripheral) {
    let main = this;
    console.log("peripheral ", peripheral);
    main.mokapot_ble_devices.forEach(element => {
      if(element.id == peripheral.id && peripheral.state == "connected"){
        element.state = "connected";
        console.log("element connected", element);
        main.loadingController.dismiss().then(()=>{});
      }
    });
    main.ngZone.run(() => {
      main.peripheral = peripheral;
      console.log("main peripheral ", JSON.stringify(main.peripheral));
    });
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
          }
          main.loadingController.dismiss().then(() => console.log("dismiss"))
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

  back() {
    this.navController.back();
  }

  close() {
    this.modalController.dismiss().then(() => { console.log("dismiss") })
  }

  goHome() {
    this.navController.navigateForward('tabs/tab1');
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

  async getWifiListErr() {
    const toast = await this.toastController.create({
      message: 'Wifi listesi alınamadı. Tekrar deneyin.',
      duration: 4000
    });
    toast.present();
  }

  loadingConnected20() {
    this.progress_text = 'Wifi information sent. Please wait...'
    this.progress_value = 20;
  }
  loadingConnected40() {
    this.progress_text = 'Mokapot internet connection completed. Please wait...'
    this.progress_value = 40;
  }
  loadingConnected60() {
    this.progress_text = 'Device information is checked. Please wait...'
    this.progress_value = 60;
  }
  loadingConnected80() {
    this.progress_text = 'Device is being registered. Please wait...'
    this.progress_value = 80;
  }
  loadingConnected100() {
    this.progress_text = 'Device registration is complete. You are being redirected to the home page.'
    this.progress_value = 100;
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
  async registeredDeviceAlert() {
    const alert = await this.alertController.create({
      header: 'registered device',
      subHeader: 'The device you are trying to register is already registered to your account.',
      message: 'Check your information and try again.',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.modalController.dismiss().then(() => { console.log("modal dismiss") })
            this.navController.navigateForward('tabs/tab1')
          }
        }
      ]
    });

    await alert.present();
  }
  async connectedErr() {
    const toast = await this.toastController.create({
      message: 'Bağlantı kurulamadı. Tekrar deneyin.',
      duration: 4000
    });
    toast.present();
  }
}
