import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weapon-text',
  templateUrl: './weapon-text.component.html',
  styleUrls: ['./weapon-text.component.css']
})

export class WeaponTextComponent implements OnInit {

  weaponText: string = ' ';

  constructor() {

  }

  ngOnInit(): void {
  }

  setText(text: string){
    document.getElementById("weaponLabel")!.innerHTML = text;

  }
}
