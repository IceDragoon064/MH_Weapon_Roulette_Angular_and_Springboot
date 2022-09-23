import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weapon } from '../models/Weapon';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
}

@Injectable({
  providedIn: 'root'
})
export class FrontendGetServiceService {

  springUrl = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  getARandomWeapon(): Observable<Weapon>{
    return this.http.get<Weapon>(`${this.springUrl}/getWeapon`);
  }

  getARandomWeaponNoDuplicate(): Observable<Weapon>{
    return this.http.get<Weapon>(`${this.springUrl}/getWeapon/noDuplicate`);
  }
}
