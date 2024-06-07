import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CacheService } from './cache.service';
import { Observable, Subscription, interval, map, of, switchMap } from 'rxjs';
import { ApiEmulatorService } from './api-emulator.service';

@Injectable({
  providedIn: 'root'
})
export class DeadlineService {
  apiSub: Subscription;
  constructor(private cacheService: CacheService, private api: ApiEmulatorService) { }

  getSecondsLeft(): Observable<number> {
    return new Observable(sub => {
      
      // get first deadline secondsLeft from API
      this.apiSub = this.api.getDeadline().pipe(map(res => res.secondsLeft)).subscribe((seconds: number) => {
        if (seconds) {
          sub.next(seconds);
          this.cacheService.setDeadline(seconds);
        }

        // after got API response, return the cached value so we dont call API every second
        setInterval(() => {
          let cached = this.cacheService.getDeadline();
          if (cached)
            sub.next(cached)
        }, 1000)
      })

    })
  }


}

