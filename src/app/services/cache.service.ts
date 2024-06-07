import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  // TODO - add localStorage caching?
  private deadline: number = null;
  private deadlineSetTimestamp: number = null;

  setDeadline(secondsLeft: number): void {
    this.deadlineSetTimestamp = Date.now();
    this.deadline = secondsLeft;
  }

  getDeadline(): number{
    let res = null;
    if(this.deadline && this.deadlineSetTimestamp) {
      let now = Date.now();
      let delta = (now - this.deadlineSetTimestamp) / 1000
      res = Math.ceil(this.deadline - delta);
    }
    return res;
  }

}