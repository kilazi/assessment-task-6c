import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Subscription, first, interval, switchMap } from 'rxjs';
import { DeadlineService } from '../../services/deadline.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-angular-problem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-problem.component.html',
  styleUrl: './angular-problem.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngularProblemComponent {
  secondsLeft: number;
  loading = true;

  private subInterval: Subscription;
  private subInitial: Subscription;
  constructor(
    private deadlineService: DeadlineService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    console.log('angular-problem init');
    this.subInitial = this.deadlineService.getSecondsLeft().subscribe(seconds => {
      console.log('gotSeconds');
      this.setDisplaySeconts(seconds);
      this.cdr.markForCheck();
    });
  }

  setDisplaySeconts(seconds: number) {
    this.secondsLeft = seconds;
    this.loading = false;
  }

  ngOnDestroy(): void {
    if (this.subInitial) {
      this.subInitial.unsubscribe();
    }
    if (this.subInterval) {
      this.subInterval.unsubscribe();
    }
  }
}
