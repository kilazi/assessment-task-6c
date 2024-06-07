import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_EMULATOR_TIMEOUT = 1777;
const DEADLINE = 1718852400000; // 20 May 00:00 GMT-3

@Injectable({
  providedIn: 'root'
})
export class ApiEmulatorService {
  constructor() { }

  getDeadline(): Observable<{ secondsLeft: number }> {
    return new Observable(sub => {
      setTimeout(() => {
        let now = Date.now();
        let res;
        if (DEADLINE < now) res = 0; // if deadline passed, return 0
        else res = Math.floor((DEADLINE - now / 1000)); // seconds, floored

        sub.next(
          { secondsLeft: res }
        );
      }, API_EMULATOR_TIMEOUT)
    })
  }
}
