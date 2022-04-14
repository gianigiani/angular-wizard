import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Activity, DayActivities, WeekDayActivities } from '../models/Activity';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  counter: any = 0;
  weekDays: string[] = [
    'Luni',
    'Marti',
    'Miercuri',
    'Joi',
    'Vineri',
    'Rezumat',
  ];

  dailyActivities: string[] = [
    'Alergare Usoara',
    'Karate',
    'Tenis',
    'Inot',
    'Fotbal',
    'Handbal',
    'Volei',
  ];

  weekDaysT: WeekDayActivities;
  summaryPrint = [];
  currentDay: string;

  constructor() {
    this.weekDaysT = new WeekDayActivities();
  }

  getDaysOfTheWeek() {
    return this.weekDays;
  }

  getCounter() {
    return this.counter;
  }

  updateCounter(count: any): Observable<any> {
    if (count === 1) {
      this.counter++;

      return of(this.counter);
    } else {
      this.counter--;
      return of(this.counter);
    }
  }

  getDailyActivities() {
    return this.dailyActivities;
  }

  getWeekDaysT() {
    return this.weekDaysT;
  }

  updateSummary(newActivity: Activity) {
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
      default:
        break;
    }
    if (newActivity.dayType === 'Dimineata') {
      this.weekDaysT[this.currentDay].morning = newActivity;
    } else {
      this.weekDaysT[this.currentDay].evening = newActivity;
    }
  }
}
