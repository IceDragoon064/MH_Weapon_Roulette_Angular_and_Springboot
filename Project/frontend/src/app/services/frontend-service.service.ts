import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FrontendGetServiceService } from './frontend-get-service.service';
import { FrontendPostServiceService } from './frontend-post-service.service';
import { WeaponTextComponent } from '../components/weapon-text/weapon-text.component';
import { ImageTableComponent } from '../components/image-table/image-table.component';


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
    private wTextComponent: WeaponTextComponent,
    private imageTable: ImageTableComponent)
    { }

  getWeapon(){
    this.frontEndGet.getARandomWeapon().subscribe(Response =>{
      this.wTextComponent.setText(Response.weaponName);
      this.wTextComponent.setImage(Response.id);
      this.imageTable.incrementCount(Response.id);
    });
  }

  getWeaponNoDuplicate(){
    this.frontEndGet.getARandomWeaponNoDuplicate().subscribe(Response => {
      this.wTextComponent.setText(Response.weaponName);
      this.wTextComponent.setImage(Response.id);
      this.imageTable.incrementCount(Response.id);
    })
  }

  resetCounter(){
    this.imageTable.resetCount();
  }

  checkForUpdate(){
    this.imageTable.loadCount();
  }

}
