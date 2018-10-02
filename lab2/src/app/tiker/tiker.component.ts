import {Component, EventEmitter, OnInit, Output} from '@angular/core';


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
  @Output() even_odd = new EventEmitter<Even | Odd>();

  constructor() {
  }

  start() {
    if (this.timer == null) {
      this.timer = setInterval(() => {
        console.log("tick");
        let v;
        if (this.count % 2) {
          v = new Odd();
        } else {
          v = new Even();
        }
        this.even_odd.emit(v);
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
