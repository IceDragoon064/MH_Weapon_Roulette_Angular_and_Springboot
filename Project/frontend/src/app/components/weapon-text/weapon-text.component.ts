import { Component, OnInit } from '@angular/core';
import { Weapon } from 'src/app/models/Weapon';

@Component({
  selector: 'app-weapon-text',
  templateUrl: './weapon-text.component.html',
  styleUrls: ['./weapon-text.component.css']
})

export class WeaponTextComponent implements OnInit {
  weaponText: string = '';
  weaponLink: string = '';
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

  historyList: string[] = [];
  temp: string[] =[];

  constructor() {
    this.loadHistory();
  }

  ngOnInit(): void {
    this.weaponLink = this.weaponImg[14];
    this.weaponText = "? ? ?";
  }

  setText(text: string){
    this.weaponText = text;
    document.getElementById("weaponLabel")!.innerHTML = text;
  }

  setImage(index: number){
    this.weaponLink = this.weaponImg[index];
    document.getElementById("weaponIcon")!.setAttribute('src', this.weaponLink);
  }

  getHistory(){
    return this.historyList;
  }

  setHistory(weapon: string){
    //If array has 10 elements
    console.log("Adding " + weapon);
    console.log(this.historyList.length);
    if(this.historyList.length == 10){
      this.historyList.shift();
      this.historyList.push(weapon);
    }
    if(this.historyList.length < 10 && this.historyList.length >= 0) {
      this.historyList[this.historyList.length] = weapon;
    }
    console.log("New array");
    console.log(this.historyList);
    this.saveHistory(this.historyList);
  }

  saveHistory(data: string[]){
    this.historyList = data;
    localStorage.setItem('weaponHistory', JSON.stringify(this.getHistory()).replace(/[\[\]"']+/g,''));
  }

  resetHistory(){
    for(let i = 0; i < this.historyList.length; i++){
      delete this.historyList[i];
    }
    this.historyList = [];
    localStorage.setItem('weaponHistory', JSON.stringify(this.getHistory()).replace(/[\[\]"']+/g,''));
  }

  loadHistory(){
    var retrievedHistory = localStorage.getItem('weaponHistory');
    if(retrievedHistory!.length > 0) {
      var convertedHistory = retrievedHistory!.split(',').map(function(roll){
        return roll;
      });
      for(let i = 0; i < convertedHistory.length; i++){
        this.historyList.push(convertedHistory[i]);
      }
      console.log(this.historyList);
      this.showHistory();
    }
  }

  showHistory(){
    return this.historyList;
  }
}
