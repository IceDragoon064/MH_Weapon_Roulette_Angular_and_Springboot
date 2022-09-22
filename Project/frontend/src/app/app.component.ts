import { Component } from '@angular/core';
import { FrontendServiceService } from './services/frontend-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FrontendServiceService]
})
export class AppComponent {
  title = 'Monster Hunter Weapon Randomizer';

  isDuplicateChecked: boolean;

  constructor(private frontEndService: FrontendServiceService) {
    this.isDuplicateChecked = false;
  }

  ngOnInit(){

  }
  duplicateToggle(){
    this.setDuplicateValue(!this.isDuplicateChecked);
  }
  spinWheel(){
    if(this.isDuplicateChecked == true){
      this.frontEndService.getWeaponNoDuplicate();
    } else{
      this.frontEndService.getWeapon();
    }

  }

  setDuplicateValue(value: boolean){
    this.isDuplicateChecked = value;
  }

  getDuplicateValue(){
    return this.isDuplicateChecked;
  }
}
