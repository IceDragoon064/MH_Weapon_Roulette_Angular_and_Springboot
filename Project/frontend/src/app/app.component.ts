import { Component, Input } from '@angular/core';
import { FrontendServiceService } from './services/frontend-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  @Input()
  weaponText!: string;

  constructor(private frontEndService: FrontendServiceService) {
    this.weaponText = ' ';
  }

  spinWheel(){
    this.frontEndService.getARandomWeapon();
  }
}
