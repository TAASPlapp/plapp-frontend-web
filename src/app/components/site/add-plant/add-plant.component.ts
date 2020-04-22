import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
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


    formGroup: any = {};
    isSuccessful = false;
    types: string[];
    user: UserDetails;
    uploadedLink: string = "";


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

    linkUploadedHandler($event: any) {
        this.uploadedLink = $event;
        console.log("UPLOADED LINK:", this.uploadedLink)
    }

    onSubmit() {
        this.plantService.addPlant(this.uploadedLink, this.formGroup, this.user).subscribe(
            data => {
                this.isSuccessful = true;
                console.log("RESPONSE: ", data);
                let snackBarRef = this.snackBar.open('Plant added!', 'Close');
                this.ngOnInit();
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
