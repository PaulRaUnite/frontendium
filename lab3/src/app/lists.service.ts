import {Injectable} from '@angular/core';
import {CounterService} from "./counter.service";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  active: string[] = [];
  inactive: string[] = [];
  counter: CounterService;

  constructor(private counterService: CounterService) {
    this.counter = counterService;
  }

  addUser(name: string, active: boolean) {
    if (active) {
      this.active.push(name);
    } else {
      this.inactive.push(name);
    }
    this.counter.increase();
  }

  removeActiveUser(index: number) {
    this.active.splice(index, 1)
  }

  removeInactiveUser(index: number) {
    this.active.splice(index, 1)
  }

  activateUser(index: number) {
    let user = this.inactive[index];
    this.inactive.splice(index, 1);
    this.active.push(user);
  }

  deactiveUser(index: number) {
    let user = this.active[index];
    this.active.splice(index, 1);
    this.inactive.push(user);
  }

  getActiveUsers(): Observable<string[]> {
    return of(this.active)
  }

  getInactiveUsers(): Observable<string[]> {
    return of(this.inactive)
  }
}
