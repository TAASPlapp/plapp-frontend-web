import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {GreenhouseManageService} from "../../../../services/greenhouse-manage.service";
import {FormControl, Validators} from "@angular/forms";
import {Schedule} from "../../../../models/Schedule";
import {UserService} from "../../../../services/user-manage.service";

@Component({
    selector: 'app-add-schedule',
    templateUrl: './add-schedule.component.html',
    styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent implements OnInit {
    public actions: string[];
    public colorControl = new FormControl('accent');
    public floatLabelControl = new FormControl('auto');
    public periodicityControl = new FormControl(1, Validators.min(0));
    public wateringTimeControl = new FormControl(9, Validators.max(24))
    public wQuantityControl = new FormControl(200, Validators.min(10));


    public plantId: number;
    public userId: number;
    public selectedDate: Date;
    public selectedAction: string;


    constructor(private _bottomSheetRef: MatBottomSheetRef<AddScheduleComponent>,
                private service: GreenhouseManageService,
                private userService: UserService,

                @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
        this.plantId = data.plantId;
        this.userService.getInfo().subscribe(res => this.userId = res.content.userId);
    }


    ngOnInit() {
        this.actions = this.service.getScheduleActions();
    }

    createScheduleAction() {
        if (this.selectedAction != "Watering") {
            this.service.addScheduleAction(
                new Schedule(this.userId, this.plantId,
                    this.selectedDate, this.selectedAction,
                    this.periodicityControl.value))
                .subscribe(res => {
                    console.log(res.success)
                });
            this._bottomSheetRef.dismiss();
        } else {

            //the new date to begin watering = today + periodicity at selected time
            let newDate = new Date();
            newDate.setDate(newDate.getDate() + this.periodicityControl.value);
            newDate.setHours(this.wateringTimeControl.value);
            newDate.setMinutes(0);
            console.log(newDate);
            this.service.addScheduleAction(
                new Schedule(
                    this.userId, this.plantId, newDate, this.selectedAction,
                    this.periodicityControl.value, this.wQuantityControl.value.toString()))
                .subscribe(res => {
                    console.log(res.content);
                    console.log(res.message);
                });
            console.log(`added: date-> ${this.selectedDate},  action->${this.selectedAction}, periodicity-> ${this.periodicityControl.value},  , wateringtime -> ${this.wateringTimeControl.value}, wamount-> ${this.wQuantityControl.value} `);
            this._bottomSheetRef.dismiss();

        }
    }

}
