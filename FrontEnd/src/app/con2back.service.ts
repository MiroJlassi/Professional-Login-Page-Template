import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Con2backService {

  constructor(private http: HttpClient) { }
  private url = "http://127.0.0.1:3000/user/";
  
  Login(user: any){
    return this.http.post(this.url + "login", user);
  }

  Register(user: any){
    return this.http.post(this.url + "register", user);
  }
}
