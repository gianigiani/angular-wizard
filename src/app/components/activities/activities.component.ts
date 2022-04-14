import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Activity } from 'src/app/models/Activity';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent implements OnInit {
  dailyActivities!: string[];
  // selectedObject: any;

  @Input() activitiesDaily!: Activity;
  @Output() updateDailyActivity: EventEmitter<Activity> = new EventEmitter();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dailyActivities = this.dataService.getDailyActivities();
  }

  onSelectActivity(dailyActivity) {
    this.activitiesDaily.choosenActivity = dailyActivity;
    this.dataService.updateSummary(this.activitiesDaily);
    // this.updateDailyActivity.emit(dailyActivity);
  }

  onChangeStartTime(e: any) {
    this.activitiesDaily.startTime = e.target.value;
    this.dataService.updateSummary(this.activitiesDaily);
  }

  onChangeEndTime(e: any) {
    this.activitiesDaily.endTime = e.target.value;
    this.dataService.updateSummary(this.activitiesDaily);
  }
}
