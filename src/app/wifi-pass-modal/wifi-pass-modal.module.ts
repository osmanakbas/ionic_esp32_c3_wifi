import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WifiPassModalPageRoutingModule } from './wifi-pass-modal-routing.module';

import { WifiPassModalPage } from './wifi-pass-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WifiPassModalPageRoutingModule
  ],
  declarations: [WifiPassModalPage]
})
export class WifiPassModalPageModule {}
