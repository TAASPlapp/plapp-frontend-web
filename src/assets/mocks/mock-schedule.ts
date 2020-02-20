import {Schedule} from "../../app/models/Schedule";

export const SCHEDULES: Schedule[] = [

  //if action is == 'Watering' the water
  {
    id: 12,
    plantID: 134325,
    date: new Date(2020,4,16,3,1),
    action: "manure"

  },
  {
    id: 13,
    plantID: 264574,
    date: new Date(2020,2,19,1,14),
    action: "manure"
  },
  {
    id: 387587,
    plantID: 387587,
    date: new Date(2020,5,4,21,15),
    action: "manure"
  },
  {
    id: 3829,
    plantID: 387587,
    date: new Date(2020,4,24,24,12),
    action: "watering"
  },
  {
    id: 45252,
    plantID: 4,
    date: new Date(2020,7,7,2,15),
    action: "manure"
  }
];
