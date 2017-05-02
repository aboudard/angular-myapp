import { Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

// Observable string sources
  private nameSource = new Subject<string>();

// Observable string streams
name$ = this.nameSource.asObservable();

// Service message commands
  setName(name: string) {
    this.nameSource.next(name);
  }

  constructor() { }

}
