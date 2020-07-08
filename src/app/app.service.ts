import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public _url = 'http://localhost:3000/TestLogin/api/v1'

  constructor(public http:HttpClient) { }

 public createNewUser=(data):Observable<any>=>{

    let params = new HttpParams()
    .set('firstName', data.firstName)
    .set('lastName', data.lastName)
    .set('email', data.email)
    .set('password', data.password)
    .set('mobile',data.mobile)
    .set('file', data.image)

    let response = this.http.post(`${this._url}`+'/signup', params)
    console.log(response)
    return response;

  } 

  public loginUser =(data):Observable<any>=>{

    let params = new HttpParams()
    .set('email', data.email)
    .set('password', data.password)

    let response = this.http.post(`${this._url}`+'/login', params)
    console.log(response)
    return response;
    
  }

  public uploadImage = (formData):Observable<any>=>{

    let apiResponse = this.http.post(`${this._url}`+'/upload', formData)
    return apiResponse;
  }

}
