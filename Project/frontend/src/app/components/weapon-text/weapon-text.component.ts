import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weapon-text',
  templateUrl: './weapon-text.component.html',
  styleUrls: ['./weapon-text.component.css']
})

export class WeaponTextComponent implements OnInit {

  weaponText: string;
  weaponLink: string;
  weaponImg: string[] = [
    '../../assets/images/greatsword.png',
    '../../assets/images/longsword.png',
    '../../assets/images/SnS.png',
    '../../assets/images/duals.png',
    '../../assets/images/lance.png',
    '../../assets/images/gunlance.png',
    '../../assets/images/hammer.png',
    '../../assets/images/horn.png',
    '../../assets/images/switchaxe.png',
    '../../assets/images/chargeblade.png',
    '../../assets/images/glaive.png',
    '../../assets/images/lbg.png',
    '../../assets/images/hbg.png',
    '../../assets/images/bow.png',
    '../../assets/images/unnamed.png'
  ];

  constructor() {
    this.weaponLink = this.weaponImg[14];
    this.weaponText = "? ? ?";
  }

  ngOnInit(): void { }

  setText(text: string){
    this.weaponText = text;
    document.getElementById("weaponLabel")!.innerHTML = text;
  }

  setImage(index: number){
    this.weaponLink = this.weaponImg[index];
    document.getElementById("weaponIcon")!.setAttribute('src', this.weaponLink);
  }
}
