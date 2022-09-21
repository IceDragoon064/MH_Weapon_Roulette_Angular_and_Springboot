import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class FrontendServiceService {

  springUrl = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  getARandomWeapon():Observable<any>{
    return this.http.get<any>(`${this.springUrl}/getWeapon`, httpOptions);
  }
}
