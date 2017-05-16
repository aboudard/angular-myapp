import { Hero } from '../shared/hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ma-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor() {
    this.heroes = [
      {id: 0, nom: "IronMan"},
      {id: 1, nom: "Wolverine"}
      ];
  }

  ngOnInit() {
  }

}
