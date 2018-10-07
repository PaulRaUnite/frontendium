import {Component, EventEmitter, Output} from '@angular/core';


export class Odd {
}

export class Even {
}

@Component({
  selector: 'app-tiker',
  templateUrl: './tiker.component.html',
  styleUrls: ['./tiker.component.css']
})
export class TikerComponent {
  timer = null;
  count: number = 0;
  @Output() even_odd = new EventEmitter<number>();

  constructor() {
  }

  start() {
    if (this.timer == null) {
      this.timer = setInterval(() => {
        console.log("tick");
        this.even_odd.emit(this.count %2);
        this.count += 1;
      }, 1000)
    }
  }

  stop() {
    console.log("stop");
    if (this.timer == null) {
      return;
    }
    this.even_odd.emit(null);
    clearInterval(this.timer);
    this.count = 0;
    this.timer = null;
  }
}
