import { DataService } from '../shared/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ma-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  private _test: string;
  constructor(private dataService: DataService) {
    this.dataService.name$.subscribe(name => this._test = name);
  }

  get test() {
    return this._test;
  }

  ngOnInit() {
    this._test = 'meuh la vache';
  }

}
