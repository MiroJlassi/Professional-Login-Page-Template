import { Component } from '@angular/core';
import { Con2backService } from '../con2back.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = {
    Email:"",
    Password:""
  }
  state = ""
  token : any;

  constructor( private _back: Con2backService, private router: Router){}

  login(){
    if(this.user.Email && this.user.Password ){
      this._back.Login(this.user).subscribe(
        res=>{
          this.token = res;
          localStorage.setItem('token', this.token.mytoken);
          this.router.navigate(["/home"]);
        },
        err=>{
          this.state = "Invalid Inputs: Incorrect Email or Password..";
        }
      );
    }else{
      this.state = "Please fill in both fields.."
    }

  }
}
