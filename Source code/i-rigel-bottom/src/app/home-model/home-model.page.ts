import { Component, OnInit } from '@angular/core';
import { ModalController, Events } from '@ionic/angular';

@Component({
  selector: 'app-home-model',
  templateUrl: './home-model.page.html',
  styleUrls: ['./home-model.page.scss'],
})
export class HomeModelPage implements OnInit {

  constructor(public modalCtrl: ModalController,
    public events: Events) { }

  ngOnInit() {
  }
  dismiss(){
    this.events.publish('blurValue', "blur(0px)");
    const tabBar = document.getElementById('shoe-tab-bar');
    tabBar.style.filter = 'blur(0px)';
    this.modalCtrl.dismiss();
  }

}
