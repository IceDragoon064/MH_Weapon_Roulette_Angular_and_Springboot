import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FrontendGetServiceService } from './frontend-get-service.service';
import { FrontendPostServiceService } from './frontend-post-service.service';
import { WeaponTextComponent } from '../components/weapon-text/weapon-text.component';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'responseType': 'text'
  })
}

@Injectable({
  providedIn: 'root'
})
export class FrontendServiceService {

  constructor(
    private frontendPost: FrontendPostServiceService,
    private frontEndGet: FrontendGetServiceService,
    private wTextComponent: WeaponTextComponent)
    { }

  getWeapon(){
    this.frontEndGet.getARandomWeapon().subscribe(Response =>{
      this.wTextComponent.setText(Response);
    });
  }

}
