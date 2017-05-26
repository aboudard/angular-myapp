import { DataService } from '../shared/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ma-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
hero = {name: 'Billy'};
users = [
    {
      name: 'Lia Lugo',
      avatar: 'svg-11',
      details: 'I love cheese, ...',
      isAdmin: true,
      isCool: false
    },
    {
      name: 'George Duke',
      avatar: 'svg-12',
      details: 'Zombie ipsum ...',
      isAdmin: false,
      isCool: true
    },
    {
      name: 'Michael Jackson',
      avatar: 'svg-13',
      details: 'Just Beat It',
      isAdmin: true,
      isCool: true
    }
  ];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }

  putData(name) {
    this.dataService.setName(name);
  }

}
