import { Component, ElementRef } from '@angular/core';

import { Platform, Events, ModalController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DataServiceService } from './services/data-service.service';
import { SplashScreenPage } from './splash-screen/splash-screen.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public divBlur = "blur(0px)";
  public visTab = true;
  constructor(
    private platform: Platform,
    private modalCtrl: ModalController,
    private statusBar: StatusBar,
    private events: Events,
    private elementRef: ElementRef,
    public service: DataServiceService
  ) {
    this.initializeApp();
    this.events.subscribe('blurValue', (data) => {
      this.divBlur = data;
      this.elementRef.nativeElement.style.setProperty('--my-var', this.divBlur);
    });
    this.events.subscribe('tabActive', (data) => {
      this.visTab = data;
    });
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      //this.splashScreen.hide();
      this.SplashModal();
    });
  }
  async SplashModal() {
    console.log("splash modal fun");
    let modal = await this.modalCtrl.create({
      component: SplashScreenPage,
      componentProps: {
        'hideGuestLogin': true
      }
    });
    return await modal.present()
  }
}
