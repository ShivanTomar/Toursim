import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = "http://localhost:8080"

  private httpHeaders: any;

  constructor(private http:HttpClient) { 
    
  }

  updateCommonHeader(){
    this.httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
       'Authorization' : 'Bearer ' + sessionStorage.getItem("access_token")
    });
  }

  private getHttpOptions():any{
    return{
      header:this.httpHeaders,
    };
  }

  loginUser(credentials:{email:string, password: string}):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/loginAccount`,credentials);
  }

  registerUser(userData:any) : Observable<any>{
    console.log(userData)
    return this.http.post<any>(`${this.baseUrl}/register`,userData)
  }


}
