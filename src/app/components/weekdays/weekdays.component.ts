import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-weekdays',
  templateUrl: './weekdays.component.html',
  styleUrls: ['./weekdays.component.css'],
})
export class WeekdaysComponent implements OnInit {
  weekDays!: string[];
  @Input() counter!: number;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.weekDays = this.dataService.getDaysOfTheWeek();
    // this.counter = this.dataService.getCounter();
  }
}
