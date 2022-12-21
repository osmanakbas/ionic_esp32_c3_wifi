import { Component } from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { HomeService } from '../home.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  user: any;
  username: any;
  usermail: any;
  amazon_user_check:any = false;

  constructor(
    private navController: NavController,
    private homeService: HomeService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private storage: Storage
  ) {
    console.log(this.homeService.active_user)
    this.user = this.homeService.active_user;
    if (this.user && this.user.length) {
      this.username = this.user[0].id.S;
      this.usermail = this.user[0].email.S;
    }
  }

  ngOnInit() {

  }

  ionViewDidEnter(){
    this.homeService.getUserCheckProfile().then(()=>{
      this.username = this.homeService.activemail;
      this.usermail = this.homeService.activemail;
    });
    console.log("did enter")
    this.getAmazonUser();
  }

  goLWA() {
    this.navController.navigateForward('lwa');
  }

  disconnectAmazon(){
    this.disconnectAmazonAlert();
  }

  back() {
    this.navController.back();
  }

  goHome() {
    this.navController.navigateForward('tabs/tab1')
  }

  goProfile() {
    this.navController.navigateForward('profile')
  }

  logout() {
    this.homeService.logout();
    this.navController.navigateForward('login')
  }

  async getAmazonUser() {
    const amazon_user_control = await this.storage.get('amazonuser');
    console.log("amazon user: ", amazon_user_control)
    if(amazon_user_control.length > 0){
      this.amazon_user_check = true;
    }
    else{
      this.amazon_user_check = false;
    }
  }


  deleteUserAccount() {
    this.deleteAccountAlert();
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

  async disconnectAmazonAlert() {
    let main = this;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Disconnect Amazon',
      message: 'Are you sure you want to disconnect your amazon connection?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Disconnect',
          cssClass: 'danger',
          handler: () => {
            main.loadingDevice();
            this.storage.set('amazonuser','');
            setTimeout(()=>{
              main.loadingController.dismiss().then(() => { console.log("dismiss") });
              this.getAmazonUser();
            },2000)          
          }
        }
      ]
    });

    await alert.present();
  }

  async deleteAccountAlert() {
    let main = this;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Delete Account',
      message: 'Are you sure want to delete the account?',
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
            console.log(main.usermail)
            main.homeService.deleteUser(main.usermail).subscribe((data) => {
              console.log(data);
              if (data.status) {
                main.logout();
                main.amazon_user_check = false;
                main.loadingController.dismiss().then(() => { console.log("dismiss") });
              }
            });
          }
        }
      ]
    });

    await alert.present();
  }

}
