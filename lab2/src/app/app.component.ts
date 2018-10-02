import {Component, OnInit} from '@angular/core';
import {Even, Odd} from "./tiker/tiker.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  even_odd: number | null = null;

  constructor() {
  }

  set_even_odd(event) {
    if (event instanceof Even) {
      this.even_odd = 1;
    } else if (event instanceof Odd) {
      this.even_odd = 0;
    } else {
      this.even_odd = null
    }
  }
}

