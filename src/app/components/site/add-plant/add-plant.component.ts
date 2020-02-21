import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {GreenhouseManageService} from "../../../services/greenhouse-manage.service";


@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.css']
})
export class AddPlantComponent implements OnInit {

  selectedFile: File;
  fileName: String = "";
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  typeControl = new FormControl('', Validators.required);
  types:string[];


  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    this.fileName = this.selectedFile.name
  }

  onUpload() {
    // upload code goes here
  }
  constructor(private _formBuilder: FormBuilder, private service: GreenhouseManageService) {

    this.service.getPlantTypes().subscribe(res=>{
      this.types = res;
    });
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
