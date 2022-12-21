import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-wifi-pass-modal',
  templateUrl: './wifi-pass-modal.page.html',
  styleUrls: ['./wifi-pass-modal.page.scss'],
})
export class WifiPassModalPage implements OnInit {

  wifi_password:any;

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  close(){
    this.modalController.dismiss(this.wifi_password).then(()=>{console.log("dismiss")})
  }

}
