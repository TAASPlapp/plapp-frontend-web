import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {GardenerService} from "../../../services/gardener.service";

@Component({
    selector: 'app-gardener',
    templateUrl: './gardener.component.html',
    styleUrls: ['./gardener.component.css']
})
export class GardenerComponent implements OnInit {
    analyzed: boolean = false;
    uploadedLink: string;
    results: string = "";

    constructor(
        public snackBar: MatSnackBar,
        public gardenerServuice: GardenerService,
    ) {
    }

    ngOnInit() {
    }


    linkUploadedHandler($event: any) {
        this.uploadedLink = $event;
        console.log("UPLOADED LINK:", this.uploadedLink)
    }

    diagnosis(){
        if(this.uploadedLink){
            this.gardenerServuice.getDiagnosis().subscribe(res =>{
                this.results = res.content;
            });
        }
    }

}
