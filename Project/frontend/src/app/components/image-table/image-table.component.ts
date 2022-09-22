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

}
