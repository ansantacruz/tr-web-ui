import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public listInputItems = [
    { placeHolder: "First Name", type: "text" },
    { placeHolder: "Last Name", type: "text" },
    { placeHolder: "Email", type: "email" },
    { placeHolder: "Mobile Phone", type: "tel" },
    { placeHolder: "Password", type: "password" },
    { placeHolder: "Confirm Password", type: "password" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
