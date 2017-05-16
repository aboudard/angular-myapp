import { timeout } from './shared/timeout.decorator';
import { Component } from '@angular/core';

@Component({
  selector: 'ma-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'ma works!';

  @timeout(2000)
  doIt() {
    console.log('demo decorator')
  }

  constructor() {

  }



}