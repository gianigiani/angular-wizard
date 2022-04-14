import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WeekDayActivities } from 'src/app/models/Activity';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
  weekDaysT: WeekDayActivities;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.weekDaysT = this.dataService.getWeekDaysT();
  }

  keyAscOrder = (
    a: KeyValue<string, any>,
    b: KeyValue<string, any>
  ): number => {
    return 0;
  };
}
