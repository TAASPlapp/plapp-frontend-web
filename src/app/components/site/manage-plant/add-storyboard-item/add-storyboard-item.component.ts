import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {GreenhouseManageService} from "../../../../services/greenhouse-manage.service";

@Component({
  selector: 'app-add-storyboard-item',
  templateUrl: './add-storyboard-item.component.html',
  styleUrls: ['./add-storyboard-item.component.css']
})
export class AddStoryboardItemComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  plantId:number;

  selectedFile: File;
  fileName: String = "";


  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    this.fileName = this.selectedFile.name
  }

  onUpload() {
    // upload code goes here

  }


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

  addStoryBoardItem() {
    this._bottomSheetRef.dismiss();
  }

}
