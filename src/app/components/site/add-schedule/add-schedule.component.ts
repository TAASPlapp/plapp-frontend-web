import {Component, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {GreenhouseManageService} from "../../../services/greenhouse-manage.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent implements OnInit {
  private minDate: Date;
  private maxDate: Date;
  private actions: string[];
  private colorControl = new FormControl('accent');
  private floatLabelControl = new FormControl('auto');
  private selectedAction: string;
  private wateringHoursControl = new FormControl(12, Validators.min(1));
  private wQuantityControl = new FormControl(200, Validators.min(10));




  constructor(private _bottomSheetRef: MatBottomSheetRef<AddScheduleComponent>, private service: GreenhouseManageService, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }


  ngOnInit() {
    //todo:add actions different way
    this.actions = this.service.getScheduleActions();
  }

  createScheduleAction(){
    if (this.selectedAction){
      //todo: capire come fare ad aggiungere sia date sia watering
      this.service.addScheduleAction(this.data, this.selectedAction, new Date());
      console.log('added');
      this._bottomSheetRef.dismiss();
    }
  }

}
