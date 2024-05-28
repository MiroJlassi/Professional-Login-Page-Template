import { Component } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent {
  nom = "";
  prenom = "";
  email = "";
  pass1 = "";
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
  
  

  Validinput(input: string): boolean {
    return input.trim() !== "";
  }

  state = "";
  CreateUser() {
    if (this.Validinput(this.nom) && this.Validinput(this.prenom) && this.ValidEmail(this.email) && this.strength == 5 && this.pass1 === this.pass2) {
      // check if user do not exist in the data base // add // navigate to login page
    } else {
      this.state = "Invalid Inputs...";
    }
  }
}
