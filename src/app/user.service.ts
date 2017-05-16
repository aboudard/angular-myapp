import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  status:boolean = false;

  constructor() { }

  isLoggedIn(): boolean {
    return this.status;
  }

  login(): void {
    this.status = true;
  }

  logout(): void {
    this.status = false;
  }

}
