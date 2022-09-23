import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-table',
  templateUrl: './image-table.component.html',
  styleUrls: ['./image-table.component.css']
})
export class ImageTableComponent implements OnInit {

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

  ngOnInit(): void {

  }

  incrementCount(index: number){
    this.rollCount[index] += 1;
    document.getElementById(index.toString())!.innerHTML = "Rolled: " + this.rollCount[index].toString();
  }

  resetCount(){
    for(let i = 0; i < this.rollCount.length; i++){
      this.rollCount[i] = 0;
      document.getElementById(i.toString())!.innerHTML = "Rolled: " + this.rollCount[i].toString();
    }
  }

}
