import { HeroesService } from './../shared/heroes.service';
import { Hero } from '../shared/hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ma-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroesService: HeroesService) {
    this.heroes = [
        {id: 0, nom: 'Init'}
      ];
  }

  addTodo(e) {
    console.log('add hero ' + e);
    this.heroesService.addHero(e);
  }

  ngOnInit() {
    this.heroesService.getHeroes().subscribe(tmpHeroes => {
      this.heroes = tmpHeroes;
    });
  }

}
