import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  even_odd: number[] = [];

  constructor() {
  }

  add_even_odd(event: number) {
      this.even_odd = this.even_odd.concat([event])
  }
}

