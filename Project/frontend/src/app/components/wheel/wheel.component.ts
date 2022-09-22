import { Component, OnInit } from '@angular/core';
import { Wheel } from 'react-custom-roulette';
import { WheelData } from 'react-custom-roulette/dist/components/Wheel/types';

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.css']
})
export class WheelComponent implements OnInit {

  roulette: Array<WheelData> = [
    {option: 'Great Sword'},
    {option: 'Long Sword'},
    {option: 'Sword & Shield'},
    {option: 'Dual Blades'},
    {option: 'Lance'},
    {option: 'Gunlance'},
    {option: 'Hammer'},
    {option: 'Hunting Horn'},
    {option: 'Switch Axe'},
    {option: 'Charge Blade'},
    {option: 'Insect Glaive'},
    {option: 'Light Bowgun'},
    {option: 'Heavy Bowgun'},
    {option: 'Bow'},
  ]

  constructor() { }

  ngOnInit(): void {

  }
}

