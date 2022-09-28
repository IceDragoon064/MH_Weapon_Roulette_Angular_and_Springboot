import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-table',
  templateUrl: './image-table.component.html',
  styleUrls: ['./image-table.component.css']
})
export class ImageTableComponent implements OnInit {
  private rollDat: string = '';

  rollCount: number[] = [
    0,  // Great Sword
    0,  // Long Sword
    0,  // Sword & Shield
    0,  // Dual Blades
    0,  // Lance
    0,  // Gunlance
    0,  // Hammer
    0,  // Hunting Horn
    0,  // Switch Axe
    0,  // Charge Blade
    0,  // Insect Glaive
    0,  // Light Bowgun
    0,  // Heavy Bowgun
    0,  // Bow
  ];

  constructor() { }

  ngOnInit(): void { }

  incrementCount(index: number){
    this.rollCount[index] += 1;
    document.getElementById(index.toString())!.innerHTML = "Rolled: " + this.rollCount[index].toString();
    this.rollDat = this.rollCount.toString();

    //Save the rollDaa
    localStorage.setItem('rollData', JSON.stringify(this.rollDat).replace(/[\[\]"']+/g,''));
  }

  loadCount(){
    var data = localStorage.getItem('rollData');
    if(data != null){
      // Turn string into string array
      var newString = data?.split(',').map(function(roll){
        return roll;
      });
      for(let i = 0; i < this.rollCount.length; i++){
        this.rollCount[i] = Number(newString[i]);
        document.getElementById(i.toString())!.innerHTML = "Rolled: " + this.rollCount[i].toString();
      }
    }
  }

  resetCount(){
    for(let i = 0; i < this.rollCount.length; i++){
      this.rollCount[i] = 0;
      document.getElementById(i.toString())!.innerHTML = "Rolled: " + this.rollCount[i].toString();
    }
    localStorage.setItem('rollData', JSON.stringify(this.rollCount).replace(/[\[\]"']+/g,''));
  }
}
