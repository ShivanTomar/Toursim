import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  userName: string ="";
  email: string ="";
  password: string ="";
  mobileNumber!: number;
  gender: string="";
  address: string="";

  constructor(private router: Router,private http: HttpClient ){

  }

  save(){
  
    let bodyData = {
      "userName" : this.userName,
      "gender":this.gender,
      "email" : this.email,
      "mobileNumber" : this.mobileNumber,
      "password" : this.password,
      "address":this.address
    };
    // console.log(bodyData);
    this.http.post("http://localhost:8085/api/v1/employee/save",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Registered Successfully");
    });
    alert('Registered successfully. Now you can login !!!')
    this.router.navigateByUrl('/login');
  }
}
