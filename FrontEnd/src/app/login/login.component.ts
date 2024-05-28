import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  adr = "";
  pass = "";
  state = ""


  login(){
    // check if inputs match a correspanding user or not and authentification navigate to home
  }
}
