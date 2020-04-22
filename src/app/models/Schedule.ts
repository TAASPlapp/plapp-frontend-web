export class Schedule {
  userId: number;
  plantId: number;
  date: Date;
  action: string;
  periodicity: number;
  additionalInfo: string;


  constructor(userId: number, plantId: number, date: Date, action: string, periodicity: number = 0, additionalInfo:string = "") {
    this.userId = userId;
    this.plantId = plantId;
    this.date = date;
    this.action = action;
    this.periodicity = periodicity;
    this.additionalInfo = additionalInfo;
  }
}
