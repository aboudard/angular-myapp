import { UserService } from './../user.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private userService:UserService, private router:Router) {}

  canActivate() {
    const isLoggedIn = this.userService.isLoggedIn()
    if (!isLoggedIn) {
      this.router.navigate(['login'])
    }
    return isLoggedIn;
  }
}