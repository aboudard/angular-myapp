import { Input, Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ma-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  @Input() idhero;
  @Input() nom;
  // Because EventEmitters are Subjects ,we can use all the Rx goodness. For example, we want to emit an event only if we have a value.
  @Output() add = new EventEmitter().filter(v => !!v).debounceTime(2000);
  constructor() { }

  ngOnInit() {
  }

}
