import { Component } from '@angular/core';
import { Con2backService } from '../con2back.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent {
  constructor( private _back: Con2backService , private router:Router){}


  user = {
    Name : "",
    LastName : "",
    Email : "",
    Password : "",
  };

  pass2 = "";
  strength = 0;

  ValidEmail(address: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(address);
  }

  ValidPass(password: string): void {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    let strength = 0;
    if (password.length >= minLength) strength++;
    if (hasUpperCase) strength++;
    if (hasLowerCase) strength++;
    if (hasNumber) strength++;
    if (hasSpecialChar) strength++;

    this.strength = strength;
  }


  state = "";
  CreateUser() {
    if(this.user.Name && this.user.LastName && this.user.Email && this.user.Password && this.pass2){
      if(this.ValidEmail(this.user.Email)){
        if(this.user.Password === this.pass2){
          if(this.strength >=5){
            // ALL SET let the show begin! done with fornt it's back time 
            this._back.Register(this.user).subscribe(
              res=>{
                this.router.navigate(["/login"]);
              },
              err=>{
                if(err.status === 400){
                  this.state = 'Email already exists';
                }else if(err.status === 500){
                  this.state = 'Server error, please try again later';
                }else{
                  this.state = 'An unexpected error occurred';
                }
              }
            );
          }else{
            this.state = "Weak Password. Length should be at least 8 characters,must contain a digit, an alphabet character,an uppercase letter, and a special character.";          }
        }else{
          this.state = "Please Confirm Password.."
        }
      }else{
        this.state = "Invalid Email.."
      }
    }else{
      this.state = "Please fill in all fields.."
    }
  }
}
