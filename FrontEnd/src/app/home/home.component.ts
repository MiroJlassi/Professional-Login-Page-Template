import { Component } from '@angular/core';
import { Con2backService } from '../con2back.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private _back:Con2backService){}

  Name = this._back.CurrentUser.Name;
  LastName = this._back.CurrentUser.LastName;

  
}
