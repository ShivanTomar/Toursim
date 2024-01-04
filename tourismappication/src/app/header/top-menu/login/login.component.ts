import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName: string ="";
  password: string ="";
   isLogin:boolean=false; 
  constructor(private router: Router,private http: HttpClient) {}
 
  login() {
     this.isLogin=true;
      alert('Login successful. Now you can book a tour !!!')
      this.router.navigateByUrl('/booking');
    }
}
