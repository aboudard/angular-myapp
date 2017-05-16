import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ma-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  login() {
    this.userService.login();
  }

  logout() {
    this.userService.logout();
  }

}
