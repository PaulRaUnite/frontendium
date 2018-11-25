import {Injectable} from '@angular/core';
import {CounterService} from "./counter.service";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  active: string[] = [];
  inactive: string[] = [];

  constructor(private counterService: CounterService) {
  }

  addUser(name: string, active: boolean) {
    if (active) {
      this.active.push(name);
    } else {
      this.inactive.push(name);
    }
  }

  removeActiveUser(index: number) {
    this.active.splice(index, 1)
  }

  removeInactiveUser(index: number) {
    this.inactive.splice(index, 1)
  }

  activateUser(index: number) {
    let user = this.inactive[index];
    this.inactive.splice(index, 1);
    this.active.push(user);
    this.counterService.increase();
  }

  deactivateUser(index: number) {
    let user = this.active[index];
    this.active.splice(index, 1);
    this.inactive.push(user);
    this.counterService.increase();
  }

  getActiveUsers(): Observable<string[]> {
    return of(this.active)
  }

  getInactiveUsers(): Observable<string[]> {
    return of(this.inactive)
  }
}
