import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

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

}
