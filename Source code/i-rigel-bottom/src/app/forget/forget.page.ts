import { Component, OnInit, ElementRef } from '@angular/core';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.page.html',
  styleUrls: ['./forget.page.scss'],
})
export class ForgetPage implements OnInit {
  //for blur effect
  public visiablePopup = false;
  public divBlur = ""
  public email = "";
  public resetBtn = true;
  constructor(public events: Events,
    private elementRef: ElementRef, ) {
    this.events.subscribe('blurValue', (data) => {
      this.divBlur = data;
      this.elementRef.nativeElement.style.setProperty('--my-var', this.divBlur);
    });
  }
  forgetPass() {
    if (this.email != "") {
      this.resetBtn = false;
    }
    else {
      this.resetBtn = true;
    }
  }
  isforgetPassword() {
    this.divBlur = "blur(6px)"
    this.elementRef.nativeElement.style.setProperty('--my-var', this.divBlur);
    const tabBar = document.getElementById('shoe-tab-bar');
    tabBar.style.filter = 'blur(6px)';
    this.visiablePopup = true;//for blur effect
  }
  ionViewWillEnter() {
    //value of blue from home modal
    this.events.subscribe('blurValue', (data) => {
      this.divBlur = data;
    });
    this.visiablePopup = false;//for blur effect
    this.elementRef.nativeElement.style.setProperty('--my-var', this.divBlur);
  }
  dismiss() {
    this.events.publish('blurValue', "blur(0px)");
    const tabBar = document.getElementById('shoe-tab-bar');
    tabBar.style.filter = 'blur(0px)';
    this.visiablePopup = false;//for disable blur effect
  }
  ngOnInit() {
  }

}
