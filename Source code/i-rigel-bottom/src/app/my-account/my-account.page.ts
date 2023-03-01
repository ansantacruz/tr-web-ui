import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { DataServiceService } from '../services/data-service.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {
  public login = false;
  public visProfileItem = false;
  public visEditprofile = false;
  public listItems = [
    { icon: "assets/icon/home-side.svg", text: "Home", visItem: true },
    { icon: "assets/icon/listview-side.svg", text: "Categories", visItem: true },
    { icon: "assets/icon/heart.svg", text: "Wishlist", visItem: true },
    { icon: "assets/icon/about-us.svg", text: "About Us", visItem: true },
    { icon: "assets/icon/contact-us.svg", text: "Contact Us", visItem: true },
    { icon: "assets/icon/privacy.svg", text: "Privacy Policy", visItem: true },
    { icon: "assets/icon/refund.svg", text: "Refund Policy", visItem: true },
    { icon: "assets/icon/terms.svg", text: "Terms & Services", visItem: true },
    { icon: "assets/icon/share.svg", text: "Share", visItem: true },
    { icon: "assets/icon/rate-us.svg", text: "Rate Us", visItem: true },
    { icon: "assets/icon/settings.svg", text: "Settings", visItem: true },
    { icon: "assets/icon/account-user.svg", text: "Edit Profile", visItem: true },
    { icon: "assets/icon/account-order.svg", text: "My Order", visItem: true },
    { icon: "assets/icon/address.svg", text: "My Addresses", visItem: true },
    { icon: "assets/icon/reward-points.svg", text: "Reward Points", visItem: true }
  ];
  public listInputItems = [
    { placeHolder: "First Name:", type: "text" },
    { placeHolder: "Last Name:", type: "text" },
    { placeHolder: "Password:", type: "password" },
    { placeHolder: "Email:", type: "email" },
    { placeHolder: "Phone:", type: "tel" },
    { placeHolder: "City:", type: "text" },
  ];
  constructor(private navCtrl: NavController,
     private service: DataServiceService, 
     private toastCtrl: ToastController) {
    // service.getLogin().
    this.login = this.service.getLogin();
    console.log("I am in my account class and login value=" + this.login)
    if (this.login == true) {
      this.visProfileItem = true;
    }
  }
  ionViewWillEnter() {
    this.login = this.service.getLogin();
    console.log("I am in my account class and login value=" + this.login)
    if (this.login == true) {
      this.visProfileItem = true;
    }
  }
  goToPage(i) {
    if (i == 0) {
      this.navCtrl.navigateForward("home");
    }
    else if (i == 1) {
      this.navCtrl.navigateForward("categories");
    }
    else if (i == 2) {
      this.navCtrl.navigateForward("wishlist");
    }
    else if (i == 3) {
      // this.navCtrl.navigateForward("about-us");
      this.toastFun('about-us');
    }
    else if (i == 4) {
      this.navCtrl.navigateForward("contact-us");
    }
    else if (i == 5) {
      // this.navCtrl.navigateForward("privary-policy");
      this.toastFun('privacy-policy');
    }
    else if (i == 6) {
      // this.navCtrl.navigateForward("refund-policy");
      this.toastFun('refund-policy');
    }
    else if (i == 7) {
      // this.navCtrl.navigateForward("term-services");
      this.toastFun('term-services');
    }
    else if (i == 8) {
      // this.navCtrl.navigateForward("share");
      this.toastFun('share');
    }
    else if (i == 9) {
      this.navCtrl.navigateForward("review");
    }
    else if (i == 10) {
      // this.navCtrl.navigateForward("settings");
      this.toastFun('settings');
    }
    else if (i == 11) {
      this.navCtrl.navigateForward("my-account");
    }
    else if (i == 12) {
      this.navCtrl.navigateForward("my-order");
    }
    else if (i == 13) {
      this.navCtrl.navigateForward("my-addresses");
    }
    else if (i == 14) {
      this.navCtrl.navigateForward("reward-points");
    }
  }
  updateProfile() {
    this.visEditprofile = false;
  }
  goToLogin() {
    this.navCtrl.navigateForward("login");
  }
  ngOnInit() {
  }
  async toastFun(val) {
    if (val == 'about-us') {
      //toast controller
      const toast = await this.toastCtrl.create({
        message: 'About Us Clicked',
        duration: 2000
      });
      toast.present();
    }
    else if (val == 'privacy-policy') {
      //toast controller
      const toast = await this.toastCtrl.create({
        message: 'Privacy Policy Clicked',
        duration: 2000
      });
      toast.present();
    }
    else if (val == 'refund-policy') {
      //toast controller
      const toast = await this.toastCtrl.create({
        message: 'Refund Policy Clicked',
        duration: 2000
      });
      toast.present();
    }
    else if (val == 'term-services') {
      //toast controller
      const toast = await this.toastCtrl.create({
        message: 'Term & Services Clicked',
        duration: 2000
      });
      toast.present();
    }
    else if (val == 'share') {
      //toast controller
      const toast = await this.toastCtrl.create({
        message: 'Share Clicked',
        duration: 2000
      });
      toast.present();
    }
    else if (val == 'settings') {
      //toast controller
      const toast = await this.toastCtrl.create({
        message: 'Settings Clicked',
        duration: 2000
      });
      toast.present();
    }
  }
}
