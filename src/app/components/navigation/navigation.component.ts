import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Activity } from 'src/app/models/Activity';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit, OnDestroy {
  counter!: any;
  @Output() updatedCounter: EventEmitter<number> = new EventEmitter();
  @Output() updatedNewActivity: EventEmitter<Activity> = new EventEmitter();

  subscirption: Subscription = new Subscription();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.counter = this.dataService.getCounter();
  }

  onClickBack() {
    this.dataService.updateCounter(-1).subscribe((counter: any) => {
      this.counter = counter;
    });
    this.updatedCounter.emit(-1);
    this.updatedNewActivity.emit();
  }

  onClickNext() {
    this.dataService.updateCounter(1).subscribe((counter: any) => {
      this.counter = counter;
    });
    this.updatedCounter.emit(1);
    this.updatedNewActivity.emit();
  }

  ngOnDestroy(): void {
    //unsubscribe
    this.subscirption.unsubscribe();
  }
}
