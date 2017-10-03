import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "app/shared/heroes.service";
import { Hero } from "app/shared/hero";

@Component({
  selector: 'ma-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  heroid: string;
  hero: Hero;

  constructor(private heroesService: HeroesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.heroid = this.route.snapshot.params.heroid;
    
    this.heroesService.getHeroById(this.heroid).subscribe((hero) => {
      this.hero = hero;
      console.log("hero nom : " + this.hero.nom);
    });
  }

}
