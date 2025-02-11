import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string="http://localhost:8080/api/";
  userBaseUrl:string='http://localhost:8080/user/';

  constructor(private http:HttpClient) { }

  getProductData(){
   return (this.http.get(`${this.baseUrl}get-all`));
  }

  sigupUser(obj:any){
    return (this.http.post(`${this.userBaseUrl}register`,obj,{
      responseType:'text'
    }));
  }

  login(obj:any){
   return (this.http.post(`${this.baseUrl}auth/login`,obj))
  }

}
