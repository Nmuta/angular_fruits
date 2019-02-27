import { Component, OnInit } from '@angular/core';
import {HungerService} from '../hunger.service';
import { getNumberOfCurrencyDigits } from '../../../node_modules/@angular/common';

@Component({
  selector: 'fruit-loop',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.scss']
})
export class FruitComponent implements OnInit {

  constructor(private hunger:HungerService) { }

  ngOnInit() {
    this.getFruits();
  }

  fruits:{}; 

  getFruits(){
    this.hunger.getData().subscribe(stuff=>{
      this.fruits = stuff;
    })
  }

  getLazyData(){
    console.log(`fruit stash: ${this.hunger.fruitStash.data.map(f=> f.name)}`);
  }

}
