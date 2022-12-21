import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WifiPassModalPage } from './wifi-pass-modal.page';

const routes: Routes = [
  {
    path: '',
    component: WifiPassModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WifiPassModalPageRoutingModule {}
