import { Component, Input } from '@angular/core';
import { FrontendServiceService } from './services/frontend-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FrontendServiceService]
})
export class AppComponent {
  title = 'Monster Hunter Weapon Roulette';

  constructor(private frontEndService: FrontendServiceService) { }

  spinWheel(){
    this.frontEndService.getWeapon();
  }
}
