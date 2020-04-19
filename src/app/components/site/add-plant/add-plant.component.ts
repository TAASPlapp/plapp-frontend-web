import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {GreenhouseManageService} from "../../../services/greenhouse-manage.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UserService} from "../../../services/user-manage.service";
import {UserDetails} from "../../../models/UserDetails";


@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.css']
})
export class AddPlantComponent implements OnInit {

  selectedFile: File;
  fileName: string = "";
  isLinear = false;
  formGroup: any = {};
  isSuccessful = false;
  typeControl = new FormControl('', Validators.required);
  types: string[];
  user: UserDetails;


  constructor(private _formBuilder: FormBuilder,
              private plantService: GreenhouseManageService,
              private userService: UserService,
              public snackBar: MatSnackBar) {
    this.plantService.getPlantTypes().subscribe(res => {
      this.types = res;
    });
    this.userService.getInfo().subscribe(res => {
      this.user = res.content;
    })
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    this.fileName = this.selectedFile.name
  }

  onUpload() {
    // upload code goes here
  }

  onSubmit() {
    this.plantService.addPlant(this.fileName, this.formGroup, this.user).subscribe(
      data => {
        this.isSuccessful = true;
        let snackBarRef = this.snackBar.open('Account registered!', 'Close');
        console.log("Account registered!!")
      },
      err => {
        let snackBarRef = this.snackBar.open(err.error.message, 'Close');
        console.log(err.error.message)
      }
    );
  }


  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });

  }


}
