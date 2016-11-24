import {Component} from '@angular/core';

@Component({
  selector: 'fountain-app',
  template: require('./App.html')
})
export class AppComponent {
  public hello: string;

  constructor() {
    this.hello = 'Hello World!';
  }
}
