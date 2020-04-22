import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {GreenhouseManageService} from "../../../../services/greenhouse-manage.service";
import {StoryboardItem} from "../../../../models/StoryboardItem";
import {Status} from "../../../../models/Status";

@Component({
    selector: 'app-add-storyboard-item',
    templateUrl: './add-storyboard-item.component.html',
    styleUrls: ['./add-storyboard-item.component.css']
})
export class AddStoryboardItemComponent implements OnInit {
    isLinear = true;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    plantId: number;
    uploadedLink: string;




    constructor(private _bottomSheetRef: MatBottomSheetRef<AddStoryboardItemComponent>,
                private service: GreenhouseManageService,
                private _formBuilder: FormBuilder,
                @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {

    }


    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });

    }

    linkUploadedHandler($event: any) {
        this.uploadedLink = $event;
        console.log("UPLOADED LINK:", this.uploadedLink)
    }


    addStoryBoardItem() {
        let item: StoryboardItem = new StoryboardItem();
        item.description = this.secondFormGroup.value.secondCtrl;
        item.id = 156;
        item.image = this.uploadedLink;
        item.numLike = 0;
        item.status = Status.HEALTHY;
        item.thumbImage = this.uploadedLink;
        item.title = this.firstFormGroup.value.firstCtrl;
        console.log("STORYBOARD", this.data.storyboardId);
        this.service.addStoryboardItem(item, this.data.storyboardId).subscribe(res =>{
            console.log(res.content);
            console.log(res.message);
        });
        this._bottomSheetRef.dismiss();
    }

}
