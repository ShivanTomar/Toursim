import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  registration:any = FormGroup;
 
  constructor(private fb: FormBuilder, private router: Router,private http: HttpClient ,private apiService:ApiService){
  }
  ngOnInit(): void {

    this.registration =this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      mobile: [''],
      gender: [''],
      address: ['']
    })
    
 
  }

  save(userData:any){
    
    this.apiService.registerUser(userData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        if(resultData){
          alert("Employee Registered Successfully");
          this.router.navigateByUrl('/login');

        }else{
          alert('Registered successfully. Now you can login !!!')
        }
    });
       
  }
}
