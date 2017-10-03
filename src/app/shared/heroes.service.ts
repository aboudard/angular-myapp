import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

let heroes: Hero[] = [
      {id: 0, nom: 'IronMan'},
      {id: 1, nom: 'Wolverine'},
      {id: 2, nom: 'Thor'}
      ];

@Injectable()
export class HeroesService {

  constructor() { }

  addHero(hero: Hero): void {
    heroes.push(hero);
  }

  getHeroes(): Observable<Hero[]> {
    return Observable.create(observer => {
      observer.next(heroes);
    });
  }

  getHeroById(id): Observable<Hero> {
    //var tmpHero: Hero = _.find(heroes, (hero) => hero.id == id);
    var tmpHero: Hero = heroes.find((hero) => hero.id == id);
    return Observable.create(observer => {
      observer.next(tmpHero);
    });
  }

}
