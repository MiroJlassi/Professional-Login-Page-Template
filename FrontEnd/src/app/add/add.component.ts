import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  user = {
    name: "",
    age: 0,
    url: ""
  }
  state = "";

  users: any[] = [];
  adduser() {

    if(this.user.name != "" && this.user.age >0 && this.user.url != ""){
      for(let i = 0;i<this.users.length;i++){
        if(this.user.name == this.users[i].name){
          this.user = {
            name: "",
            age: 0,
            url: ""
          };  
          this.state = "cannot add";
          return;
        }
      }

      this.users.push(this.user);
      this.user = {
        name: "",
        age: 0,
        url: ""
      };  
      this.state = "added";

    }else{
      this.user = {
        name: "",
        age: 0,
        url: ""
      };  
      this.state = "cannot add";
    }
  }
}
