import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'; 
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

   hero: Hero={
    id:1,
    name:"Naveen",
  }
  heroes = HEROES;
  selectedHero?: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}


  ngOnInit(): void {
  }

}
