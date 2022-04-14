import { Component } from '@angular/core';
import { WeekDayActivities } from './models/Activity';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  counter!: number;
  weekDaysT!: WeekDayActivities;
  currentDay: string = 'monday';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.counter = this.dataService.getCounter();
    this.weekDaysT = this.dataService.getWeekDaysT();
    console.log(this.weekDaysT);
  }

  onUpdateCounter(counter: number) {
    this.counter = this.counter + counter;
  }

  onUpdateNewActivity() {
    switch (this.counter) {
      case 0:
        this.currentDay = 'monday';
        break;
      case 1:
        this.currentDay = 'tuesday';
        break;
      case 2:
        this.currentDay = 'wednesday';
        break;
      case 3:
        this.currentDay = 'thursday';
        break;
      case 4:
        this.currentDay = 'friday';
        break;
      case 5:
        this.currentDay = 'rezumat';
        break;
      default:
        break;
    }
  }

  // onUpdateDailyActivity(newActivity) {
  //   console.log(newActivity);
  // }
}
