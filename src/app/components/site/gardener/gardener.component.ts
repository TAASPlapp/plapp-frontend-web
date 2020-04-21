import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {GardenerService} from "../../../services/gardener.service";
import {Disease} from "../../../models/Disease";

@Component({
    selector: 'app-gardener',
    templateUrl: './gardener.component.html',
    styleUrls: ['./gardener.component.css']
})
export class GardenerComponent implements OnInit {
    analyzed: boolean = false;
    uploadedLink: string;
    results: Disease;
    healthy: boolean = false;

    constructor(
        public snackBar: MatSnackBar,
        public gardenerService: GardenerService,
    ) {
    }

    ngOnInit() {
    }

    linkUploadedHandler($event: any) {
        this.uploadedLink = $event;
        console.log("UPLOADED LINK:", this.uploadedLink)
    }

    diagnosis() {
        if (this.uploadedLink) {
            let ref = this.snackBar.open("Analyzing data...", 'Close')
            this.gardenerService.getDiagnosis(this.uploadedLink).subscribe(res => {
                    console.log("RES FROM CNN: ", res);
                    if (res.content.ill) {
                        let plantName = res.content.disease.split(" - ")[0];
                        let disease = res.content.disease.split(" - ")[1];
                        this.gardenerService.getDiseaseInfo(plantName, disease).subscribe(dres => {
                                this.results = dres.diseases[0];
                                this.analyzed = true;
                                ref.dismiss();
                                this.snackBar.open("Diagnosis was successful", 'Close')
                            },
                            err => {
                                this.snackBar.open(err.error.message, 'Close');
                                console.log(err.error.message)
                            });
                    } else {
                        ref.dismiss();
                        this.healthy = true;
                    }
                },
                err => {
                    let snackBarRef = this.snackBar.open(err.error.message, 'Close');
                    console.log(err.error.message)
                });
        }
    }
}
