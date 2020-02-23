import {Schedule} from "../../app/models/Schedule";

export const SCHEDULES: Schedule[] = [

  //if action is == 'Watering' the water
  {
    userId: 12,
    plantId: 134325,
    date: new Date(2020,4,16,3,1),
    action: "manure",
    periodicity: 15,
    additionalInfo: "",

  },
  {
    userId: 13,
    plantId: 264574,
    date: new Date(2020,2,19,1,14),
    action: "manure",
    periodicity: 43,
    additionalInfo: "",
  },
  {
    userId: 387587,
    plantId: 387587,
    date: new Date(2020,5,4,21,15),
    action: "manure",
    periodicity: 34,
    additionalInfo: "",


  },
  {
    userId: 3829,
    plantId: 387587,
    date: new Date(2020,4,24,24,12),
    action: "watering",
    periodicity: 2,
    additionalInfo: "200 ml",
  },
  {
    userId: 45252,
    plantId: 4,
    date: new Date(2020,7,7,2,15),
    action: "manure",
    periodicity: 2,
    additionalInfo: "",
  }
];
