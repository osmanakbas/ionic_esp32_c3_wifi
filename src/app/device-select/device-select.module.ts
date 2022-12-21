import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceSelectPageRoutingModule } from './device-select-routing.module';

import { DeviceSelectPage } from './device-select.page';
import { NgCircleProgressModule } from 'ng-circle-progress';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceSelectPageRoutingModule,
    NgCircleProgressModule
  ],
  declarations: [DeviceSelectPage]
})
export class DeviceSelectPageModule {}
