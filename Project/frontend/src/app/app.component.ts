import { Component } from '@angular/core';
import { ImageTableComponent } from './components/image-table/image-table.component';
import { WeaponTextComponent } from './components/weapon-text/weapon-text.component';
import { FrontendServiceService } from './services/frontend-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FrontendServiceService, WeaponTextComponent, ImageTableComponent]
})
export class AppComponent {
  title = 'Monster Hunter Weapon Randomizer';

  isDuplicateChecked: boolean;

  constructor(private frontEndService: FrontendServiceService) {
    this.isDuplicateChecked = false;

  }

  ngOnInit(): void{
    this.frontEndService.checkForUpdate();
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

  resetCounter(){
    this.frontEndService.resetCounter();
  }

  setDuplicateValue(value: boolean){
    this.isDuplicateChecked = value;
  }

  getDuplicateValue(){
    return this.isDuplicateChecked;
  }
}
