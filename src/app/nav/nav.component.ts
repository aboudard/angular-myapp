import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ma-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  private _test: string;
  constructor() { }

  get test() {
    return this._test;
  }

  ngOnInit() {
    this._test = 'meuh la vache';
  }

}
