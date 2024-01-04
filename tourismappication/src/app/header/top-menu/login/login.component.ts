import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm:any= FormGroup


  constructor(private router: Router,private apiService: ApiService,private fb:FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }
 
    initializeForm(){
      this.loginForm=this.fb.group({
        email:['',[Validators.required, Validators.email]],
        password:['',Validators.required],
      });
    }

    login(loginData:any){

      this.apiService.loginUser(loginData).subscribe(resultData => {

        if(resultData.role == "USER"){
          sessionStorage.setItem('access_token',resultData.token)
          this.apiService.updateCommonHeader()
          this.router.navigate(['/product']);
        }else if(resultData.role == "ADMIN"){
          sessionStorage.setItem('access_token',resultData.token)
          this.apiService.updateCommonHeader()
          this.router.navigate(['/']);
        }

      })



    }
}
