import { Component, OnInit, NgZone } from '@angular/core';
import { AlertController, LoadingController, ModalController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { BLE } from '@ionic-native/ble/ngx';
import { HomeService } from '../home.service';
import { MokapotService } from '../mokapot.service';
import { Socket } from 'ngx-socket-io';
import { NavigationEnd, Router } from '@angular/router';
import { WifiWizard2 } from '@awesome-cordova-plugins/wifi-wizard-2/ngx';
import { Network } from '@awesome-cordova-plugins/network/ngx';
import { DeviceSelectPage } from '../device-select/device-select.page';
// declare var espSmartConfig: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  slideOpts = {
    initialSlide: 0,
    speed: 1500,
    slidesPerView: 1.7,
    centeredSlides: false,
    centeredSlidesBounds: true,
    slidesOffsetBefore: 10,
    slidesOffsetAfter: 10
  };

  customAlertOptions: any = {
    header: 'My Devices',
  };

  data: any;
  device: any;

  devices: any = [];
  coffee_makers: any = [];
  kitchen_tools: any = [];
  mokapot_device: any = [];
  scales: any = [];
  device_name: any;

  recipes: any;
  newdevice = "1";

  my_device_length;

  constructor(
    private navController: NavController,
    private homeService: HomeService,
    private mokapotService: MokapotService,
    private storage: Storage,
    private ble: BLE,
    private ngZone: NgZone,
    private socket: Socket,
    private loadingController: LoadingController,
    private router: Router,
    private alertController: AlertController,
    private wifiWizard2: WifiWizard2,
    private network: Network,
    private modalController: ModalController
  ) {
    let main = this;
    main.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url == '/tabs/tab1') {
          main.getMyDevices();
        }
      }
    })
  }

  ngOnInit() {
    let main = this;
    let connectSubscription = this.network.onConnect().subscribe(() => {
      console.log('network connected!');
      setTimeout(() => {
        if (this.network.type === 'wifi') {
          console.log('we got a wifi connection, woohoo!');
        }
        else {
          console.log(this.network.type)
        }
      }, 3000);
    });
  }

  gomokadetail() {
    this.navController.navigateForward('moka-detail')
  }

  ionViewDidEnter() {
    let main = this;
    console.log("did enter tab1")
    console.log(this.network.type)
  }

  getMyDevices() {
    let main = this;
    main.coffee_makers = [];
    main.kitchen_tools = [];
    main.scales = [];
    main.loadingDevice();
    console.log(main.homeService.activeid)
    main.homeService.getUserDevices(main.homeService.activeid).subscribe((res) => {
      console.log("res: ", res);
      if (res.status == "devicesnotfound") {
        main.devices = [];
        main.my_device_length = 0;
        setTimeout(() => {
          main.loadingDismiss();
        }, 1000)
      }
      else {
        main.devices = res.result;
        main.devices.forEach(item => {
          if (item.devicetype.S == 'mokapotB' || item.devicetype.S == 'mokapotA' || item.devicetype.S == 'mokapotC1') {
            main.coffee_makers.push(item);
          }
          else if (item.devicetype.S == 'scaleistA' || item.devicetype.S == 'scaleistB') {
            main.scales.push(item);
          }
          else {
            main.kitchen_tools.push(item);
          }
        });
        console.log("coffee makers: ", this.coffee_makers);
        console.log("kitchen tools", this.kitchen_tools);
        console.log("scales", this.scales);
        main.my_device_length = main.devices.length;
        setTimeout(() => {
          main.loadingDismiss();
        }, 1000)
      }
    })
  }

  loadingDismiss() {
    let main = this;
    main.loadingController.dismiss().then(() => console.log("dismiss"));
  }

  async loadingDevice() {
    let main = this;
    const loading = await main.loadingController.create({
      spinner: null,
      duration: 30000,
      message: '<img src="assets/coffee-loading-1.gif" class="b-rad-20 w-150">',
      translucent: true,
      cssClass: 'custom-class custom-loading',
    });
    return await loading.present();
  }

  autoConnect(device) {
    let main = this;
    console.log(device)
    main.socket.emit('request', { device: device.id.S });
    if (device.devicetype.S) {
      if (device.devicetype.S == 'mokapotA') {
        console.log("selected device: ", device);
        main.mokapotService.connect_mode = "auto";
        if (device.newdevice.S == '0') {
          console.log(device.devicename.S);
          main.homeService.addUserNewDevices(device.id.S, device.devicetype.S, device.userid.S, device.device.S, main.newdevice, device.devicename.S).subscribe(() => {
            console.log("update device success");
          })
        }
        main.navController.navigateForward('moka-detail');
        main.mokapotService.mokapot_mac_address = device.device;
      }
      else if (device.devicetype.S == 'mokapotB') {
        console.log("selected device: ", device);
        main.mokapotService.connect_mode = "auto";
        if (device.newdevice.S == '0') {
          console.log(device.devicename.S);
          main.homeService.addUserNewDevices(device.id.S, device.devicetype.S, device.userid.S, device.device.S, main.newdevice, device.devicename.S).subscribe(() => {
            console.log("update device success");
          })
        }
        main.navController.navigateForward('moka-detail');
        main.mokapotService.mokapot_mac_address = device.device;
      }
      else if (device.devicetype.S == 'mokapotC1') {
        console.log("selected device: ", device);
        main.mokapotService.connect_mode = "auto";
        main.mokapotService.connection_status = device.status.S
        if (device.newdevice.S == '0') {
          console.log(device.devicename.S);
          main.homeService.addUserNewDevices(device.id.S, device.devicetype.S, device.userid.S, device.device.S, main.newdevice, device.devicename.S).subscribe(() => {
            console.log("update device success");
          })
        }
        main.navController.navigateForward('moka-basic-detail');
        main.mokapotService.mokapot_mac_address = device.device;
      }
    
    }
    else {
      if (device.devicetype == 'mokapotA') {
        console.log("selected device: ", device);
        main.mokapotService.connect_mode = "auto";
        if (device.newdevice.S == '0') {
          console.log(device.devicename.S);
          main.homeService.addUserNewDevices(device.id, device.devicetype, device.userid, device.device, main.newdevice, device.devicename).subscribe(() => {
            console.log("update device success");
          })
        }
        main.navController.navigateForward('moka-detail');
        main.mokapotService.mokapot_mac_address = device.device;
      }
      else if (device.devicetype == 'mokapotB') {
        console.log("selected device: ", device);
        main.mokapotService.connect_mode = "auto";
        if (device.newdevice.S == '0') {
          console.log(device.devicename.S);
          main.homeService.addUserNewDevices(device.id, device.devicetype, device.userid, device.device, main.newdevice, device.devicename).subscribe(() => {
            console.log("update device success");
          })
        }
        main.navController.navigateForward('moka-detail');
        main.mokapotService.mokapot_mac_address = device.device;
      }
      else if (device.devicetype == 'mokapotC1') {
        console.log("selected device: ", device);
        main.mokapotService.connect_mode = "auto";
        if (device.newdevice.S == '0') {
          console.log(device.devicename.S);
          main.homeService.addUserNewDevices(device.id, device.devicetype, device.userid, device.device, main.newdevice, device.devicename).subscribe(() => {
            console.log("update device success");
          })
        }
        main.navController.navigateForward('moka-basic-detail');
        main.mokapotService.mokapot_mac_address = device.device;
      }
    }

  }

  async deleteDeviceAlert(device) {
    let main = this;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Delete Device',
      message: 'Are you sure want to delete the device named ' + device.devicename.S + '?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Delete',
          cssClass: 'danger',
          handler: () => {
            main.loadingDevice();
            main.mokapotService.connected_network = '';
            main.mokapotService.deleteDevices(device.id.S, device.device.S).subscribe(() => {
              main.socket.emit('cmd', { command: 'delete_device', deviceID: device.device.S });
              setTimeout(() => {
                main.getMyDevices();
                main.loadingController.dismiss().then(() => { console.log("dismiss") })
              }, 1000);
            });
          }
        }
      ]
    });

    await alert.present();
  }

  deleteDevices(device) {
    let main = this;
    console.log(device);
    main.deleteDeviceAlert(device);
  }

  scan() {
    let main = this;
    this.navController.navigateForward('home')
  }

  scanBackground() {
    let main = this;
    main.ble.scan([], 5).subscribe(
      device => main.onDeviceDiscovered(device),
      error => console.log("error", error)
    );
  }

  bleScan() {
    let main = this;
    main.ble.scan([], 5).subscribe(
      device => console.log("device", device),
      error => console.log("error", error)
    );
  }

  onDeviceDiscovered(device) {
    let main = this;
    main.navController.navigateForward('detail');
    main.ngZone.run(() => {
      if (device.name == 'SCALE_ARIKUSU') {
        main.deviceSelected(device);
      }
    });
  }

  deviceSelected(device: any) {
    let main = this;
    main.storage.set('scaleinfo', JSON.stringify(device));
  }

  async getValue() {
    let main = this;
    const value = await main.storage.get('scaleinfo');
    main.device = JSON.parse(value);
  }

  goLWA() {
    this.navController.navigateForward('lwa');
  }

  goDevicesList() {
    this.navController.navigateForward('device-select');
  }

  goMokapot() {
    this.navController.navigateForward("wifi");
  }

  goWifi() {
    this.navController.navigateForward('wifi')
  }

  async goDeviceList() {
    const modal = await this.modalController.create({
      component: DeviceSelectPage,
      cssClass: 'device-select-class',
      showBackdrop: false,
      swipeToClose: false,
    });

    modal.onDidDismiss().then((res) => {
      console.log("res", res);
      if (res.data = "add_device_success") {
        this.getMyDevices();
      }
    })

    return await modal.present();
  }
}
