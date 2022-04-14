export enum DayType {
  MONDAY,
  THURSDAY,
  WEDNESDAY,
  TUESDAY,
  FRIDAY,
}

export interface ActivitiesType {
  id: number;
  name: string;
}

export interface Activity {
  dayType: string;
  startTime: string;
  endTime: string;
  choosenActivity: string;
}

export class DayActivities {
  morning: Activity = new (class implements Activity {
    dayType = 'Dimineata';
    startTime = '09:00';
    endTime = '11:00';
    choosenActivity = 'Alergare Usoara';
  })();
  evening: Activity = new (class implements Activity {
    dayType = 'Seara';
    startTime = '19:00';
    endTime = '21:00';
    choosenActivity = 'Inot';
  })();
}

export class WeekDayActivities {
  monday = new DayActivities();
  tuesday = new DayActivities();
  wednesday = new DayActivities();
  thursday = new DayActivities();
  friday = new DayActivities();
}
