import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'responseType': 'text'
  }),
}

@Injectable({
  providedIn: 'root'
})
export class FrontendGetServiceService {

  springUrl = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  getARandomWeapon(){
    return this.http.get(`${this.springUrl}/getWeapon`, {responseType: 'text'});
  }
}
