import {EventEmitter, Injectable, Output} from '@angular/core';

export class CounterService {
  counter: number = 0;

  constructor() {
  }

  increase() {
    this.counter++;
    console.log(this.counter)
  }

  getValue(): number {
    return this.counter;
  }
}
