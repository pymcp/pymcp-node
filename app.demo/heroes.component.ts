import { Router } from 'angular2/router';
import {HeroService} from './hero.service';
import {HeroDetailComponent} from './hero-detail.component';
import {Hero} from './hero';
import {Component} from 'angular2/core';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css'],
  directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private _router: Router,
    private _heroService: HeroService) { }

  onSelect(hero: Hero) { this.selectedHero = hero; }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail() {
    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}

